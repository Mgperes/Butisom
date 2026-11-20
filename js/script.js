var CFG={whats:"5553981241499",endereco:"",horario:"Segunda a sexta: 9h às 12h e 13h30 às 18h"};
(function(){
var root=document.documentElement;
var themeToggle=document.getElementById("theme-toggle");
var storedTheme=null;
try{storedTheme=localStorage.getItem("butisom-theme")}catch(e){}
var currentTheme=storedTheme||(window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
function applyTheme(theme){
root.dataset.theme=theme;
var dark=theme==="dark";
if(themeToggle){
themeToggle.setAttribute("aria-pressed",dark?"true":"false");
themeToggle.setAttribute("aria-label",dark?"Ativar modo claro":"Ativar modo escuro");
themeToggle.querySelector(".theme-icon").textContent=dark?"☀":"☾";
}
}
applyTheme(currentTheme);
if(themeToggle){
themeToggle.addEventListener("click",function(){
var next=root.dataset.theme==="dark"?"light":"dark";
applyTheme(next);
try{localStorage.setItem("butisom-theme",next)}catch(e){}
});
}
var w=CFG.whats;
function link(t){return "https://wa.me/"+w+"?text="+encodeURIComponent(t)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=link("Olá! Gostaria de um orçamento de conserto.");a.target="_blank";a.rel="noopener"});
[["i-end",CFG.endereco],["i-hor",CFG.horario]].forEach(function(p){var e=document.getElementById(p[0]);if(p[1]){e.textContent=p[1];e.className=""}});
document.getElementById("y").textContent=new Date().getFullYear();
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();
var t="Olá! Sou "+(document.getElementById("f-nm").value||"cliente")+". Aparelho: "+document.getElementById("f-ap").value+". Defeito: "+document.getElementById("f-df").value;
window.open(link(t),"_blank")});
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el,i){el.style.transitionDelay=(i%4)*90+"ms";io.observe(el)});
})();
