/*

const selectCards = document.querySelectorAll(".slect__cloth");


const price = ["5000.00", "4000.00", "3000.00"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});*/


/*cart shopping code*/



const carticone = document.querySelector("#carti-icone");
const cartshopp = document.querySelector(".cart-shopping");
const cartclos = document.querySelector("#cart-close");
carticone.addEventListener("click",() => cartshopp.classList.add("active"));
cartclos.addEventListener("click",() => cartshopp.classList.remove("active"));

const addcartbutton = document.querySelectorAll(".add-cart");
addcartbutton.forEach(button =>{
  button.addEventListener("click",event =>{
    const productbox =event.target.closest(".pro");
    addToCart(productbox);
  });
});
const cartcontent = document.querySelector(".cart-content");
const addToCart =productbox => {
  const productimgsrc = productbox.querySelector("img").getAttribute('src');
  const producttitele = productbox.querySelector(".prod-titel").textContent;
  const productprice = productbox.querySelector(".pricee").textContent;
  const productpric = productbox.querySelector(".ero").textContent;

  const cartitem = cartcontent.querySelectorAll(".cart-product-titel");
  for (let item of cartitem){
    if(item.textContent === producttitele){
      alert("This item is already in the cart .");
      return;
    }
  }

  const cartbox = document.createElement("div");
  cartbox.classList.add("cart-box");
  cartbox.innerHTML = `
   <img src="${productimgsrc}" alt="cart-img">
            <div class="cart-detail">
              <h2 class="cart-product-titel">${producttitele}</h2>
             <span class="cart-price">${productprice}${productpric}</span>
              <div class="cart-quantity">
                 <button id="decrement">-</button>
                 <span class="nmbr">1</span>
                 <button id="inecrement">+</button>
              </div>
            </div>
            <i class="fa-solid fa-trash cart-rmov"></i>
  `;

   cartcontent.appendChild(cartbox);

   cartbox.querySelector(".cart-rmov").addEventListener("click", ()=>{
    cartbox.remove();

    totalprice();
   });

   cartbox.querySelector(".cart-quantity").addEventListener("click", event => {
    const nmbrelement = cartbox.querySelector(".nmbr");
    const decrementbutton = cartbox.querySelector("#decrement");
    let quantity = nmbrelement.textContent;
    
    if(event.target.id === "decrement" && quantity>1){
      quantity--;
      if(quantity=== 1){
        decrementbutton.style.color ="#999";
      }
    }else if (event.target.id === "inecrement") {
      quantity++;
      decrementbutton.style.color ="#333";
    }
     nmbrelement.textContent=quantity;

     totalprice();
  });

  totalprice();
};

const totalprice =()=>{
  const totalpriceelement = document.querySelector(".total-price");
  const cartbox = cartcontent.querySelectorAll(".cart-box");
  let total = 0;
  cartbox.forEach(cartbox =>{
    const priceelement= cartbox.querySelector(".cart-price");
    const quantityelement= cartbox.querySelector(".nmbr");
    const price =priceelement.textContent.replace("€","");
    const quantity= quantityelement.textContent;
    total+=price*quantity;
  });
  totalpriceelement.textContent=`${total} €`;
};




