export const getSimilarProducts = async (id) => {
    const response = await fetch(`http://localhost:3000/api/product/${id}/recommendations`);
    return response.json();
};
