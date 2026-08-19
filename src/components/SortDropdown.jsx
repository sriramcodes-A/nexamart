function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border bg-white px-4 py-2 text-sm outline-none"
    >
      <option value="">Relevance</option>
      <option value="price-low">
        Price: Low → High
      </option>
      <option value="price-high">
        Price: High → Low
      </option>
      <option value="rating">
        Highest Rating
      </option>
      <option value="discount">
        Highest Discount
      </option>
      <option value="newest">
        Newest
      </option>
    </select>
  );
}

export default SortDropdown;