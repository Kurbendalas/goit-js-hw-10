var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("gUcIm");const r=document.getElementById("breed-select"),a=document.querySelector(".cat-info"),l=document.getElementById("loading-message");function d(){l.style.display="block"}function c(){l.style.display="none"}function s(e){a.innerHTML=`<p class="error-message">${e}</p>`,c()}r.addEventListener("change",(()=>{!function(e){a.innerHTML="",d(),(0,i.fetchCatByBreed)(e).then((e=>{if(c(),e.length>0){const t=e[0],n=document.createElement("img");n.src=t.url,n.addEventListener("error",(()=>{s("Failed to load image.")}));const o=document.createElement("p");o.textContent=`Description: ${t.breeds[0].description}`;const i=document.createElement("p");i.textContent=`Temperament: ${t.breeds[0].temperament}`,a.appendChild(n),a.appendChild(o),a.appendChild(i)}else s("No cat information available.")})).catch((()=>{s("Failed to fetch cat information.")}))}(r.value)})),r.style.display="none",d(),r.innerHTML='<option value=""></option>',(0,i.fetchBreeds)().then((e=>{e.length>0?(e.map((e=>{const t=document.createElement("option");return t.value=e.id,t.textContent=e.name,t})).forEach((e=>{r.appendChild(e)})),r.style.display="block",c()):(r.style.display="none",c())})).catch((()=>{s("Failed to fetch breeds.")})),c();
//# sourceMappingURL=index.d2bcd490.js.map
