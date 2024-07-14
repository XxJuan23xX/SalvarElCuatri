async function searchProducts(query) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
function displayResults(products) {
    const container = document.getElementById('results');
    container.innerHTML = ''; 
    products.forEach(product => {
        const html = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                        <a href="${product.permalink}" class="btn btn-primary" target="_blank">Ver producto</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}
searchProducts('ordenadores');

