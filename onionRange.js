localStorage.setItem("onionRangedata",JSON.stringify(onionRange));
var onionRangearr=JSON.parse(localStorage.getItem("onionRangedata"))||[];
// var productarr=JSON.parse(localStorage.getItem("products"))||[]; //product page part
var container=document.querySelector(".product-container-content1");
  function display(data){
    container.innerHTML=null;
    data.forEach(function (elem){
      var box=document.createElement("div");
      box.addEventListener("click",function(){
        productdis(elem);
     })
      var avatar=document.createElement("img");
      // var buttn=document.createElement("button");
      // buttn.innerText=elem.best;
      var name=document.createElement("h2");
      var subname=document.createElement("h3");
      var ratingbox=document.createElement("div")
      ratingbox.classList.add("modal");
      var star=document.createElement("img");
      var ratings=document.createElement("p");
      var rightmark=document.createElement("img")
      var reviws=document.createElement("p")
      var pricebox=document.createElement("div")
      var val=document.createElement("h1")
      var price=document.createElement("h1");

      pricebox.append(val,price)
      console.log(pricebox)
      ratingbox.append(star,ratings,rightmark,reviws)
      var btn=document.createElement("button");
      btn.innerText="ADD TO CART"
       btn.addEventListener("click",function(){
        addtocart(elem);
     })
     avatar.setAttribute("src",elem.img);
     name.innerText=elem.title;
     subname.innerText=elem.subtitle;
     star.setAttribute("src",elem.img2);
     ratings.innerText=elem.rating;
     rightmark.setAttribute("src",elem.img_url)
     reviws.innerText=elem.review;
     val.innerText=elem.rate;
     price.innerText=elem.price;
    
     box.append(avatar,name,subname,ratingbox,pricebox,btn);
     document.querySelector(".product-container-content1").append(box);
    })
  }
  display (onionRange);
  console.log(onionRange)

     function addtocart(elem){
        onionRangearr.push(elem);
       localStorage.setItem("cart",JSON.stringify(onionRangearr));
       alert("Product Has been added successfully")
     }
 function pricesort(onionRange){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     onionRangearr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(onionRangearr)
      display(onionRangearr)
  }
    if(selected=="Hightolow"){
        onionRangearr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(onionRange)
    display(onionRangearr)
  
   }
  }