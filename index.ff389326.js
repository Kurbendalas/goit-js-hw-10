var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("gUcIm");const d=document.getElementById("breed-select"),l=document.querySelector(".cat-info"),i=document.getElementById("loading-message");function c(){i.style.display="block"}function a(){i.style.display="none"}d.addEventListener("change",(()=>{!function(e){l.innerHTML="",c(),(0,r.fetchCatByBreed)(e).then((e=>{if(a(),e.length>0){const n=e[0],t=document.createElement("img");t.src=n.url;const o=document.createElement("p");o.textContent=`Description: ${n.breeds[0].description}`;const r=document.createElement("p");r.textContent=`Temperament: ${n.breeds[0].temperament}`,l.appendChild(t),l.appendChild(o),l.appendChild(r)}})).catch((()=>{showError()}))}(d.value)})),c(),d.innerHTML='<option value=""></option>',(0,r.fetchBreeds)().then((e=>{e.length>0?(e.forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.name,d.appendChild(n)})),d.style.display="block",a()):(d.style.display="none",a())})).catch((()=>{showError()})),a();
//# sourceMappingURL=index.ff389326.js.map
