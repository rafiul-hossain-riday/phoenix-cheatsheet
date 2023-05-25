import{S as $,i as ee,s as te,k as p,a as C,l as d,m as k,h as i,c as P,n as E,b as g,F as _,W as U,J as W,L as se,q as R,r as A,Y,Z as B,_ as X,p as V,e as H,$ as le}from"../chunks/index.62db365a.js";function Z(o,e,s){const c=o.slice();return c[19]=e[s],c}function z(o,e,s){const c=o.slice();return c[19]=e[s],c}function G(o){let e,s,c,l,t,n,h,r,f,b;return{c(){e=p("span"),s=p("span"),c=R("Time : "),l=C(),t=p("input"),n=C(),h=p("span"),r=R(" Seconds"),this.h()},l(m){e=d(m,"SPAN",{class:!0});var v=k(e);s=d(v,"SPAN",{});var S=k(s);c=A(S,"Time : "),S.forEach(i),l=P(v),t=d(v,"INPUT",{class:!0,type:!0,placeholder:!0}),n=P(v),h=d(v,"SPAN",{});var N=k(h);r=A(N," Seconds"),N.forEach(i),v.forEach(i),this.h()},h(){E(t,"class","max-w-[90px] w-full h-10 px-2 text-base placeholder-gray-600 border border-slate-400 focus:outline-none focus:border-slate-600"),E(t,"type","number"),E(t,"placeholder","time (s)"),E(e,"class","flex items-center")},m(m,v){g(m,e,v),_(e,s),_(s,c),_(e,l),_(e,t),Y(t,o[0]),_(e,n),_(e,h),_(h,r),f||(b=B(t,"input",o[10]),f=!0)},p(m,v){v&1&&X(t.value)!==m[0]&&Y(t,m[0])},d(m){m&&i(e),f=!1,b()}}}function ne(o){let e,s,c,l;return{c(){e=p("button"),s=R("Reset"),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=k(e);s=A(n,"Reset"),n.forEach(i),this.h()},h(){E(e,"class","btn btn-warning text-warning-content shadow-custom")},m(t,n){g(t,e,n),_(e,s),c||(l=B(e,"click",o[13]),c=!0)},p:U,d(t){t&&i(e),c=!1,l()}}}function ce(o){let e;function s(t,n){return t[3]===!1?re:oe}let c=s(o),l=c(o);return{c(){l.c(),e=H()},l(t){l.l(t),e=H()},m(t,n){l.m(t,n),g(t,e,n)},p(t,n){c===(c=s(t))&&l?l.p(t,n):(l.d(1),l=c(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&i(e)}}}function oe(o){let e,s,c,l;return{c(){e=p("button"),s=R("Stop"),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=k(e);s=A(n,"Stop"),n.forEach(i),this.h()},h(){E(e,"class","btn btn-accent text-accent-content shadow-custom")},m(t,n){g(t,e,n),_(e,s),c||(l=B(e,"click",o[12]),c=!0)},p:U,d(t){t&&i(e),c=!1,l()}}}function re(o){let e,s,c,l;return{c(){e=p("button"),s=R("Start Timer"),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=k(e);s=A(n,"Start Timer"),n.forEach(i),this.h()},h(){E(e,"class","btn btn-info text-info-content shadow-custom")},m(t,n){g(t,e,n),_(e,s),c||(l=B(e,"click",o[11]),c=!0)},p:U,d(t){t&&i(e),c=!1,l()}}}function K(o){let e,s,c,l,t,n,h;return{c(){e=p("div"),s=p("span"),c=p("span"),l=C(),t=R(o[19]),n=C(),this.h()},l(r){e=d(r,"DIV",{class:!0});var f=k(e);s=d(f,"SPAN",{class:!0});var b=k(s);c=d(b,"SPAN",{style:!0}),k(c).forEach(i),b.forEach(i),l=P(f),t=A(f,o[19]),n=P(f),f.forEach(i),this.h()},h(){V(c,"--value",o[4][o[19]]),E(s,"class","countdown font-mono text-xs sm:text-sm"),E(e,"class",h="flex gap-1 sm:gap-0 sm:flex-col p-2 bg-neutral rounded text-neutral-content items-center text-[10px] sm:text-xs shadow-custom "+(o[0]<=10?"text-red-300":""))},m(r,f){g(r,e,f),_(e,s),_(s,c),_(e,l),_(e,t),_(e,n)},p(r,f){f&16&&V(c,"--value",r[4][r[19]]),f&1&&h!==(h="flex gap-1 sm:gap-0 sm:flex-col p-2 bg-neutral rounded text-neutral-content items-center text-[10px] sm:text-xs shadow-custom "+(r[0]<=10?"text-red-300":""))&&E(e,"class",h)},d(r){r&&i(e)}}}function ae(o){let e,s,c,l,t,n,h;return{c(){e=p("button"),s=R("Resume"),c=C(),l=p("button"),t=R("Reset"),this.h()},l(r){e=d(r,"BUTTON",{class:!0});var f=k(e);s=A(f,"Resume"),f.forEach(i),c=P(r),l=d(r,"BUTTON",{class:!0});var b=k(l);t=A(b,"Reset"),b.forEach(i),this.h()},h(){E(e,"class","btn btn-accent text-accent-content shadow-custom"),E(l,"class","btn btn-warning text-warning-content shadow-custom")},m(r,f){g(r,e,f),_(e,s),g(r,c,f),g(r,l,f),_(l,t),n||(h=[B(e,"click",o[16]),B(l,"click",o[17])],n=!0)},p:U,d(r){r&&i(e),r&&i(c),r&&i(l),n=!1,le(h)}}}function ue(o){let e;function s(t,n){return t[6]===!1?fe:ie}let c=s(o),l=c(o);return{c(){l.c(),e=H()},l(t){l.l(t),e=H()},m(t,n){l.m(t,n),g(t,e,n)},p(t,n){c===(c=s(t))&&l?l.p(t,n):(l.d(1),l=c(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&i(e)}}}function ie(o){let e,s,c,l;return{c(){e=p("button"),s=R("Pause"),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=k(e);s=A(n,"Pause"),n.forEach(i),this.h()},h(){E(e,"class","btn btn-accent text-accent-content shadow-custom")},m(t,n){g(t,e,n),_(e,s),c||(l=B(e,"click",o[15]),c=!0)},p:U,d(t){t&&i(e),c=!1,l()}}}function fe(o){let e,s,c,l;return{c(){e=p("button"),s=R("Start Counter"),this.h()},l(t){e=d(t,"BUTTON",{class:!0});var n=k(e);s=A(n,"Start Counter"),n.forEach(i),this.h()},h(){E(e,"class","btn btn-info text-info-content shadow-custom")},m(t,n){g(t,e,n),_(e,s),c||(l=B(e,"click",o[14]),c=!0)},p:U,d(t){t&&i(e),c=!1,l()}}}function Q(o){let e,s,c,l,t,n;return{c(){e=p("div"),s=p("span"),c=p("span"),l=C(),t=R(o[19]),n=C(),this.h()},l(h){e=d(h,"DIV",{class:!0});var r=k(e);s=d(r,"SPAN",{class:!0});var f=k(s);c=d(f,"SPAN",{style:!0}),k(c).forEach(i),f.forEach(i),l=P(r),t=A(r,o[19]),n=P(r),r.forEach(i),this.h()},h(){V(c,"--value",o[7][o[19]]),E(s,"class","countdown font-mono text-xs sm:text-sm"),E(e,"class","flex gap-1 sm:gap-0 sm:flex-col p-2 bg-neutral rounded text-neutral-content items-center text-[10px] sm:text-xs shadow-custom")},m(h,r){g(h,e,r),_(e,s),_(s,c),_(e,l),_(e,t),_(e,n)},p(h,r){r&128&&V(c,"--value",h[7][h[19]])},d(h){h&&i(e)}}}function _e(o){let e,s,c,l,t,n,h,r,f,b,m=!o[3]&&!o[2]&&G(o);function v(a,T){return a[2]===!1?ce:ne}let S=v(o),N=S(o),j=["hours","min","sec"],x=[];for(let a=0;a<3;a+=1)x[a]=K(z(o,j,a));function D(a,T){return a[5]===!1?ue:ae}let F=D(o),w=F(o),q=["hours","min","sec"],y=[];for(let a=0;a<3;a+=1)y[a]=Q(Z(o,q,a));return{c(){e=p("main"),s=p("center"),m&&m.c(),c=C(),l=p("center"),N.c(),t=C(),n=p("center");for(let a=0;a<3;a+=1)x[a].c();h=C(),r=p("center"),w.c(),f=C(),b=p("center");for(let a=0;a<3;a+=1)y[a].c();this.h()},l(a){e=d(a,"MAIN",{});var T=k(e);s=d(T,"CENTER",{class:!0});var u=k(s);m&&m.l(u),u.forEach(i),c=P(T),l=d(T,"CENTER",{class:!0});var I=k(l);N.l(I),t=P(I),n=d(I,"CENTER",{class:!0});var J=k(n);for(let O=0;O<3;O+=1)x[O].l(J);J.forEach(i),I.forEach(i),h=P(T),r=d(T,"CENTER",{class:!0});var M=k(r);w.l(M),f=P(M),b=d(M,"CENTER",{class:!0});var L=k(b);for(let O=0;O<3;O+=1)y[O].l(L);L.forEach(i),M.forEach(i),T.forEach(i),this.h()},h(){E(s,"class","flex flex-col gap-2 mb-4 mt-1 items-center"),E(n,"class","mt-2 sm:mt-3 grid grid-flow-col gap-3 text-center auto-cols-max justify-center"),E(l,"class","mt-8"),E(b,"class","mt-2 sm:mt-3 grid grid-flow-col gap-3 text-center auto-cols-max justify-center"),E(r,"class","mt-16")},m(a,T){g(a,e,T),_(e,s),m&&m.m(s,null),_(e,c),_(e,l),N.m(l,null),_(l,t),_(l,n);for(let u=0;u<3;u+=1)x[u]&&x[u].m(n,null);_(e,h),_(e,r),w.m(r,null),_(r,f),_(r,b);for(let u=0;u<3;u+=1)y[u]&&y[u].m(b,null)},p(a,[T]){if(!a[3]&&!a[2]?m?m.p(a,T):(m=G(a),m.c(),m.m(s,null)):m&&(m.d(1),m=null),S===(S=v(a))&&N?N.p(a,T):(N.d(1),N=S(a),N&&(N.c(),N.m(l,t))),T&17){j=["hours","min","sec"];let u;for(u=0;u<3;u+=1){const I=z(a,j,u);x[u]?x[u].p(I,T):(x[u]=K(I),x[u].c(),x[u].m(n,null))}for(;u<3;u+=1)x[u].d(1)}if(F===(F=D(a))&&w?w.p(a,T):(w.d(1),w=F(a),w&&(w.c(),w.m(r,f))),T&128){q=["hours","min","sec"];let u;for(u=0;u<3;u+=1){const I=Z(a,q,u);y[u]?y[u].p(I,T):(y[u]=Q(I),y[u].c(),y[u].m(b,null))}for(;u<3;u+=1)y[u].d(1)}},i:U,o:U,d(a){a&&i(e),m&&m.d(),N.d(),W(x,a),w.d(),W(y,a)}}}function me(o,e,s){const{secondsToHMS:c}=se("utilities");let l=!1,t=!1,n=600,h=c(n);const r=()=>{s(3,t=!0);const a=setInterval(()=>{n<=0||t===!1?(s(0,n=600),clearInterval(a),s(3,t=!1)):s(0,n-=1)},1e3)};let f=!1,b=!1,m=0,v=c(m);const S=()=>{s(6,b=!0);const a=setInterval(()=>{b===!1?clearInterval(a):s(1,m+=1)},1e3)};function N(){n=X(this.value),s(0,n)}const j=()=>{r()},x=()=>{s(2,l=!0),s(3,t=!1)},D=()=>{s(2,l=!1),s(0,n=600)},F=()=>{S()},w=()=>{s(5,f=!0),s(6,b=!1)},q=()=>{s(5,f=!1),S()},y=()=>{s(5,f=!1),s(6,b=!1),s(1,m=0)};return o.$$.update=()=>{o.$$.dirty&1&&n>359999&&s(0,n=359999),o.$$.dirty&1&&s(4,h=c(n)),o.$$.dirty&2&&s(7,v=c(m))},[n,m,l,t,h,f,b,v,r,S,N,j,x,D,F,w,q,y]}class pe extends ${constructor(e){super(),ee(this,e,me,_e,te,{})}}export{pe as component};
