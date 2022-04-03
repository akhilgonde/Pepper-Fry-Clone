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