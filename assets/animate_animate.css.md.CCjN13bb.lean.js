import{j as k,k as f,D as q,c as m,l as u,a as l,I as p,w as o,a5 as C,a4 as r,o as d,F as P,E as S,t as A}from"./chunks/framework.B3h3aO-h.js";const w=r("",25),x=r("",9),T={style:{display:"flex"}},E=r("",6),I=JSON.parse('{"title":"animate.css","description":"","frontmatter":{"title":"animate.css"},"headers":[],"relativePath":"animate/animate.css.md","filePath":"animate/animate.css.md","lastUpdated":1716041560000}'),D={name:"animate/animate.css.md"},$=Object.assign(D,{setup(N){const t=k(Array(4).fill(0).map((n,s)=>s)),e=(n,s,a="animate__")=>new Promise((i,L)=>{const h=`${a}${s}`,c=document.querySelector(n);c.classList.add(`${a}animated`,h);function b(y){y.stopPropagation(),c.classList.remove(`${a}animated`,h),i("Animation ended")}c.addEventListener("animationend",b,{once:!0})});async function _(){await e(".my-element1","bounce"),await e(".my-element2","flash"),await e(".my-element3","pulse"),await e(".my-element4","backInUp"),await e(".my-element5","backOutDown")}function g(){t.value.push(t.value.length)}function v(){t.value.pop()}return f(()=>{const n=document.querySelector(".my-element");console.log(n),n.addEventListener("animationend",s=>{console.log(123,s)})}),(n,s)=>{const a=q("el-button");return d(),m("div",null,[w,u("p",null,[l("你可以很轻松的对出队列动画 "),p(a,{type:"primary",onClick:_},{default:o(()=>[l("开始动画")]),_:1})]),x,p(a,{type:"primary",onClick:g},{default:o(()=>[l("ADD")]),_:1}),p(a,{type:"success",onClick:v},{default:o(()=>[l("POP")]),_:1}),u("div",T,[p(C,{"enter-active-class":"animate__animated animate__bounceOut","leave-active-class":"animate__animated animate__hinge"},{default:o(()=>[(d(!0),m(P,null,S(t.value,i=>(d(),m("div",{style:{padding:"10px"},class:"item",key:i},A(i),1))),128))]),_:1})]),E])}}});export{I as __pageData,$ as default};
