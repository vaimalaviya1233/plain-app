import{d as Ve,ao as Ce,p as Te,r as b,u as Ie,s as Se,a as Ee,B as Re,G as j,n as Ue,C as ze,D as Ae,E as De,ap as Fe,a3 as qe,am as Y,aq as Me,H as Be,t as Ne,ar as Le,au as Qe,J as Z,K as xe,L as Ke,o as l,c as u,b as e,e as d,g as o,F as g,w as r,k as _,T as z,f as a,x as Ge,M as A,N as Oe,O as He,z as D,$ as ee,P as te,Q as Pe,y as We,l as Xe,V as Je,A as oe,U as se,ah as je,at as Ye,a9 as Ze,aa as et,_ as tt}from"./index-66bea2e9.js";import{u as ot,_ as st,a as nt}from"./list-99d4982b.js";import{_ as lt}from"./FieldId-e37ba71f.js";import{_ as at}from"./Multiselect-346d4eab.js";import{_ as it,a as ut}from"./grid-view-outline-rounded-0d59c2bc.js";import{_ as ct,a as dt}from"./label-outline-rounded-657ec04e.js";import{_ as rt}from"./download-rounded-19708eb3.js";import{_ as _t}from"./delete-outline-rounded-182ee2de.js";import{_ as pt}from"./Breadcrumb-731a6814.js";import{n as ne}from"./list-6498ebd9.js";import{u as mt,a as vt,b as bt}from"./tags-4fd68896.js";import{u as ht,_ as ft}from"./ConfirmModal.vuevuetypescriptsetuptruelang-1e4d94da.js";import"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";import"./vee-validate.esm-18b68f3d.js";const le=y=>(Ze("data-v-a2ffd617"),y=y(),et(),y),gt={class:"v-toolbar"},yt={class:"right-actions"},kt=["title"],wt=["title"],$t=["title"],Vt=["title"],Ct=["onClick"],Tt=["onClick"],It={class:"row mb-3"},St={class:"col-md-3 col-form-label"},Et={class:"col-md-9"},Rt=["onKeyup"],Ut={class:"row mb-3"},zt={class:"col-md-3 col-form-label"},At={class:"col-md-9"},Dt={class:"actions"},Ft=["onClick"],qt={key:0,class:"row row-cols-6 g-1",style:{"margin-bottom":"24px"}},Mt=["onClick"],Bt=["src"],Nt={class:"duration"},Lt={key:1,class:"no-data-placeholder"},Qt={key:2,class:"table"},xt=le(()=>e("th",null,"ID",-1)),Kt=le(()=>e("th",null,null,-1)),Gt=["onClick"],Ot=["onUpdate:modelValue"],Ht=["src","onClick"],Pt={class:"badge"},Wt={key:0},Xt={colspan:"7"},Jt={class:"no-data-placeholder"},jt=Ve({__name:"VideosView",setup(y){var W,X,J;const ae=Ce(),F=Te(),c=b([]),{t:q}=Ie(),{app:C}=Se(Ee()),p=Re({text:"",tags:[]}),ie=j(()=>c.value.some(s=>s.checked)),h="VIDEO",T=Ue().query,f=b(parseInt(((W=T.page)==null?void 0:W.toString())??"1")),k=54,w=b(0),m=b(ze(((X=T.q)==null?void 0:X.toString())??"")),M=b(""),{tags:I}=mt(h,m,p,async s=>{M.value=Ae(s),await De(),re()}),i=b(((J=T.view)==null?void 0:J.toString())??"grid"),{visible:ue,index:ce,view:B,hide:de}=Fe(),{addToTags:N}=vt(h,c,I),{removeFromTags:L}=bt(h,c,I),{deleteItems:Q}=ht(h,c),{downloadItems:x}=qe(c,"videos.zip"),S=j(()=>c.value.map(s=>({src:Y(s.fileId),name:Me(s.path),duration:s.duration,size:s.size}))),{selectAll:E,toggleSelect:K}=ot(c),{loading:G,load:re,refetch:_e}=Be({handle:async(s,n)=>{if(n)Ne(q(n),"error");else if(s){const{fileIdToken:R}=C.value,$=[];for(const V of s.videos)$.push({...V,checked:!1,fileId:await Le(R,V.path)});c.value=$,w.value=s.videoCount}},document:Qe,variables:()=>({offset:(f.value-1)*k,limit:k,query:M.value}),appApi:!0});function O(){oe(F,`/videos?page=${f.value}&q=${se(m.value)}&view=${i.value}`)}Z(f,()=>{O()}),Z(i,()=>{O()});function H(){m.value=Je(p),P()}function P(){oe(F,`/videos?q=${se(m.value)}&view=${i.value}`)}function pe(){i.value==="grid"?i.value="list":i.value="grid"}function me(){ae.push("/files"),je(ft,{message:q("upload_videos")})}return xe(()=>{Ke.on("refetch_by_tag_type",s=>{s===h&&_e()})}),(s,n)=>{const R=pt,$=_t,V=rt,ve=ct,be=dt,he=it,fe=ut,ge=at,ye=st,ke=lt,we=nt,$e=Ye;return l(),u(g,null,[e("div",gt,[d(R,{current:()=>`${s.$t("page_title.videos")} (${w.value})`},null,8,["current"]),e("div",yt,[o(ie)&&i.value==="list"?(l(),u(g,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:n[0]||(n[0]=r((...t)=>o(Q)&&o(Q)(...t),["stop"])),title:s.$t("delete")},[d($,{class:"bi"})],8,kt),e("button",{type:"button",class:"btn btn-action",onClick:n[1]||(n[1]=r((...t)=>o(x)&&o(x)(...t),["stop"])),title:s.$t("download")},[d(V,{class:"bi"})],8,wt),e("button",{type:"button",class:"btn btn-action",onClick:n[2]||(n[2]=r((...t)=>o(N)&&o(N)(...t),["stop"])),title:s.$t("add_to_tags")},[d(ve,{class:"bi"})],8,$t),e("button",{type:"button",class:"btn btn-action",onClick:n[3]||(n[3]=r((...t)=>o(L)&&o(L)(...t),["stop"])),title:s.$t("remove_from_tags")},[d(be,{class:"bi"})],8,Vt)],64)):_("",!0),e("button",{type:"button",class:"btn btn-action",onClick:r(pe,["prevent"])},[i.value==="list"?(l(),z(he,{key:0,class:"bi"})):_("",!0),i.value==="grid"?(l(),z(fe,{key:1,class:"bi"})):_("",!0)],8,Ct),e("button",{type:"button",class:"btn btn-action",onClick:r(me,["prevent"])},a(s.$t("upload")),9,Tt),d(ye,{modelValue:m.value,"onUpdate:modelValue":n[6]||(n[6]=t=>m.value=t),search:P},{filters:Ge(()=>[e("div",It,[e("label",St,a(s.$t("keywords")),1),e("div",Et,[A(e("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=t=>p.text=t),class:"form-control",onKeyup:He(H,["enter"])},null,40,Rt),[[Oe,p.text]])])]),e("div",Ut,[e("label",zt,a(s.$t("tags")),1),e("div",At,[d(ge,{modelValue:p.tags,"onUpdate:modelValue":n[5]||(n[5]=t=>p.tags=t),label:"name","track-by":"id",options:o(I)},null,8,["modelValue","options"])])]),e("div",Dt,[e("button",{type:"button",class:"btn",onClick:r(H,["stop"])},a(s.$t("search")),9,Ft)])]),_:1},8,["modelValue"])])]),i.value==="grid"?(l(),u("div",qt,[(l(!0),u(g,null,D(o(S),(t,U)=>(l(),u("div",{class:"col",onClick:v=>o(B)(U)},[e("img",{class:"image",src:t.src+"&w=200&h=200"},null,8,Bt),e("span",Nt,a(o(ee)(t.duration)),1)],8,Mt))),256))])):_("",!0),i.value==="grid"&&o(S).length===0?(l(),u("div",Lt,a(s.$t(o(ne)(o(G),o(C).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):_("",!0),i.value==="list"?(l(),u("table",Qt,[e("thead",null,[e("tr",null,[e("th",null,[A(e("input",{class:"form-check-input",type:"checkbox",onChange:n[7]||(n[7]=(...t)=>o(K)&&o(K)(...t)),"onUpdate:modelValue":n[8]||(n[8]=t=>Pe(E)?E.value=t:null)},null,544),[[te,o(E)]])]),xt,Kt,e("th",null,a(s.$t("name")),1),e("th",null,a(s.$t("tags")),1),e("th",null,a(s.$t("duration")),1),e("th",null,a(s.$t("file_size")),1)])]),e("tbody",null,[(l(!0),u(g,null,D(c.value,(t,U)=>(l(),u("tr",{key:t.id,class:We({checked:t.checked}),onClick:r(v=>t.checked=!t.checked,["stop"])},[e("td",null,[A(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":v=>t.checked=v},null,8,Ot),[[te,t.checked]])]),e("td",null,[d(ke,{id:t.id,raw:t},null,8,["id","raw"])]),e("td",null,[e("img",{class:"img-video",src:o(Y)(t.fileId)+"&w=200&h=200",width:"50",height:"50",onClick:r(v=>o(B)(U),["stop"])},null,8,Ht)]),e("td",null,a(t.title),1),e("td",null,[(l(!0),u(g,null,D(t.tags,v=>(l(),u("span",Pt,a(v.name),1))),256))]),e("td",null,a(o(ee)(t.duration)),1),e("td",null,a(o(Xe)(t.size)),1)],10,Gt))),128))]),c.value.length?_("",!0):(l(),u("tfoot",Wt,[e("tr",null,[e("td",Xt,[e("div",Jt,a(s.$t(o(ne)(o(G),o(C).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))])):_("",!0),w.value>k?(l(),z(we,{key:3,modelValue:f.value,"onUpdate:modelValue":n[9]||(n[9]=t=>f.value=t),total:w.value,limit:k},null,8,["modelValue","total"])):_("",!0),d($e,{visible:o(ue),index:o(ce),sources:o(S),onHide:o(de)},null,8,["visible","index","sources","onHide"])],64)}}});const mo=tt(jt,[["__scopeId","data-v-a2ffd617"]]);export{mo as default};