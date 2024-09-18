/* empty css                      */import{S as i,N as c,a as d,K as g,A as m}from"./assets/vendor-FeCJPK13.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const p=document.querySelector(".burgerNav"),_=document.querySelector(".mobile_menu_close"),y=document.querySelector(".mobile_menu_box");p.addEventListener("click",()=>{y.classList.toggle("active"),document.body.classList.add("modal-open")});_.addEventListener("click",()=>{document.body.classList.remove("modal-open"),y.classList.toggle("active")});const u=document.querySelectorAll('a[href*="#"]');for(let t of u)t.addEventListener("click",function(l){document.body.classList.remove("modal-open"),y.classList.toggle("active"),l.preventDefault();const s=t.getAttribute("href").substr(1),o=document.getElementById(s);o&&o.scrollIntoView({behavior:"smooth",block:"start"})});const x=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function b(){w([{author:"Scarlett N.",review:"The special events keep the game fresh and exciting. Can`t wait for more!"},{author:"Lucas F.",review:"I enjoy competing with my friends to see who can get the highest score."},{author:"Abigail K.",review:"The soundtrack is so catchy. I find myself humming it all day!"},{author:"Henry P.",review:"The variety of levels keeps the game interesting. I`m always looking forward to the next one."},{author:"Zoe M.",review:"Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!"},{author:"Alexander J.",review:"I love how easy it is to learn, but it still offers a great challenge."}])}function w(t){const l=t.map(s=>`<li class="reviews-item swiper-slide">
          <h3>${s.author}</h3>
          <p>${s.review}</p>
          <span>,,</span>
        </li>`).join("");x.insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",()=>{b(),new i(".reviews-swiper",{modules:[c,d,g],speed:600,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1e3:{slidesPerView:3,spaceBetween:16}}})});const f="/Sweet_Candy/assets/mobile_gallery_first1x-Cg_s0BNr.png",h="/Sweet_Candy/assets/mobile_gallery_first2x-BvqFZVnB.png",v="/Sweet_Candy/assets/desktop_gallery_first1x-2jPnp0hV.png",k="/Sweet_Candy/assets/desktop_gallery_first2x-nxveYMup.png",S="/Sweet_Candy/assets/mobile_gallery_second1x-BcHPtE4H.png",C="/Sweet_Candy/assets/mobile_gallery_second2x-C2RuwwMz.png",L="/Sweet_Candy/assets/desktop_gallery_second1x-C5VdLbuY.png",D="/Sweet_Candy/assets/desktop_gallery_second2x-BNWMV2UL.png",M="/Sweet_Candy/assets/mobile_gallery_third1x-D08Rwoms.png",B="/Sweet_Candy/assets/mobile_gallery_third2x-Bizyrw3r.png",q="/Sweet_Candy/assets/desktop_gallery_third1x-CAmKkv6Z.png",I="/Sweet_Candy/assets/desktop_gallery_third2x-DQmDKcBX.png",E="/Sweet_Candy/assets/mobile_gallery_fourth1x-CDZ-CcBL.png",A="/Sweet_Candy/assets/mobile_gallery_fourth2x-CzLQcQAs.png",V="/Sweet_Candy/assets/desktop_gallery_fourth1x-nzhouBUL.png",P="/Sweet_Candy/assets/desktop_gallery_fourth2x-CSq0hSiO.png",O="/Sweet_Candy/assets/mobile_gallery_fifth1x-C2UrXtSc.png",H="/Sweet_Candy/assets/mobile_gallery_fifth2x-gvHdm1zB.png",j="/Sweet_Candy/assets/desktop_gallery_fifth1x-BRUKwjKc.png",N="/Sweet_Candy/assets/desktop_gallery_fifth2x-BorojTDF.png",R="/Sweet_Candy/assets/mobile_gallery_sixth1x-D_vguJJK.png",T="/Sweet_Candy/assets/mobile_gallery_sixth2x-BmOUCTCp.png",$="/Sweet_Candy/assets/desktop_gallery_sixth1x-Bonf_DRm.png",K="/Sweet_Candy/assets/desktop_gallery_sixth2x-BzsHtVRm.png",z="/Sweet_Candy/assets/mobile_gallery_seventh1x-CXaqGHnk.png",Y="/Sweet_Candy/assets/mobile_gallery_seventh2x-DO06kuc_.png",U="/Sweet_Candy/assets/desktop_gallery_seventh1x-DcR_eJd6.png",F="/Sweet_Candy/assets/desktop_gallery_seventh2x-BRawsqtO.png",e={gallery1_mob1x:f,gallery1_mob2x:h,gallery1_desk1x:v,gallery1_desk2x:k,gallery2_mob1x:S,gallery2_mob2x:C,gallery2_desk1x:L,gallery2_desk2x:D,gallery3_mob1x:M,gallery3_mob2x:B,gallery3_desk1x:q,gallery3_desk2x:I,gallery4_mob1x:E,gallery4_mob2x:A,gallery4_desk1x:V,gallery4_desk2x:P,gallery5_mob1x:O,gallery5_mob2x:H,gallery5_desk1x:j,gallery5_desk2x:N,gallery6_mob1x:R,gallery6_mob2x:T,gallery6_desk1x:$,gallery6_desk2x:K,gallery7_mob1x:z,gallery7_mob2x:Y,gallery7_desk1x:U,gallery7_desk2x:F},J=document.querySelector(".gallery-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function Z(){const t=[{imgMob1:e.gallery1_mob1x,imgMob2:e.gallery1_mob2x,imgDesk1:e.gallery1_desk1x,imgDesk2:e.gallery1_desk2x},{imgMob1:e.gallery2_mob1x,imgMob2:e.gallery2_mob2x,imgDesk1:e.gallery2_desk1x,imgDesk2:e.gallery2_desk2x},{imgMob1:e.gallery3_mob1x,imgMob2:e.gallery3_mob2x,imgDesk1:e.gallery3_desk1x,imgDesk2:e.gallery3_desk2x},{imgMob1:e.gallery4_mob1x,imgMob2:e.gallery4_mob2x,imgDesk1:e.gallery4_desk1x,imgDesk2:e.gallery4_desk2x},{imgMob1:e.gallery5_mob1x,imgMob2:e.gallery5_mob2x,imgDesk1:e.gallery5_desk1x,imgDesk2:e.gallery5_desk2x},{imgMob1:e.gallery6_mob1x,imgMob2:e.gallery6_mob2x,imgDesk1:e.gallery6_desk1x,imgDesk2:e.gallery6_desk2x},{imgMob1:e.gallery7_mob1x,imgMob2:e.gallery7_mob2x,imgDesk1:e.gallery7_desk1x,imgDesk2:e.gallery7_desk2x}];G(t)}function G(t){const l=t.map(s=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="${s.imgDesk1} 1x,${s.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
           srcset="${s.imgMob1} 1x,${s.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${s.imgMob1} "
          alt="img_${s.imgMob1}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");J.insertAdjacentHTML("beforeend",l)}document.addEventListener("DOMContentLoaded",()=>{Z(),new i(".gallery-swiper",{modules:[c,d,g],speed:600,loop:!0,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3,spaceBetween:16}}})});const Q={listEl:document.querySelector(".faq-list")},W=[{title:"Can I play offline?",text:"Yes, the game can be played without an internet connection."},{title:"What are the daily rewards?",text:"Log in daily to receive free bonuses and rewards."},{title:"How can I compete with friends?",text:"Connect the game to social media to compare scores with friends."},{title:"Are there special events?",text:"Yes, participate in limited-time events for exclusive rewards."},{title:"Is the game suitable for kids?",text:"Yes, it`s family-friendly and suitable for all ages."},{title:"What devices are supported?",text:"Available on both iOS and Android devices."},{title:"How often are updates?",text:"Regular updates bring new levels and content."},{title:"Can I sync my progress across devices?",text:"Yes, connect to your social media account to save and sync progress."}];function X(t){const l=t.title,s=t.text;return`
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${l}
    <span class="circle-faq">
    <p class="icon-faq " width="12" height="8">
    +
    </p>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${s}
    </p>
    </div>
    </li>
    `}function ee(t){return t.map(X).join("")}function te(t){const l=ee(t);Q.listEl.insertAdjacentHTML("afterbegin",l)}te(W);new m(".accordion-container",{});document.querySelector(".advantages-list");document.querySelector(".advantages-icon-prev");document.querySelector(".advantages-icon-next");new i(".advantages-swiper",{modules:[c,d,g],speed:600,navigation:{nextEl:".advantages-swiper-button-next",prevEl:".advantages-swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16});
//# sourceMappingURL=index.js.map
