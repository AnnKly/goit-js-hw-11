import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=a=>a.reduce((s,{tags:r,webformatURL:o,largeImageURL:e,likes:t,views:n,comments:d,downloads:u})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${o}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="text">${t}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="text">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="text">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="text">${u}</span>
        </div>
    </div>
</li>
    `,""),m="44001912-2e46d8922250cf9bf53d24905",h="https://pixabay.com/api/",y=a=>{const s=new URLSearchParams({key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15});return fetch(`${h}/?${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},i=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(a){a.preventDefault();const s=a.target.elements.searchKeyword.value.trim();if(i.innerHTML="",s==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),y(s).then(r=>{r.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=f(r.hits),new p(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(r=>console.log(r)).finally(()=>{a.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map