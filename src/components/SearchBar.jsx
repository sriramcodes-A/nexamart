import { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const searchValue = e.target.value;

    setValue(searchValue);
    onSearch(searchValue);
  };

  const clearSearch = () => {
    setValue("");
    onSearch("");
  };

  return (
    <div className="flex w-full max-w-xl items-center rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm">
      <span className="mr-2 text-gray-500">🔍</span>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search products, brands..."
        className="w-full bg-transparent text-sm outline-none sm:text-base"
      />

      {value && (
        <button
          type="button"
          onClick={clearSearch}
          className="ml-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;