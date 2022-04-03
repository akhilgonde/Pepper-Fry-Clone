

 import {header,dropDownNav} from "./components/header.js";

 let navbar = document.getElementById("navbar");

  navbar.innerHTML = header();

let dropDownNav1 = document.getElementById("dropDownNavbar");

dropDownNav1.innerHTML = dropDownNav();

import footer from "./components/footer.js";

let footerIndex = document.getElementById("footer");

footerIndex.innerHTML = footer();

import WholeDB from "./components/WholeDB.js";
let wholeData=WholeDB();

document.getElementById("livingRoom1").addEventListener("click",()=>
{
 let x= "sofaAndRecliners";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("livingRoom2").addEventListener("click",()=>
{
 let x= "sofaAndRecliners";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("chairs1").addEventListener("click",()=>
{
 let x= "Chairs";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("dinning2").addEventListener("click",()=>
{
 let x= "dining";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("chairs2").addEventListener("click",()=>
{
 let x= "Chairs";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("chairs3").addEventListener("click",()=>
{
 let x= "Chairs";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("bedroom1").addEventListener("click",()=>
{
 let x= "bed";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("bedroom2").addEventListener("click",()=>
{
 let x= "bed";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("bedroom3").addEventListener("click",()=>
{
 let x= "bed";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("figurines").addEventListener("click",()=>
{
 let x= "figurines";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})
document.getElementById("wallart").addEventListener("click",()=>
{
 let x= "WallArt";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("S&R").addEventListener("click",()=>
{
 let x= "sofaAndRecliners";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("Mchairs").addEventListener("click",()=>
{
 let x= "Chairs";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("Mbed").addEventListener("click",()=>
{
 let x= "bed";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("Mdining").addEventListener("click",()=>
{
 let x= "dining";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("S&R1").addEventListener("click",()=>
{
 let x= "sofaAndRecliners";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

document.getElementById("MBed1").addEventListener("click",()=>
{
 let x= "bed";
  localStorage.setItem("pageInfo",x);
  window.location.href="productList.html";
})

let input=document.getElementById("search");
input.addEventListener("keypress",()=>{
searchData(event);
})
const searchData=(e)=>
{
  if(e.keyCode==13)
 {
     let inp=input.value;
      var filterData=wholeData.filter(function(item){
          return item.name.includes(inp);
      })
      localStorage.setItem("searchArr",JSON.stringify(filterData));
      // appendDatabase(filterData,"right");
      window.location.href="productList.html";
 }

}


if(screen.width==1280)
  {
      let x=document.getElementById("bodyT");
      x.style="zoom: 0.69;,-moz-transform: scale(0.69);"

  }
