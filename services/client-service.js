const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`https://private-e8b96a-aluraecommerce.apiary-mock.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('https://private-e8b96a-aluraecommerce.apiary-mock.com/products').then(response => response.json());

const readProduct = (id) => fetch(`https://private-e8b96a-aluraecommerce.apiary-mock.com/products/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`https://private-e8b96a-aluraecommerce.apiary-mock.com/products/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`https://private-e8b96a-aluraecommerce.apiary-mock.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};