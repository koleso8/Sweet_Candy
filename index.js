/* empty css                      */import{S as c,N as d,a as u,O as n,I as m,E as p,D as g}from"./assets/vendor-zWxgS3oD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const f=document.querySelector(".burgerNav"),y=document.querySelector(".mobile_menu_close"),a=document.querySelector(".mobile_menu_box");f.addEventListener("click",()=>{a.classList.toggle("active"),document.body.classList.add("modal-open")});y.addEventListener("click",()=>{document.body.classList.remove("modal-open"),a.classList.toggle("active")});const w=document.querySelectorAll('a[href*="#"]');for(let t of w)t.addEventListener("click",function(e){document.body.classList.remove("modal-open"),a.classList.toggle("active"),e.preventDefault();const s=t.getAttribute("href").substr(1),o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth",block:"start"})});const v=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");const h="./img/icons/icons.svg#brackets";async function b(){x([{author:"Scarlett N.",review:"The special events keep the game fresh and exciting. Can`t wait for more!"},{author:"Lucas F.",review:"I enjoy competing with my friends to see who can get the highest score."},{author:"Abigail K.",review:"The soundtrack is so catchy. I find myself humming it all day!"},{author:"Henry P.",review:"The variety of levels keeps the game interesting. I`m always looking forward to the next one."},{author:"Zoe M.",review:"Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!"},{author:"Alexander J.",review:"I love how easy it is to learn, but it still offers a great challenge."}])}function x(t){const e=t.map(o=>`<li class="reviews-item swiper-slide">
      <svg class="brackets" width="18" height="18" >
        <use href=${h}></use>
      </svg>
          <h3>${o.author}</h3>
          <p>${o.review}</p>
        </li>`).join("");v.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".reviews-item p").forEach(o=>{n(o,L)})}document.addEventListener("DOMContentLoaded",()=>{b();const t=new c(".reviews-swiper",{modules:[d,u],speed:1e3,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1e3:{slidesPerView:3,spaceBetween:16}}});document.addEventListener("keydown",e=>{e.key==="ArrowRight"?t.slideNext(1e3):e.key==="ArrowLeft"?t.slidePrev(1e3):e.key==="Tab"&&(e.preventDefault(),e.shiftKey?t.slidePrev(1e3):t.slideNext(1e3))})});n.plugin(m);n.plugin(p);n.plugin(g);const L={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-light",visibility:"auto",autoHide:"scroll",autoHideDelay:100,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},k=document.querySelector(".gallery-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function S(){E(["first","second","third","fourth","fifth","sixth","seventh"])}function E(t){const e=t.map(s=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="./img/desktop_gallery_${s}1x.png 1x, ./img/desktop_gallery_${s}2x.png 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcset="./img/mobile_gallery_${s}1x.png 1x, ./img/mobile_gallery_${s}2x.png 2x"
          type="image/png"
        />
        <img
          src="./img/desktop_gallery_${s}1x.png "
          alt="img_${s}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");k.insertAdjacentHTML("beforeend",e)}document.addEventListener("DOMContentLoaded",()=>{S();const t=new c(".reviews-swiper",{modules:[d,u],speed:1e3,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3,spaceBetween:16}}});document.addEventListener("keydown",e=>{e.key==="ArrowRight"?t.slideNext(1e3):e.key==="ArrowLeft"?t.slidePrev(1e3):e.key==="Tab"&&(e.preventDefault(),e.shiftKey?t.slidePrev(1e3):t.slideNext(1e3))})});
//# sourceMappingURL=index.js.map
