// Car Wash Pro - JavaScript Application

// Data Storage (Using LocalStorage for persistence)
const AppData = {
    user: {
        loggedIn: false,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210'
    },
    cars: [],
    bookings: [],
    notifications: [],
    membership: null,
    rewardPoints: 0,
    coupons: [
        { code: 'FIRST50', discount: 50, type: 'fixed', limit: 100, used: 45 },
        { code: 'SAVE100', discount: 100, type: 'fixed', limit: 50, used: 30 },
        { code: 'FESTIVE20', discount: 20, type: 'percentage', limit: 200, used: 120 }
    ],
    services: [
        { id: 1, name: 'Basic Wash', duration: '30 mins', price: 299 },
        { id: 2, name: 'Premium Wash', duration: '45 mins', price: 499 },
        { id: 3, name: 'Interior Cleaning', duration: '40 mins', price: 399 },
        { id: 4, name: 'Exterior Polish', duration: '60 mins', price: 699 },
        { id: 5, name: 'Ceramic Coating', duration: '3 hrs', price: 4999 },
        { id: 6, name: 'Full Detailing', duration: '5 hrs', price: 7999 }
    ],
    offers: [
        { code: 'WELCOME', description: '50% off on first booking', expiry: '2024-12-31' },
        { code: 'SUMMER', description: 'Get 20% discount on all services', expiry: '2024-09-30' }
    ]
};

// Current Booking State
let currentBooking = {
    vehicle: null,
    service: null,
    date: null,
    time: null,
    address: null,
    payment: 'upi',
    coupon: null,
    discount: 0
};

let currentStep = 1;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadDataFromStorage();
    displayServices();
    displayCoupons();
    displayOffers();
    displayCars();
    displayNotifications();
    setMinDate();
});

// Initialize App
function initializeApp() {
    // Check if user is logged in
    if (!AppData.user.loggedIn) {
        showAuthModal();
    } else {
        loadUserData();
    }

    // Event listeners
    document.getElementById('carForm').addEventListener('submit', addCar);
    document.getElementById('profileForm').addEventListener('submit', updateProfile);
    document.getElementById('settingsForm').addEventListener('submit', updateSettings);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Hamburger menu
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
}

// Save data to localStorage
function saveDataToStorage() {
    localStorage.setItem('carWashAppData', JSON.stringify(AppData));
}

// Load data from localStorage
function loadDataFromStorage() {
    const saved = localStorage.getItem('carWashAppData');
    if (saved) {
        const parsed = JSON.parse(saved);
        AppData.cars = parsed.cars || [];
        AppData.bookings = parsed.bookings || [];
        AppData.membership = parsed.membership || null;
        AppData.rewardPoints = parsed.rewardPoints || 0;
    }
}

// User Authentication
function showAuthModal() {
    document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function switchAuthMode(mode) {
    if (mode === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('registerForm').classList.remove('active');
        document.getElementById('loginBtn').classList.add('active');
        document.getElementById('registerBtn').classList.remove('active');
    } else {
        document.getElementById('registerForm').classList.add('active');
        document.getElementById('loginForm').classList.remove('active');
        document.getElementById('registerBtn').classList.add('active');
        document.getElementById('loginBtn').classList.remove('active');
    }
}

function handleLogin(e) {
    e.preventDefault();
    AppData.user.loggedIn = true;
    closeAuthModal();
    loadUserData();
    showNotification('Login successful! Welcome back.', 'success');
    saveDataToStorage();
}

function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    AppData.user.loggedIn = true;
    AppData.user.name = formData.get('name') || 'User';
    closeAuthModal();
    loadUserData();
    showNotification('Registration successful! Welcome to Car Wash Pro.', 'success');
    saveDataToStorage();
}

function showForgotPassword() {
    alert('Password reset link has been sent to your email.');
}

function logout() {
    AppData.user.loggedIn = false;
    localStorage.removeItem('carWashAppData');
    showAuthModal();
}

function loadUserData() {
    updateDashboard();
    displayCars();
}

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update breadcrumb or title as needed
    window.scrollTo(0, 0);
}

// Dropdown Menu
function toggleDropdown(event) {
    event.preventDefault();
    document.getElementById('dropdownMenu').style.display = 
        document.getElementById('dropdownMenu').style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    if (!event.target.closest('.dropdown')) {
        dropdown.style.display = 'none';
    }
});

// Mobile Menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Car Management
function showAddCarForm() {
    document.getElementById('carModal').classList.add('active');
}

function closeCarModal() {
    document.getElementById('carModal').classList.remove('active');
    document.getElementById('carForm').reset();
}

function addCar(e) {
    e.preventDefault();
    const car = {
        id: Date.now(),
        name: document.getElementById('carName').value,
        brand: document.getElementById('carBrand').value,
        model: document.getElementById('carModel').value,
        reg: document.getElementById('carReg').value,
        color: document.getElementById('carColor').value,
        type: document.getElementById('carType').value,
        image: null
    };

    AppData.cars.push(car);
    saveDataToStorage();
    displayCars();
    closeCarModal();
    showNotification('Vehicle added successfully!', 'success');
}

function displayCars() {
    const carsList = document.getElementById('carsList');
    const vehicleOptions = document.getElementById('vehicleOptions');

    if (AppData.cars.length === 0) {
        carsList.innerHTML = '<p>No vehicles added yet</p>';
        vehicleOptions.innerHTML = '<p>No vehicles found. <a href="#" onclick="showSection(\'cars\')">Add a vehicle</a></p>';
        return;
    }

    let carsHTML = '';
    let optionsHTML = '';

    AppData.cars.forEach(car => {
        carsHTML += `
            <div class="car-card">
                <div class="car-image">🚗</div>
                <div class="car-info">
                    <h4>${car.name}</h4>
                    <div class="car-details">
                        <p><strong>Brand:</strong> ${car.brand}</p>
                        <p><strong>Model:</strong> ${car.model}</p>
                        <p><strong>Registration:</strong> ${car.reg}</p>
                        <p><strong>Type:</strong> ${car.type}</p>
                        <p><strong>Color:</strong> ${car.color}</p>
                    </div>
                    <div class="car-actions">
                        <button class="edit-btn" onclick="editCar(${car.id})">Edit</button>
                        <button class="delete-btn" onclick="deleteCar(${car.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;

        optionsHTML += `
            <div class="option" onclick="selectVehicle(${car.id}, '${car.name}')">
                <div>🚗</div>
                <div>${car.name}</div>
                <div style="font-size: 0.8rem">${car.brand} ${car.model}</div>
            </div>
        `;
    });

    carsList.innerHTML = carsHTML;
    vehicleOptions.innerHTML = optionsHTML;
}

function deleteCar(carId) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
        AppData.cars = AppData.cars.filter(car => car.id !== carId);
        saveDataToStorage();
        displayCars();
        showNotification('Vehicle deleted successfully!', 'success');
    }
}

function editCar(carId) {
    // For now, show a simple edit alert. In production, populate form with car data
    alert('Edit feature coming soon!');
}

// Booking Management
function goToStep(step) {
    if (step <= currentStep || step <= currentStep + 1) {
        currentStep = step;
        updateBookingUI();
    }
}

function nextStep() {
    if (validateStep(currentStep)) {
        if (currentStep < 5) {
            currentStep++;
        }
        updateBookingUI();
    } else {
        showNotification('Please complete this step first', 'warning');
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
    }
    updateBookingUI();
}

function validateStep(step) {
    switch(step) {
        case 1:
            return currentBooking.vehicle !== null;
        case 2:
            return currentBooking.service !== null;
        case 3:
            return currentBooking.date && currentBooking.time;
        case 4:
            return document.getElementById('address').value && document.getElementById('city').value;
        case 5:
            return true;
        default:
            return true;
    }
}

function updateBookingUI() {
    // Hide all steps
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`step${i}`).classList.remove('active');
        document.querySelector(`.step:nth-child(${i})`).classList.remove('active');
    }

    // Show current step
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.step:nth-child(${currentStep})`).classList.add('active');

    // Update buttons
    document.getElementById('prevBtn').style.display = currentStep === 1 ? 'none' : 'block';
    document.getElementById('nextBtn').style.display = currentStep === 5 ? 'none' : 'block';
    document.getElementById('confirmBtn').style.display = currentStep === 5 ? 'block' : 'none';

    // Update summary
    updateBookingSummary();
}

function selectVehicle(carId, carName) {
    currentBooking.vehicle = { id: carId, name: carName };
    document.querySelectorAll('#vehicleOptions .option').forEach(el => {
        el.classList.remove('selected');
    });
    event.target.closest('.option').classList.add('selected');
}

function selectService(serviceId, serviceName, price) {
    currentBooking.service = { id: serviceId, name: serviceName, price: price };
    document.querySelectorAll('#serviceOptions .service-card').forEach(el => {
        el.classList.remove('selected');
    });
    event.target.closest('.service-card').classList.add('selected');
}

function displayServices() {
    const serviceOptions = document.getElementById('serviceOptions');
    let servicesHTML = '';

    AppData.services.forEach(service => {
        servicesHTML += `
            <div class="service-card" onclick="selectService(${service.id}, '${service.name}', ${service.price})">
                <div class="service-name">${service.name}</div>
                <div class="service-duration">⏱️ ${service.duration}</div>
                <div class="service-price">₹${service.price}</div>
            </div>
        `;
    });

    serviceOptions.innerHTML = servicesHTML;

    // Also populate admin services table
    const servicesBody = document.getElementById('servicesBody');
    let adminServicesHTML = '';
    AppData.services.forEach(service => {
        adminServicesHTML += `
            <tr>
                <td>${service.name}</td>
                <td>${service.duration}</td>
                <td>₹${service.price}</td>
                <td><button class="btn btn-small" onclick="editService(${service.id})">Edit</button></td>
            </tr>
        `;
    });
    if (servicesBody) servicesBody.innerHTML = adminServicesHTML;
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').setAttribute('min', today);
}

function updateBookingSummary() {
    document.getElementById('summaryService').textContent = currentBooking.service ? currentBooking.service.name : '-';
    document.getElementById('summaryDate').textContent = currentBooking.date || '-';
    document.getElementById('summaryTime').textContent = currentBooking.time || '-';
    
    const amount = currentBooking.service ? currentBooking.service.price : 0;
    const discount = currentBooking.discount || 0;
    const total = amount - discount;

    document.getElementById('summaryAmount').textContent = `₹${amount}`;
    document.getElementById('summaryDiscount').textContent = `-₹${discount}`;
    document.getElementById('summaryTotal').textContent = `₹${total}`;
}

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.toUpperCase();
    const coupon = AppData.coupons.find(c => c.code === couponCode);
    const messageEl = document.getElementById('couponMessage');

    if (!coupon) {
        messageEl.innerHTML = '<span style="color: red;">Invalid coupon code</span>';
        currentBooking.discount = 0;
        return;
    }

    if (coupon.used >= coupon.limit) {
        messageEl.innerHTML = '<span style="color: red;">Coupon limit exceeded</span>';
        currentBooking.discount = 0;
        return;
    }

    const amount = currentBooking.service ? currentBooking.service.price : 0;
    let discount = 0;

    if (coupon.type === 'fixed') {
        discount = coupon.discount;
    } else if (coupon.type === 'percentage') {
        discount = Math.floor(amount * coupon.discount / 100);
    }

    currentBooking.discount = discount;
    currentBooking.coupon = couponCode;
    messageEl.innerHTML = `<span style="color: green;">✓ Coupon applied! Discount: ₹${discount}</span>`;
    updateBookingSummary();
}

function confirmBooking() {
    if (!currentBooking.vehicle || !currentBooking.service || !currentBooking.date || !currentBooking.time) {
        showNotification('Please complete all booking details', 'warning');
        return;
    }

    const booking = {
        id: 'B' + Date.now(),
        vehicleId: currentBooking.vehicle.id,
        vehicleName: currentBooking.vehicle.name,
        serviceId: currentBooking.service.id,
        serviceName: currentBooking.service.name,
        date: currentBooking.date,
        time: currentBooking.time,
        amount: currentBooking.service.price,
        discount: currentBooking.discount,
        total: currentBooking.service.price - currentBooking.discount,
        address: document.getElementById('address').value,
        payment: document.querySelector('input[name="payment"]:checked').value,
        status: 'confirmed',
        createdAt: new Date().toISOString()
    };

    AppData.bookings.push(booking);
    AppData.rewardPoints += Math.floor(booking.total / 100);

    if (currentBooking.coupon) {
        const coupon = AppData.coupons.find(c => c.code === currentBooking.coupon);
        if (coupon) coupon.used++;
    }

    saveDataToStorage();
    showNotification('Booking confirmed! Booking ID: ' + booking.id, 'success');
    
    addNotification(`Your service booking for ${booking.serviceName} on ${booking.date} is confirmed.`);

    // Reset booking
    currentBooking = {
        vehicle: null,
        service: null,
        date: null,
        time: null,
        address: null,
        payment: 'upi',
        coupon: null,
        discount: 0
    };
    currentStep = 1;

    // Update dashboard
    updateDashboard();
    showSection('home');
}

// Membership Management
function purchaseMembership(plan, price) {
    if (confirm(`Subscribe to ${plan} plan for ₹${price}?`)) {
        AppData.membership = {
            plan: plan,
            price: price,
            startDate: new Date().toISOString(),
            renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        saveDataToStorage();
        updateDashboard();
        showNotification(`${plan} membership activated!`, 'success');
        addNotification(`You have successfully subscribed to ${plan} membership.`);
    }
}

// Dashboard Update
function updateDashboard() {
    // Update upcoming bookings
    const upcomingBookings = AppData.bookings.filter(b => new Date(b.date) > new Date() && b.status === 'confirmed');
    const upcomingHTML = upcomingBookings.length > 0 
        ? upcomingBookings.map(b => `<div style="margin-bottom: 0.5rem;"><strong>${b.serviceName}</strong><br/>📅 ${b.date}<br/>⏱️ ${b.time}</div>`).join('')
        : '<p>No upcoming bookings</p>';
    document.getElementById('upcomingBookings').innerHTML = upcomingHTML;

    // Update completed washes
    const completed = AppData.bookings.filter(b => b.status === 'completed').length;
    document.getElementById('completedWashes').innerHTML = `<span class="count">${completed}</span>`;

    // Update membership
    if (AppData.membership) {
        document.getElementById('activeMembership').innerHTML = `<p><strong>${AppData.membership.plan}</strong> Plan</p><p style="font-size: 0.9rem;">Renews on ${new Date(AppData.membership.renewalDate).toLocaleDateString()}</p>`;
    }

    // Update reward points
    document.getElementById('rewardPoints').innerHTML = `<span class="points">${AppData.rewardPoints}</span> Points`;

    // Update notification count
    document.getElementById('notificationCount').textContent = AppData.notifications.length;
}

// Notifications
function showNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
}

function displayNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    if (AppData.notifications.length === 0) {
        notificationsList.innerHTML = '<p style="padding: 1rem; text-align: center; color: #999;">No notifications</p>';
        return;
    }

    let html = '';
    AppData.notifications.forEach((notif, index) => {
        html += `
            <div class="notification-item ${notif.read ? '' : 'unread'}">
                <p>${notif.message}</p>
                <small style="color: #999;">${new Date(notif.timestamp).toLocaleString()}</small>
                <button onclick="removeNotification(${index})" style="float: right; background: none; border: none; cursor: pointer; color: #999;">×</button>
            </div>
        `;
    });
    notificationsList.innerHTML = html;
}

function addNotification(message) {
    AppData.notifications.unshift({
        message: message,
        timestamp: new Date().toISOString(),
        read: false
    });
    
    // Keep only last 20 notifications
    if (AppData.notifications.length > 20) {
        AppData.notifications.pop();
    }

    saveDataToStorage();
    displayNotifications();
    document.getElementById('notificationCount').textContent = AppData.notifications.length;
}

function removeNotification(index) {
    AppData.notifications.splice(index, 1);
    saveDataToStorage();
    displayNotifications();
}

function showNotification(message, type = 'info') {
    addNotification(message);
    // Optional: Show a toast notification
    console.log(`${type.toUpperCase()}: ${message}`);
}

// History Management
function filterHistory() {
    const statusFilter = document.getElementById('statusFilter').value;
    const filteredBookings = statusFilter 
        ? AppData.bookings.filter(b => b.status === statusFilter)
        : AppData.bookings;

    displayHistory(filteredBookings);
}

function displayHistory(bookings) {
    const historyBody = document.getElementById('historyBody');
    
    if (bookings.length === 0) {
        historyBody.innerHTML = '<tr><td colspan="6">No bookings found</td></tr>';
        return;
    }

    let html = '';
    bookings.forEach(booking => {
        const statusClass = booking.status === 'completed' ? 'completed' : booking.status === 'cancelled' ? 'cancelled' : 'pending';
        html += `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.date}</td>
                <td>${booking.serviceName}</td>
                <td>₹${booking.total}</td>
                <td><span class="status ${statusClass}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
                <td>
                    <button class="btn btn-small" onclick="viewBooking('${booking.id}')">View</button>
                    <button class="btn btn-small" onclick="downloadInvoice('${booking.id}')">Invoice</button>
                </td>
            </tr>
        `;
    });
    historyBody.innerHTML = html;
}

function viewBooking(bookingId) {
    const booking = AppData.bookings.find(b => b.id === bookingId);
    if (booking) {
        alert(`Booking ID: ${booking.id}\nService: ${booking.serviceName}\nDate: ${booking.date}\nTime: ${booking.time}\nTotal: ₹${booking.total}\nStatus: ${booking.status}`);
    }
}

function downloadInvoice(bookingId) {
    const booking = AppData.bookings.find(b => b.id === bookingId);
    if (booking) {
        alert(`Downloading invoice for booking ${bookingId}...`);
        // In production, generate and download PDF
    }
}

// Profile Management
function updateProfile(e) {
    e.preventDefault();
    AppData.user.name = document.getElementById('fullName').value;
    AppData.user.email = document.getElementById('email').value;
    AppData.user.phone = document.getElementById('phone').value;
    saveDataToStorage();
    showNotification('Profile updated successfully!', 'success');
}

function updateSettings(e) {
    e.preventDefault();
    showNotification('Settings updated successfully!', 'success');
}

// Offers
function displayOffers() {
    const offersHTML = AppData.offers.map(offer => `
        <div style="padding: 0.5rem 0; border-bottom: 1px solid #ddd;">
            <strong>${offer.code}</strong><br/>
            <span style="font-size: 0.85rem;">${offer.description}</span>
        </div>
    `).join('');
    
    const offersElement = document.getElementById('activeOffers');
    if (offersElement) {
        offersElement.innerHTML = offersHTML || '<p>No active offers</p>';
    }
}

// Coupons
function displayCoupons() {
    const couponsBody = document.getElementById('couponsBody');
    if (!couponsBody) return;

    let html = '';
    AppData.coupons.forEach(coupon => {
        html += `
            <tr>
                <td>${coupon.code}</td>
                <td>${coupon.type === 'fixed' ? `₹${coupon.discount}` : `${coupon.discount}%`}</td>
                <td>${coupon.type}</td>
                <td>${coupon.limit}</td>
                <td>${coupon.used}</td>
                <td>
                    <button class="btn btn-small" onclick="editCoupon('${coupon.code}')">Edit</button>
                    <button class="btn btn-small" onclick="deleteCoupon('${coupon.code}')">Delete</button>
                </td>
            </tr>
        `;
    });
    couponsBody.innerHTML = html;
}

function showAddCouponForm() {
    const code = prompt('Enter coupon code:');
    if (code) {
        showNotification('Coupon added (demo)', 'success');
    }
}

function editCoupon(code) {
    alert('Edit coupon: ' + code);
}

function deleteCoupon(code) {
    if (confirm('Delete coupon: ' + code + '?')) {
        AppData.coupons = AppData.coupons.filter(c => c.code !== code);
        saveDataToStorage();
        displayCoupons();
        showNotification('Coupon deleted!', 'success');
    }
}

// Admin Functions
function switchAdminTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');
}

function showAddServiceForm() {
    alert('Add service form (demo)');
}

function editService(serviceId) {
    alert('Edit service: ' + serviceId);
}

// Utility Functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN');
}

function formatCurrency(amount) {
    return '₹' + amount.toFixed(2);
}

// Close modals on outside click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Initial load
displayHistory(AppData.bookings);
updateDashboard();