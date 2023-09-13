// Fetch and store the JSON data in sessionStorage (if not already stored)
if (!sessionStorage.getItem("winterData")) {
  fetch("https://qeeuingoibugjpdgtfvo.supabase.co/rest/v1/vildmad", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVpbmdvaWJ1Z2pwZGd0ZnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjQ5NTYsImV4cCI6MjAwOTQwMDk1Nn0.q-87jgmHdS7Hekf5E6WDdQzMiOcBI82j7JROjcFhg3E",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("den nye data", data);
      // Extract the month values for Winter (0, 1, 11)

      const winterData = data.filter((item) => [0, 1, 11].includes(item.month));

      // Store the winterData in sessionStorage for access in "season.html"
      sessionStorage.setItem("winterData", JSON.stringify(winterData));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Define a function to update the page based on the selected season
function updatePage(monthValues) {
  // Construct the URL for "season.html" with the selected month values as query parameters
  const url = `index.html?months=${monthValues.join(",")}`;

  // Navigate to the URL
  window.location.href = url;
}

// Add event listeners to each season link
document.getElementById("winter").addEventListener("click", function () {
  updatePage([0, 1, 11]); // Pass the selected month values
});

document.getElementById("spring").addEventListener("click", function () {
  updatePage([2, 3, 4]); // Pass the selected month values
});

document.getElementById("summer").addEventListener("click", function () {
  updatePage([5, 6, 7]); // Pass the selected month values
});

document.getElementById("autumn").addEventListener("click", function () {
  updatePage([8, 9, 10]); // Pass the selected month values
});
