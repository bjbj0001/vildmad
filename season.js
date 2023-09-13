const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("season");

console.log(category);

function changeBackgroundColor(category) {
  const seasonColors = {
    winter: "#3D50E3",
    spring: "#439E46",
    autumn: "#745274",
    summer: "#E99E3C",
  };

  const body = document.body;

  if (seasonColors[category]) {
    body.style.backgroundColor = seasonColors[category];
  }
}

changeBackgroundColor(category);

fetch("https://qeeuingoibugjpdgtfvo.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVpbmdvaWJ1Z2pwZGd0ZnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjQ5NTYsImV4cCI6MjAwOTQwMDk1Nn0.q-87jgmHdS7Hekf5E6WDdQzMiOcBI82j7JROjcFhg3E",
  },
})
  .then((res) => res.json())
  .then(showObjects);

function showObjects(objects) {
  //looper og kalder showObject
  console.log(objects);

  if (category == "winter") {
    function monthOnly(single) {
      if (single.month.includes("11") || single.month.includes("0") || single.month.includes("1")) {
        return true;
      } else {
        return false;
      }
    }
  } else if (category == "spring") {
    function monthOnly(single) {
      if (single.month.includes("2") || single.month.includes("3") || single.month.includes("4")) {
        return true;
      } else {
        return false;
      }
    }
  } else if (category == "summer") {
    function monthOnly(single) {
      if (single.month.includes("5") || single.month.includes("6") || single.month.includes("7")) {
        return true;
      } else {
        return false;
      }
    }
  } else if (category == "autumn") {
    function monthOnly(single) {
      if (single.month.includes("8") || single.month.includes("9") || single.month.includes("10")) {
        return true;
      } else {
        return false;
      }
    }
  }

  let onlymonth = objects.filter(monthOnly);
  console.log(onlymonth);

  objects.forEach((element) => {
    // console.log(element.month);
  });

  onlymonth.forEach(showObject);
}

function showObject(object) {
  // console.log(object); casper
  //fang template
  const template = document.querySelector("#ObjectTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);

  // Update content
  copy.querySelector("h1").textContent = object.title;
  copy.querySelector("h2").textContent = object.type;
  copy.querySelector("h3").textContent = object.season;
  copy.querySelector("h4").textContent = object.month;
  copy.querySelector(".read_more").setAttribute("href", `object.html?id=${object.id}`);
  copy.querySelector("img").setAttribute("src", object.image);

  //
  https: document.querySelector("main").appendChild(copy);
}
