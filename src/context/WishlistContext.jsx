import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("nexamart-wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "nexamart-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const isWishlisted = (productId) => {
    return wishlist.some(
      (product) => product.id === productId
    );
  };

  const addToWishlist = (product) => {
    setWishlist((previous) => {
      if (
        previous.some(
          (item) => item.id === product.id
        )
      ) {
        return previous;
      }

      return [...previous, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((previous) =>
      previous.filter(
        (product) => product.id !== productId
      )
    );
  };

  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        isWishlisted,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}