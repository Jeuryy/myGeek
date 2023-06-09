import { productServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

const getInfo = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("Hubo un error, por favor intente de nuevo mas tarde.");
    }

    const image = document.querySelector("[data-image]");
    const categoria = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");

    try {
        const product = await productServices.productDetails(id);
        if (product.image && product.categoria && product.name && product.price && product.description) {
            image.value = product.image;
            categoria.value = product.categoria;
            name.value = product.name;
            price.value = product.price;
            description.value = product.description;
        } else {
            throw new Error();
        }
    } catch (error) {
        alert("Hubo un error");
        window.location.href = "productos.html";
    }

};

getInfo();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const image = document.querySelector("[data-image]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    console.log(image, categoria, name, price, description);
    productServices.updateProduct(image, categoria, name, price, description, id).then(() => {
        window.location.href = "productos.html";
    });
})