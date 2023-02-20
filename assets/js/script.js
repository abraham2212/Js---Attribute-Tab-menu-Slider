


// let btnBoot=document.querySelector("button:nth-child(1)");

// let btnGoogle=document.querySelector("button:nth-child(2)")


// btnBoot.addEventListener("click",function(){

// linkElem.setAttribute("href","https://getbootstrap.com/")




// })



// btnGoogle.addEventListener("click",function(){

//     linkElem.setAttribute("href","https://mail.google.com/")
    
    
    
    
//     })


let headers =document.querySelectorAll(".tab-menu.header.item");

let contents =document.querySelectorAll(".tab-menu.content.item");


headers.forEach(element=>{
    element.addEventListener("click",function (){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");



        contents.forEach(content=>{
            if(content.getAttribute("data-id")==this.getAttribute("data-id")){
                content.classList.remove("d-none")

            }else{
                content.classList.add("d-none")

            }
        




        });

    })


});