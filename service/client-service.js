const createNewLine = (image, name, price, description) => {
    const line = document.createElement("div");
    line.classList.add('product');
    const content = `
                    <img src="${image}" alt="">
                    <h4>${name}</h4>
                    <p>$${price}</p>
                    <p style="color:#000000d2" class="descripcion">${description}</p>
                    <a href="verProducto.html" target="_blank">Ver producto</a>
                `;
    line.innerHTML = content;
    return line;
};

//./assets/img/
const div = document.querySelector("[data-div]")

//Open http (method, url)

// CRUD - HTTP METHODS
//CREATE - POST 
//READ - GET 
// UPDATE - PUT/PATCH 
//DELETE - DELETE

const productsList = () => fetch("http://localhost:3000/product").then((res) => res.json());

productsList().then((data) => {
    data.forEach(product => {
        const newLine = createNewLine(product.image, product.name, product.price, product.description)
        div.appendChild(newLine);
    })
}).catch((error) => alert("Hubo un error al tratar de cargar los datos"));