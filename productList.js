
const appendDatabase=(data,parent)=>
{
    parent.innerHTML=null;
   setTimeout(() => {
    if(data.length==0)
    {
        alert("Items Not Found");
        return;
    }
   }, 500);
    data.map(({name,image1,image2,image3,image4,price,discount_price,brand,discount})=>{
        let div = document.createElement("div");

        let title=document.createElement("h4");
        title.innerText=name;

        let image=document.createElement("img");
        image.setAttribute("id","viewImg");
        image.src=image1;


        let prDiv=document.createElement("div");
        prDiv.setAttribute("id","prDiv");

        let prc=document.createElement("h3");
        prc.setAttribute("id","prc");
        prc.innerText=`₹${discount_price}`;
        

        let dsprice=document.createElement("p");
        dsprice.setAttribute("id","dsprice");
        dsprice.innerText=`₹${price}`;
        
        let  brd=document.createElement("h5");
        brd.setAttribute("id","brd");
        brd.innerText=brand;

        let dsperc=document.createElement("h4");
        let x=Math.floor(Math.random()*25 +30);
        dsperc.innerText=`${x}% off`;
        dsperc.setAttribute("id","dsperc");

        let cashback=document.createElement("p");
        let c=Math.floor(Math.random()*10000 +2000)
        cashback.innerText=`Earn cashback ₹ ${c}`;
        cashback.style.fontSize="14px"


        prDiv.append(prc,dsprice)
        div.append(image,title,brd,prDiv,dsperc,cashback);
        
        div.onclick=function(){
            storeData(name,image1,image2,image3,image4,price,discount_price,brand,x,discount,c)
            window.open(
                "./productinfopage.html",
                '_blank' // <- This is what makes it open in a new window.
              );
        }

        parent.append(div);

        
    })
}

const storeData=(name,image1,image2,image3,image4,price,discount_price,brand,x,discount,c)=>
{
    let obj={
        name:name,
        image1:image1,
        image2:image2,
        image3:image3,
        image4:image4,
        price:price,
        discount_price:discount_price,
        brand:brand,
        x:x,
        discount:discount,
        c:c
    }
    localStorage.setItem("indiProductDetails",JSON.stringify(obj))
}



export default appendDatabase;