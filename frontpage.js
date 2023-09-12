const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("seasons");

const seasonLinks = document.querySelectorAll("a[data-season]");

seasonLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    const selectedSeason = link.getAttribute("data-season");

    fetch("https://qeeuingoibugjpdgtfvo.supabase.co/rest/v1/vildmad", {
      method: "GET",
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVpbmdvaWJ1Z2pwZGd0ZnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjQ5NTYsImV4cCI6MjAwOTQwMDk1Nn0.q-87jgmHdS7Hekf5E6WDdQzMiOcBI82j7JROjcFhg3E",
      },
    })
      .then((res) => res.json())
      .then((data) => showSeasons(data, selectedSeason));
  });
});

function showSeasons(seasons, selectedSeason) {
  const seasonObjects = seasons.filter((season) => {
    if (selectedSeason === "winter") {
      return object.month.includes(11) || season.month.includes(0) || season.month.includes(1);
    } else if (selectedSeason === "spring") {
      return season.month.includes(2) || season.month.includes(3) || season.month.includes(4);
    } else if (selectedSeason === "summer") {
      return season.month.includes(5) || season.month.includes(6) || season.month.includes(7);
    } else if (selectedSeason === "autumn") {
      return season.month.includes(8) || season.month.includes(9) || season.month.includes(10);
    } else {
      return true; // Show all seasons if no specific season is selected
    }
  });

  // Clear the existing content
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = "";

  // Append the filtered season objects
  seasonObjects.forEach((season) => {
    const link = document.createElement("a");
    link.href = `season.html?id=${season.id}`;
    link.textContent = season.name; // Adjust this based on your data structure
    mainElement.appendChild(link);
  });
}
