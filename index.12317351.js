!function(){var o=document.querySelectorAll(".gallery__item"),e=0;setInterval((function(){!function(e){for(var l=0;l<o.length;l++)o[l].classList.remove("active");o[e].classList.add("active")}(e=e<o.length-1?++e:0)}),2e3);var l=document.querySelectorAll(".customer-reviews__item"),t=document.querySelectorAll(".customer-reviews__nav");var a=!0,n=!1,r=void 0;try{for(var c,d=function(o,e){var a=e.value;a.onclick=function(){!function(o){for(var e=0;e<l.length;e++)l[e].classList.remove("active"),t[e].classList.remove("active");l[o].classList.add("active"),t[o].classList.add("active")}(+a.dataset.slide)}},i=t[Symbol.iterator]();!(a=(c=i.next()).done);a=!0)d(0,c)}catch(o){n=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}!function(){var o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelectorAll("[data-modal-close]"),modal:document.querySelectorAll("[data-modal]"),body:document.body},e=0;console.log(o.openModalBtn),console.log(o.closeModalBtn),console.log(o.modal);var l=!0,t=!1,a=void 0;try{for(var n,r=function(l,t){var a=t.value;a.onclick=function(){console.log(a.dataset.modalOpen),function(e){for(var l=0;l<o.modal.length;l++)o.modal[l].classList.add("is-hidden");o.modal[e].classList.remove("is-hidden"),o.body.classList.add("overflow")}(e=+a.dataset.modalOpen)}},c=o.openModalBtn[Symbol.iterator]();!(l=(n=c.next()).done);l=!0)r(0,n)}catch(o){t=!0,a=o}finally{try{l||null==c.return||c.return()}finally{if(t)throw a}}var d=!0,i=!1,s=void 0;try{for(var u,v=function(l,t){var a=t.value;a.onclick=function(){var l;e=+a.dataset.modalClose,l=e,o.modal[l].classList.add("is-hidden"),o.body.classList.remove("overflow")}},m=o.closeModalBtn[Symbol.iterator]();!(d=(u=m.next()).done);d=!0)v(0,u)}catch(o){i=!0,s=o}finally{try{d||null==m.return||m.return()}finally{if(i)throw s}}}()}();
//# sourceMappingURL=index.12317351.js.map
