!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("bOlkj"),i=document.getElementById("breed-select"),c=document.querySelector(".cat-info"),d=document.getElementById("loading-message");function l(){d.style.display="block"}function a(){d.style.display="none"}i.addEventListener("change",(function(){!function(e){c.innerHTML="",l(),(0,r.fetchCatByBreed)(e).then((function(e){if(a(),e.length>0){var n=e[0],t=document.createElement("img");t.src=n.url;var o=document.createElement("p");o.textContent="Description: ".concat(n.breeds[0].description);var r=document.createElement("p");r.textContent="Temperament: ".concat(n.breeds[0].temperament),c.appendChild(t),c.appendChild(o),c.appendChild(r)}})).catch((function(){showError()}))}(i.value)})),l(),i.innerHTML='<option value=""></option>',(0,r.fetchBreeds)().then((function(e){e.length>0?(e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,i.appendChild(n)})),i.style.display="block",a()):(i.style.display="none",a())})).catch((function(){showError()})),a()}();
//# sourceMappingURL=index.4324ede7.js.map