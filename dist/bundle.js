!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector("#contact-list");if(t){n.innerHTML="";var r=document.createElement("ul");t.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n        <div class="max-w-md w-full lg:flex" id:"card" style="height:250px">\n        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url(\'https://cdn1.comparetv.com.au/wp-content/uploads/2016/10/phone_hp.jpg\')">\n        </div>\n        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">\n          <div class="mb-8">\n            <p class="text-sm text-grey-dark flex items-center">\n              <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">\n                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />\n              </svg>\n              ID: '+e.id+'\n            </p>\n            <div class="content">\n              <h5>'+e.name+"</h5>\n              <h6>"+e.company+"</h6>\n              <p>"+e.notes+"</p> \n              "+e.email+' | \n              <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n            </div>\n        </div>\n      </div>     \n      \n      ",r.appendChild(t)}),n.appendChild(r)}else n.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){r();var e=document.querySelector("#new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=window.localStorage,o=e.elements,a=o.name,l=o.email,i=o.phone,c=o.company,d=o.notes,u=o.twitter,s={id:Date.now(),name:a.value,email:l.value,phone:i.value,company:c.value,notes:d.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(s));var f=JSON.parse(n.getItem("contacts"))||[];f.push(s),n.setItem("contacts",JSON.stringify(f)),r(),window.location.reload(!0)})})}]);