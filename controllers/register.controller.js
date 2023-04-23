import { productServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const image = document.querySelector("[data-image]").value;
    const name = document.querySelector("[data-name]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    productServices.createProduct(categoria, image, name, price, description).then(() => {
        window.location.href = "/index.html";
    }).catch(err => console.log(err));
});