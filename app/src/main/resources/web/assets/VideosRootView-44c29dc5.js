import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-6f8fbab9.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-05ef15b5.js";import{d as w,p as y,a as C,ax as V,v as z,e as B,x as s,y as a,h as e,o as $,f as o,t as d,w as b,z as x,n as D}from"./index-391e08bf.js";import{g as m,M as E}from"./splitpanes.es-e975dd23.js";import"./EditValueModal-0ef264ad.js";import"./vee-validate.esm-910387f0.js";const I={class:"page-container"},M={class:"sidebar"},N={class:"nav-title"},S={class:"nav"},O=["onClick"],R={class:"main"},G=w({__name:"VideosRootView",setup(q){var r,_;const n=y(),u=C(),i=V(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){D(u,"/videos")}return(t,L)=>{const f=k,v=g,h=z("router-view");return $(),B("div",I,[s(e(E),null,{default:a(()=>[s(e(m),{size:"20","min-size":"10"},{default:a(()=>[o("div",M,[o("h2",N,d(t.$t("page_title.videos")),1),o("ul",S,[o("li",{onClick:b(p,["prevent"]),class:x({active:e(n).path==="/videos"&&!e(c)&&!e(l)})},d(t.$t("all")),11,O),s(f,{type:"VIDEO",selected:e(l)},null,8,["selected"])]),s(v,{type:"VIDEO",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(m),null,{default:a(()=>[o("div",R,[s(h)])]),_:1})]),_:1})])}}});export{G as default};