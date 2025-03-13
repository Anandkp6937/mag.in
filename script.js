let  catogary=document.querySelectorAll('.section');
let  marked=document.querySelectorAll('.marked');
let blogWrap=document.querySelector('.blog-container-wrap');
let lists=document.querySelectorAll('.section');
let searchBox=document.getElementById('srch');
let subcriber=document.getElementById('subcriber');
let subBtn=document.querySelector('.sub-btn');
let emailId;
let modifiedData;
let response;
let state='all';
console.log(lists);
function feedback(message){
     if(message==='user already exists'){
          alert('user already a subscriber')
     }
     else{
          alert('thanku for subscribing...')
     }
}
function addEmailTosubscriberList(e){
     let postData={
          email:subcriber.value
     }
     
     fetch('https://magnetonn-in-backend.vercel.app/subscribe',{
          method:'POST',
          headers:{'COntent-type':'application/json'},
          body:JSON.stringify(postData)
     }).then(res=>res.json())
     .then(data=>feedback(data.message))
     .catch(err=>console.log(err));
     subcriber.value=''
     
}
subBtn.addEventListener('click',addEmailTosubscriberList);
searchBox.addEventListener('input',searchBlogPost);
function searchBlogPost(e){
     let keyWord=e.target.value;
     let newSortedPostsData=modifiedData.filter((word)=>word.title.toLowerCase().includes(keyWord.toLowerCase()));
     createPostCard(newSortedPostsData); 

}
function sortPostBylatest(arr){
     modifiedData=arr.sort((a, b) => new Date(b.date) - new Date(a.date));
 }
function makeCatogaryWisePost(arr,catogary)
{    
     if(catogary!='All article'){
          const modearr=arr.filter((post=>post.category===catogary));
          blogWrap.innerHTML=''
          createPostCard(modearr);
     }
     else{
          createPostCard(modifiedData)
     }

}


lists.forEach((cato,i)=>{
cato.addEventListener('click',(e)=>{
     let data=e.target.innerText;
     makeCatogaryWisePost(modifiedData,data);
})

})

catogary.forEach((item,i)=>{    
     item.addEventListener('click',()=>{
          catogary.forEach((itm)=>itm.classList.remove('marked'));
        item.classList.add('marked')
          
     })
})
function spiltDate(dates){
     const dateString=dates;
     const date = new Date(dateString);
     const formattedDate = date.toLocaleDateString('en-GB'); 
     return formattedDate
}
function createPostCard(arr){
     blogWrap.innerHTML ='';
   arr.forEach((data)=>{
     blogWrap.innerHTML +=`<div class="blog">
               <div class="blog-img">
                    <img src="thumbnail/blog1.jpg" alt="" srcset="">
               </div>
               <div class="blog-heading"><a href="content/${data.url}">${data.title}</a></div>
               
               <div class="blog-desc">${data.description}
               </div>

               <div class="blog-details">
                    <p class="blogdate">${spiltDate(data.date)}</p>
                    <p class="blogtopic">${data.category}</p>
               </div>
            
          </div>`
    
})
    
}
async function grabData(){
     try{
          let postData=await fetch('https://magnetonn-in-backend.vercel.app/');
          datafromApi=await postData.json();
          sortPostBylatest(datafromApi)
          createPostCard(modifiedData);
    
          
     }
     catch(err){
          console.log('error occured:',err);
     }
     
}
grabData()