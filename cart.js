// Cart functionality
let cart = [];

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");

// Update cart display
function updateCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        checkoutBtn.style.display = "none";
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h3>${item.name}</h3>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Price:</strong> ${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    checkoutBtn.style.display = "block";
    cartCount.textContent = cart.length;
}

// Add game to cart
function addToCart(game) {
    cart.push(game);
    updateCart();
}

// Remove game from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const gameCard = button.closest(".game-card");
        const game = {
            name: gameCard.dataset.name,
            image: gameCard.dataset.image,
            price: gameCard.dataset.price,
            type: gameCard.dataset.type,
        };

        addToCart(game);
    });
});
