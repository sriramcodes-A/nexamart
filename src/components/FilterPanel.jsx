function FilterPanel({
  filters,
  setFilters,
  categories,
  brands,
}) {
  const updateFilter = (key, value) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "",
      brand: "",
      minPrice: 0,
      maxPrice: 1000000,
      rating: "",
    });
  };

  return (
    <aside className="rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">
        Filters
      </h2>

      {/* Category */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Category
        </label>

        <select
          value={filters.category}
          onChange={(e) =>
            updateFilter("category", e.target.value)
          }
          className="w-full rounded-lg border p-2 outline-none"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Brand
        </label>

        <select
          value={filters.brand}
          onChange={(e) =>
            updateFilter("brand", e.target.value)
          }
          className="w-full rounded-lg border p-2 outline-none"
        >
          <option value="">All Brands</option>

          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Maximum Price */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Maximum Price
        </label>

        <input
          type="number"
          value={filters.maxPrice}
          onChange={(e) =>
            updateFilter(
              "maxPrice",
              Number(e.target.value)
            )
          }
          className="w-full rounded-lg border p-2 outline-none"
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Rating
        </label>

        <select
          value={filters.rating}
          onChange={(e) =>
            updateFilter("rating", e.target.value)
          }
          className="w-full rounded-lg border p-2"
        >
          <option value="">Any Rating</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
        </select>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
      >
        Clear Filters
      </button>
    </aside>
  );
}

export default FilterPanel;