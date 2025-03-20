export const fetchProductCache = async (url, cacheOption) => {
  // try {
  const res = await fetch(url, {
    cache: cacheOption,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
  // } catch (error) {
  //   console.error("Error fetching products:", error);
  //   return [];
  // }
};

export const fetchProductRevalidate = async (url, revalidateTime) => {
  // try {
  const res = await fetch(url, {
    next: {
      revalidate: revalidateTime,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
  // } catch (error) {
  //   console.error("Error fetching products:", error);
  //   return [];
  // }
};
