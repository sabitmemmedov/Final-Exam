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
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  wish.forEach((item, index) => {
    let cardBox = document.createElement("div");
    cardBox.className = "cardBox";
    cardBox.innerHTML = `



        <div class="imgDiv">
        <img src=${item.url} alt="product" />
        </div>
        <div class="textDiv">
        <h4>${item.name}</h4>
        <p>$ ${item.price}</p>

        <button onclick="sil(${index})">REMOVE </button>
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
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getData()
}
