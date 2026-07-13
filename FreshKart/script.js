// Product Database
const products = [
    // Vegetables
    {
        id: 1,
        name: 'Fresh Tomatoes',
        category: 'vegetables',
        price: 40,
        originalPrice: 50,
        rating: 4.5,
        reviews: 128,
        image: 'tomatoes.webp',
        description: 'Freshly picked red tomatoes, perfect for salads and cooking',
        stock: 45,
        discount: 20
    },
    {
        id: 2,
        name: 'Green Cabbage',
        category: 'vegetables',
        price: 25,
        originalPrice: 35,
        rating: 4.2,
        reviews: 89,
        image: 'greencabbage.jpg',
        description: 'Crisp and fresh green cabbage, great for cooking',
        stock: 60,
        discount: 29
    },
    {
        id: 3,
        name: 'Fresh Carrots',
        category: 'vegetables',
        price: 30,
        originalPrice: 40,
        rating: 4.6,
        reviews: 156,
        image: 'carrots.jpg',
        description: 'Orange, sweet, and crunchy carrots',
        stock: 75,
        discount: 25
    },
    {
        id: 4,
        name: 'Onions (1kg)',
        category: 'vegetables',
        price: 35,
        originalPrice: 45,
        rating: 4.3,
        reviews: 112,
        image: 'onion.jpg',
        description: 'Golden onions, essential for every kitchen',
        stock: 100,
        discount: 22
    },
    // Fruits
    {
        id: 5,
        name: 'Red Apples',
        category: 'fruits',
        price: 80,
        originalPrice: 100,
        rating: 4.7,
        reviews: 234,
        image: 'redapples.jpg',
        description: 'Sweet and juicy red apples, rich in vitamins',
        stock: 50,
        discount: 20
    },
    {
        id: 6,
        name: 'Bananas (1 Bunch)',
        category: 'fruits',
        price: 45,
        originalPrice: 60,
        rating: 4.4,
        reviews: 189,
        image: 'bannans.jpg',
        description: 'Ripe bananas, perfect for breakfast',
        stock: 80,
        discount: 25
    },
    {
        id: 7,
        name: 'Oranges (1kg)',
        category: 'fruits',
        price: 60,
        originalPrice: 80,
        rating: 4.5,
        reviews: 145,
        image: 'oranges.jpg',
        description: 'Fresh citrus oranges, great source of vitamin C',
        stock: 65,
        discount: 25
    },
    {
        id: 8,
        name: 'Fresh Grapes',
        category: 'fruits',
        price: 120,
        originalPrice: 150,
        rating: 4.6,
        reviews: 198,
        image: 'grapes.jpg',
        description: 'Juicy green grapes, refreshing and healthy',
        stock: 40,
        discount: 20
    },
    // Dairy
    {
        id: 9,
        name: ' Milk (1L)',
        category: 'dairy',
        price: 50,
        originalPrice: 65,
        rating: 4.6,
        reviews: 267,
        image: 'milk.webp',
        description: 'Pure whole milk, rich in calcium',
        stock: 120,
        discount: 23
    },
    {
        id: 10,
        name: 'Cheddar Cheese',
        category: 'dairy',
        price: 250,
        originalPrice: 300,
        rating: 4.4,
        reviews: 112,
        image: 'cheese.jpg',
        description: 'Aged cheddar cheese, perfect for every meal',
        stock: 35,
        discount: 17
    },
    {
        id: 11,
        name: 'Eggs (12 pack)',
        category: 'dairy',
        price: 70,
        originalPrice: 90,
        rating: 4.7,
        reviews: 312,
        image: 'eggs.jpg',
        description: 'Fresh farm eggs, rich in protein',
        stock: 90,
        discount: 22
    },
    {
        id: 12,
        name: 'Yogurt (500g)',
        category: 'dairy',
        price: 60,
        originalPrice: 75,
        rating: 4.5,
        reviews: 189,
        image: 'yogurt.jpg',
        description: 'Creamy yogurt, good for digestion',
        stock: 100,
        discount: 20
    },
    // Snacks
    {
        id: 13,
        name: 'Potato Chips (200g)',
        category: 'snacks',
        price: 45,
        originalPrice: 60,
        rating: 4.3,
        reviews: 234,
        image: 'chips.jpg',
        description: 'Crispy and delicious potato chips',
        stock: 150,
        discount: 25
    },
    {
        id: 14,
        name: 'Cashew Nuts (250g)',
        category: 'snacks',
        price: 350,
        originalPrice: 450,
        rating: 4.8,
        reviews: 156,
        image: 'chashew.jpg',
        description: 'Premium cashew nuts, healthy snack',
        stock: 45,
        discount: 22
    },
    {
        id: 15,
        name: 'Granola Bar (Pack of 5)',
        category: 'snacks',
        price: 120,
        originalPrice: 150,
        rating: 4.4,
        reviews: 98,
        image: 'granolabar.jpg',
        description: 'Healthy granola bars, perfect breakfast',
        stock: 80,
        discount: 20
    },
    {
        id: 16,
        name: 'Mixed Dry Fruits',
        category: 'snacks',
        price: 450,
        originalPrice: 600,
        rating: 4.7,
        reviews: 189,
        image: 'dryfruits.jpg',
        description: 'Assorted dry fruits mix, nutritious',
        stock: 60,
        discount: 25
    },
    // Beverages
    {
        id: 17,
        name: 'Orange Juice (1L)',
        category: 'beverages',
        price: 90,
        originalPrice: 120,
        rating: 4.5,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop',
        description: 'Fresh orange juice, natural vitamins',
        stock: 70,
        discount: 25
    },
    {
        id: 18,
        name: 'Coffee Powder (200g)',
        category: 'beverages',
        price: 220,
        originalPrice: 280,
        rating: 4.6,
        reviews: 234,
        image: 'coffee.jpg',
        description: 'Premium arabica coffee powder',
        stock: 100,
        discount: 21
    },
    {
        id: 19,
        name: 'Green Tea (50 bags)',
        category: 'beverages',
        price: 150,
        originalPrice: 200,
        rating: 4.4,
        reviews: 167,
        image: 'greentea.jpg',
        description: 'Healthy green tea, antioxidants rich',
        stock: 90,
        discount: 25
    },
    {
        id: 20,
        name: 'Lemonade (1L)',
        category: 'beverages',
        price: 60,
        originalPrice: 80,
        rating: 4.3,
        reviews: 112,
        image: 'lemonade.jpg',
        description: 'Refreshing homemade lemonade',
        stock: 85,
        discount: 25
    },
    // Bakery
    {
        id: 21,
        name: 'Whole Wheat Bread',
        category: 'bakery',
        price: 35,
        originalPrice: 45,
        rating: 4.5,
        reviews: 198,
        image: 'bread.jpg',
        description: 'Fresh whole wheat bread, healthy choice',
        stock: 110,
        discount: 22
    },
    {
        id: 22,
        name: 'Croissants (Pack of 4)',
        category: 'bakery',
        price: 120,
        originalPrice: 160,
        rating: 4.7,
        reviews: 245,
        image: 'croissent.jpg',
        description: 'Buttery French croissants',
        stock: 50,
        discount: 25
    },
    {
        id: 23,
        name: 'Chocolate Cake (500g)',
        category: 'bakery',
        price: 250,
        originalPrice: 330,
        rating: 4.8,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
        description: 'Rich chocolate cake, perfect for celebrations',
        stock: 35,
        discount: 24
    },
    {
        id: 24,
        name: 'Cookies (300g)',
        category: 'bakery',
        price: 80,
        originalPrice: 120,
        rating: 4.4,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=300&fit=crop',
        description: 'Delicious homemade cookies',
        stock: 120,
        discount: 33
    }
];

// State Management
let cart = [];
let currentCategory = 'all';
let currentSort = 'popular';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoryItems = document.querySelectorAll('.category-item');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const sortFilter = document.getElementById('sortFilter');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts(products);
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Category Filter
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(cat => cat.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            currentSort = 'popular';
            sortFilter.value = 'popular';
            document.getElementById('sectionTitle').textContent = item.querySelector('span').textContent;
            filterAndRender();
        });
    });

    // Cart Toggle
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.toggle('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Modal Close
    modalClose.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });

    // Search
    searchInput.addEventListener('input', filterAndRender);

    // Sort
    sortFilter.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterAndRender();
    });
}

// Filter and Render Products
function filterAndRender() {
    let filtered = products;

    // Category Filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Search Filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // Sort
    filtered = sortProducts(filtered);

    renderProducts(filtered);
}

// Sort Products
function sortProducts(productsToSort) {
    const sorted = [...productsToSort];
    
    switch(currentSort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.reverse();
        case 'popular':
        default:
            return sorted.sort((a, b) => b.reviews - a.reviews);
    }
}

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">No products found</div>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const rating = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="discount-badge">${product.discount}% OFF</div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${rating}</span>
                <span>(${product.reviews})</span>
            </div>
            <div class="product-pricing">
                <span class="product-price">₹${product.price}</span>
                <span class="product-original-price">₹${product.originalPrice}</span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            addToCart(product);
            e.stopPropagation();
        } else {
            showProductModal(product);
        }
    });

    return card;
}

// Show Product Modal
function showProductModal(product) {
    const rating = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalRating').textContent = rating;
    document.getElementById('modalReviews').textContent = `(${product.reviews} reviews)`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalStock').textContent = `${product.stock} units`;
    document.getElementById('modalOriginalPrice').textContent = `₹${product.originalPrice}`;
    document.getElementById('modalPrice').textContent = `₹${product.price}`;
    document.getElementById('modalDiscount').textContent = `${product.discount}% OFF`;
    document.getElementById('modalQuantity').value = 1;

    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('modalQuantity');

    decreaseBtn.onclick = () => {
        if (quantityInput.value > 1) quantityInput.value--;
    };

    increaseBtn.onclick = () => {
        if (quantityInput.value < product.stock) quantityInput.value++;
    };

    document.getElementById('addToCartBtn').onclick = () => {
        const quantity = parseInt(quantityInput.value);
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        productModal.classList.remove('active');
    };

    productModal.classList.add('active');
}

// Add to Cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart UI
function updateCartUI() {
    cartCount.textContent = cart.length;
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        updateCartSummary();
        return;
    }

    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-controls">
                    <button>-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button>+</button>
                </div>
            </div>
            <div class="cart-item-remove">
                <button><i class="fas fa-trash"></i></button>
            </div>
        `;

        const decreaseBtn = cartItem.querySelector('.cart-item-controls button:first-child');
        const increaseBtn = cartItem.querySelector('.cart-item-controls button:nth-child(3)');
        const removeBtn = cartItem.querySelector('.cart-item-remove button');

        decreaseBtn.addEventListener('click', () => decreaseQuantity(item.id));
        increaseBtn.addEventListener('click', () => increaseQuantity(item.id));
        removeBtn.addEventListener('click', () => removeFromCart(item.id));

        cartItemsContainer.appendChild(cartItem);
    });

    updateCartSummary();
}

// Cart Functions
function decreaseQuantity(productId) {
    const item = cart.find(p => p.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
    }
    saveCart();
    updateCartUI();
}

function increaseQuantity(productId) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity++;
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 30 : 0;
    const discount = Math.floor(subtotal * 0.05);
    const total = subtotal + deliveryFee - discount;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('deliveryFee').textContent = `₹${deliveryFee}`;
    document.getElementById('discount').textContent = `₹${discount}`;
    document.getElementById('total').textContent = `₹${total}`;
}

// Local Storage Functions
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// Notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Cart is empty!');
        return;
    }
    alert(`Order Total: ₹${document.getElementById('total').textContent}\n\nThanks for your order! Expected delivery in 10-15 minutes.`);
    cart = [];
    saveCart();
    updateCartUI();
    cartSidebar.classList.remove('active');
});