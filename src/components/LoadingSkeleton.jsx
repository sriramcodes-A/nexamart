const LoadingSkeleton = ({
  variant = "product",
  count = 1,
}) => {
  const items = Array.from({ length: count });

  if (variant === "category") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <div className="h-48 bg-slate-200" />

            <div className="space-y-3 p-4">
              <div className="h-5 w-2/3 rounded bg-slate-200" />
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-1/2 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "page") {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-10 w-1/3 rounded bg-slate-200" />
        <div className="h-5 w-2/3 rounded bg-slate-200" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((_, index) => (
            <div
              key={index}
              className="h-72 rounded-2xl bg-slate-200"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="h-52 bg-slate-200" />

          <div className="space-y-3 p-4">
            <div className="h-3 w-1/3 rounded bg-slate-200" />
            <div className="h-5 w-full rounded bg-slate-200" />
            <div className="h-5 w-3/4 rounded bg-slate-200" />

            <div className="flex gap-2">
              <div className="h-5 w-20 rounded bg-slate-200" />
              <div className="h-5 w-16 rounded bg-slate-200" />
            </div>

            <div className="h-10 w-full rounded-xl bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;