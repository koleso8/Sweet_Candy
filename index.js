/* empty css                      */import{S as c,N as d,a as u,O as n,I as m,E as f,D as v}from"./assets/vendor-zWxgS3oD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const p=document.querySelector(".burgerNav"),h=document.querySelector(".mobile_menu_close"),a=document.querySelector(".mobile_menu_box");p.addEventListener("click",()=>{a.classList.toggle("active"),document.body.classList.add("modal-open")});h.addEventListener("click",()=>{document.body.classList.remove("modal-open"),a.classList.toggle("active")});const g=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function w(){y([{author:"Scarlett N.",review:"The special events keep the game fresh and exciting. Can`t wait for more!"},{author:"Lucas F.",review:"I enjoy competing with my friends to see who can get the highest score."},{author:"Abigail K.",review:"The soundtrack is so catchy. I find myself humming it all day!"},{author:"Henry P.",review:"The variety of levels keeps the game interesting. I`m always looking forward to the next one."},{author:"Zoe M.",review:"Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!"},{author:"Alexander J.",review:"I love how easy it is to learn, but it still offers a great challenge."}])}function y(r){const t=r.map(s=>`<li class="reviews-item swiper-slide">
      <svg class="brackets" width="18" height="18" >
        <use href="./img/icons/icons.svg#brackets"></use>
      </svg>
          <h3>${s.author}</h3>
          <p>${s.review}</p>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".reviews-item p").forEach(s=>{n(s,b)})}document.addEventListener("DOMContentLoaded",()=>{w();const r=new c(".reviews-swiper",{modules:[d,u],speed:1e3,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3,spaceBetween:16}}});document.addEventListener("keydown",t=>{t.key==="ArrowRight"?r.slideNext(1e3):t.key==="ArrowLeft"?r.slidePrev(1e3):t.key==="Tab"&&(t.preventDefault(),t.shiftKey?r.slidePrev(1e3):r.slideNext(1e3))})});n.plugin(m);n.plugin(f);n.plugin(v);const b={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-light",visibility:"auto",autoHide:"scroll",autoHideDelay:100,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},L=document.querySelectorAll('a[href*="#"]');for(let r of L)r.addEventListener("click",function(t){document.body.classList.remove("modal-open"),a.classList.toggle("active"),t.preventDefault();const i=r.getAttribute("href").substr(1),s=document.getElementById(i);s&&s.scrollIntoView({behavior:"smooth",block:"start"})});
//# sourceMappingURL=index.js.map
