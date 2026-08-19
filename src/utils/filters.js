export function filterProducts(products, filters) {
  return products.filter((product) => {
    const searchText = filters.search?.toLowerCase() || "";

    const name = String(
      product.name || product.title || ""
    ).toLowerCase();

    const brand = String(
      product.brand || ""
    ).toLowerCase();

    const category = String(
      product.category || ""
    ).toLowerCase();

    const tags = Array.isArray(product.tags)
      ? product.tags.join(" ").toLowerCase()
      : "";

    const searchMatch =
      !searchText ||
      name.includes(searchText) ||
      brand.includes(searchText) ||
      category.includes(searchText) ||
      tags.includes(searchText);

    const categoryMatch =
      !filters.category ||
      product.category === filters.category;

    const brandMatch =
      !filters.brand ||
      product.brand === filters.brand;

    const price = Number(product.price || 0);

    const priceMatch =
      price >= Number(filters.minPrice || 0) &&
      price <= Number(filters.maxPrice || 1000000);

    const ratingMatch =
      !filters.rating ||
      Number(product.rating || 0) >= Number(filters.rating);

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch &&
      priceMatch &&
      ratingMatch
    );
  });
}