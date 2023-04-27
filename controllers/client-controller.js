import { productServices } from "../service/client-service.js";

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
                    <a href="editarProducto.html?id=${id}" class="edit"><i class="fa fa-light fa-pen"></i></a>
                    <a href="productos.html" class="delete" id="${id}"><i class="fa fa-solid fa-trash"></i></a>
                    </div>
                `;
    line.innerHTML = content;
    const btn = line.querySelector(".delete");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productServices.deleteProduct(id).then(res => {
            console.log(res);
        }).catch(err => alert(err));
    });
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