// Load featured products on homepage
const featuredContainer = document.getElementById("featured-products");

if (featuredContainer) {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>KES ${product.price}</p>
            <a href="product.html?id=${product.id}" class="btn">View</a>
        `;
        featuredContainer.appendChild(div);
    });
}
document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
    document.querySelector('.desktop-nav').classList.toggle('active');
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
}
