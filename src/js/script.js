
const btn_about = document.querySelector("#btn-about");
const btn_soft_skills = document.querySelector("#btn-soft-skills")
const btn_front_end = document.querySelector("#btn-front-end");
const btn_tools = document.querySelector("#btn-tools");
const btn_projects = document.querySelector("#btn-projects");
const btn_home = document.querySelector("#btn-home");

const page_about = document.querySelector(".page-about");
const page_soft_skill = document.querySelector(".page-soft-skill");
const page_front_end = document.querySelector(".page-front-end");
const page_tools = document.querySelector(".page-tools");
const page_project = document.querySelector(".page-project");
const home = document.querySelector(".screen-home");

btn_home.addEventListener("click", function(){
          if(home.style.display != "block"){
            home.style.display = "none"
           page_about.style.display = "none";
           page_soft_skill.style.display = "none";
           page_front_end.style.display = "none";
           page_tools.style.display = "none"
           page_project.style.display = "none";
          };
          
});

btn_about.addEventListener("click", function () {
     

    if (page_about.style.display != "flex") {
        page_about.style.display = "flex";
        page_soft_skill.style.display = "none";
        page_front_end.style.display = "none";
        page_tools.style.display = "none"
        page_project.style.display = "none";
        home.style.display = "none"
    }
    const audio = new  Audio(src="src/audio/click-icon.wav");
     audio.play();
     audio.currentTime = 0.09;
});

btn_soft_skills.addEventListener("click", function () {
  

    if (page_soft_skill.style.display != "flex") {
        page_soft_skill.style.display = "flex";
        page_front_end.style.display = "none";
        page_tools.style.display = "none"
        page_project.style.display = "none";
        page_about.style.display = "none";
        home.style.display = "none"
    }

    const audio = new  Audio(src="src/audio/click-icon.wav");
    audio.play();
    audio.currentTime = 0.09;
});

btn_front_end.addEventListener("click", function () {
    if (page_front_end.style.display != "flex") {
        page_front_end.style.display = "flex";
        page_soft_skill.style.display = "none";
        page_tools.style.display = "none"
        page_project.style.display = "none";
        page_about.style.display = "none";
        home.style.display = "none"
    }

    const audio = new  Audio(src="src/audio/click-icon.wav");
     audio.play();
     audio.currentTime = 0.09;
});

btn_tools.addEventListener("click", function () {
    if (page_tools.style.display != "flex") {
        page_tools.style.display = "flex";
        page_soft_skill.style.display = "none";
        page_front_end.style.display = "none";
        page_project.style.display = "none";
        page_about.style.display = "none";
        home.style.display = "none"
    }

    const audio = new  Audio(src="src/audio/click-icon.wav");
     audio.play();
     audio.currentTime = 0.09;
});

btn_projects.addEventListener("click", function () {
    if (page_project.style.display != "block") {
        page_project.style.display = "block"
        page_soft_skill.style.display = "none";
        page_front_end.style.display = "none";
        page_tools.style.display = "none"
        page_about.style.display = "none";
        home.style.display = "none"
    }

    const audio = new  Audio(src="src/audio/click-icon.wav");
     audio.play();
     audio.currentTime = 0.09;
});


// Inicio Código  Relógio

function clock(){
    var data=new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();

    if(hours<10){
        hours="0"+ hours;
    } 
    if(minutes<10){
        minutes="0"+ minutes;
    }

    var print_hours= hours+":"+ minutes;
    document.querySelector("#clock").value=print_hours;
}
var time=setInterval(clock,1000);