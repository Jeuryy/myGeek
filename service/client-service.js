const productsList = () => fetch("http://localhost:3000/product").then((res) => res.json());

const createProduct = (categoria, image, name, price, description) => {
    return fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ categoria, image, name, price, description, id: uuid.v4() })
    })
};


const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE"
    })
}
export const productServices = {
    productsList,
    createProduct,
    deleteProduct
};