export const getSimilarProducts = async (id) => {
    const response = await fetch(`http://localhost:3000/api/product/${id}/recommendations`);
    return response.json();
};

export const getProductsBycategory = async (category) => {
    const response = await fetch(`http://localhost:3000/api/product/category/${category}`);
    return response.json();
};
export const getProductsById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/product/${id}`);
    return response.json();
};
