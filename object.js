const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("object");

const ObjectDetailTemplate = document.querySelector("#ObjectDetailTemplate").content;

fetch("https://qeeuingoibugjpdgtfvo.supabase.co/rest/v1/vildmad" + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVpbmdvaWJ1Z2pwZGd0ZnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjQ5NTYsImV4cCI6MjAwOTQwMDk1Nn0.q-87jgmHdS7Hekf5E6WDdQzMiOcBI82j7JROjcFhg3E",
  },
})
  .then((res) => res.json())
  .then((data) => showObjects(data));

function showObjects(objects) {
  //looper og kalder showObject
  objects.forEach(showObject);
}

function showObject(object) {
  console.log(object);
  //fang template
  const template = document.querySelector("#ObjectTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);

  // Update content
  copy.querySelector("h1").textContent = object.title;
  copy.querySelector("h2").textContent = object.type;
  copy.querySelector("h3").textContent = object.season;
  copy.querySelector("h4").textContent = object.month;
  copy.querySelector("img").src = `https://vildmadv2.vps.webdock.io/application/files/3916/2436/6075/Vild-paere_ravarekort_app${object.image}.png`;

  //
  https: document.querySelector("main").appendChild(copy);
}
