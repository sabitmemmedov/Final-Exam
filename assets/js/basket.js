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

function getData() {
    list.innerHTML = ""
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.forEach((item, index) => {
    let cardBox = document.createElement("div");
    cardBox.className = "cardBox";
    cardBox.innerHTML = `



        <div class="imgDiv">
        <img src=${item.url} alt="product" />
        </div>
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>$ ${item.price}</p>
        <p>count: ${item.count}</p>

        <button onclick="sil(${index})">REMOVE</button>
        </div>

            
            `;
    list.appendChild(cardBox);
  });
}

window.onload = () => {
    getData()
};


// remove basket 


function sil(index){
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.splice(index, 1)
    localStorage.setItem("basket", JSON.stringify(basket))
    getData()
}
