const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SELL IT",
    price: "Sell.Buy.Rent",
    colors: [
      {
        code: "black",
        img: "./img/seller.png",
      },
      {
        code: "darkblue",
        img: "./img/Buyer.png",
      },
    ],
  },
  {
    id: 2,
    title: "SELL IT",
    price:"Sell.Buy.Rent",
    colors: [
      {
        code: "lightgray",
        img: "./img/seller.png",
      },
      {
        code: "green",
        img: "./img/Buyer.png",
      },
    ],
  },
  {
    id: 3,
    title: "SELL IT",
    price: "Sell.Buy.Rent",
    colors: [
      {
        code: "lightgray",
        img: "./img/seller.png",
      },
      {
        code: "green",
        img: "./img/Buyer.png",
      },
    ],
  },
  {
    id: 4,
    title: "SELL IT",
    price: "Sell.Buy.Rent",
    colors: [
      {
        code: "black",
        img: "./img/seller.png",
      },
      {
        code: "lightgray",
        img: "./img/Buyer.png",
      },
    ],
  },
  {
    id: 5,
    title: "SELL IT",
    price: "Sell.Buy.Rent",
    colors: [
      {
        code: "gray",
        img: "./img/seller.png",
      },
      {
        code: "black",
        img: "./img/Buyer.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const loginButton = document.querySelector(".loginButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

loginButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
