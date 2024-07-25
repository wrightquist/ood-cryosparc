import{S as ue,h as pe,s as me,Q as E,R as j,T,p as b,U as D,k as A,ao as Q,l as N,t as w,m as F,o as $,ap as Y,C as V,I as C,a6 as q,D as U,J as S,a7 as H,E as G,a2 as P,ae as R,H as J,ak as ce}from"./vendor.3ae73048.js";import{H as W,bp as X}from"./index.146c2037.js";import{aY as ge}from"./router.1b465492.js";import"./types.8cb6216c.js";import{t as x}from"./Spinner.012207c4.js";import{J as Z,C as he,G as _e}from"./Chip.969e3874.js";import{E as K}from"./ElapsedTime.0d721130.js";import{T as de}from"./Tags.102dc558.js";import{T as be}from"./Tag.4ad706f9.js";import{S as z}from"./Stopwatch.ca505a3d.js";import{S as $e}from"./Server.520ba5a5.js";import"./index.2e3bb17a.js";import"./Icon.61279884.js";import"./ChevronUp.0ab7bee0.js";import"./helpers.7177ca38.js";import"./TagCount.d4471cb8.js";function ee(f,t,e){const r=f.slice();return r[21]=t[e],r}function te(f){let t,e,r,n,o,l,s;const p=[ye,we,ve,ke],c=[];function u(a,i){return a[16]==="running"&&a[11]!==null?0:a[16]==="waiting"&&a[10]!==null?1:a[16]==="queued"&&a[9]!==null?2:typeof a[8]=="number"?3:-1}return~(e=u(f))&&(r=c[e]=p[e](f)),{c(){t=E("div"),r&&r.c(),this.h()},l(a){t=j(a,"DIV",{class:!0});var i=T(t);r&&r.l(i),i.forEach(b),this.h()},h(){D(t,"class","flex items-center gap-1 px-1 cursor-default")},m(a,i){A(a,t,i),~e&&c[e].m(t,null),o=!0,l||(s=Q(n=x.call(null,t,{content:`Created on ${W(f[12],"PPPPpp")} by ${f[13]}`,interactive:!0})),l=!0)},p(a,i){let m=e;e=u(a),e===m?~e&&c[e].p(a,i):(r&&(N(),w(c[m],1,1,()=>{c[m]=null}),F()),~e?(r=c[e],r?r.p(a,i):(r=c[e]=p[e](a),r.c()),$(r,1),r.m(t,null)):r=null),n&&Y(n.update)&&i&12288&&n.update.call(null,{content:`Created on ${W(a[12],"PPPPpp")} by ${a[13]}`,interactive:!0})},i(a){o||($(r),o=!0)},o(a){w(r),o=!1},d(a){a&&b(t),~e&&c[e].d(),l=!1,s()}}}function ke(f){let t,e,r,n=X(f[8])+"",o,l;return t=new z({props:{modifier:"text-gray-600 flex-shrink-0"}}),{c(){V(t.$$.fragment),e=C(),r=E("p"),o=q(n),this.h()},l(s){U(t.$$.fragment,s),e=S(s),r=j(s,"P",{class:!0});var p=T(r);o=H(p,n),p.forEach(b),this.h()},h(){D(r,"class","text-xs leading-5 text-gray-600 tabular-nums flex-shrink-0")},m(s,p){G(t,s,p),A(s,e,p),A(s,r,p),P(r,o),l=!0},p(s,p){(!l||p&256)&&n!==(n=X(s[8])+"")&&R(o,n)},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){w(t.$$.fragment,s),l=!1},d(s){J(t,s),s&&b(e),s&&b(r)}}}function ve(f){let t,e,r,n,o;return t=new z({props:{modifier:"text-teal-700 flex-shrink-0"}}),n=new K({props:{elapsedDate:f[9]}}),{c(){V(t.$$.fragment),e=C(),r=E("p"),V(n.$$.fragment),this.h()},l(l){U(t.$$.fragment,l),e=S(l),r=j(l,"P",{class:!0});var s=T(r);U(n.$$.fragment,s),s.forEach(b),this.h()},h(){D(r,"class","text-xs leading-5 text-gray-600 tabular-nums flex-shrink-0")},m(l,s){G(t,l,s),A(l,e,s),A(l,r,s),G(n,r,null),o=!0},p(l,s){const p={};s&512&&(p.elapsedDate=l[9]),n.$set(p)},i(l){o||($(t.$$.fragment,l),$(n.$$.fragment,l),o=!0)},o(l){w(t.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){J(t,l),l&&b(e),l&&b(r),J(n)}}}function we(f){let t,e,r,n,o;return t=new z({props:{modifier:"text-pink-600 flex-shrink-0"}}),n=new K({props:{elapsedDate:f[10]}}),{c(){V(t.$$.fragment),e=C(),r=E("p"),V(n.$$.fragment),this.h()},l(l){U(t.$$.fragment,l),e=S(l),r=j(l,"P",{class:!0});var s=T(r);U(n.$$.fragment,s),s.forEach(b),this.h()},h(){D(r,"class","text-xs leading-5 text-gray-600 tabular-nums flex-shrink-0")},m(l,s){G(t,l,s),A(l,e,s),A(l,r,s),G(n,r,null),o=!0},p(l,s){const p={};s&1024&&(p.elapsedDate=l[10]),n.$set(p)},i(l){o||($(t.$$.fragment,l),$(n.$$.fragment,l),o=!0)},o(l){w(t.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){J(t,l),l&&b(e),l&&b(r),J(n)}}}function ye(f){let t,e,r,n,o;return t=new z({props:{modifier:"text-blue-600 flex-shrink-0"}}),n=new K({props:{elapsedDate:f[11]}}),{c(){V(t.$$.fragment),e=C(),r=E("p"),V(n.$$.fragment),this.h()},l(l){U(t.$$.fragment,l),e=S(l),r=j(l,"P",{class:!0});var s=T(r);U(n.$$.fragment,s),s.forEach(b),this.h()},h(){D(r,"class","text-xs leading-5 text-gray-600 tabular-nums flex-shrink-0")},m(l,s){G(t,l,s),A(l,e,s),A(l,r,s),G(n,r,null),o=!0},p(l,s){const p={};s&2048&&(p.elapsedDate=l[11]),n.$set(p)},i(l){o||($(t.$$.fragment,l),$(n.$$.fragment,l),o=!0)},o(l){w(t.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){J(t,l),l&&b(e),l&&b(r),J(n)}}}function le(f){let t,e,r,n,o,l,s,p,c;return e=new $e({props:{modifier:"text-gray-600 flex-shrink-0"}}),{c(){t=E("div"),V(e.$$.fragment),r=C(),n=E("p"),o=q(f[6]),this.h()},l(u){t=j(u,"DIV",{class:!0});var a=T(t);U(e.$$.fragment,a),r=S(a),n=j(a,"P",{class:!0});var i=T(n);o=H(i,f[6]),i.forEach(b),a.forEach(b),this.h()},h(){D(n,"class","text-xs leading-5 text-gray-600 truncate"),D(t,"class","flex items-center gap-1 px-1 max-w-full cursor-default")},m(u,a){A(u,t,a),G(e,t,null),P(t,r),P(t,n),P(n,o),s=!0,p||(c=Q(l=x.call(null,t,{content:`Target: ${f[2]} (${f[1]})`,interactive:!0})),p=!0)},p(u,a){(!s||a&64)&&R(o,u[6]),l&&Y(l.update)&&a&6&&l.update.call(null,{content:`Target: ${u[2]} (${u[1]})`,interactive:!0})},i(u){s||($(e.$$.fragment,u),s=!0)},o(u){w(e.$$.fragment,u),s=!1},d(u){u&&b(t),J(e),p=!1,c()}}}function re(f){let t,e,r,n,o,l=f[3].length+"",s,p=(f[16]==="running"?`/${f[5]}`:"")+"",c,u,a,i,m,g;r=new he({props:{modifier:"text-gray-600 flex-shrink-0 mr-1"}});let h=f[3],_=[];for(let d=0;d<h.length;d+=1)_[d]=se(ee(f,h,d));return{c(){t=E("div"),e=E("span"),V(r.$$.fragment),n=C(),o=E("p"),s=q(l),c=q(p),a=C();for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){t=j(d,"DIV",{class:!0});var k=T(t);e=j(k,"SPAN",{class:!0});var v=T(e);U(r.$$.fragment,v),n=S(v),o=j(v,"P",{class:!0});var I=T(o);s=H(I,l),c=H(I,p),I.forEach(b),v.forEach(b),a=S(k);for(let y=0;y<_.length;y+=1)_[y].l(k);k.forEach(b),this.h()},h(){D(o,"class","text-xs leading-5 text-gray-600 truncate"),D(e,"class","inline-flex items-center justify-center"),D(t,"class","flex flex-wrap items-center gap-1 px-1 cursor-default")},m(d,k){A(d,t,k),P(t,e),G(r,e,null),P(e,n),P(e,o),P(o,s),P(o,c),P(t,a);for(let v=0;v<_.length;v+=1)_[v].m(t,null);i=!0,m||(g=Q(u=x.call(null,e,{content:`${f[3].length} GPU${f[3].length>1?"s":""} allocated of ${f[5]} available on target`,interactive:!0})),m=!0)},p(d,k){if((!i||k&8)&&l!==(l=d[3].length+"")&&R(s,l),(!i||k&65568)&&p!==(p=(d[16]==="running"?`/${d[5]}`:"")+"")&&R(c,p),u&&Y(u.update)&&k&40&&u.update.call(null,{content:`${d[3].length} GPU${d[3].length>1?"s":""} allocated of ${d[5]} available on target`,interactive:!0}),k&24){h=d[3];let v;for(v=0;v<h.length;v+=1){const I=ee(d,h,v);_[v]?_[v].p(I,k):(_[v]=se(I),_[v].c(),_[v].m(t,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=h.length}},i(d){i||($(r.$$.fragment,d),i=!0)},o(d){w(r.$$.fragment,d),i=!1},d(d){d&&b(t),J(r),ce(_,d),m=!1,g()}}}function se(f){var l,s,p;let t,e=((p=(s=(l=f[4])==null?void 0:l.find(o))==null?void 0:s.name)!=null?p:f[21])+"",r,n;function o(...c){return f[19](f[21],...c)}return{c(){t=E("span"),r=q(e),n=C(),this.h()},l(c){t=j(c,"SPAN",{class:!0});var u=T(t);r=H(u,e),n=S(u),u.forEach(b),this.h()},h(){D(t,"class","inline-flex flex-shrink-0 items-center leading-none px-2 py-1 rounded text-xs font-base bg-gray-100 text-gray-800")},m(c,u){A(c,t,u),P(t,r),P(t,n)},p(c,u){var a,i,m;f=c,u&24&&e!==(e=((m=(i=(a=f[4])==null?void 0:a.find(o))==null?void 0:i.name)!=null?m:f[21])+"")&&R(r,e)},d(c){c&&b(t)}}}function ne(f){let t,e,r,n,o,l,s,p,c,u;e=new _e({props:{modifier:"text-gray-600 flex-shrink-0"}});let a=f[16]==="building"&&ae();return{c(){t=E("div"),V(e.$$.fragment),r=C(),n=E("p"),o=q(f[7]),l=C(),a&&a.c(),this.h()},l(i){t=j(i,"DIV",{class:!0});var m=T(t);U(e.$$.fragment,m),r=S(m),n=j(m,"P",{class:!0});var g=T(n);o=H(g,f[7]),l=S(g),a&&a.l(g),g.forEach(b),m.forEach(b),this.h()},h(){D(n,"class","text-xs leading-5 text-gray-600 truncate"),D(t,"class","flex items-center gap-1 px-1 cursor-default")},m(i,m){var g;A(i,t,m),G(e,t,null),P(t,r),P(t,n),P(n,o),P(n,l),a&&a.m(n,null),p=!0,c||(u=Q(s=x.call(null,t,{component:Z,componentProps:{label:`${f[7]} Custom Parameter${f[7]>1?"s":""}:`,customParams:Object.entries((g=f[14])!=null?g:{}).map(f[20])},interactive:!0,hide:f[16]==="building"})),c=!0)},p(i,m){var g;(!p||m&128)&&R(o,i[7]),i[16]==="building"?a||(a=ae(),a.c(),a.m(n,null)):a&&(a.d(1),a=null),s&&Y(s.update)&&m&82049&&s.update.call(null,{component:Z,componentProps:{label:`${i[7]} Custom Parameter${i[7]>1?"s":""}:`,customParams:Object.entries((g=i[14])!=null?g:{}).map(i[20])},interactive:!0,hide:i[16]==="building"})},i(i){p||($(e.$$.fragment,i),p=!0)},o(i){w(e.$$.fragment,i),p=!1},d(i){i&&b(t),J(e),a&&a.d(),c=!1,u()}}}function ae(f){let t;return{c(){t=q("parameters set")},l(e){t=H(e,"parameters set")},m(e,r){A(e,t,r)},d(e){e&&b(t)}}}function fe(f){let t,e,r,n,o;return e=new be({props:{modifier:"text-gray-600"}}),n=new de({props:{selectedTags:f[15]}}),{c(){t=E("div"),V(e.$$.fragment),r=C(),V(n.$$.fragment),this.h()},l(l){t=j(l,"DIV",{class:!0});var s=T(t);U(e.$$.fragment,s),r=S(s),U(n.$$.fragment,s),s.forEach(b),this.h()},h(){D(t,"class","flex items-center gap-1 px-1 text-xs")},m(l,s){A(l,t,s),G(e,t,null),P(t,r),G(n,t,null),o=!0},p(l,s){const p={};s&32768&&(p.selectedTags=l[15]),n.$set(p)},i(l){o||($(e.$$.fragment,l),$(n.$$.fragment,l),o=!0)},o(l){w(e.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){l&&b(t),J(e),J(n)}}}function Pe(f){let t,e,r,n,o,l,s,p=Array.isArray(f[15])&&f[15].length>0,c,u=f[16]!=="building"&&te(f),a=typeof f[6]=="string"&&f[16]!=="building"&&le(f),i=f[3].length>0&&re(f),m=typeof f[7]=="number"&&f[7]>0&&ne(f),g=p&&fe(f);return{c(){t=E("footer"),e=E("div"),r=E("div"),u&&u.c(),n=C(),a&&a.c(),o=C(),i&&i.c(),l=C(),m&&m.c(),s=C(),g&&g.c(),this.h()},l(h){t=j(h,"FOOTER",{class:!0});var _=T(t);e=j(_,"DIV",{class:!0});var d=T(e);r=j(d,"DIV",{class:!0});var k=T(r);u&&u.l(k),n=S(k),a&&a.l(k),o=S(k),i&&i.l(k),l=S(k),m&&m.l(k),s=S(k),g&&g.l(k),k.forEach(b),d.forEach(b),_.forEach(b),this.h()},h(){D(r,"class","w-full flex flex-wrap gap-2 overflow-hidden"),D(e,"class","relative flex items-center w-full h-full text-xs text-gray-600"),D(t,"class","flex items-center min-h-7 w-full mt-auto px-2.5 py-1 bg-gray-50 border-t border-gray-300")},m(h,_){A(h,t,_),P(t,e),P(e,r),u&&u.m(r,null),P(r,n),a&&a.m(r,null),P(r,o),i&&i.m(r,null),P(r,l),m&&m.m(r,null),P(r,s),g&&g.m(r,null),c=!0},p(h,[_]){h[16]!=="building"?u?(u.p(h,_),_&65536&&$(u,1)):(u=te(h),u.c(),$(u,1),u.m(r,n)):u&&(N(),w(u,1,1,()=>{u=null}),F()),typeof h[6]=="string"&&h[16]!=="building"?a?(a.p(h,_),_&65600&&$(a,1)):(a=le(h),a.c(),$(a,1),a.m(r,o)):a&&(N(),w(a,1,1,()=>{a=null}),F()),h[3].length>0?i?(i.p(h,_),_&8&&$(i,1)):(i=re(h),i.c(),$(i,1),i.m(r,l)):i&&(N(),w(i,1,1,()=>{i=null}),F()),typeof h[7]=="number"&&h[7]>0?m?(m.p(h,_),_&128&&$(m,1)):(m=ne(h),m.c(),$(m,1),m.m(r,s)):m&&(N(),w(m,1,1,()=>{m=null}),F()),_&32768&&(p=Array.isArray(h[15])&&h[15].length>0),p?g?(g.p(h,_),_&32768&&$(g,1)):(g=fe(h),g.c(),$(g,1),g.m(r,null)):g&&(N(),w(g,1,1,()=>{g=null}),F())},i(h){c||($(u),$(a),$(i),$(m),$(g),c=!0)},o(h){w(u),w(a),w(i),w(m),w(g),c=!1},d(h){h&&b(t),u&&u.d(),a&&a.d(),i&&i.d(),m&&m.d(),g&&g.d()}}}function Ee(f,t,e){let r,n,o,l,s,p,c,u,a,i,m,g,h,_,d,k,v,I,{data:y}=t;const ie=(O,B)=>B.id===O,oe=([O,B])=>{var L,M;return[(M=(L=I==null?void 0:I[O])==null?void 0:L.title)!=null?M:O,B.value]};return f.$$set=O=>{"data"in O&&e(17,y=O.data)},f.$$.update=()=>{f.$$.dirty&131072&&e(16,{doc:{status:r,tags:n,job_type:o,params_spec:l},ownerUserName:s,createdAt:p,runningAt:c,waitingAt:u,queuedAt:a,runtime:i,specParamCount:m,resources:{lane:g,gpusAvailable:h,gpus:_,gpusAllocated:d,targetHostname:k,targetType:v}}=y,r,(e(15,n),e(17,y)),(e(18,o),e(17,y)),(e(14,l),e(17,y)),(e(13,s),e(17,y)),(e(12,p),e(17,y)),(e(11,c),e(17,y)),(e(10,u),e(17,y)),(e(9,a),e(17,y)),(e(8,i),e(17,y)),(e(7,m),e(17,y)),(e(6,g),e(17,y)),(e(5,h),e(17,y)),(e(4,_),e(17,y)),(e(3,d),e(17,y)),(e(2,k),e(17,y)),(e(1,v),e(17,y))),f.$$.dirty&262144&&e(0,I=ge(o))},[I,v,k,d,_,h,g,m,i,a,u,c,p,s,l,n,r,y,o,ie,oe]}class Re extends ue{constructor(t){super();pe(this,t,Ee,Pe,me,{data:17})}}export{Re as default};
