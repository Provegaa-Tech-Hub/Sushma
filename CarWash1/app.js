// app.js - simple SPA with localStorage "backend" (demo)
(function(){
  // --- Data model helpers ---
  const DB = {
    load(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){return fallback} },
    save(key, v){ localStorage.setItem(key, JSON.stringify(v)); }
  };

  // seed services, coupons, plans
  const defaultServices = [
    {id:'s1',name:'Basic Wash',duration:'30 mins',price:299},
    {id:'s2',name:'Premium Wash',duration:'45 mins',price:499},
    {id:'s3',name:'Interior Cleaning',duration:'40 mins',price:399},
    {id:'s4',name:'Exterior Polish',duration:'60 mins',price:699},
    {id:'s5',name:'Ceramic Coating',duration:'3 hrs',price:4999},
    {id:'s6',name:'Full Detailing',duration:'5 hrs',price:7999},
  ];
  const defaultCoupons = {
    'FIRST50': {code:'FIRST50',type:'flat',value:50},
    'SAVE100': {code:'SAVE100',type:'flat',value:100},
    'FESTIVE20': {code:'FESTIVE20',type:'percent',value:20}
  };
  const defaultPlans = [
    {id:'p1',name:'Silver',price:999,benefits:'4 Basic Washes'},
    {id:'p2',name:'Gold',price:1999,benefits:'8 Premium Washes'},
    {id:'p3',name:'Platinum',price:4999,benefits:'Unlimited Basic + Discounts'}
  ];

  // init DB if empty
  if(!DB.load('cw_services')) DB.save('cw_services', defaultServices);
  if(!DB.load('cw_coupons')) DB.save('cw_coupons', defaultCoupons);
  if(!DB.load('cw_plans')) DB.save('cw_plans', defaultPlans);
  if(!DB.load('cw_users')) DB.save('cw_users', []);
  if(!DB.load('cw_bookings')) DB.save('cw_bookings', []);
  if(!DB.load('cw_reviews')) DB.save('cw_reviews', []);
  if(!DB.load('cw_notifications')) DB.save('cw_notifications', []);

  // simple state
  let state = {
    currentView: 'auth',
    currentUser: DB.load('cw_currentUser', null)
  };

  // --- DOM refs ---
  const views = document.querySelectorAll('.view');
  const nav = document.getElementById('nav');
  const authBtn = document.getElementById('authBtn');
  const userDisplay = document.getElementById('userDisplay');
  const adminBtn = document.getElementById('adminBtn');

  // navigation
  nav.addEventListener('click', e=>{
    const v = e.target.getAttribute('data-view');
    if(v) showView(v);
  });

  authBtn.addEventListener('click', ()=>{
    if(state.currentUser) logout();
    else showView('auth');
  });

  // show view
  function showView(name){
    state.currentView = name;
    views.forEach(v=> v.style.display = v.id === name ? '' : 'none');
    // update UI
    renderForView(name);
  }

  // --- Auth ---
  document.getElementById('authForm').addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const pwd = document.getElementById('password').value.trim();
    const users = DB.load('cw_users', []);
    const u = users.find(x=> x.email === email && x.password === pwd);
    if(!u){ alert('Invalid credentials'); return; }
    login(u);
  });

  document.getElementById('toRegister').addEventListener('click', ()=>{
    document.getElementById('registerForm').style.display = '';
    document.getElementById('authTitle').textContent = 'Register';
    document.getElementById('authSubmit').style.display = 'none';
  });

  document.getElementById('registerSubmit').addEventListener('click', ()=>{
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value.trim();
    if(!name || !email || !password) return alert('Fill name, email and password');
    const users = DB.load('cw_users', []);
    if(users.find(u=>u.email===email)) return alert('Email already used');
    const newUser = {id: 'u'+Date.now(),name, email, password, cars: [], membership:null, points:0,isAdmin:false};
    users.push(newUser);
    DB.save('cw_users', users);
    alert('Registered — please login');
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('authTitle').textContent = 'Login';
    document.getElementById('authSubmit').style.display = '';
  });

  function login(user){
    state.currentUser = user;
    DB.save('cw_currentUser', user);
    updateHeader();
    showView('dashboard');
    pushNotification('Login Successful', `Welcome back, ${user.name}`);
  }

  function logout(){
    state.currentUser = null;
    DB.save('cw_currentUser', null);
    updateHeader();
    showView('auth');
    pushNotification('Logged out', 'You have been logged out');
  }

  function updateHeader(){
    if(state.currentUser){
      userDisplay.textContent = state.currentUser.name;
      authBtn.textContent = 'Logout';
      if(state.currentUser.isAdmin) adminBtn.style.display = '';
      else adminBtn.style.display = 'none';
    }else{
      userDisplay.textContent = '';
      authBtn.textContent = 'Login / Register';
      adminBtn.style.display = 'none';
    }
  }

  // --- Cars ---
  document.getElementById('carForm').addEventListener('submit', e=>{
    e.preventDefault();
    if(!ensureAuth()) return;
    const car = {
      id: 'c'+Date.now(),
      image: document.getElementById('carImage').value.trim(),
      name: document.getElementById('carName').value.trim(),
      brand: document.getElementById('brand').value.trim(),
      model: document.getElementById('model').value.trim(),
      regNumber: document.getElementById('regNumber').value.trim(),
      color: document.getElementById('color').value.trim(),
      type: document.getElementById('vehicleType').value
    };
    const users = DB.load('cw_users', []);
    const idx = users.findIndex(u=>u.id===state.currentUser.id);
    users[idx].cars.push(car);
    DB.save('cw_users', users);
    // update currentUser
    state.currentUser = users[idx];
    DB.save('cw_currentUser', state.currentUser);
    renderCars();
    e.target.reset();
  });

  function renderCars(){
    const wrap = document.getElementById('carList');
    wrap.innerHTML = '';
    if(!state.currentUser){
      wrap.innerHTML = '<p class="small">Login to add vehicles</p>';
      return;
    }
    if(state.currentUser.cars.length===0) wrap.innerHTML = '<p class="small">No vehicles yet</p>';
    state.currentUser.cars.forEach(car=>{
      const el = document.createElement('div');
      el.className = 'carItem';
      el.innerHTML = `
        <div style="display:flex;gap:10px;align-items:center">
          <img src="${car.image||'https://via.placeholder.com/80?text=Car'}" alt="${car.name}" style="width:80px;height:50px;object-fit:cover;border-radius:8px" />
          <div>
            <strong>${car.name}</strong><div class="small">${car.brand} ${car.model} • ${car.type}</div>
            <div class="small">Reg: ${car.regNumber || '-' } • Color: ${car.color || '-'}</div>
            <div style="margin-top:6px">
              <button data-action="remove" data-id="${car.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
      wrap.appendChild(el);
    });
    wrap.addEventListener('click', e=>{
      if(e.target.dataset.action === 'remove'){
        const id = e.target.dataset.id;
        const users = DB.load('cw_users', []);
        const uidx = users.findIndex(u=>u.id===state.currentUser.id);
        users[uidx].cars = users[uidx].cars.filter(c=>c.id!==id);
        DB.save('cw_users', users);
        state.currentUser = users[uidx]; DB.save('cw_currentUser', state.currentUser);
        renderCars();
      }
    }, {once:false});
  }

  // --- Services ---
  function renderServices(){
    const list = DB.load('cw_services', []);
    const wrap = document.getElementById('servicesList');
    wrap.innerHTML = '';
    list.forEach(s=>{
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${s.name}</strong> <span class="small">• ${s.duration}</span>
        <div class="small">Price: ₹${s.price}</div>
        <div style="margin-top:6px"><button data-service="${s.id}">Book this</button></div>`;
      wrap.appendChild(div);
    });
    wrap.addEventListener('click', e=>{
      if(e.target.dataset.service) {
        const sid = e.target.dataset.service;
        // navigate to booking with preselected service
        showView('booking');
        setTimeout(()=> document.getElementById('selectService').value = sid,20);
      }
    });
    // also populate service select
    const sel = document.getElementById('selectService');
    sel.innerHTML = list.map(s=>`<option value="${s.id}">${s.name} — ₹${s.price}</option>`).join('');
  }

  // --- Booking flow ---
  // time slots (simple)
  const timeSlots = ['09:00 AM','10:00 AM','11:00 AM','01:00 PM','03:00 PM','05:00 PM'];
  function populateTimeSlots(){
    const ts = document.getElementById('timeSlot');
    ts.innerHTML = timeSlots.map(t=>`<option>${t}</option>`).join('');
  }
  function populateVehiclesSelect(){
    const sel = document.getElementById('selectVehicle');
    sel.innerHTML = '';
    if(!state.currentUser || state.currentUser.cars.length===0){
      sel.innerHTML = '<option value="">-- No vehicles --</option>';
      return;
    }
    sel.innerHTML = state.currentUser.cars.map(c=>`<option value="${c.id}">${c.name} • ${c.regNumber||c.model}</option>`).join('');
    // populate review booking select too
    const rsel = document.getElementById('reviewBooking');
    const bookings = DB.load('cw_bookings', []).filter(b=>b.userId===state.currentUser.id);
    rsel.innerHTML = bookings.map(b=>`<option value="${b.id}">${b.serviceName} on ${b.date} ${b.time} (${b.status})</option>`).join('');
  }

  document.getElementById('bookingForm').addEventListener('submit', e=>{
    e.preventDefault();
    if(!ensureAuth()) return;
    const vehicleId = document.getElementById('selectVehicle').value;
    if(!vehicleId) return alert('Select a vehicle or add one');
    const serviceId = document.getElementById('selectService').value;
    const service = DB.load('cw_services').find(s=>s.id===serviceId);
    const date = document.getElementById('serviceDate').value;
    const time = document.getElementById('timeSlot').value;
    const address = document.getElementById('address').value.trim();
    const coupon = document.getElementById('coupon').value.trim().toUpperCase();
    const paymentMethod = document.getElementById('paymentMethod').value;
    let amount = service.price;
    // coupon
    const coupons = DB.load('cw_coupons');
    if(coupon && coupons[coupon]){
      const c = coupons[coupon];
      if(c.type === 'flat'){ amount = Math.max(0, amount - c.value); }
      else if(c.type === 'percent'){ amount = Math.round(amount * (1 - c.value/100)); }
    }
    // create booking
    const bookings = DB.load('cw_bookings', []);
    const booking = {
      id: 'b'+Date.now(),
      userId: state.currentUser.id,
      vehicleId, serviceId,
      serviceName: service.name,
      date, time, address,
      amount, paymentMethod,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    bookings.push(booking);
    DB.save('cw_bookings', bookings);
    pushNotification('Booking Confirmed', `${service.name} on ${date} at ${time}`);
    // simple points
    const users = DB.load('cw_users');
    const idx = users.findIndex(u=>u.id===state.currentUser.id);
    users[idx].points = (users[idx].points || 0) + Math.round(amount/100);
    DB.save('cw_users', users);
    state.currentUser = users[idx]; DB.save('cw_currentUser', state.currentUser);
    alert('Booking created — invoice available in history');
    renderDashboardLists();
    renderHistory();
    showView('history');
  });

  // booking history rendering
  function renderHistory(){
    const wrap = document.getElementById('historyList');
    wrap.innerHTML = '';
    if(!state.currentUser){ wrap.innerHTML = '<p class="small">Login to see bookings</p>'; return; }
    const bookings = DB.load('cw_bookings', []).filter(b=>b.userId===state.currentUser.id).reverse();
    if(bookings.length===0) wrap.innerHTML = '<p class="small">No bookings yet</p>';
    bookings.forEach(b=>{
      const div = document.createElement('div');
      div.className = 'bookingItem';
      div.innerHTML = `<strong>${b.serviceName}</strong> • ${b.date} ${b.time} — ₹${b.amount} <div class="small">Status: ${b.status}</div>
        <div style="margin-top:6px">
          <button data-invoice="${b.id}">Download Invoice</button>
          <button data-cancel="${b.id}">Cancel</button>
        </div>`;
      wrap.appendChild(div);
    });
    wrap.addEventListener('click', e=>{
      if(e.target.dataset.invoice){
        const id = e.target.dataset.invoice;
        const b = DB.load('cw_bookings').find(x=>x.id===id);
        downloadInvoice(b);
      } else if(e.target.dataset.cancel){
        const id = e.target.dataset.cancel;
        const bookings = DB.load('cw_bookings');
        const bidx = bookings.findIndex(x=>x.id===id);
        if(bidx>-1){
          bookings[bidx].status = 'Cancelled';
          DB.save('cw_bookings', bookings);
          renderHistory();
          pushNotification('Booking Cancelled','Your booking was cancelled');
        }
      }
    }, {once:false});
  }

  function downloadInvoice(b){
    const content = `Invoice\nBooking ID: ${b.id}\nService: ${b.serviceName}\nDate: ${b.date} ${b.time}\nAmount: ₹${b.amount}\nPayment: ${b.paymentMethod}\n`;
    const blob = new Blob([content], {type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `Invoice_${b.id}.txt`; document.body.appendChild(a); a.click();
    a.remove(); URL.revokeObjectURL(url);
  }

  // --- Dashboard ---
  function renderDashboardLists(){
    document.getElementById('dashboardOffers').innerHTML = Object.keys(DB.load('cw_coupons')).map(k=>`<li>${k}</li>`).join('');
    const upcomingList = document.getElementById('upcomingList');
    const completedList = document.getElementById('completedList');
    upcomingList.innerHTML = ''; completedList.innerHTML = '';
    if(!state.currentUser) return;
    const bookings = DB.load('cw_bookings').filter(b=>b.userId===state.currentUser.id);
    bookings.forEach(b=>{
      const li = document.createElement('li');
      li.textContent = `${b.serviceName} • ${b.date} ${b.time} • ${b.status}`;
      if(b.status === 'Completed') completedList.appendChild(li);
      else upcomingList.appendChild(li);
    });
    document.getElementById('activeMembership').textContent = state.currentUser.membership ? state.currentUser.membership.name : 'None';
    document.getElementById('rewardPoints').textContent = state.currentUser.points || 0;
  }

  // --- Memberships ---
  function renderPlans(){
    const plans = DB.load('cw_plans');
    const wrap = document.getElementById('plans');
    wrap.innerHTML = '';
    plans.forEach(p=>{
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${p.name}</strong><div class="small">₹${p.price}</div><div class="small">${p.benefits}</div>
        <div style="margin-top:6px"><button data-plan="${p.id}">Buy</button></div>`;
      wrap.appendChild(div);
    });
    wrap.addEventListener('click', e=>{
      if(e.target.dataset.plan){
        if(!ensureAuth()) return;
        const pid = e.target.dataset.plan;
        const plans = DB.load('cw_plans');
        const plan = plans.find(x=>x.id===pid);
        const users = DB.load('cw_users');
        const idx = users.findIndex(u=>u.id===state.currentUser.id);
        users[idx].membership = {id:plan.id,name:plan.name, expires: null};
        DB.save('cw_users', users);
        state.currentUser = users[idx]; DB.save('cw_currentUser', state.currentUser);
        pushNotification('Membership Activated', `You are now a ${plan.name} member`);
        renderDashboardLists();
      }
    });
  }

  // --- Offers & Coupons ---
  function renderOffers(){
    const coupons = DB.load('cw_coupons');
    const wrap = document.getElementById('offersList');
    wrap.innerHTML = Object.values(coupons).map(c=>`<li>${c.code} — ${c.type === 'flat' ? '₹'+c.value : c.value+'% off'}</li>`).join('');
  }

  // --- Ratings & Reviews ---
  document.getElementById('reviewForm').addEventListener('submit', async e=>{
    e.preventDefault();
    if(!ensureAuth()) return;
    const bookingId = document.getElementById('reviewBooking').value;
    if(!bookingId) return alert('Select a booking to review');
    const rating = +document.getElementById('rating').value;
    const text = document.getElementById('reviewText').value.trim();
    const file = document.getElementById('reviewPhoto').files[0];
    let photoData = null;
    if(file){
      photoData = await readFileAsDataURL(file);
    }
    const reviews = DB.load('cw_reviews');
    const r = {id:'r'+Date.now(), userId:state.currentUser.id, bookingId, rating, text, photo:photoData, createdAt:new Date().toISOString()};
    reviews.push(r); DB.save('cw_reviews', reviews);
    alert('Review submitted — thank you');
    renderReviews();
  });

  function readFileAsDataURL(file){
    return new Promise((res,rej)=>{
      const fr = new FileReader();
      fr.onload = ()=>res(fr.result);
      fr.onerror = rej;
      fr.readAsDataURL(file);
    });
  }

  function renderReviews(){
    const wrap = document.getElementById('reviewsList');
    const reviews = DB.load('cw_reviews').filter(r=>r.userId===state.currentUser?.id);
    wrap.innerHTML = '';
    if(!reviews || reviews.length===0) wrap.innerHTML = '<p class="small">No reviews yet</p>';
    reviews.forEach(r=>{
      const div = document.createElement('div');
      div.className = 'reviewItem';
      div.innerHTML = `<strong>${r.rating} ★</strong> <div class="small">${new Date(r.createdAt).toLocaleString()}</div>
        <div>${r.text || ''}</div>
        ${r.photo ? `<img src="${r.photo}" style="max-width:200px;border-radius:8px;margin-top:6px" />` : ''}`;
      wrap.appendChild(div);
    });
  }

  // --- Admin Panel ---
  function renderAdmin(){
    const users = DB.load('cw_users');
    const bookings = DB.load('cw_bookings');
    const services = DB.load('cw_services');
    const coupons = DB.load('cw_coupons');

    document.getElementById('adminUsers').innerHTML = `<h3>Users</h3>${users.map(u=>`<div class="small">${u.name} • ${u.email} • points:${u.points || 0} • ${u.isAdmin? 'Admin' : ''}</div>`).join('')}`;
    document.getElementById('adminBookings').innerHTML = `<h3>Bookings</h3>${bookings.map(b=>`<div class="small">${b.id} • ${b.serviceName} • ${b.date} ${b.time} • ${b.status} <button data-bid="${b.id}">Mark Completed</button></div>`).join('')}`;
    document.getElementById('adminServices').innerHTML = `<h3>Services</h3>${services.map(s=>`<div class="small">${s.name} • ₹${s.price}</div>`).join('')}`;
    document.getElementById('adminCoupons').innerHTML = `<h3>Coupons</h3>${Object.values(coupons).map(c=>`<div class="small">${c.code} • ${c.type==='flat' ? '₹'+c.value : c.value+'%'}</div>`).join('')}`;

    // actions (mark completed)
    document.getElementById('adminBookings').addEventListener('click', e=>{
      const bid = e.target.dataset.bid;
      if(bid){
        const bs = DB.load('cw_bookings');
        const bidx = bs.findIndex(x=>x.id===bid);
        if(bidx>-1){
          bs[bidx].status = 'Completed';
          DB.save('cw_bookings', bs);
          pushNotification('Service Completed', `${bs[bidx].serviceName} for ${bs[bidx].date}`);
          renderAdmin();
          renderDashboardLists();
        }
      }
    }, {once:false});
  }

  // --- Notifications ---
  function pushNotification(title, message){
    const notes = DB.load('cw_notifications');
    notes.unshift({id:'n'+Date.now(),title,message,ts:new Date().toISOString()});
    DB.save('cw_notifications', notes.slice(0,50));
    // optional browser notification
    if(window.Notification && Notification.permission==='granted'){
      new Notification(title,{body:message});
    }
  }
  if(window.Notification && Notification.permission!=='granted') {
    try { Notification.requestPermission(); } catch(e){}
  }

  // --- Helpers & rendering per view ---
  function renderForView(view){
    switch(view){
      case 'auth':
        break;
      case 'dashboard':
        renderDashboardLists(); renderOffers();
        break;
      case 'cars':
        renderCars();
        break;
      case 'services':
        renderServices();
        break;
      case 'booking':
        populateTimeSlots(); populateVehiclesSelect(); renderServices();
        break;
      case 'history':
        renderHistory();
        break;
      case 'membership':
        renderPlans();
        break;
      case 'offers':
        renderOffers();
        break;
      case 'reviews':
        populateVehiclesSelect(); renderReviews();
        break;
      case 'admin':
        renderAdmin();
        break;
    }
  }

  function ensureAuth(){
    if(!state.currentUser){ alert('Please login first'); showView('auth'); return false; }
    return true;
  }

  // initial render
  updateHeader();
  if(state.currentUser) showView('dashboard');
  else showView('auth');

  // render static lists
  renderServices(); renderOffers();

  // attach other flows
  document.getElementById('forgotBtn').addEventListener('click', ()=>{
    const email = prompt('Enter your registered email to reset password');
    if(!email) return;
    const users = DB.load('cw_users');
    const u = users.find(x=>x.email===email.trim().toLowerCase());
    if(!u) return alert('Email not found');
    const newPwd = 'pass'+Math.floor(Math.random()*9000+1000);
    u.password = newPwd;
    DB.save('cw_users', users);
    alert(`Password reset. New temporary password: ${newPwd}`);
  });

  // expose for debugging (optional)
  window._cw = {
    DB, state, pushNotification
  };
})();