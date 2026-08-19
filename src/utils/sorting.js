export function sortProducts(products, sortOption) {
  const sortedProducts = [...products];

  switch (sortOption) {
    case "price-low":
      return sortedProducts.sort(
        (a, b) =>
          Number(a.price || 0) -
          Number(b.price || 0)
      );

    case "price-high":
      return sortedProducts.sort(
        (a, b) =>
          Number(b.price || 0) -
          Number(a.price || 0)
      );

    case "rating":
      return sortedProducts.sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      );

    case "discount":
      return sortedProducts.sort(
        (a, b) =>
          Number(b.discount || 0) -
          Number(a.discount || 0)
      );

    case "newest":
      return sortedProducts.sort(
        (a, b) =>
          new Date(b.createdAt || 0) -
          new Date(a.createdAt || 0)
      );

    default:
      return sortedProducts;
  }
}