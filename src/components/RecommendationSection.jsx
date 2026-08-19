import { getRecommendations } from "../utils/recommendations";

function RecommendationSection({
  products,
  currentProduct,
  onProductClick,
}) {
  const recommendations =
    getRecommendations(
      products,
      currentProduct
    );

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-bold">
        You May Also Like
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer rounded-xl bg-white p-4 shadow transition hover:-translate-y-1"
            onClick={() =>
              onProductClick(product)
            }
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full rounded-lg object-cover"
            />

            <h3 className="mt-3 font-semibold">
              {product.name}
            </h3>

            <p className="mt-2 font-bold">
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendationSection;
