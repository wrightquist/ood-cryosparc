import{S as ae,h as ne,s as re,Q as T,ah as U,R as D,T as g,ai as R,p as v,U as o,k as V,a2 as w,ao as J,ap as x,a6 as pe,I as W,a7 as ve,J as X,ae as be,ac as $,L as _e,g as P,K as O,ad as K,C as ye,D as ge,E as we,o as Z,t as ee,H as ke,j as ie,l as Ee,m as Te}from"./vendor.3ae73048.js";import{ct as A,cu as z,cv as F,aw as De}from"./index.146c2037.js";import{ce as k,cf as H}from"./index.9987ff70.js";import"./types.8cb6216c.js";import{t as Q}from"./Spinner.012207c4.js";import{I as Ne}from"./Icon.61279884.js";import{D as Ge}from"./DotsCircleHorizontal.2485dec6.js";function Ie(n){let t,e,l,i,c,h,d;return{c(){t=T("span"),e=T("span"),this.h()},l(a){t=D(a,"SPAN",{class:!0,role:!0,tabindex:!0,id:!0});var f=g(t);e=D(f,"SPAN",{"aria-hidden":!0,class:!0}),g(e).forEach(v),f.forEach(v),this.h()},h(){o(e,"aria-hidden","true"),o(e,"class",l=""+((n[8]===!0?"translate-x-4":"translate-x-0")+" -translate-y-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transform transition ease-in-out duration-200")),o(t,"class",i=""+((n[8]===!0?n[0]?n[10]:n[13]:"bg-gray-200")+" relative inline-block flex-no-shrink h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline")),o(t,"role","checkbox"),o(t,"tabindex","0"),o(t,"id",c=""+(n[2]+"-param-"+n[3]))},m(a,f){V(a,t,f),w(t,e),h||(d=[O(t,"click",n[20]),O(t,"keydown",n[21])],h=!0)},p(a,f){f&256&&l!==(l=""+((a[8]===!0?"translate-x-4":"translate-x-0")+" -translate-y-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transform transition ease-in-out duration-200"))&&o(e,"class",l),f&9473&&i!==(i=""+((a[8]===!0?a[0]?a[10]:a[13]:"bg-gray-200")+" relative inline-block flex-no-shrink h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"))&&o(t,"class",i),f&12&&c!==(c=""+(a[2]+"-param-"+a[3]))&&o(t,"id",c)},d(a){a&&v(t),h=!1,K(d)}}}function Le(n){let t,e,l,i,c,h,d,a,f,I,j,S;return{c(){t=T("div"),e=T("div"),l=T("input"),d=W(),a=T("button"),f=U("svg"),I=U("path"),this.h()},l(m){t=D(m,"DIV",{class:!0});var b=g(t);e=D(b,"DIV",{class:!0});var G=g(e);l=D(G,"INPUT",{id:!0,class:!0,placeholder:!0}),G.forEach(v),d=X(b),a=D(b,"BUTTON",{class:!0,type:!0});var _=g(a);f=R(_,"svg",{class:!0,viewBox:!0,fill:!0});var s=g(f);I=R(s,"path",{d:!0}),g(I).forEach(v),s.forEach(v),_.forEach(v),b.forEach(v),this.h()},h(){o(l,"id",i=""+(n[2]+"-param-"+n[3])),o(l,"class",c="px-2 py-1 block w-full text-xs leading-5 rounded-none rounded-l-md font-mono border "+(n[0]?n[11]:n[14])),o(l,"placeholder","Select a path"),l.value=n[8],l.readOnly=h=n[0]&&n[1],o(e,"class","relative flex-grow focus-within:z-10"),o(I,"d","M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"),o(f,"class","w-4 h-4 text-gray-400"),o(f,"viewBox","0 0 20 20"),o(f,"fill","currentColor"),o(a,"class","-ml-px relative inline-flex items-center px-1.5 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"),o(a,"type","button"),o(t,"class","w-full flex rounded-md shadow-sm")},m(m,b){V(m,t,b),w(t,e),w(e,l),w(t,d),w(t,a),w(a,f),w(f,I),j||(S=[O(l,"keydown",n[17]),O(l,"blur",n[18]),O(a,"click",n[19]),J(Q.call(null,a,{content:"Select path"}))],j=!0)},p(m,b){b&12&&i!==(i=""+(m[2]+"-param-"+m[3]))&&o(l,"id",i),b&18433&&c!==(c="px-2 py-1 block w-full text-xs leading-5 rounded-none rounded-l-md font-mono border "+(m[0]?m[11]:m[14]))&&o(l,"class",c),b&256&&l.value!==m[8]&&(l.value=m[8]),b&3&&h!==(h=m[0]&&m[1])&&(l.readOnly=h)},d(m){m&&v(t),j=!1,K(S)}}}function Se(n){let t,e,l,i,c,h,d;return{c(){t=T("div"),e=T("input"),this.h()},l(a){t=D(a,"DIV",{class:!0});var f=g(t);e=D(f,"INPUT",{id:!0,class:!0,placeholder:!0,type:!0}),f.forEach(v),this.h()},h(){o(e,"id",l=""+(n[2]+"-param-"+n[3])),o(e,"class",i="px-2 py-1 block w-full text-sm leading-5 rounded-md border border-gray-300 "+(n[0]?n[11]:n[14])),o(e,"placeholder","Text"),o(e,"type","text"),e.value=n[8],e.readOnly=c=n[0]&&n[1],o(t,"class","w-56 flex rounded-md shadow-sm")},m(a,f){V(a,t,f),w(t,e),h||(d=[O(e,"keydown",n[17]),O(e,"blur",n[18])],h=!0)},p(a,f){f&12&&l!==(l=""+(a[2]+"-param-"+a[3]))&&o(e,"id",l),f&18433&&i!==(i="px-2 py-1 block w-full text-sm leading-5 rounded-md border border-gray-300 "+(a[0]?a[11]:a[14]))&&o(e,"class",i),f&256&&e.value!==a[8]&&(e.value=a[8]),f&3&&c!==(c=a[0]&&a[1])&&(e.readOnly=c)},d(a){a&&v(t),h=!1,K(d)}}}function Be(n){let t,e,l,i,c,h,d;return{c(){t=T("div"),e=T("input"),this.h()},l(a){t=D(a,"DIV",{class:!0});var f=g(t);e=D(f,"INPUT",{id:!0,class:!0,placeholder:!0,type:!0}),f.forEach(v),this.h()},h(){o(e,"id",l=""+(n[2]+"-param-"+n[3])),o(e,"class",i="px-2 py-1 block w-full text-sm leading-5 rounded-md border border-gray-300 "+(n[0]?n[11]:n[14])),o(e,"placeholder","Number"),o(e,"type","number"),e.value=n[8],e.readOnly=c=n[0]&&n[1],o(t,"class","w-36 flex rounded-md shadow-sm")},m(a,f){V(a,t,f),w(t,e),h||(d=[O(e,"keydown",n[17]),O(e,"blur",n[18])],h=!0)},p(a,f){f&12&&l!==(l=""+(a[2]+"-param-"+a[3]))&&o(e,"id",l),f&18433&&i!==(i="px-2 py-1 block w-full text-sm leading-5 rounded-md border border-gray-300 "+(a[0]?a[11]:a[14]))&&o(e,"class",i),f&256&&e.value!==a[8]&&(e.value=a[8]),f&3&&c!==(c=a[0]&&a[1])&&(e.readOnly=c)},d(a){a&&v(t),h=!1,K(d)}}}function Ce(n){let t,e,l,i,c;return{c(){t=T("button"),e=U("svg"),l=U("path"),this.h()},l(h){t=D(h,"BUTTON",{type:!0,class:!0});var d=g(t);e=R(d,"svg",{class:!0,viewBox:!0,fill:!0});var a=g(e);l=R(a,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(l).forEach(v),a.forEach(v),d.forEach(v),this.h()},h(){o(l,"fill-rule","evenodd"),o(l,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),o(l,"clip-rule","evenodd"),o(e,"class","w-4 h-4 text-gray-600"),o(e,"viewBox","0 0 20 20"),o(e,"fill","currentColor"),o(t,"type","button"),o(t,"class","ml-1 inline-flex items-center px-1.5 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150")},m(h,d){V(h,t,d),w(t,e),w(e,l),i||(c=[O(t,"click",n[23]),J(Q.call(null,t,{content:"Reset to default"}))],i=!0)},p:$,d(h){h&&v(t),i=!1,K(c)}}}function Oe(n){let t,e,l,i,c,h;return{c(){t=T("button"),e=U("svg"),l=U("path"),this.h()},l(d){t=D(d,"BUTTON",{type:!0,class:!0});var a=g(t);e=R(a,"svg",{class:!0,viewBox:!0,fill:!0});var f=g(e);l=R(f,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(l).forEach(v),f.forEach(v),a.forEach(v),this.h()},h(){o(l,"fill-rule","evenodd"),o(l,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),o(l,"clip-rule","evenodd"),o(e,"class","w-4 h-4 text-gray-600"),o(e,"viewBox","0 0 20 20"),o(e,"fill","currentColor"),o(t,"type","button"),o(t,"class","ml-1 inline-flex items-center px-1.5 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150")},m(d,a){V(d,t,a),w(t,e),w(e,l),c||(h=[O(t,"click",n[22]),J(i=Q.call(null,t,{content:n[7]?"Clear unsaved value":"Reset to default"}))],c=!0)},p(d,a){i&&x(i.update)&&a&128&&i.update.call(null,{content:d[7]?"Clear unsaved value":"Reset to default"})},d(d){d&&v(t),c=!1,K(h)}}}function oe(n){let t,e,l,i,c,h;return{c(){t=T("button"),e=U("svg"),l=U("path"),this.h()},l(d){t=D(d,"BUTTON",{type:!0,class:!0});var a=g(t);e=R(a,"svg",{viewBox:!0,fill:!0,class:!0});var f=g(e);l=R(f,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(l).forEach(v),f.forEach(v),a.forEach(v),this.h()},h(){o(l,"fill-rule","evenodd"),o(l,"d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"),o(l,"clip-rule","evenodd"),o(e,"viewBox","0 0 20 20"),o(e,"fill","currentColor"),o(e,"class","question-mark-circle w-5 h-5"),o(t,"type","button"),o(t,"class","ml-2 inline-flex w-6 h-6 items-center justify-center text-gray-400 focus:text-gray-600 hover:text-gray-600 focus:outline-none cursor-help opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-150")},m(d,a){V(d,t,a),w(t,e),w(e,l),c||(h=J(i=Q.call(null,t,{content:n[5],placement:"right"})),c=!0)},p(d,a){i&&x(i.update)&&a&32&&i.update.call(null,{content:d[5],placement:"right"})},d(d){d&&v(t),c=!1,h()}}}function Ve(n){let t,e,l,i,c,h,d,a,f,I;function j(u,E){if(u[6]==="number")return Be;if(u[6]==="string")return Se;if(u[6]==="path")return Le;if(u[6]==="boolean")return Ie}let S=j(n),m=S&&S(n);function b(u,E){if(u[6]!=="boolean"&&!u[0]&&(u[7]||u[9]))return Oe;if(u[6]!=="boolean"&&u[0]&&!u[1]&&u[16])return Ce}let G=b(n),_=G&&G(n),s=n[5]&&oe(n);return{c(){t=T("div"),e=T("div"),l=T("label"),i=pe(n[4]),d=W(),a=T("div"),m&&m.c(),f=W(),_&&_.c(),I=W(),s&&s.c(),this.h()},l(u){t=D(u,"DIV",{class:!0});var E=g(t);e=D(E,"DIV",{class:!0});var Y=g(e);l=D(Y,"LABEL",{for:!0,class:!0});var M=g(l);i=ve(M,n[4]),M.forEach(v),Y.forEach(v),d=X(E),a=D(E,"DIV",{class:!0});var N=g(a);m&&m.l(N),f=X(N),_&&_.l(N),I=X(N),s&&s.l(N),N.forEach(v),E.forEach(v),this.h()},h(){o(l,"for",c=""+(n[2]+"-param-"+n[3])),o(l,"class",h="block text-xs font-medium leading-4 "+(n[0]?n[12]:n[15])),o(e,"class","flex justify-between"),o(a,"class","mt-1 flex items-center"),o(t,"class","parameter mt-2 group")},m(u,E){V(u,t,E),w(t,e),w(e,l),w(l,i),w(t,d),w(t,a),m&&m.m(a,null),w(a,f),_&&_.m(a,null),w(a,I),s&&s.m(a,null)},p(u,[E]){E&16&&be(i,u[4]),E&12&&c!==(c=""+(u[2]+"-param-"+u[3]))&&o(l,"for",c),E&36865&&h!==(h="block text-xs font-medium leading-4 "+(u[0]?u[12]:u[15]))&&o(l,"class",h),S===(S=j(u))&&m?m.p(u,E):(m&&m.d(1),m=S&&S(u),m&&(m.c(),m.m(a,f))),G===(G=b(u))&&_?_.p(u,E):(_&&_.d(1),_=G&&G(u),_&&(_.c(),_.m(a,I))),u[5]?s?s.p(u,E):(s=oe(u),s.c(),s.m(a,null)):s&&(s.d(1),s=null)},i:$,o:$,d(u){u&&v(t),m&&m.d(),_&&_.d(),s&&s.d()}}}function je(n,t,e){let l,i,c,h,d,a,f,I,j,S,m;_e(n,k,r=>e(30,m=r));let{isExposureGroup:b=!1}=t,{isRequiredEG:G=!1}=t,{isEnabledEG:_=!1}=t,{sectionName:s}=t,{name:u}=t,{title:E}=t,{description:Y}=t,{isAdvanced:M=!1}=t,{isDefault:N}=t,{baseValue:B}=t,{value:C}=t,{type:te}=t,L;const ue=async r=>{const p=r.target.type==="number";if(r.keyCode===13&&b&&!_)if(r.preventDefault(),r.currentTarget.value.length>0){const y=p?parseFloat(r.currentTarget.value):r.currentTarget.value;y!==L&&H(s,u,y)}else H(s,u,B);else if(r.keyCode===13&&!b)if(r.preventDefault(),r.currentTarget.value.length>0){const y=p?parseFloat(r.currentTarget.value):r.currentTarget.value;if(y!==L){const q=P(k);typeof q[s]=="undefined"&&(q[s]={}),q[s][u]=y,k.set(q)}}else{const y=P(k);typeof y[s]!="undefined"&&(delete y[s][u],Object.keys(y[s]).length===0&&delete y[s],k.set(y))}},fe=async r=>{const p=r.target.type==="number";if(r.preventDefault(),b&&!_)if(r.currentTarget.value.length>0){const y=p?parseFloat(r.currentTarget.value):r.currentTarget.value;y!==L&&H(s,u,y)}else H(s,u,B);else if(!b)if(r.currentTarget.value.length>0){const y=p?parseFloat(r.currentTarget.value):r.currentTarget.value;if(y!==L){const q=P(k);typeof q[s]=="undefined"&&(q[s]={}),q[s][u]=y,k.set(q)}}else{const y=P(k);typeof y[s]!="undefined"&&(delete y[s][u],Object.keys(y[s]).length===0&&delete y[s],k.set(y)),r.currentTarget.value=L}},de=()=>{De(L,r=>{if(!!r.length&&b&&!_)r!==L&&H(s,u,r);else if(!!r.length&&!b&&r!==L){const p=P(k);typeof p[s]=="undefined"&&(p[s]={}),p[s][u]=r,k.set(p)}})},le=async()=>{if(b&&(u==="file_engine_enable"||u==="ignore_exposures"||!_))H(s,u,!C);else if(!b){const r=!L;if(r!==C){const p=P(k);typeof p[s]=="undefined"&&(p[s]={}),p[s][u]=r,k.set(p)}else{const p=P(k);typeof p[s]!="undefined"&&(delete p[s][u],Object.keys(p[s]).length===0&&delete p[s],k.set(p))}}},ce=async r=>{(r.keyCode===13||r.keyCode===32)&&(r.preventDefault(),le())},he=async r=>{if(r.preventDefault(),i){const p=P(k);typeof p[s]!="undefined"&&(delete p[s][u],Object.keys(p[s]).length===0&&delete p[s],k.set(p))}else if(c){const p=P(k);typeof p[s]=="undefined"&&(p[s]={}),p[s][u]=B,k.set(p)}},me=async r=>{r.preventDefault(),H(s,u,B)};return n.$$set=r=>{"isExposureGroup"in r&&e(0,b=r.isExposureGroup),"isRequiredEG"in r&&e(24,G=r.isRequiredEG),"isEnabledEG"in r&&e(1,_=r.isEnabledEG),"sectionName"in r&&e(2,s=r.sectionName),"name"in r&&e(3,u=r.name),"title"in r&&e(4,E=r.title),"description"in r&&e(5,Y=r.description),"isAdvanced"in r&&e(25,M=r.isAdvanced),"isDefault"in r&&e(26,N=r.isDefault),"baseValue"in r&&e(27,B=r.baseValue),"value"in r&&e(28,C=r.value),"type"in r&&e(6,te=r.type)},n.$$.update=()=>{var r,p;n.$$.dirty&1476395020&&(typeof((r=m==null?void 0:m[s])==null?void 0:r[u])!="undefined"?e(8,L=m[s][u]):C!==B?e(8,L=C):e(8,L=B)),n.$$.dirty&436207616&&e(29,l=!M&&C===null&&B===null),n.$$.dirty&1073741836&&e(7,i=typeof((p=m==null?void 0:m[s])==null?void 0:p[u])!="undefined"),n.$$.dirty&201326720&&e(9,c=!i&&!N&&B!==null),n.$$.dirty&402653185&&e(16,h=b&&C!==B),n.$$.dirty&603979904&&e(15,d=i?A.edited:l?A.required:N?A.default:A.spec),n.$$.dirty&603979904&&e(14,a=i?z.edited:l?z.required:N?z.default:z.spec),n.$$.dirty&603979904&&e(13,f=i?F.edited:l?F.required:N?F.default:F.spec),n.$$.dirty&352321536&&e(12,I=C===null&&G?A.required:N?A.default:A.spec),n.$$.dirty&352321536&&e(11,j=C===null&&G?z.required:N?z.default:z.spec),n.$$.dirty&352321536&&e(10,S=C===null&&G?F.required:N?F.default:F.spec)},[b,_,s,u,E,Y,te,i,L,c,S,j,I,f,a,d,h,ue,fe,de,le,ce,he,me,G,M,N,B,C,l,m]}class Ke extends ae{constructor(t){super();ne(this,t,je,Ve,re,{isExposureGroup:0,isRequiredEG:24,isEnabledEG:1,sectionName:2,name:3,title:4,description:5,isAdvanced:25,isDefault:26,baseValue:27,value:28,type:6})}}function se(n){let t,e,l,i,c,h;return e=new Ne({props:{src:Ge,modifier:"inline-block text-gray-300 hover:text-gray-700 cursor-help "+n[2]}}),{c(){t=T("span"),ye(e.$$.fragment),this.h()},l(d){t=D(d,"SPAN",{class:!0});var a=g(t);ge(e.$$.fragment,a),a.forEach(v),this.h()},h(){o(t,"class","inline")},m(d,a){V(d,t,a),we(e,t,null),i=!0,c||(h=J(l=Q.call(null,t,{content:n[0]})),c=!0)},p(d,a){const f={};a&4&&(f.modifier="inline-block text-gray-300 hover:text-gray-700 cursor-help "+d[2]),e.$set(f),l&&x(l.update)&&a&1&&l.update.call(null,{content:d[0]})},i(d){i||(Z(e.$$.fragment,d),i=!0)},o(d){ee(e.$$.fragment,d),i=!1},d(d){d&&v(t),ke(e),c=!1,h()}}}function qe(n){let t,e,l=n[1]&&se(n);return{c(){l&&l.c(),t=ie()},l(i){l&&l.l(i),t=ie()},m(i,c){l&&l.m(i,c),V(i,t,c),e=!0},p(i,[c]){i[1]?l?(l.p(i,c),c&2&&Z(l,1)):(l=se(i),l.c(),Z(l,1),l.m(t.parentNode,t)):l&&(Ee(),ee(l,1,1,()=>{l=null}),Te())},i(i){e||(Z(l),e=!0)},o(i){ee(l),e=!1},d(i){l&&l.d(i),i&&v(t)}}}function Pe(n,t,e){let{text:l=null}=t,{show:i=!0}=t,{modifier:c=""}=t;return n.$$set=h=>{"text"in h&&e(0,l=h.text),"show"in h&&e(1,i=h.show),"modifier"in h&&e(2,c=h.modifier)},[l,i,c]}class Ye extends ae{constructor(t){super();ne(this,t,Pe,qe,re,{text:0,show:1,modifier:2})}}export{Ye as I,Ke as P};
