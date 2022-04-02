let Data=JSON.parse(localStorage.getItem("indiProductDetails"));


var count = 0;
function carousel(Data) {
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
document.getElementById("price").innerText=`₹ ${Data.discount_price} `;
document.getElementById("dsperc").innerText=` (${Data.x} % off)`
document.getElementById("discount").innerText=`save ₹ ${Data.discount} `;
document.getElementById("mrp").innerText=` MRP ${Data.price} `;
document.getElementById("cashback").innerText=`Last Day to Earn Cashback ₹ ${Data.c}`
document.getElementById("brandName").innerText=`${Data.brand}`;
document.getElementById("weight").innerText=`${Math.floor(Math.random()*100 +15)} KG`


let storeDataArr=JSON.parse(localStorage.getItem("cart"))||[];
let flag=true;
const addtoCart=()=>
{
  
    storeDataArr.map(function(el)
  {
    if(el.name==Data.name)
    {
       flag=false;
    }
    
  })
  
    if(flag)
    {  
    let qty=document.getElementById("qty").value;
    Data.quantity=Number(qty);
    storeDataArr.push(Data);
    localStorage.setItem("cart",JSON.stringify(storeDataArr));
    }

    let addcart=document.getElementById("add");
    addcart.innerText="GO TO CART";
    addcart.onclick=function(){
      window.location.href="cart.html";
    }
}
const gotoCart=()=>
{
  storeDataArr.map(function(el)
  {
    if(el.name==Data.name)
    {
       flag=false;
    }
    
  })
    if(flag)
    {  
    let qty=document.getElementById("qty").value;
    Data.quantity=Number(qty);
    storeDataArr.push(Data);
    localStorage.setItem("cart",JSON.stringify(storeDataArr));
    }
  
}


const pincodeCheck=()=>
{
  let input=document.getElementById("input").value;
  if(input.length==6)
  {
    fetch(`https://api.postalpincode.in/pincode/${input}`)
  .then(res=>res.json())
  .then(data=>{
    let status=data[0].Status;
    if(status=="Success")
    {
      alert("Delivery available to this pincode");
    }
    else{
      alert("Sorry,Delivery not available to this pincode")
    }
  })
  .catch(err=>console.log(err));
  }
}

