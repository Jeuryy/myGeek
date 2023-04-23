import { productServices } from "../service/client-service.js";
/*console.log(productServices);*/

const createNewLine = (image, name, price, description, id) => {
    const line = document.createElement("div");
    line.classList.add('product');
    const content = `
                    <img src="${image}" alt="Verifique haber puesto un link funcional">
                    <h4>${name}</h4>
                    <p>$${price}</p>
                    <p style="color:#000000d2" class="descripcion">${description}</p>
                    <div class="product-CRUD">
                    <a href="verProducto.html" target="_blank" class="ver">Ver producto</a>
                    <a href="verProducto.html" target="_blank" class="see"><i class="fa fa-sharp fa-light fa-eye"></i></a>
                    <a href="editarProducto.html" class="edit"><i class="fa fa-light fa-pen"></i></a>
                    <a href="index.html" class="delete"><i class="fa fa-solid fa-trash"></i></a>
                    </div>
                `;
    line.innerHTML = content;
    return line;
};

//./assets/img/
const div = document.querySelector("[data-div]");

productServices.productsList().then((data) => {
    data.forEach(({ image, name, price, description, id }) => {
        const newLine = createNewLine(image, name, price, description, id);
        div.appendChild(newLine);
    })
}).catch((error) => alert("Hubo un error al tratar de cargar los datos"));

const deleteProduct = (id) => {
    console.log("Delete product id:", id);
}