function ReviewSection({ reviews = [] }) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (total, review) =>
              total + Number(review.rating || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">
        Customer Reviews
      </h2>

      <div className="mt-4">
        <span className="text-3xl font-bold">
          ⭐ {averageRating}
        </span>

        <span className="ml-3 text-gray-500">
          {reviews.length} Reviews
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b pb-4"
          >
            <p className="font-semibold">
              {review.name}
            </p>

            <p className="mt-1">
              ⭐ {review.rating}
            </p>

            <p className="mt-2 text-gray-600">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;