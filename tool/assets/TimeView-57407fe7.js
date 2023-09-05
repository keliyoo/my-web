import{b as L,n as W,m as M,d as w,t as O,e as z,f as $,g as P,w as V,h as D,r as C,i as a,j as U,k as I,l as B,p,q as x,o as A,c as G,s as R,u as E,v as F,x as N,F as q}from"./index-4ae11849.js";const[H,h]=L("circle");let J=0;const j=e=>Math.min(Math.max(+e,0),100);function K(e,s){const u=e?1:0;return`M ${s/2} ${s/2} m 0, -500 a 500, 500 0 1, ${u} 0, 1000 a 500, 500 0 1, ${u} 0, -1000`}const Q={text:String,size:W,fill:M("none"),rate:w(100),speed:w(0),color:[String,Object],clockwise:O,layerColor:String,currentRate:z(0),strokeWidth:w(40),strokeLinecap:String,startPosition:M("top")};var X=$({name:H,props:Q,emits:["update:currentRate"],setup(e,{emit:s,slots:u}){const _=`van-circle-${J++}`,c=P(()=>+e.strokeWidth+1e3),i=P(()=>K(e.clockwise,c.value)),g=P(()=>{const l={top:0,right:90,bottom:180,left:270}[e.startPosition];if(l)return{transform:`rotate(${l}deg)`}});V(()=>e.rate,d=>{let l;const o=Date.now(),n=e.currentRate,t=j(d),v=Math.abs((n-t)*1e3/+e.speed),k=()=>{const y=Date.now(),f=Math.min((y-o)/v,1)*(t-n)+n;s("update:currentRate",j(parseFloat(f.toFixed(1)))),(t>n?f<t:f>t)&&(l=C(k))};e.speed?(l&&D(l),l=C(k)):s("update:currentRate",t)},{immediate:!0});const T=()=>{const{strokeWidth:l,currentRate:o,strokeLinecap:n}=e,t=3140*o/100,v=I(e.color)?`url(#${_})`:e.color,k={stroke:v,strokeWidth:`${+l+1}px`,strokeLinecap:n,strokeDasharray:`${t}px 3140px`};return a("path",{d:i.value,style:k,class:h("hover"),stroke:v},null)},r=()=>{const d={fill:e.fill,stroke:e.layerColor,strokeWidth:`${e.strokeWidth}px`};return a("path",{class:h("layer"),style:d,d:i.value},null)},m=()=>{const{color:d}=e;if(!I(d))return;const l=Object.keys(d).sort((o,n)=>parseFloat(o)-parseFloat(n)).map((o,n)=>a("stop",{key:n,offset:o,"stop-color":d[o]},null));return a("defs",null,[a("linearGradient",{id:_,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[l])])},b=()=>{if(u.default)return u.default();if(e.text)return a("div",{class:h("text")},[e.text])};return()=>a("div",{class:h(),style:U(e.size)},[a("svg",{viewBox:`0 0 ${c.value} ${c.value}`,style:g.value},[m(),r(),T()]),b()])}});const Y=B(X),Z=$({__name:"TimeLoopView",setup(e){const s=p(5),u=p(20),_=p(2),c=p(!1),i=p(!1),g=p(1),T={"0%":"#3fecff","100%":"#6149f6"},r=p(30),m=p(!1),b=()=>{if(!c.value){c.value=!0;return}i.value=!i.value},d=()=>{c.value=!1,r.value=0};V([s,u,_],()=>{c.value=!1,i.value=!1,r.value=0});let l=0,o=p(1);return V([c,i],()=>{if(!c.value){r.value=0,o.value=1,m.value=!1,clearInterval(l);return}if(i.value){clearInterval(l);return}const n=1e3/25;l=setInterval(()=>{console.log(r.value);const t=n/((m.value?_.value:s.value)*1e3)*100;if(r.value>=100)r.value=t;else{const v=r.value+t;v>=100?(r.value=100,m.value=!m.value,m.value||(o.value>=u.value?i.value=!0:o.value++)):r.value=v}},n)}),(n,t)=>{const v=x("van-field"),k=x("van-button"),y=x("van-row"),S=x("van-divider");return A(),G(q,null,[a(v,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=f=>s.value=f),type:"digit",label:"循环时间"},null,8,["modelValue"]),a(v,{modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=f=>_.value=f),type:"digit",label:"循环时间间隙"},null,8,["modelValue"]),a(v,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=f=>u.value=f),type:"digit",label:"循环次数"},null,8,["modelValue"]),a(y,{justify:"space-around"},{default:R(()=>[a(k,{onClick:b},{default:R(()=>[E(F(!c.value||i.value?"开始":"暂停"),1)]),_:1}),E(" "+F(N(o))+" ",1),a(k,{onClick:d,disabled:!i.value},{default:R(()=>[E("重置")]),_:1},8,["disabled"])]),_:1}),a(S),a(y,{justify:"center"},{default:R(()=>[a(N(Y),{"current-rate":g.value,"onUpdate:currentRate":t[3]||(t[3]=f=>g.value=f),rate:r.value,color:m.value?"#07c160":T,"layer-color":"#ebedf0","stroke-width":60,size:"200",text:m.value?"间隙":"运行"},null,8,["current-rate","rate","color","text"])]),_:1})],64)}}}),te=$({__name:"TimeView",setup(e){return(s,u)=>(A(),G("main",null,[a(Z)]))}});export{te as default};
