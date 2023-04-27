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
};


const productDetails = (id) => {
    return fetch(`http://localhost:3000/product/${id}`).then((res) =>
        res.json()
    );
};

const updateProduct = (image, categoria, name, price, description, id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
            method: "PUT",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify({ image, categoria, name, price, description })

        }).then(res => res)
        .catch(err => console.log(err))
}

export const productServices = {
    productsList,
    createProduct,
    deleteProduct,
    productDetails,
    updateProduct
};