document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { 
            id: 1, 
            name: `Arroz`, 
            price: 1.569, 
            stock: 8, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/313922-1200-auto?v=638416533797070000&width=1200&height=auto&aspect=true`, 
            description: `Arroz Gallo Oro 500 G` 
        },
        { 
            id: 2, 
            name: `Aceite`, 
            price: 2.384, 
            stock: 5, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/163523-1200-auto?v=637835134305170000&width=1200&height=auto&aspect=true`, 
            description: `Aceite De Girasol Natura 1.5 L.` 
        },
        { 
            id: 3, 
            name: `Coca-Cola`, 
            price: 3.099, 
            stock: 8, image: `https://masonlineprod.vtexassets.com/arquivos/ids/287194-1600-auto?v=638229801861200000&width=1600&height=auto&aspect=trueassets/coca-cola.jpg`, 
            description: `Gaseosa Coca Cola  2,25 L.` },
        { 
            id: 4, 
            name: `Agua Mineral`, 
            price: 1.214, 
            stock: 10, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/320832-1600-auto?v=638490837870000000&width=1600&height=auto&aspect=true`, 
            description: `Agua Mineral Sin Gas 2 L.` 
        },
        { 
            id: 5,
            name: `Manzanas`, 
            price: 1.099, 
            stock: 12, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/294146-1200-auto?v=638277322423130000&width=1200&height=auto&aspect=true`, 
            description: `Manzana Roja 400g.` 
        },
        { 
            id: 6, 
            name: `Zanahorias`, 
            price: 324.0, 
            stock: 8, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/289721-1200-auto?v=638242005801900000&width=1200&height=auto&aspect=true`, 
            description: `Zanahoria 250g.` },
        { 
            id: 7, 
            name: `Pañales`, 
            price: 22.085, 
            stock: 3, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/310933-1200-auto?v=638392341798500000&width=1200&height=auto&aspect=true`, 
            description: `Pañales Babysec Ultrasoft Xxg 50un.` 
        },
        { 
            id: 8, 
            name: `Leche`, 
            price: 1.199, 
            stock: 5, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/315953-1200-auto?v=638436405927200000&width=1200&height=auto&aspect=true`, 
            description: `Leche Check Entera Larga Vida 1 L.` 
        },
        { 
            id: 9, 
            name: `Shampoo`, 
            price: 4.063, 
            stock: 7, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/276289-1200-auto?v=638151178069130000&width=1200&height=auto&aspect=true`, 
            description: `Shampoo Dove 400ml.` 
        },
        { 
            id: 10, 
            name: `Jabón`, 
            price: 2.079, 
            stock: 6, 
            image: `https://masonlineprod.vtexassets.com/arquivos/ids/284278-1200-auto?v=638210793989270000&width=1200&height=auto&aspect=true`, 
            description: `Jabon Liquido Dove Para Manos.` 
        }
   
    ];

    const productsContainer = document.getElementById("products-container");
    const totalContainer = document.getElementById("total-container");
    const errorMessage = document.getElementById("error-message");

    function renderProducts() {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = `product-card`;
            productCard.innerHTML =  `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(3)}</p>
            <p>Stock: ${product.stock}</p>
            <input type="number" id="quantity-${product.id}" min="0" max="${product.stock}" placeholder="Cantidad">
        `;
            productsContainer.appendChild(productCard);
        });
    }

    function calculateTotal() {
        let total = 0;
        let hasError = false;
        errorMessage.textContent = "";

        products.forEach(product => {
            const quantity = document.getElementById(`quantity-${product.id}`).value;

            
            if (quantity) {
                const qty = parseInt(quantity,10); 
                if (isNaN(qty) || qty < 1 || qty > product.stock || !Number.isInteger(qty)) {
                    errorMessage.textContent = `Error: La cantidad para ${product.name} debe ser un número entero entre 1 y ${product.stock}.`;
                    hasError = true;
                } else {
                    total += qty * product.price;
                }


                if (!hasError) {
                    console.log(`Total Final: ${total}`);
                }


            }
        });

        if (!hasError) {
            totalContainer.textContent = `Total de la compra: $${total.toFixed(4)}`;
        }
    }

    document.getElementById('buy-button').addEventListener("click", calculateTotal);

    renderProducts();
});
