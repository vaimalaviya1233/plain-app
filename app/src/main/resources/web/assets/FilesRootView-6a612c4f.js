import{d as y,n as g,p as w,s as B,a as S,v as V,o as v,c as m,e as o,x as p,g as e,b as t,f as n,w as i,y as r,k as M,A as _}from"./index-66bea2e9.js";import{g as C,M as N}from"./splitpanes.es-57df8e4f.js";const R={class:"page-container container-fluid"},T={class:"sidebar"},b={class:"nav-title"},z={class:"nav"},P=["onClick"],A={class:"main"},j=y({__name:"FilesRootView",setup(D){const l=g(),d=w(),{app:k}=B(S()),u=l.params.type;function c(s){_(d,`/files/${s}`)}function $(){_(d,"/files")}return(s,a)=>{const h=V("router-view");return v(),m("div",R,[o(e(N),null,{default:p(()=>[o(e(C),{size:"20"},{default:p(()=>[t("div",T,[t("h2",b,n(s.$t("page_title.files")),1),t("ul",z,[t("li",{onClick:a[0]||(a[0]=i(f=>c("recent"),["prevent"])),class:r({active:e(l).path==="/files/recent"})},n(s.$t("recents")),3),t("li",{onClick:i($,["prevent"]),class:r({active:e(l).path==="/files"})},n(s.$t("internal_storage")),11,P),e(k).sdcardPath?(v(),m("li",{key:0,onClick:a[1]||(a[1]=i(f=>c("sdcard"),["prevent"])),class:r({active:e(u)==="sdcard"})},n(s.$t("sdcard")),3)):M("",!0),t("li",{onClick:a[2]||(a[2]=i(f=>c("app"),["prevent"])),class:r({active:e(u)==="app"})},n(s.$t("app_name")),3)])])]),_:1}),o(e(C),null,{default:p(()=>[t("div",A,[o(h)])]),_:1})]),_:1})])}}});export{j as default};