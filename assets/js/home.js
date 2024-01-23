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

////////////// get Data

let db;
let list = document.getElementById("list");

function getData() {
  axios
    .get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then((res) => {
      db = res.data;
      db.forEach((item) => {
        let cardBox = document.createElement("div");
        cardBox.className = "cardBox";
        cardBox.innerHTML = `



        <div class="imgDiv">
        <img src=${item.url} alt="product" />
        </div>
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>$ ${item.price}</p>
        <button onclick="adBasket(${item.id})">Add to cart</button>
        <button onclick="adWish(${item.id})">Ad WIsh</button>

        </div>

            
            `;
        list.appendChild(cardBox);
      });
    });
}

window.onload = () => {
  getData();
};

/////////// ad basket

function adBasket(id) {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  let item = basket.find((item) => item.id == id);
  if (item) {
    item.count = (item.count || 1) + 1;
  } else {
    let newItem = db.find((item) => item.id == id);
    newItem.count = 1;
    basket.push(newItem);
  }
  localStorage.setItem("basket", JSON.stringify(basket));
}

function adWish(id) {
  let basket = JSON.parse(localStorage.getItem("wish")) || [];
  let item = basket.find((item) => item.id == id);
  if (item) {
    alert("bu mehsul daha onceden elave olunub");
  } else {
    let newItem = db.find((item) => item.id == id);
    basket.push(newItem);
  }
  localStorage.setItem("wish", JSON.stringify(basket));
}
