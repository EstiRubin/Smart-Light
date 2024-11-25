const getRecommendations = (cart, allProducts) => {
  // בדיקה: האם cart מוגדר והוא מערך?
  if (!cart || !Array.isArray(cart)) {
      throw new Error("Invalid cart data. 'cart' must be a valid array.");
  }

  // בדיקה: האם לכל מוצר בעגלה יש מאפיין tags?
  const cartTags = cart.flatMap(product => product.tags || []);

  // סינון מוצרים שאינם בעגלה ודירוג לפי תגיות משותפות
  const recommendations = allProducts
      .filter(product => !cart.some(cartItem => cartItem._id === product._id))
      .map(product => {
          const commonTags = product.tags?.filter(tag => cartTags.includes(tag)) || [];
          return { ...product, relevance: commonTags.length };
      })
      .sort((a, b) => b.relevance - a.relevance);

  return recommendations.slice(0, 5);
};

export default getRecommendations;
