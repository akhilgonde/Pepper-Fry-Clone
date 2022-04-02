var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display username
get_username();
function get_username() {
  // let uname = JSON.parse(localStorage.getItem("signupdata"))
  // console.log('uname:', uname.name)

  let tem = document.getElementById("user-name");
  tem.innerHTML = "Harshada";
  // uname.forEach((item) => {
  //     tem.innerText = "WELCOME " + item.name.toUpperCase();
  // })
}
// display cart.length
let cartlength = document.getElementById("cartlength");
cartlength.innerText = cart.length;
//total_value = total_value + price;
var cart_value = 0;

//total_discount = total_discount + discount;
var total_discount = 0;
//total += discount_pric
var total = 0;

//pincode check
function mycheck() {
  let inp = document.getElementById("pincode").value;
  if(inp.length==6)
  {
    fetch(`https://api.postalpincode.in/pincode/${inp}`)
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
  else{
    alert("please Enter a correct pincode");
  }
}

let div1 = document.getElementById("dis");
let discount = Number(cart[0].discount);
cart.forEach(function (el, i) {
  var count = cart[0].quantity;
  console.log(el);

  discount=count*discount;
  cart_value += Number(el.price);
   cart_value=cart_value*count;
  total_discount += Number(el.discount);
  total_discount=count*total_discount;
  total += Number(el.discount_price);
  total=count*total;

  let item = document.createElement("div");
  item.setAttribute("class", "item");

  //--------------Image-----------------------//
  let div1A = document.createElement("div");
  let img = document.createElement("img");
  img.classList = "pics";
  img.src = el.image1;
  div1A.append(img);

  //--------------------Description-------------------//
  let div1B = document.createElement("div");
  let div1B1 = document.createElement("div");
  div1B1.innerText = `${el.name} - ${el.brand}`;
  let div1B2 = document.createElement("div");
  div1B2.innerText = "12 Month's Warranty, 100% Genuine";
  div1B2.style.color = "#f16521";
  let div1B3 = document.createElement("div");
  div1B3.innerText = `Delivery by 8th April.`;
  div1B3.style.color = "darkgrey";

  div1B.append(div1B1, div1B2, div1B3);

  //-------------------prices-----------------------//
  let div1C = document.createElement("div");
  div1C.classList = "plus";
  let div1C1 = document.createElement("div");
  div1C1.innerText = "-";
  div1C1.style.cursor = "pointer";

  //.......... click "-" minus
  div1C1.addEventListener("click", function (i) {
    count--;

    if (count === 0) {
      delItemsFromCart(i);
      item.remove();
    }
    div1C2.innerText = count;

    discount_price.innerText = `₹ ${count * Number(el.discount_price)}`;
    price.innerText = `₹ ${count * Number(el.price)}`;
    total -= Number(el.discount_price);
    cart_value -= Number(el.price);
    discount -= Number(el.discount);
    console.log("cart_value :>> ", cart_value);
    console.log("discount :>> ", discount);
    document.getElementById("cart_value").innerText = `₹ ${cart_value}`;
    document.getElementById("retail_discount").innerText = `(-)₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${total}`;
    // //-------
    let Checkout_Data = {
      Cart_Value: cart_value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Total: total,
    };
  });

  let div1C3 = document.createElement("div");
  div1C3.innerText = "+";
  div1C3.style.cursor = "pointer";

  //.......... click "+"
  div1C3.addEventListener("click", function () {
    count++;

    div1C2.innerText = count;
    discount_price.innerText = `₹ ${count * Number(el.discount_price)}`;
    price.innerText = `₹ ${count * Number(el.price)}`;
    total += Number(el.discount_price);
    cart_value += Number(el.price);
    discount += Number(el.discount);
    console.log("cart_value :>> ", cart_value);
    console.log("discount :>> ", discount);

    document.getElementById("cart_value").innerText = `₹ ${cart_value}`;
    document.getElementById("retail_discount").innerText = `(-)₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${total}`;

    //-------
    let Checkout_Data = {
      Cart_Value: cart_value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Total: total,
    };
    localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));
  });

  let div1C2 = document.createElement("div");
  div1C2.innerText = count;
  div1C2.className = "countBox";

  let price = document.createElement("div");
  price.innerText = `₹ ${Number(el.price)}`;
  price.style.color = "grey";
  price.style.textDecoration = "line-through";

  let discount_price = document.createElement("div");
  discount_price.innerText = `₹ ${Number(el.discount_price)}`;
  discount_price.style.color = "#f16521";
  discount_price.style.fontWeight = 700;

  let divUP = document.createElement("div");
  divUP.classList = "quan";

  divUP.append(div1C1, div1C2, div1C3);
  div1C.append(divUP, price, discount_price);

  //...................

  let div1D = document.createElement("div");
  div1D.classList = "wish";
  let img1 = document.createElement("img");
  img1.classList = "del";
  img1.src = "https://cdn-icons-png.flaticon.com/128/1632/1632602.png";

  //.............click delete
  img1.addEventListener("click", function () {
    el.qty = 0;
    delItemsFromCart(i);

    total -= Number(el.discount_price);
    cart_value -= Number(el.price);
    discount -= Number(el.discount);
    console.log("cart_value :>> ", cart_value);
    console.log("discount :>> ", discount);

    document.getElementById("cart_value").innerText = `₹ ${cart_value}`;
    document.getElementById("retail_discount").innerText = `(-)₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${total}`;
    item.remove();

    //-------
    let Checkout_Data = {
      Cart_Value: cart_value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Total: total,
    };
    localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));
  });

  let img2 = document.createElement("img");
  img2.classList = "del";
  img2.src =
    "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg";
  img2.addEventListener("click", function () {
    if (
      img2.src ==
      "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg"
    ) {
      img2.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png";
    } else {
      img2.src =
        "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg";
    }
  });

  div1D.append(img1, img2);

  item.append(div1A, div1B, div1C, div1D);
  div1.append(item);
});
function delItemsFromCart(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
localStorage.setItem("cart", JSON.stringify(cart));

document.getElementById("cart_value").innerText = `₹ ${cart_value}`;
document.getElementById("retail_discount").innerText = `(-)₹ ${discount}`;
document.getElementById("total").innerText = `₹ ${total}`;

var div = document.getElementById("gi");
div.style.display = "none";
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var div = document.getElementById("gi");
  if (checkBox.checked == true && cart.length>0) {
    div.style.display = "flex";
    document.getElementById("total").innerText = `₹ ${total + 99}`;
  } else if(cart.length>0)
  {
    div.style.display = "none";
    document.getElementById("total").innerText = `₹ ${total - 99}`;
  }
}

let Checkout_Data = {
  Cart_Value: cart_value,
  Retail_Discount: discount,
  Delivery_Free: 0,
  Total: total,
};
localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));


if(screen.width==1280)
    {
        let x=document.getElementById("bodyT");
        x.style="zoom: 0.69;,-moz-transform: scale(0.69);"

    }