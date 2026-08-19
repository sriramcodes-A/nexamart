import { useMemo, useState } from "react";

import products from "../data/products";

import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";

import { filterProducts } from "../utils/filters";
import { sortProducts } from "../utils/sorting";

function Products() {
  // Filter state
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    brand: "",
    minPrice: 0,
    maxPrice: 1000000,
    rating: "",
  });

  // Sorting state
  const [sortOption, setSortOption] = useState("");

  // Get categories from existing product data
  const categories = [
    ...new Set(
      products
        .map((product) => product.category)
        .filter(Boolean)
    ),
  ];

  // Get brands from existing product data
  const brands = [
    ...new Set(
      products
        .map((product) => product.brand)
        .filter(Boolean)
    ),
  ];

  // Filter + Sort products
  const displayedProducts = useMemo(() => {
    const filtered = filterProducts(products, filters);

    return sortProducts(filtered, sortOption);
  }, [filters, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">

        {/* SEARCH */}
        <div className="mb-6 flex justify-center">
          <SearchBar
            value={filters.search}
            onSearch={(value) =>
              setFilters((previous) => ({
                ...previous,
                search: value,
              }))
            }
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-4">

          {/* FILTER PANEL */}
          <aside className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              brands={brands}
            />
          </aside>

          {/* PRODUCT AREA */}
          <main className="lg:col-span-3">

            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  All Products
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  {displayedProducts.length} products found
                </p>
              </div>

              {/* SORT */}
              <SortDropdown
                value={sortOption}
                onChange={setSortOption}
              />
            </div>

            {/* NO PRODUCTS */}
            {displayedProducts.length === 0 ? (
              <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                <div className="mb-3 text-4xl">
                  🔍
                </div>

                <h2 className="text-lg font-semibold text-gray-900">
                  No products found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try changing your search or filters.
                </p>

                <button
                  onClick={() =>
                    setFilters({
                      search: "",
                      category: "",
                      brand: "",
                      minPrice: 0,
                      maxPrice: 1000000,
                      rating: "",
                    })
                  }
                  className="mt-5 rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            ) : (

              /* PRODUCT GRID */
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}

export default Products;