import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-12e262c1.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-f7ab6958.js";import{d as C,D as w,e as y,az as I,G as M,c as z,p as s,H as o,j as e,o as B,a,t as m,l as $,I as b,C as E}from"./index-0c42270c.js";import{g as d,M as G}from"./splitpanes.es-7e8a6fea.js";import"./EditValueModal-c22a5b2d.js";import"./vee-validate.esm-ca78f26f.js";const N={class:"page-container"},S={class:"sidebar"},V={class:"nav-title"},A={class:"nav"},D=["onClick"],R={class:"main"},F=C({__name:"ImagesRootView",setup(j){var r,_;const n=w(),u=y(),i=I(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){E(u,"/images")}return(t,q)=>{const f=k,h=g,v=M("router-view");return B(),z("div",N,[s(e(G),null,{default:o(()=>[s(e(d),{size:"20","min-size":"10"},{default:o(()=>[a("div",S,[a("h2",V,m(t.$t("page_title.images")),1),a("ul",A,[a("li",{onClick:$(p,["prevent"]),class:b({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,D),s(f,{type:"IMAGE",selected:e(l)},null,8,["selected"])]),s(h,{type:"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",R,[s(v)])]),_:1})]),_:1})])}}});export{F as default};