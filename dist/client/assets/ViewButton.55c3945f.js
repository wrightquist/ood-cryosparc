import{S as N,h as S,s as I,j as w,k as _,l as x,t as d,m as A,o as m,p as f,y as g,z as y,A as D,B as V,Q as h,R as b,T as p,U as u,a2 as k,C as T,D as C,E as U,ac as P,H as q,a6 as E,a7 as j,ae as z,am as H,K}from"./vendor.3ae73048.js";import"./types.8cb6216c.js";import{S as O}from"./Spinner.012207c4.js";const Q=o=>({}),B=o=>({}),R=o=>({}),F=o=>({});function G(o){let e;const t=o[5].default,l=g(t,o,o[4],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,a){l&&l.m(r,a),e=!0},p(r,a){l&&l.p&&(!e||a&16)&&y(l,t,r,r[4],e?V(t,r[4],a,null):D(r[4]),null)},i(r){e||(m(l,r),e=!0)},o(r){d(l,r),e=!1},d(r){l&&l.d(r)}}}function J(o){let e,t,l;const r=o[5].disclaimer,a=g(r,o,o[4],B),s=a||W();return{c(){e=h("div"),t=h("div"),s&&s.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var i=p(e);t=b(i,"DIV",{class:!0});var c=p(t);s&&s.l(c),c.forEach(f),i.forEach(f),this.h()},h(){u(t,"class","flex justify-center items-center text-center h-full text-sm"),u(e,"class","flex flex-col h-full bg-gray-200 relative")},m(n,i){_(n,e,i),k(e,t),s&&s.m(t,null),l=!0},p(n,i){a&&a.p&&(!l||i&16)&&y(a,r,n,n[4],l?V(r,n[4],i,Q):D(n[4]),B)},i(n){l||(m(s,n),l=!0)},o(n){d(s,n),l=!1},d(n){n&&f(e),s&&s.d(n)}}}function L(o){let e,t,l;const r=o[5].disclaimer,a=g(r,o,o[4],F),s=a||X(o);return{c(){e=h("div"),t=h("div"),s&&s.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var i=p(e);t=b(i,"DIV",{class:!0});var c=p(t);s&&s.l(c),c.forEach(f),i.forEach(f),this.h()},h(){u(t,"class","flex justify-center items-center text-center h-full text-sm"),u(e,"class","flex flex-col h-full bg-gray-200 relative")},m(n,i){_(n,e,i),k(e,t),s&&s.m(t,null),l=!0},p(n,i){a?a.p&&(!l||i&16)&&y(a,r,n,n[4],l?V(r,n[4],i,R):D(n[4]),F):s&&s.p&&(!l||i&2)&&s.p(n,l?i:-1)},i(n){l||(m(s,n),l=!0)},o(n){d(s,n),l=!1},d(n){n&&f(e),s&&s.d(n)}}}function M(o){let e,t,l,r;return l=new O({}),{c(){e=h("div"),t=h("div"),T(l.$$.fragment),this.h()},l(a){e=b(a,"DIV",{class:!0});var s=p(e);t=b(s,"DIV",{class:!0});var n=p(t);C(l.$$.fragment,n),n.forEach(f),s.forEach(f),this.h()},h(){u(t,"class","flex justify-center items-center text-center h-full text-sm"),u(e,"class","flex flex-col h-full bg-gray-200 relative")},m(a,s){_(a,e,s),k(e,t),U(l,t,null),r=!0},p:P,i(a){r||(m(l.$$.fragment,a),r=!0)},o(a){d(l.$$.fragment,a),r=!1},d(a){a&&f(e),q(l)}}}function W(o){let e,t;return{c(){e=h("span"),t=E("Permission Denied"),this.h()},l(l){e=b(l,"SPAN",{class:!0});var r=p(e);t=j(r,"Permission Denied"),r.forEach(f),this.h()},h(){u(e,"class","font-bold text-gray-700")},m(l,r){_(l,e,r),k(e,t)},p:P,d(l){l&&f(e)}}}function X(o){let e,t,l;return{c(){e=h("span"),t=E(o[1]),l=E(" Not Found"),this.h()},l(r){e=b(r,"SPAN",{class:!0});var a=p(e);t=j(a,o[1]),l=j(a," Not Found"),a.forEach(f),this.h()},h(){u(e,"class","font-bold text-gray-700")},m(r,a){_(r,e,a),k(e,t),k(e,l)},p(r,a){a&2&&z(t,r[1])},d(r){r&&f(e)}}}function Y(o){let e,t,l,r;const a=[M,L,J,G],s=[];function n(i,c){return i[0]?0:i[2]?i[3]?3:2:1}return e=n(o),t=s[e]=a[e](o),{c(){t.c(),l=w()},l(i){t.l(i),l=w()},m(i,c){s[e].m(i,c),_(i,l,c),r=!0},p(i,[c]){let v=e;e=n(i),e===v?s[e].p(i,c):(x(),d(s[v],1,1,()=>{s[v]=null}),A(),t=s[e],t?t.p(i,c):(t=s[e]=a[e](i),t.c()),m(t,1),t.m(l.parentNode,l))},i(i){r||(m(t),r=!0)},o(i){d(t),r=!1},d(i){s[e].d(i),i&&f(l)}}}function Z(o,e,t){let{$$slots:l={},$$scope:r}=e,{loading:a=!1}=e,{granularity:s=""}=e,{exists:n}=e,{access:i}=e;return o.$$set=c=>{"loading"in c&&t(0,a=c.loading),"granularity"in c&&t(1,s=c.granularity),"exists"in c&&t(2,n=c.exists),"access"in c&&t(3,i=c.access),"$$scope"in c&&t(4,r=c.$$scope)},[a,s,n,i,r,l]}class oe extends N{constructor(e){super();S(this,e,Z,Y,I,{loading:0,granularity:1,exists:2,access:3})}}function $(o){let e,t,l,r;const a=o[2].default,s=g(a,o,o[1],null),n=s||te();return{c(){e=h("button"),n&&n.c(),this.h()},l(i){e=b(i,"BUTTON",{type:!0,class:!0});var c=p(e);n&&n.l(c),c.forEach(f),this.h()},h(){u(e,"type","button"),u(e,"class","inline-flex items-center justify-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-800 bg-blue-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500")},m(i,c){_(i,e,c),n&&n.m(e,null),t=!0,l||(r=K(e,"click",o[3]),l=!0)},p(i,c){s&&s.p&&(!t||c&2)&&y(s,a,i,i[1],t?V(a,i[1],c,null):D(i[1]),null)},i(i){t||(m(n,i),t=!0)},o(i){d(n,i),t=!1},d(i){i&&f(e),n&&n.d(i),l=!1,r()}}}function ee(o){let e,t;const l=o[2].default,r=g(l,o,o[1],null),a=r||le();return{c(){e=h("a"),a&&a.c(),this.h()},l(s){e=b(s,"A",{class:!0,href:!0});var n=p(e);a&&a.l(n),n.forEach(f),this.h()},h(){u(e,"class","inline-flex items-center justify-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-800 bg-blue-100 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"),u(e,"href",o[0])},m(s,n){_(s,e,n),a&&a.m(e,null),t=!0},p(s,n){r&&r.p&&(!t||n&2)&&y(r,l,s,s[1],t?V(l,s[1],n,null):D(s[1]),null),(!t||n&1)&&u(e,"href",s[0])},i(s){t||(m(a,s),t=!0)},o(s){d(a,s),t=!1},d(s){s&&f(e),a&&a.d(s)}}}function te(o){let e;return{c(){e=E("View Details")},l(t){e=j(t,"View Details")},m(t,l){_(t,e,l)},d(t){t&&f(e)}}}function le(o){let e;return{c(){e=E("View Details")},l(t){e=j(t,"View Details")},m(t,l){_(t,e,l)},d(t){t&&f(e)}}}function se(o){let e,t,l,r;const a=[ee,$],s=[];function n(i,c){return i[0]?0:1}return e=n(o),t=s[e]=a[e](o),{c(){t.c(),l=w()},l(i){t.l(i),l=w()},m(i,c){s[e].m(i,c),_(i,l,c),r=!0},p(i,[c]){let v=e;e=n(i),e===v?s[e].p(i,c):(x(),d(s[v],1,1,()=>{s[v]=null}),A(),t=s[e],t?t.p(i,c):(t=s[e]=a[e](i),t.c()),m(t,1),t.m(l.parentNode,l))},i(i){r||(m(t),r=!0)},o(i){d(t),r=!1},d(i){s[e].d(i),i&&f(l)}}}function ie(o,e,t){let{$$slots:l={},$$scope:r}=e,{href:a=""}=e;function s(n){H.call(this,o,n)}return o.$$set=n=>{"href"in n&&t(0,a=n.href),"$$scope"in n&&t(1,r=n.$$scope)},[a,r,l,s]}class ce extends N{constructor(e){super();S(this,e,ie,se,I,{href:0})}}export{oe as V,ce as a};
