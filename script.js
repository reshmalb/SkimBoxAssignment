let basic=document.getElementById("basic-btn");
let shopify=document.getElementById("shopify-btn");
let adv=document.getElementById("adv-btn")
let benefitsHeading = document.querySelector(".benefits-heading");

let amount=document.getElementById("amount")
let subscription=document.getElementById('sub-btn')




basic.addEventListener("click",function(){

benefitsHeading.textContent="What's included on Basic ?"
amount.textContent="1994 "
subscription.textContent="Try for free"

    

console.log("basic")
  
})

shopify.addEventListener("click",function(){
 benefitsHeading.textContent="What's included on Shopify ?"
 amount.textContent="2500"
 subscription.textContent="Buy Premium"

    
console.log("shopify")

})

adv.addEventListener("click",function(){
    benefitsHeading.textContent="What's included on Advanced ?"
 amount.textContent="4000"
 subscription.textContent="Buy Advanced"


   console.log("Advanced")
   
   })

   subscription.addEventListener('click',function(){
     let s=subscription.textContent;
     if(s=='Try for free'){
            alert(" You selected Basic")
     }
     else if(s=='Buy Premium'){
        alert(" You selected Shopify")


     }
     else if(s=='Buy Advanced'){
        alert(" You selected Advanced")


     }
   })
   
