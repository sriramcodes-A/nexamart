const CategoryCard = ({
  category,
  onClick,
}) => {
  if (!category) return null;

  const {
    name,
    image,
    icon,
    description,
    productCount,
    theme,
  } = category;

  return (
    <button
      type="button"
      onClick={() => onClick?.(category)}
      className="group w-full text-left"
    >
      <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        {/* Image */}
        {image ? (
          <img
            src={image}
            alt={name || "Category"}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative flex h-[240px] flex-col justify-end p-5 text-white">
          {icon && (
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xl backdrop-blur">
              {icon}
            </div>
          )}

          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold">
                {name || "Category"}
              </h3>

              {description && (
                <p className="mt-1 line-clamp-2 text-sm text-white/75">
                  {description}
                </p>
              )}

              {productCount !== undefined && (
                <p className="mt-2 text-xs font-medium text-white/60">
                  {productCount} products
                </p>
              )}
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;