const body=document.body;
const navigationComponent=document.querySelector('.navigationComponent')
const themeBtn=document.querySelector('.theme-btn');
const footer=document.querySelector('footer');
let flag=0;
window.addEventListener('DOMContentLoaded',()=>{
     navigationCreater();
     footerComponent();

})
function navigationCreater(){
     navigationComponent.innerHTML='';
     navigationComponent.innerHTML=`<div class="page-navigation">
     <a href="../index.html">
     <div class="logo">
          <img src="../assets/mag-logo-big.png" alt="logo of magnetonn.in" >
     </div>
     </a>
     <div class="theme">
          <button class="theme-btn" onclick='themeChanger()'><i class="fa-solid fa-circle-half-stroke"></i></button>
     </div>
</div>`
   
}
function footerComponent(){
     footer.innerHTML='';
     footer.innerHTML=`<div class="Flogo">Magnetonn.in</div>
          <div class="fquote">
               <div>"Let noble thoughts come to us from all directions"</div>

          </div>
               <div class="connect">
                    <p>Connect with me </p>
                    <ul>
                         <li><a href="http://"><i class="fa-brands fa-instagram"></i></a></li>
                         <li><a href="http://"><i class="fa-solid fa-envelope"></i></a></li>
                    </ul>
               </div>
               <div class="copyright">© 2024 Magneton.in. All Rights Reserved.</div>
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
