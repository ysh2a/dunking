let cart=[];


const panel=document.getElementById("cartPanel");


document.getElementById("cartBtn")
.onclick=function(){

panel.classList.add("active");

}




function closeCart(){

panel.classList.remove("active");

}




function addCart(name,price){


let item=cart.find(x=>x.name==name);


if(item){

item.qty++;

}

else{


cart.push({

name:name,

price:price,

qty:1

});


}


updateCart();


}




function updateCart(){


let box=document.getElementById("cartItems");

box.innerHTML="";


let total=0;



cart.forEach((item,index)=>{


total+=item.price*item.qty;



box.innerHTML+=`

<div class="cartItem">


${item.name}
<br>

${item.qty}개


<button onclick="removeItem(${index})">

삭제

</button>


</div>

`;


});



document.getElementById("total").innerHTML=total;


document.getElementById("cartCount").innerHTML=

cart.reduce((a,b)=>a+b.qty,0);


}





function removeItem(i){

cart.splice(i,1);

updateCart();

}




function checkout(){


if(cart.length==0){

alert("장바구니가 비어있습니다");

return;

}


alert("결제가 완료되었습니다 🍩");


cart=[];

updateCart();

closeCart();


}





function scrollMenu(){


document
.getElementById("menu")
.scrollIntoView({

behavior:"smooth"

});


}