const products = [
  { name: "Smartphone", category: "electronics", price: 25000 },
  { name: "Jeans", category: "clothes", price: 1200 },
  { name: "Laptop", category: "electronics", price: 55000 },
  { name: "T-shirt", category: "clothes", price: 700 }
];

const productContainer = document.getElementById("productContainer");
const filter = document.getElementById("filter");
const sort = document.getElementById("sort");

function displayProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.category}</p><p>₹${p.price}</p>`;
    productContainer.appendChild(div);
  });
}

filter.addEventListener("change", applyFilters);
sort.addEventListener("change", applyFilters);

function applyFilters() {
  let filtered = [...products];

  if (filter.value !== "all") {
    filtered = filtered.filter(p => p.category === filter.value);
  }

  if (sort.value === "lowToHigh") filtered.sort((a, b) => a.price - b.price);
  if (sort.value === "highToLow") filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

displayProducts(products);
