/* empty css                      */import{S as d,N as c,a as y,O as n,I as m,E as _,D as u}from"./assets/vendor-zWxgS3oD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}})();const p=document.querySelector(".burgerNav"),x=document.querySelector(".mobile_menu_close"),g=document.querySelector(".mobile_menu_box");p.addEventListener("click",()=>{g.classList.toggle("active"),document.body.classList.add("modal-open")});x.addEventListener("click",()=>{document.body.classList.remove("modal-open"),g.classList.toggle("active")});const b=document.querySelectorAll('a[href*="#"]');for(let t of b)t.addEventListener("click",function(s){document.body.classList.remove("modal-open"),g.classList.toggle("active"),s.preventDefault();const r=t.getAttribute("href").substr(1),a=document.getElementById(r);a&&a.scrollIntoView({behavior:"smooth",block:"start"})});const w=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");const f="./img/icons/icons.svg#brackets";async function k(){h([{author:"Scarlett N.",review:"The special events keep the game fresh and exciting. Can`t wait for more!"},{author:"Lucas F.",review:"I enjoy competing with my friends to see who can get the highest score."},{author:"Abigail K.",review:"The soundtrack is so catchy. I find myself humming it all day!"},{author:"Henry P.",review:"The variety of levels keeps the game interesting. I`m always looking forward to the next one."},{author:"Zoe M.",review:"Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!"},{author:"Alexander J.",review:"I love how easy it is to learn, but it still offers a great challenge."}])}function h(t){const s=t.map(a=>`<li class="reviews-item swiper-slide">
      <svg class="brackets" width="18" height="18" >
        <use href=${f}></use>
      </svg>
          <h3>${a.author}</h3>
          <p>${a.review}</p>
        </li>`).join("");w.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".reviews-item p").forEach(a=>{n(a,v)})}document.addEventListener("DOMContentLoaded",()=>{k();const t=new d(".reviews-swiper",{modules:[c,y],speed:600,loop:!0,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1e3:{slidesPerView:3,spaceBetween:16}}});document.addEventListener("keydown",s=>{s.key==="ArrowRight"?t.slideNext(1e3):s.key==="ArrowLeft"?t.slidePrev(1e3):s.key==="Tab"&&(s.preventDefault(),s.shiftKey?t.slidePrev(1e3):t.slideNext(1e3))})});n.plugin(m);n.plugin(_);n.plugin(u);const v={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-light",visibility:"auto",autoHide:"scroll",autoHideDelay:100,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},S="/Sweet_Candy/assets/mobile_gallery_first1x-Cg_s0BNr.png",C="/Sweet_Candy/assets/mobile_gallery_first2x-BvqFZVnB.png",D="/Sweet_Candy/assets/desktop_gallery_first1x-2jPnp0hV.png",L="/Sweet_Candy/assets/desktop_gallery_first2x-nxveYMup.png",M="/Sweet_Candy/assets/mobile_gallery_second1x-BcHPtE4H.png",B="/Sweet_Candy/assets/mobile_gallery_second2x-C2RuwwMz.png",E="/Sweet_Candy/assets/desktop_gallery_second1x-C5VdLbuY.png",q="/Sweet_Candy/assets/desktop_gallery_second2x-BNWMV2UL.png",A="/Sweet_Candy/assets/mobile_gallery_third1x-D08Rwoms.png",O="/Sweet_Candy/assets/mobile_gallery_third2x-Bizyrw3r.png",P="/Sweet_Candy/assets/desktop_gallery_third1x-CAmKkv6Z.png",N="/Sweet_Candy/assets/desktop_gallery_third2x-DQmDKcBX.png",I="/Sweet_Candy/assets/mobile_gallery_fourth1x-CDZ-CcBL.png",H="/Sweet_Candy/assets/mobile_gallery_fourth2x-CzLQcQAs.png",R="/Sweet_Candy/assets/desktop_gallery_fourth1x-nzhouBUL.png",V="/Sweet_Candy/assets/desktop_gallery_fourth2x-CSq0hSiO.png",K="/Sweet_Candy/assets/mobile_gallery_fifth1x-C2UrXtSc.png",T="/Sweet_Candy/assets/mobile_gallery_fifth2x-gvHdm1zB.png",$="/Sweet_Candy/assets/desktop_gallery_fifth1x-BRUKwjKc.png",j="/Sweet_Candy/assets/desktop_gallery_fifth2x-BorojTDF.png",z="/Sweet_Candy/assets/mobile_gallery_sixth1x-D_vguJJK.png",U="/Sweet_Candy/assets/mobile_gallery_sixth2x-BmOUCTCp.png",F="/Sweet_Candy/assets/desktop_gallery_sixth1x-Bonf_DRm.png",J="/Sweet_Candy/assets/desktop_gallery_sixth2x-BzsHtVRm.png",Z="/Sweet_Candy/assets/mobile_gallery_seventh1x-CXaqGHnk.png",G="/Sweet_Candy/assets/mobile_gallery_seventh2x-DO06kuc_.png",Q="/Sweet_Candy/assets/desktop_gallery_seventh1x-DcR_eJd6.png",X="/Sweet_Candy/assets/desktop_gallery_seventh2x-BRawsqtO.png",e={gallery1_mob1x:S,gallery1_mob2x:C,gallery1_desk1x:D,gallery1_desk2x:L,gallery2_mob1x:M,gallery2_mob2x:B,gallery2_desk1x:E,gallery2_desk2x:q,gallery3_mob1x:A,gallery3_mob2x:O,gallery3_desk1x:P,gallery3_desk2x:N,gallery4_mob1x:I,gallery4_mob2x:H,gallery4_desk1x:R,gallery4_desk2x:V,gallery5_mob1x:K,gallery5_mob2x:T,gallery5_desk1x:$,gallery5_desk2x:j,gallery6_mob1x:z,gallery6_mob2x:U,gallery6_desk1x:F,gallery6_desk2x:J,gallery7_mob1x:Z,gallery7_mob2x:G,gallery7_desk1x:Q,gallery7_desk2x:X},Y=document.querySelector(".gallery-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function W(){const t=[{imgMob1:e.gallery1_mob1x,imgMob2:e.gallery1_mob2x,imgDesk1:e.gallery1_desk1x,imgDesk2:e.gallery1_desk2x},{imgMob1:e.gallery2_mob1x,imgMob2:e.gallery2_mob2x,imgDesk1:e.gallery2_desk1x,imgDesk2:e.gallery2_desk2x},{imgMob1:e.gallery3_mob1x,imgMob2:e.gallery3_mob2x,imgDesk1:e.gallery3_desk1x,imgDesk2:e.gallery3_desk2x},{imgMob1:e.gallery4_mob1x,imgMob2:e.gallery4_mob2x,imgDesk1:e.gallery4_desk1x,imgDesk2:e.gallery4_desk2x},{imgMob1:e.gallery5_mob1x,imgMob2:e.gallery5_mob2x,imgDesk1:e.gallery5_desk1x,imgDesk2:e.gallery5_desk2x},{imgMob1:e.gallery6_mob1x,imgMob2:e.gallery6_mob2x,imgDesk1:e.gallery6_desk1x,imgDesk2:e.gallery6_desk2x},{imgMob1:e.gallery7_mob1x,imgMob2:e.gallery7_mob2x,imgDesk1:e.gallery7_desk1x,imgDesk2:e.gallery7_desk2x}];ee(t)}function ee(t){const s=t.map(r=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="${r.imgDesk1} 1x,${r.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
           srcset="${r.imgMob1} 1x,${r.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${r.imgMob1} "
          alt="img_${r.imgMob1}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");Y.insertAdjacentHTML("beforeend",s)}document.addEventListener("DOMContentLoaded",()=>{W();const t=new d(".reviews-swiper",{modules:[c,y],speed:600,loop:!0,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3,spaceBetween:16}}});document.addEventListener("keydown",s=>{s.key==="ArrowRight"?t.slideNext(1e3):s.key==="ArrowLeft"?t.slidePrev(1e3):s.key==="Tab"&&(s.preventDefault(),s.shiftKey?t.slidePrev(1e3):t.slideNext(1e3))})});
//# sourceMappingURL=index.js.map
