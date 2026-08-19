export function getRecommendations(
  products,
  currentProduct
) {
  if (!currentProduct) {
    return [];
  }

  return products
    .filter(
      (product) =>
        product.id !== currentProduct.id
    )
    .map((product) => {
      let score = 0;

      if (
        product.category &&
        product.category === currentProduct.category
      ) {
        score += 3;
      }

      if (
        product.subcategory &&
        product.subcategory ===
          currentProduct.subcategory
      ) {
        score += 2;
      }

      if (
        product.brand &&
        product.brand === currentProduct.brand
      ) {
        score += 2;
      }

      if (
        Array.isArray(product.tags) &&
        Array.isArray(currentProduct.tags)
      ) {
        const commonTags = product.tags.filter(
          (tag) =>
            currentProduct.tags.includes(tag)
        );

        score += commonTags.length;
      }

      return {
        ...product,
        recommendationScore: score,
      };
    })
    .filter(
      (product) =>
        product.recommendationScore > 0
    )
    .sort(
      (a, b) =>
        b.recommendationScore -
        a.recommendationScore
    )
    .slice(0, 4);
}