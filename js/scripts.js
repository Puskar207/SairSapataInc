
document.addEventListener("DOMContentLoaded", () => {
  const packages = [
    {
      title: "Greece - Island Hopping",
      image: "https://source.unsplash.com/400x250/?greece,island",
      description: "Explore Athens, Milos, Paros, and Santorini in a 10-day Aegean adventure."
    },
    {
      title: "Vietnam & Cambodia",
      image: "https://source.unsplash.com/400x250/?vietnam,halong",
      description: "Discover Hanoi, Halong Bay and the temples of Angkor in a rich cultural trip."
    },
    {
      title: "Coorg Nature Escape",
      image: "https://source.unsplash.com/400x250/?coorg,nature",
      description: "A 3-night tranquil getaway in the Western Ghats amidst coffee plantations."
    },
    {
      title: "Classic Europe",
      image: "https://source.unsplash.com/400x250/?paris,lucerne",
      description: "Visit Paris, Lucerne, and Amsterdam in this curated 12-day Europe package."
    }
  ];

  const container = document.getElementById("package-list");
  packages.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "package";
    card.innerHTML = `
      <img src="${pkg.image}" alt="${pkg.title}" />
      <h3>${pkg.title}</h3>
      <p>${pkg.description}</p>
    `;
    container.appendChild(card);
  });
});
