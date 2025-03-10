const body=document.body;
const navigationComponent=document.querySelector('.navigationComponent')
const themeBtn=document.querySelector('.theme-btn');
let flag=0;
window.addEventListener('DOMContentLoaded',()=>{
     navigationCreater();
})
function navigationCreater(){
     navigationComponent.innerHTML='';
     navigationComponent.innerHTML=`<div class="page-navigation">
     <a href="#">
     <div class="logo">
          <img src="../assets/mag-logo-big.png" alt="logo of magnetonn.in" >
     </div>
     </a>
     <div class="theme">
          <button class="theme-btn" onclick='themeChanger()'><i class="fa-solid fa-circle-half-stroke"></i></button>
     </div>
</div>`
   
}

function themeChanger(){
     if(!flag){
          body.style.background='#000';
          body.style.color="#fff";
          flag=1;
     }
     else{
          body.style.background='#fff';
          body.style.color="#000";
          flag=0;
     }
}
