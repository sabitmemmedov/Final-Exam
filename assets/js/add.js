let navMobile = document.getElementById("navMobile");
let barsBtn = document.getElementById("barsBtn");
function mobileNavbar() {
  if (navMobile.style.display === "block") {
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "block";
  }
}

barsBtn.addEventListener("click", mobileNavbar);

let list = document.getElementById("list");
let db;

let Name = document.getElementById("name");
let Price = document.getElementById("price");
let form = document.getElementById("form");

async function postData(e) {
  e.preventDefault();
  let data = {
    name: Name.value,
    price: Price.value,
  };
  await axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/`, data);
  form.reset();
  getData();
}

form.addEventListener("submit", postData);

function getData() {
  list.innerHTML = "";
  axios
    .get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then((res) => {
      db = res.data;
      db.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            
            <td>name: ${item.name}</td>
            <td>price: ${item.price} $</td>
            <td>id: ${item.id}</td>
            <td><button onclick="sil(${item.id})">Remove</button></td>
            
            `;
        list.appendChild(tr);
      });
    });
}

window.onload = () => {
  getData();
};

/////// remove

async function sil(id) {
  await axios.delete(
    `https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`
  );
  getData();
}

/////////// saerch Name

let inp = document.getElementById("inp");
let searchBtn = document.getElementById("searchBtn");
function searchName() {
  list.innerHTML = "";
  axios
    .get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart?name=${inp.value}`)
    .then((res) => {
      db = res.data;
      db.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            
            <td>name: ${item.name}</td>
            <td>price: ${item.price} $</td>
            <td>id: ${item.id}</td>
            <td><button onclick="sil(${item.id})">Remove</button></td>
            
            `;
        list.appendChild(tr);
      });
    });
}

searchBtn.addEventListener("click", searchName);

////////// sort

function getSort() {
  list.innerHTML = "";
  axios
    .get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then((res) => {
      db = res.data;
      let sortedData = db.sort((a, b) => a.name.localeCompare(b.name));
      sortedData.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            
            <td>name: ${item.name}</td>
            <td>price: ${item.price} $</td>
            <td>id: ${item.id}</td>
            <td><button onclick="sil(${item.id})">Remove</button></td>
            
            `;
        list.appendChild(tr);
      });
    });
}

document.getElementById("btnA").addEventListener("click", getSort);

function getSortt() {
  list.innerHTML = "";
  axios
    .get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then((res) => {
      db = res.data;
      let sortedData = db.sort((a, b) => b.name.localeCompare(a.name));
      sortedData.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            
            <td>name: ${item.name}</td>
            <td>price: ${item.price} $</td>
            <td>id: ${item.id}</td>
            <td><button onclick="sil(${item.id})">Remove</button></td>
            
            `;
        list.appendChild(tr);
      });
    });
}

document.getElementById("btnZ").addEventListener("click", getSortt);
document.getElementById("btnD").addEventListener("click", getData);
