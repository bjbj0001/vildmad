const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);
const detailTemplate = document.querySelector("#detailTemplate").content;
//const productImg = document.querySelector(".detail img");

fetch("https://qeeuingoibugjpdgtfvo.supabase.co/rest/v1/vildmad?id=eq." + id, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZXVpbmdvaWJ1Z2pwZGd0ZnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MjQ5NTYsImV4cCI6MjAwOTQwMDk1Nn0.q-87jgmHdS7Hekf5E6WDdQzMiOcBI82j7JROjcFhg3E",
  },
})
  .then((res) => res.json())
  .then(showDetail);

//

function showDetail(object) {
  console.log(object);
  const productText = document.querySelector(".detail");

  // Uncomment and update the following line if you have an image element to update
  // productImg.src = `https://kea-alt-del.dk/t7/images/webp/640/${object.id}.webp`;

  const productDetailCopy = detailTemplate.cloneNode(true);

  productDetailCopy.querySelector("h1").textContent = object[0].title;
  productDetailCopy.querySelector("h2").textContent = object[0].type;

  document.body.appendChild(productDetailCopy);
}
