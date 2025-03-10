let  catogary=document.querySelectorAll('.section');
let  marked=document.querySelectorAll('.marked');
catogary.forEach((item,i)=>{    
     item.addEventListener('click',()=>{
          catogary.forEach((itm)=>itm.classList.remove('marked'));
        item.classList.add('marked')
          
     })
})
