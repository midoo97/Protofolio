
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector("#menu-btn")
document.querySelector('.menu-icon').onclick = () =>{
    navbar.classList.toggle('active');  
    menuIcon.classList.toggle('close')
};


 window.onscroll = ( ) =>{
  navbar.classList.remove("active")
 };



 
let mySkills = document.querySelector(".skills");
window.onscroll = function (){
   
  let skillsOffsetTop = mySkills.offsetTop;
  
  let skillsOuterHeihgt = mySkills.offsetHeight;

  console.log(skillsOuterHeihgt)

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if(windowScrollTop > (skillsOffsetTop + skillsOuterHeihgt - windowHeight)) {
   this.console.log("reach");

     let allSkills = document.querySelectorAll(".box .skills-progress span");
     allSkills.forEach(skills => {
       skills.style.width = skills.dataset.progress;
     });
     
  };
  
};
