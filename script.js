const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"}});
const heroArt=document.getElementById("heroArt");
if(heroArt && matchMedia("(pointer:fine)").matches){
  window.addEventListener("pointermove",e=>{
    const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
    heroArt.style.transform=`rotateY(${x*5}deg) rotateX(${-y*4}deg)`;
  });
}
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menuToggle?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false")}));
document.querySelectorAll('[data-filter-group="portfolio"] .filter').forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll('[data-filter-group="portfolio"] .filter').forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const value=button.dataset.filter;
    document.querySelectorAll("#portfolioGrid .work-card").forEach(card=>{
      card.classList.toggle("hidden",value!=="all" && card.dataset.category!==value);
    });
  });
});
const lightbox=document.getElementById("lightbox"),lightboxImg=lightbox?.querySelector("img");
document.querySelectorAll(".work-card img,.sample-grid img,.fantasy-gallery img,.certificate-card img").forEach(img=>{
  img.addEventListener("click",()=>{
    if(!lightbox||!lightboxImg)return;
    lightboxImg.src=img.src;lightboxImg.alt=img.alt;
    lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");
  });
});
function closeLightbox(){lightbox?.classList.remove("open");lightbox?.setAttribute("aria-hidden","true");if(lightboxImg)lightboxImg.src=""}
document.getElementById("lightboxClose")?.addEventListener("click",closeLightbox);
lightbox?.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
const revealTargets=document.querySelectorAll(".work-card,.sample-grid img,.fantasy-gallery figure,.certificate-card,.feature-copy");
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("is-visible");entry.target.style.opacity="1";entry.target.style.transform=entry.target.style.transform.replace(" translateY(18px)","");observer.unobserve(entry.target)}
 }),{threshold:.12});
 revealTargets.forEach(el=>{el.style.opacity="0";el.style.transform+=" translateY(18px)";el.style.transition="opacity .7s ease, transform .7s ease";observer.observe(el)});
}
document.addEventListener("animationend",()=>{});
