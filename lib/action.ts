export async function getProducts() {
  const data = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 3600 },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return data;
}
export async function getArticles() {
  const data = await fetch("https://pandooin.com/api/zamrood/article", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 3600 },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return data;
}
