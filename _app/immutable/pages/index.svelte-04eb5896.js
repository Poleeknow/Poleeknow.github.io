import{S as F,i as M,s as R,e as c,k as w,t as T,c as f,m as k,a as v,h as V,d as l,b as s,G as C,g as h,F as u,L as $,n as E}from"../chunks/index-c54306ee.js";function z(n){let e,p,_,g,q,b,i,m,o,y,I,d,r,G,D,j;return{c(){e=c("img"),_=w(),g=c("h2"),q=T("Hello? Dogi"),b=w(),i=c("div"),m=c("div"),o=c("button"),y=T("Go"),I=w(),d=c("div"),r=c("img"),this.h()},l(t){e=f(t,"IMG",{id:!0,src:!0,alt:!0,class:!0}),_=k(t),g=f(t,"H2",{});var a=v(g);q=V(a,"Hello? Dogi"),a.forEach(l),b=k(t),i=f(t,"DIV",{class:!0});var x=v(i);m=f(x,"DIV",{id:!0});var B=v(m);o=f(B,"BUTTON",{id:!0,class:!0});var H=v(o);y=V(H,"Go"),H.forEach(l),B.forEach(l),I=k(x),d=f(x,"DIV",{id:!0,class:!0});var S=v(d);r=f(S,"IMG",{id:!0,alt:!0,src:!0,class:!0}),S.forEach(l),x.forEach(l),this.h()},h(){s(e,"id","me"),C(e.src,p="/images/pic2.jpg")||s(e,"src",p),s(e,"alt","That's me"),s(e,"class","svelte-n9qlie"),s(o,"id","getDogImg"),s(o,"class","svelte-n9qlie"),s(m,"id","one"),s(r,"id","dog"),s(r,"alt","Some dog"),C(r.src,G="")||s(r,"src",G),s(r,"class","svelte-n9qlie"),s(d,"id","two"),s(d,"class","svelte-n9qlie"),s(i,"class","flexbox svelte-n9qlie")},m(t,a){h(t,e,a),h(t,_,a),h(t,g,a),u(g,q),h(t,b,a),h(t,i,a),u(i,m),u(m,o),u(o,y),u(i,I),u(i,d),u(d,r),D||(j=$(o,"click",J),D=!0)},p:E,i:E,o:E,d(t){t&&l(e),t&&l(_),t&&l(g),t&&l(b),t&&l(i),D=!1,j()}}}const A="https://dog.ceo/api/breeds/image/random";async function J(n){const e=await L();N(e)}function L(){return fetch(A).then(n=>n.json())}function N(n){const e=document.getElementById("dog"),p=document.getElementById("two");e.src=n.message,e.style.border="3px solid hotpink",e.style.borderRadius="50%",p.style.display="block"}function O(n){return[]}class U extends F{constructor(e){super(),M(this,e,O,z,R,{})}}export{U as default};
