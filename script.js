const mnuBtn = document.querySelector(".mnu-btn");
const mnu = document.querySelector("#mnu");
const img = document.querySelector(".img-change");

 const imgSrc = "images/icon-close.svg"
mnuBtn.addEventListener("click",(e)=>{
        if(mnuBtn.classList.contains("active")){
            img.src ="images/icon-hamburger.svg"
            mnuBtn.classList.remove("active")
            mnu.classList.remove("show")
          
        }
        else{
            mnu.classList.add("show")
            mnuBtn.classList.add("active")
            img.src =imgSrc  
           
        }

    }
)