import{S as Re,h as Je,s as Fe,Q as m,a6 as I,I as j,R as _,T as h,a7 as S,p as i,J as A,U as c,k as ae,a2 as r,K as $e,ac as _e,ad as et,af as tt,at as st,ae as he,l as Ne,t as V,m as Ie,o as O,c as xe,j as Ve,C as re,D as oe,E as le,H as ne,au as at,ak as rt,L as qe,u as ot}from"./vendor.3ae73048.js";import{cC as Ye,cD as je,z as ze,u as lt}from"./index.146c2037.js";import{s as nt,bw as it,c as ct}from"./router.1b465492.js";import{I as be}from"./Icon.61279884.js";import{C as Ke,E as ft}from"./Exclamation.f44359c6.js";import{E as ut}from"./Logout.c3964a48.js";import{J as dt}from"./index.11580965.js";import{R as pt}from"./Refresh.40401873.js";import{I as mt}from"./InfiniteScrollLoader.21052268.js";import{L as _t}from"./Loading.ef29dffe.js";import"./helpers.7177ca38.js";import"./jobs.7ab064ef.js";import"./index.c4392b02.js";import"./jobs.d50d1674.js";import"./index.2e3bb17a.js";import"./ChevronUp.0ab7bee0.js";import"./types.8cb6216c.js";import"./Spinner.012207c4.js";import"./Folder.9bc96b35.js";import"./LockClosed.9ead7228.js";import"./helpers.cea6b59c.js";function ht(a){let e,t,s,l,o,f,u,g,$,k;return{c(){e=m("div"),t=m("button"),s=I("Active"),o=j(),f=m("button"),u=I("Inactive"),this.h()},l(d){e=_(d,"DIV",{class:!0});var b=h(e);t=_(b,"BUTTON",{type:!0,class:!0});var y=h(t);s=S(y,"Active"),y.forEach(i),o=A(b),f=_(b,"BUTTON",{type:!0,class:!0});var C=h(f);u=S(C,"Inactive"),C.forEach(i),b.forEach(i),this.h()},h(){c(t,"type","button"),c(t,"class",l=""+(a[1].base+" "+(a[0]?a[1].active:a[1].default))),c(f,"type","button"),c(f,"class",g=""+(a[1].base+" "+(a[0]?a[1].default:a[1].active)+" mr-0")),c(e,"class","inline-flex p-0.5 border border-gray-300 bg-white rounded-md text-xs whitespace-nowrap")},m(d,b){ae(d,e,b),r(e,t),r(t,s),r(e,o),r(e,f),r(f,u),$||(k=[$e(t,"click",a[2]),$e(f,"click",a[3])],$=!0)},p(d,[b]){b&1&&l!==(l=""+(d[1].base+" "+(d[0]?d[1].active:d[1].default)))&&c(t,"class",l),b&1&&g!==(g=""+(d[1].base+" "+(d[0]?d[1].default:d[1].active)+" mr-0"))&&c(f,"class",g)},i:_e,o:_e,d(d){d&&i(e),$=!1,et(k)}}}function gt(a,e,t){let{showActive:s}=e;const l={base:"px-2 py-1 mr-1 text-gray-600 font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset focus:ring-blue-500",active:"text-white bg-blue-600 hover:bg-blue-700",default:"hover:bg-gray-100"},o=()=>{t(0,s=!0)},f=()=>{t(0,s=!1)};return a.$$set=u=>{"showActive"in u&&t(0,s=u.showActive)},[s,l,o,f]}class bt extends Re{constructor(e){super();Je(this,e,gt,ht,Fe,{showActive:0})}}function Me(a,e,t){const s=a.slice();return s[20]=e[t],s[22]=t,s}function Qe(a){let e,t=!a[1]&&Ge(a);return{c(){t&&t.c(),e=Ve()},l(s){t&&t.l(s),e=Ve()},m(s,l){t&&t.m(s,l),ae(s,e,l)},p(s,l){s[1]?t&&(t.d(1),t=null):t?t.p(s,l):(t=Ge(s),t.c(),t.m(e.parentNode,e))},d(s){t&&t.d(s),s&&i(e)}}}function Ge(a){let e,t,s,l=(a[0]?"Active":"Inactive")+"",o,f,u;return{c(){e=m("tr"),t=m("td"),s=I("No "),o=I(l),f=I(" Notifications"),u=j(),this.h()},l(g){e=_(g,"TR",{});var $=h(e);t=_($,"TD",{class:!0});var k=h(t);s=S(k,"No "),o=S(k,l),f=S(k," Notifications"),k.forEach(i),u=A($),$.forEach(i),this.h()},h(){c(t,"class","row-span-full px-6 py-3")},m(g,$){ae(g,e,$),r(e,t),r(t,s),r(t,o),r(t,f),r(e,u)},p(g,$){$&1&&l!==(l=(g[0]?"Active":"Inactive")+"")&&he(o,l)},d(g){g&&i(e)}}}function vt(a){let e,t;return e=new be({props:{src:Ke}}),{c(){re(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,l){le(e,s,l),t=!0},p:_e,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){ne(e,s)}}}function yt(a){let e,t;return e=new be({props:{src:ut}}),{c(){re(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,l){le(e,s,l),t=!0},p:_e,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){ne(e,s)}}}function wt(a){let e,t;return e=new be({props:{src:Ke}}),{c(){re(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,l){le(e,s,l),t=!0},p:_e,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){ne(e,s)}}}function $t(a){let e,t;return e=new be({props:{src:ft}}),{c(){re(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,l){le(e,s,l),t=!0},p:_e,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){ne(e,s)}}}function kt(a){let e,t;return e=new be({props:{src:dt}}),{c(){re(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,l){le(e,s,l),t=!0},p:_e,i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){ne(e,s)}}}function We(a){let e,t,s,l,o;function f(){return a[13](a[20])}return{c(){e=m("div"),t=m("button"),s=I("Clear"),this.h()},l(u){e=_(u,"DIV",{class:!0});var g=h(e);t=_(g,"BUTTON",{class:!0});var $=h(t);s=S($,"Clear"),$.forEach(i),g.forEach(i),this.h()},h(){c(t,"class","inline-flex items-center py-1.5 px-2.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"),c(e,"class","flex justify-left items-center")},m(u,g){ae(u,e,g),r(e,t),r(t,s),l||(o=$e(t,"click",f),l=!0)},p(u,g){a=u},d(u){u&&i(e),l=!1,o()}}}function Xe(a){var ke;let e,t,s=a[22]+1+"",l,o,f,u=((ke=a[20].project_uid)!=null?ke:"-")+"",g,$,k,d,b,y,C,q,E=a[20].message+"",Y,Z,se,R,W=(a[20].progress_pct?`${a[20].progress_pct}%`:"-")+"",ee,v,H,J=(a[20].updated_at?xe(Date.parse(a[20].updated_at),{addSuffix:!0}):"-")+"",B,te,M,Q=(a[20].created_at?xe(Date.parse(a[20].created_at),{addSuffix:!0}):"-")+"",ie,ue,F,de,ve,P,pe,ge;const X=[kt,$t,wt,yt,vt],G=[];function ce(U,p){return U[20].status===je.primary?0:U[20].status===je.warning?1:U[20].status===je.success?2:U[20].status===je.danger?3:4}b=ce(a),y=G[b]=X[b](a);function ye(...U){return a[12](a[20],...U)}let L=a[0]&&We(a);return{c(){e=m("tr"),t=m("td"),l=I(s),o=j(),f=m("td"),g=I(u),$=j(),k=m("td"),d=m("button"),y.c(),C=j(),q=m("span"),Y=I(E),se=j(),R=m("td"),ee=I(W),v=j(),H=m("td"),B=I(J),te=j(),M=m("td"),ie=I(Q),ue=j(),F=m("td"),L&&L.c(),de=j(),this.h()},l(U){e=_(U,"TR",{class:!0});var p=h(e);t=_(p,"TD",{class:!0});var w=h(t);l=S(w,s),w.forEach(i),o=A(p),f=_(p,"TD",{class:!0});var me=h(f);g=S(me,u),me.forEach(i),$=A(p),k=_(p,"TD",{class:!0});var N=h(k);d=_(N,"BUTTON",{class:!0});var x=h(d);y.l(x),C=A(x),q=_(x,"SPAN",{});var n=h(q);Y=S(n,E),n.forEach(i),x.forEach(i),N.forEach(i),se=A(p),R=_(p,"TD",{class:!0});var T=h(R);ee=S(T,W),T.forEach(i),v=A(p),H=_(p,"TD",{class:!0});var z=h(H);B=S(z,J),z.forEach(i),te=A(p),M=_(p,"TD",{class:!0});var fe=h(M);ie=S(fe,Q),fe.forEach(i),ue=A(p),F=_(p,"TD",{class:!0});var D=h(F);L&&L.l(D),D.forEach(i),de=A(p),p.forEach(i),this.h()},h(){c(t,"class","px-6 py-3 whitespace-nowrap text-sm text-gray-900"),c(f,"class","px-6 py-3 whitespace-nowrap text-sm text-gray-500"),c(d,"class",Z="inline-flex items-center px-2.5 py-1.5 space-x-1.5 rounded-md text-sm font-medium text-white hover:opacity-90 "+Ye(a[20].status)),c(k,"class","px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900"),c(R,"class","px-6 py-3 whitespace-nowrap text-sm text-gray-500"),c(H,"class","px-6 py-3 whitespace-nowrap text-sm text-gray-500"),c(M,"class","px-6 py-3 whitespace-nowrap text-sm text-gray-500"),c(F,"class","px-6 py-3 whitespace-nowrap text-right text-sm font-medium"),c(e,"class",ve=a[22]%2==0?"bg-white":"bg-gray-50")},m(U,p){ae(U,e,p),r(e,t),r(t,l),r(e,o),r(e,f),r(f,g),r(e,$),r(e,k),r(k,d),G[b].m(d,null),r(d,C),r(d,q),r(q,Y),r(e,se),r(e,R),r(R,ee),r(e,v),r(e,H),r(H,B),r(e,te),r(e,M),r(M,ie),r(e,ue),r(e,F),L&&L.m(F,null),r(e,de),P=!0,pe||(ge=$e(d,"click",ye),pe=!0)},p(U,p){var me;a=U,(!P||p&16)&&u!==(u=((me=a[20].project_uid)!=null?me:"-")+"")&&he(g,u);let w=b;b=ce(a),b===w?G[b].p(a,p):(Ne(),V(G[w],1,1,()=>{G[w]=null}),Ie(),y=G[b],y?y.p(a,p):(y=G[b]=X[b](a),y.c()),O(y,1),y.m(d,C)),(!P||p&16)&&E!==(E=a[20].message+"")&&he(Y,E),(!P||p&16&&Z!==(Z="inline-flex items-center px-2.5 py-1.5 space-x-1.5 rounded-md text-sm font-medium text-white hover:opacity-90 "+Ye(a[20].status)))&&c(d,"class",Z),(!P||p&16)&&W!==(W=(a[20].progress_pct?`${a[20].progress_pct}%`:"-")+"")&&he(ee,W),(!P||p&16)&&J!==(J=(a[20].updated_at?xe(Date.parse(a[20].updated_at),{addSuffix:!0}):"-")+"")&&he(B,J),(!P||p&16)&&Q!==(Q=(a[20].created_at?xe(Date.parse(a[20].created_at),{addSuffix:!0}):"-")+"")&&he(ie,Q),a[0]?L?L.p(a,p):(L=We(a),L.c(),L.m(F,null)):L&&(L.d(1),L=null)},i(U){P||(O(y),P=!0)},o(U){V(y),P=!1},d(U){U&&i(e),G[b].d(),L&&L.d(),pe=!1,ge()}}}function Ze(a){let e,t,s,l;return e=new mt({}),e.$on("visible",a[7]),s=new _t({props:{loading:a[3]}}),{c(){re(e.$$.fragment),t=j(),re(s.$$.fragment)},l(o){oe(e.$$.fragment,o),t=A(o),oe(s.$$.fragment,o)},m(o,f){le(e,o,f),ae(o,t,f),le(s,o,f),l=!0},p(o,f){const u={};f&8&&(u.loading=o[3]),s.$set(u)},i(o){l||(O(e.$$.fragment,o),O(s.$$.fragment,o),l=!0)},o(o){V(e.$$.fragment,o),V(s.$$.fragment,o),l=!1},d(o){ne(e,o),o&&i(t),ne(s,o)}}}function Et(a){let e,t,s,l,o,f,u,g,$,k,d,b,y,C,q,E,Y,Z,se,R,W,ee,v,H,J,B,te,M,Q,ie,ue,F,de,ve,P,pe,ge,X,G,ce,ye,L;function ke(n){a[10](n)}let U={};a[0]!==void 0&&(U.showActive=a[0]),t=new bt({props:U}),tt.push(()=>st(t,"showActive",ke)),d=new be({props:{src:pt,modifier:a[1]?"animate-spin animate-reverse":""}});let p=a[4],w=[];for(let n=0;n<p.length;n+=1)w[n]=Xe(Me(a,p,n));const me=n=>V(w[n],1,1,()=>{w[n]=null});let N=null;p.length||(N=Qe(a));let x=!a[0]&&!a[1]&&Ze(a);return{c(){e=m("div"),re(t.$$.fragment),l=j(),o=m("div"),f=m("p"),u=I(a[2]),g=j(),$=m("span"),k=m("button"),re(d.$$.fragment),b=j(),y=m("div"),C=m("table"),q=m("thead"),E=m("tr"),Y=m("th"),Z=I("#"),se=j(),R=m("th"),W=I("Project"),ee=j(),v=m("th"),H=I("Status"),J=j(),B=m("th"),te=I("Progress"),M=j(),Q=m("th"),ie=I("Last Updated"),ue=j(),F=m("th"),de=I("Created"),ve=j(),P=m("th"),pe=I("Action"),ge=j(),X=m("tbody");for(let n=0;n<w.length;n+=1)w[n].c();N&&N.c(),G=j(),x&&x.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var T=h(e);oe(t.$$.fragment,T),l=A(T),o=_(T,"DIV",{class:!0});var z=h(o);f=_(z,"P",{class:!0});var fe=h(f);u=S(fe,a[2]),fe.forEach(i),g=A(z),$=_(z,"SPAN",{class:!0});var D=h($);k=_(D,"BUTTON",{type:!0,class:!0});var we=h(k);oe(d.$$.fragment,we),we.forEach(i),D.forEach(i),z.forEach(i),T.forEach(i),b=A(n),y=_(n,"DIV",{class:!0});var Ee=h(y);C=_(Ee,"TABLE",{class:!0});var Te=h(C);q=_(Te,"THEAD",{class:!0});var Se=h(q);E=_(Se,"TR",{});var K=h(E);Y=_(K,"TH",{scope:!0,class:!0});var Ce=h(Y);Z=S(Ce,"#"),Ce.forEach(i),se=A(K),R=_(K,"TH",{scope:!0,class:!0});var Le=h(R);W=S(Le,"Project"),Le.forEach(i),ee=A(K),v=_(K,"TH",{scope:!0,class:!0});var Ue=h(v);H=S(Ue,"Status"),Ue.forEach(i),J=A(K),B=_(K,"TH",{scope:!0,class:!0});var Be=h(B);te=S(Be,"Progress"),Be.forEach(i),M=A(K),Q=_(K,"TH",{scope:!0,class:!0});var Pe=h(Q);ie=S(Pe,"Last Updated"),Pe.forEach(i),ue=A(K),F=_(K,"TH",{scope:!0,class:!0});var He=h(F);de=S(He,"Created"),He.forEach(i),ve=A(K),P=_(K,"TH",{scope:!0,class:!0});var Oe=h(P);pe=S(Oe,"Action"),Oe.forEach(i),K.forEach(i),Se.forEach(i),ge=A(Te),X=_(Te,"TBODY",{});var Ae=h(X);for(let De=0;De<w.length;De+=1)w[De].l(Ae);N&&N.l(Ae),Ae.forEach(i),Te.forEach(i),G=A(Ee),x&&x.l(Ee),Ee.forEach(i),this.h()},h(){c(f,"class","text-sm"),c(k,"type","button"),c(k,"class","inline-flex items-center p-1 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"),c($,"class","inline-flex rounded shadow-sm"),c(o,"class","flex items-center space-x-2"),c(e,"class","flex justify-between items-center px-2.5 py-1.5 bg-white border-b border-gray-300"),c(Y,"scope","col"),c(Y,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(R,"scope","col"),c(R,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(v,"scope","col"),c(v,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(B,"scope","col"),c(B,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(Q,"scope","col"),c(Q,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(F,"scope","col"),c(F,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(P,"scope","col"),c(P,"class","sticky top-0 px-6 py-2 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),c(q,"class","bg-gray-100"),c(C,"class","min-w-full divide-y divide-gray-200"),c(y,"class","h-full overflow-auto custom-scrollbar")},m(n,T){ae(n,e,T),le(t,e,null),r(e,l),r(e,o),r(o,f),r(f,u),r(o,g),r(o,$),r($,k),le(d,k,null),ae(n,b,T),ae(n,y,T),r(y,C),r(C,q),r(q,E),r(E,Y),r(Y,Z),r(E,se),r(E,R),r(R,W),r(E,ee),r(E,v),r(v,H),r(E,J),r(E,B),r(B,te),r(E,M),r(E,Q),r(Q,ie),r(E,ue),r(E,F),r(F,de),r(E,ve),r(E,P),r(P,pe),r(C,ge),r(C,X);for(let z=0;z<w.length;z+=1)w[z].m(X,null);N&&N.m(X,null),r(y,G),x&&x.m(y,null),ce=!0,ye||(L=$e(k,"click",a[11]),ye=!0)},p(n,[T]){const z={};!s&&T&1&&(s=!0,z.showActive=n[0],at(()=>s=!1)),t.$set(z),(!ce||T&4)&&he(u,n[2]);const fe={};if(T&2&&(fe.modifier=n[1]?"animate-spin animate-reverse":""),d.$set(fe),T&51){p=n[4];let D;for(D=0;D<p.length;D+=1){const we=Me(n,p,D);w[D]?(w[D].p(we,T),O(w[D],1)):(w[D]=Xe(we),w[D].c(),O(w[D],1),w[D].m(X,null))}for(Ne(),D=p.length;D<w.length;D+=1)me(D);Ie(),!p.length&&N?N.p(n,T):p.length?N&&(N.d(1),N=null):(N=Qe(n),N.c(),N.m(X,null))}!n[0]&&!n[1]?x?(x.p(n,T),T&3&&O(x,1)):(x=Ze(n),x.c(),O(x,1),x.m(y,null)):x&&(Ne(),V(x,1,1,()=>{x=null}),Ie())},i(n){if(!ce){O(t.$$.fragment,n),O(d.$$.fragment,n);for(let T=0;T<p.length;T+=1)O(w[T]);O(x),ce=!0}},o(n){V(t.$$.fragment,n),V(d.$$.fragment,n),w=w.filter(Boolean);for(let T=0;T<w.length;T+=1)V(w[T]);V(x),ce=!1},d(n){n&&i(e),ne(t),ne(d),n&&i(b),n&&i(y),rt(w,n),N&&N.d(),x&&x.d(),ye=!1,L()}}}function Tt(a,e,t){let s,l,o;qe(a,nt,v=>t(17,l=v)),qe(a,it,v=>t(9,o=v));let f=!0,u=[],g,$="",k=!0,d=50,b=0,y;const C=(v,H)=>{var te,M;const[J]=(te=H.message.match(/(P[0-9]+)/g))!=null?te:[],[B]=(M=H.message.match(/(J[0-9]+)/g))!=null?M:[];!J||!B||l.includes(`${J}-${B}`)||(v.stopPropagation(),ct(v,J,B))},q=()=>{d=50,b=0,t(8,u=[])},E=async(v=!1)=>{t(1,f=!0),v&&q();const H=performance.now(),J=await ze(`/api/actions/notifications/inactive_notifications?limit=${d}&skip=${b}`);t(8,u=[...u,...J]);const B=performance.now();t(2,$=`Data loaded in in ${(B-H).toFixed(2)} ms.`),t(1,f=!1)},Y=async()=>{g=(await ze("/api/actions/notifications/inactive_notifications_count")).count},Z=async()=>{if(u.length<g){t(3,y=!0);const v=g-u.length;b=u.length,d+=v>=50?50:v>0?v:0,await E(),t(3,y=!1)}};ot(()=>{E(),Y()});function se(v){k=v,t(0,k)}const R=()=>E(!0),W=(v,H)=>C(H,v),ee=v=>lt.core.deactivateNotification(v.id);return a.$$.update=()=>{a.$$.dirty&769&&t(4,s=k?o:u)},[k,f,$,y,s,C,E,Z,u,o,se,R,W,ee]}class Kt extends Re{constructor(e){super();Je(this,e,Tt,Et,Fe,{})}}export{Kt as default};
