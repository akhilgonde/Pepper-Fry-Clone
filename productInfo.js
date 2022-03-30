let Data=JSON.parse(localStorage.getItem("indiProductDetails"));
console.log(Data.image1);


var count = 0;
function carousel(Data) {
  console.log("count:", count);
  const arrImage = [
    Data.image1,
    Data.image2,
    Data.image3,
    Data.image4,
  ];
  let div1 = document.getElementById("div1");
  let div2 = document.getElementById("div2");
  let div3 = document.getElementById("div3");
  let div4 = document.getElementById("div4");

  let img = document.createElement("img");
  img.setAttribute("id","image")
  img.src = arrImage[count];
  div1.innerHTML = `<img src=${img.src} alt="">`;

  img.src = arrImage[count + 1];

  div2.innerHTML = `<img src=${img.src} alt="">`;

  img.src = arrImage[count + 2];
  div3.innerHTML = `<img src=${img.src} alt="">`;

  img.src = arrImage[count + 3];
  div4.innerHTML = `<img src=${img.src} alt="">`;
}

carousel(Data);

function changeImage() {
  let div_Image1 = document.getElementById("div-image");

  let divs1 = document.querySelectorAll(".mouse");

  for (let i = 0; i < divs1.length; i++) {
    divs1[i].addEventListener("mouseover", function () {
      divs1[i].style.border = "1px solid red";

      div_Image1.innerHTML = ` ${divs1[i].innerHTML}  `;

      divs1[i].addEventListener("mouseout", function () {
        divs1[i].style.border = "1px solid white";
      });
    });
  }
}

changeImage();

document.getElementById("image").src=Data.image1;
document.getElementById("name").innerText=Data.name;
document.getElementById("brand-name").innerText=`By ${Data.brand}`;
document.getElementById("price").innerText=`₹ ${Data.discount_price} (${Data.x} % off)`;
document.getElementById("discount").innerText=`save ₹ ${Data.discount}`;
document.getElementById("mrp").innerText=`MRP ${Data.price} `;
document.getElementById("cashback").innerText=`Last Day to Earn Cashback ₹ ${Data.c}`








