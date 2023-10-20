let cartItems = 0;

function increment(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}

function decrement(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}

function addToCart(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.textContent);
    cartItems += count;
    alert(`Added ${count} items to the cart. Total items in cart: ${cartItems}`);
}


