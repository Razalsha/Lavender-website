async function products_fun() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        console.log(jsonData);
        displayProducts(jsonData);
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
function displayProducts(products) {
    const container = document.getElementById('products-container');

    products.forEach(product => {
        // Create a product card
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        // Product image
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productCard.appendChild(productImg);

        // Product title
        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;
        productCard.appendChild(productTitle);

        // Product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        productCard.appendChild(productPrice);

        // Append the product card to the container
        container.appendChild(productCard);
    });
}
// Call the function to fetch and display products
products_fun();