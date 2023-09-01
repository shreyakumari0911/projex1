// Get references to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Initialize an empty shopping cart array
const shoppingCart = [];

// Add click event listeners to the "Add to Cart" buttons
addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Get the product details based on the product section's data attribute
        const productId = button.parentElement.getAttribute("data-product-id");
        const productName = button.parentElement.querySelector("h2").textContent;
        const productPrice = parseFloat(button.parentElement.querySelector("p").textContent.match(/\d+\.\d+/)[0]);

        // Create a cart item object
        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice,
        };

        // Add the item to the shopping cart
        shoppingCart.push(cartItem);

        // You can optionally display a confirmation message here
        console.log(`Added "${productName}" to the cart.`);

        // For a more advanced cart system, you might update the cart UI or send the data to a server.
    });
});
// Get a reference to the checkout button and payment options div
const checkoutButton = document.getElementById("checkout-button");
const paymentOptions = document.getElementById("payment-options");

// Add a click event listener to the checkout button
checkoutButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (page reload)
    
    // Toggle the display of the payment options
    if (paymentOptions.style.display === "none" || paymentOptions.style.display === "") {
        paymentOptions.style.display = "block";
    } else {
        paymentOptions.style.display = "none";
    }
});



