import{bv as Tl,bi as bl,al as El,J as ve,d as me,a2 as gl,x as te,q as m,o as v,c as $,e as T,a5 as Z,n as f,u as E,M as P,w as O,b as oe,au as rl,aQ as R,F as ll,a7 as M,a6 as Y,bb as hl,af as yl,U as Le,bw as Te,k as W,s as F,m as nl,r as Ee,v as ol,ad as $l,z as B,P as fe,a8 as tl,t as J,l as N,R as il,a1 as Cl,I as al,aT as ul,ax as Vl,aC as zl,bx as pe,B as Ml,by as _e,ap as dl,bz as Bl,C as Pl,D as Dl,bA as ql,as as Wl,H as Fl,a4 as Sl,K as ne,L as Kl,N as el,O as cl,aO as q,bB as Al,aY as Rl,am as pl,ag as Ol}from"./index.31dccc3c.js";import{i as Nl,E as Hl}from"./el-input.e896c99c.js";import{U as X,C as wl}from"./event.776e7e11.js";import{s as jl}from"./scroll.367568bf.js";import{l as fl}from"./isEqual.cc623a36.js";import{d as vl,C as Ql}from"./el-tag.90498528.js";const Gl=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Ul=e=>Tl[e||"default"],Jl=e=>["",...bl].includes(e),Yl=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Il=El({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:bl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Xl={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Zl={name:"ElTag"},xl=me({...Zl,props:Il,emits:Xl,setup(e,{emit:l}){const i=e,h=gl(),u=te("tag"),c=m(()=>{const{type:d,hit:C,effect:b,closable:S,round:k}=i;return[u.b(),u.is("closable",S),u.m(d),u.m(h.value),u.m(b),u.is("hit",C),u.is("round",k)]}),s=d=>{l("close",d)},p=d=>{l("click",d)};return(d,C)=>d.disableTransitions?(v(),$("span",{key:0,class:f(E(c)),style:Y({backgroundColor:d.color}),onClick:p},[T("span",{class:f(E(u).e("content"))},[Z(d.$slots,"default")],2),d.closable?(v(),P(E(ll),{key:0,class:f(E(u).e("close")),onClick:R(s,["stop"])},{default:O(()=>[oe(E(rl))]),_:1},8,["class","onClick"])):M("v-if",!0)],6)):(v(),P(hl,{key:1,name:`${E(u).namespace.value}-zoom-in-center`,appear:""},{default:O(()=>[T("span",{class:f(E(c)),style:Y({backgroundColor:d.color}),onClick:p},[T("span",{class:f(E(u).e("content"))},[Z(d.$slots,"default")],2),d.closable?(v(),P(E(ll),{key:0,class:f(E(u).e("close")),onClick:R(s,["stop"])},{default:O(()=>[oe(E(rl))]),_:1},8,["class","onClick"])):M("v-if",!0)],6)]),_:3},8,["name"]))}});var _l=ve(xl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const en=yl(_l),kl="ElSelectGroup",$e="ElSelect";function ln(e,l){const i=Le($e),h=Le(kl,{disabled:!1}),u=m(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),c=m(()=>i.props.multiple?S(i.props.modelValue,e.value):k(e.value,i.props.modelValue)),s=m(()=>{if(i.props.multiple){const g=i.props.modelValue||[];return!c.value&&g.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),p=m(()=>e.label||(u.value?"":e.value)),d=m(()=>e.value||e.label||""),C=m(()=>e.disabled||l.groupDisabled||s.value),b=nl(),S=(g=[],y)=>{if(u.value){const w=i.props.valueKey;return g&&g.some(K=>Te(W(K,w))===W(y,w))}else return g&&g.includes(y)},k=(g,y)=>{if(u.value){const{valueKey:w}=i.props;return W(g,w)===W(y,w)}else return g===y},V=()=>{!e.disabled&&!h.disabled&&(i.hoverIndex=i.optionsArray.indexOf(b.proxy))};F(()=>p.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),F(()=>e.value,(g,y)=>{const{remote:w,valueKey:K}=i.props;if(!e.created&&!w){if(K&&typeof g=="object"&&typeof y=="object"&&g[K]===y[K])return;i.setSelected()}}),F(()=>h.disabled,()=>{l.groupDisabled=h.disabled},{immediate:!0});const{queryChange:t}=Te(i);return F(t,g=>{const{query:y}=E(g),w=new RegExp(Gl(y),"i");l.visible=w.test(p.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:p,currentValue:d,itemSelected:c,isDisabled:C,hoverItem:V}}const nn=me({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=Ee({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:h,itemSelected:u,isDisabled:c,select:s,hoverItem:p}=ln(e,i),{visible:d,hover:C}=ol(i),b=nl().proxy,S=b.value;s.onOptionCreate(b),$l(()=>{const{selected:V}=s,g=(s.props.multiple?V:[V]).some(y=>y.value===b.value);B(()=>{s.cachedOptions.get(S)===b&&!g&&s.cachedOptions.delete(S)}),s.onOptionDestroy(S,b)});function k(){e.disabled!==!0&&i.groupDisabled!==!0&&s.handleOptionSelect(b,!0)}return{ns:l,currentLabel:h,itemSelected:u,isDisabled:c,select:s,hoverItem:p,visible:d,hover:C,selectOptionClick:k,states:i}}});function on(e,l,i,h,u,c){return fe((v(),$("li",{class:f([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=R((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[Z(e.$slots,"default",{},()=>[T("span",null,J(e.currentLabel),1)])],34)),[[tl,e.visible]])}var sl=ve(nn,[["render",on],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const tn=me({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Le($e),l=te("select"),i=m(()=>e.props.popperClass),h=m(()=>e.props.multiple),u=m(()=>e.props.fitInputWidth),c=N("");function s(){var p;c.value=`${(p=e.selectWrapper)==null?void 0:p.offsetWidth}px`}return il(()=>{s(),Cl(e.selectWrapper,s)}),{ns:l,minWidth:c,popperClass:i,isMultiple:h,isFitInputWidth:u}}});function an(e,l,i,h,u,c){return v(),$("div",{class:f([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Y({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[Z(e.$slots,"default")],6)}var sn=ve(tn,[["render",an],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function rn(e){const{t:l}=al();return Ee({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const un=(e,l,i)=>{const{t:h}=al(),u=te("select"),c=N(null),s=N(null),p=N(null),d=N(null),C=N(null),b=N(null),S=N(-1),k=ul({query:""}),V=ul(""),{form:t,formItem:g}=Vl(),y=m(()=>!e.filterable||e.multiple||!l.visible),w=m(()=>e.disabled||(t==null?void 0:t.disabled)),K=m(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!w.value&&l.inputHovering&&n}),ae=m(()=>e.remote&&e.filterable?"":e.suffixIcon),Ve=m(()=>u.is("reverse",ae.value&&l.visible)),be=m(()=>e.remote?300:0),se=m(()=>e.loading?e.loadingText||h("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||h("el.select.noMatch"):l.options.size===0?e.noDataText||h("el.select.noData"):null),L=m(()=>Array.from(l.options.values())),ze=m(()=>Array.from(l.cachedOptions.values())),Me=m(()=>{const n=L.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ie=gl(),Be=m(()=>["small"].includes(ie.value)?"small":"default"),Pe=m({get(){return l.visible&&se.value!==!1},set(n){l.visible=n}});F([()=>w.value,()=>ie.value,()=>t==null?void 0:t.size],()=>{B(()=>{A()})}),F(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),F(()=>e.modelValue,(n,o)=>{e.multiple&&(A(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",j(l.query))),re(),e.filterable&&!e.multiple&&(l.inputLength=20),!fl(n,o)&&e.validateEvent&&(g==null||g.validate("change").catch(a=>zl()))},{flush:"post",deep:!0}),F(()=>l.visible,n=>{var o,a,r;n?((a=(o=p.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(r=s.value)==null||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),j(l.query),!e.multiple&&!e.remote&&(k.value.query="",pe(k),pe(V)))):(s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,De(),B(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),F(()=>l.options.entries(),()=>{var n,o,a;if(!Ml)return;(o=(n=p.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&A();const r=((a=C.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(r).includes(document.activeElement)||re(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&he()},{flush:"post"}),F(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(S.value=L.value[n]||{}),L.value.forEach(o=>{o.hover=S.value===o})});const A=()=>{e.collapseTags&&!e.filterable||B(()=>{var n,o;if(!c.value)return;const a=c.value.$el.querySelector("input"),r=d.value,I=Ul(ie.value||(t==null?void 0:t.size));a.style.height=`${(l.selected.length===0?I:Math.max(r?r.clientHeight+(r.clientHeight>I?6:0):0,I))-2}px`,l.tagInMultiLine=Number.parseFloat(a.style.height)>=I,l.visible&&se.value!==!1&&((o=(n=p.value)==null?void 0:n.updatePopper)==null||o.call(n))})},j=n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,B(()=>{var o,a;l.visible&&((a=(o=p.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&B(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,ge(),A()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),pe(V)):(l.filteredOptionsCount=l.optionsCount,k.value.query=n,pe(k),pe(V)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&he()}},ge=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},he=()=>{const n=L.value.filter(r=>r.visible&&!r.disabled&&!r.states.groupDisabled),o=n.find(r=>r.created),a=n[0];l.hoverIndex=ue(L.value,o||a)},re=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=ye(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(ye(a))}),l.selected=o,B(()=>{A()})},ye=n=>{let o;const a=_e(n).toLowerCase()==="object",r=_e(n).toLowerCase()==="null",I=_e(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const D=ze.value[H];if(a?W(D.value,e.valueKey)===W(n,e.valueKey):D.value===n){o={value:n,currentLabel:D.currentLabel,isDisabled:D.isDisabled};break}}if(o)return o;const G=a?n.label:!r&&!I?n:"",U={value:n,currentLabel:G};return e.multiple&&(U.hitState=!1),U},De=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>L.value.findIndex(a=>W(a,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=L.value.findIndex(o=>ee(o)===ee(l.selected))},300)},qe=()=>{var n,o;We(),(o=(n=p.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&A()},We=()=>{var n;l.inputWidth=(n=c.value)==null?void 0:n.$el.getBoundingClientRect().width},Fe=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,j(l.query))},Ke=vl(()=>{Fe()},be.value),Ae=vl(n=>{j(n.target.value)},be.value),x=n=>{fl(e.modelValue,n)||i.emit(wl,n)},Re=n=>{if(n.target.value.length<=0&&!de()){const o=e.modelValue.slice();o.pop(),i.emit(X,o),x(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ne=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!w.value){const r=e.modelValue.slice();r.splice(a,1),i.emit(X,r),x(r),i.emit("remove-tag",o.value)}n.stopPropagation()},_=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(typeof o!="string")for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(X,o),x(o),l.visible=!1,i.emit("clear")},Ce=(n,o)=>{var a;if(e.multiple){const r=(e.modelValue||[]).slice(),I=ue(r,n.value);I>-1?r.splice(I,1):(e.multipleLimit<=0||r.length<e.multipleLimit)&&r.push(n.value),i.emit(X,r),x(r),n.created&&(l.query="",j(""),l.inputLength=20),e.filterable&&((a=s.value)==null||a.focus())}else i.emit(X,n.value),x(n.value),l.visible=!1;l.isSilentBlur=o,He(),!l.visible&&B(()=>{Q(n)})},ue=(n=[],o)=>{if(!dl(o))return n.indexOf(o);const a=e.valueKey;let r=-1;return n.some((I,G)=>Te(W(I,a))===W(o,a)?(r=G,!0):!1),r},He=()=>{l.softFocus=!0;const n=s.value||c.value;n&&(n==null||n.focus())},Q=n=>{var o,a,r,I,G;const U=Array.isArray(n)?n[0]:n;let H=null;if(U!=null&&U.value){const D=L.value.filter(z=>z.value===U.value);D.length>0&&(H=D[0].$el)}if(p.value&&H){const D=(I=(r=(a=(o=p.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:r.querySelector)==null?void 0:I.call(r,`.${u.be("dropdown","wrap")}`);D&&jl(D,H)}(G=b.value)==null||G.handleScroll()},je=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Qe=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ge=n=>{n.code!==Bl.backspace&&de(!1),l.inputLength=s.value.value.length*15+20,A()},de=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(!!o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},ce=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,B(()=>j(o));else{const a=o[o.length-1]||"";l.isOnComposition=!Nl(a)}},Se=()=>{B(()=>Q(l.selected))},Ue=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},Oe=()=>{var n;l.visible=!1,(n=c.value)==null||n.blur()},Je=n=>{B(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},Ye=n=>{_(n)},Xe=()=>{l.visible=!1},we=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ie=()=>{var n;w.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=s.value||c.value)==null||n.focus()))},Ze=()=>{l.visible?L.value[l.hoverIndex]&&Ce(L.value[l.hoverIndex],void 0):Ie()},ee=n=>dl(n.value)?W(n.value,e.valueKey):n.value,xe=m(()=>L.value.filter(n=>n.visible).every(n=>n.disabled)),ke=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!xe.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=L.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&ke(n),B(()=>Q(S.value))}};return{optionsArray:L,selectSize:ie,handleResize:qe,debouncedOnInputChange:Ke,debouncedQueryChange:Ae,deletePrevTag:Re,deleteTag:Ne,deleteSelected:_,handleOptionSelect:Ce,scrollToOption:Q,readonly:y,resetInputHeight:A,showClose:K,iconComponent:ae,iconReverse:Ve,showNewOption:Me,collapseTagSize:Be,setSelected:re,managePlaceholder:ge,selectDisabled:w,emptyText:se,toggleLastOptionHitState:de,resetInputState:Ge,handleComposition:ce,onOptionCreate:je,onOptionDestroy:Qe,handleMenuEnter:Se,handleFocus:Ue,blur:Oe,handleBlur:Je,handleClearClick:Ye,handleClose:Xe,handleKeydownEscape:we,toggleMenu:Ie,selectOption:Ze,getValueKey:ee,navigateOptions:ke,dropMenuVisible:Pe,queryChange:k,groupQueryChange:V,reference:c,input:s,tooltipRef:p,tags:d,selectWrapper:C,scrollbar:b}},ml="ElSelect",dn=me({name:ml,componentName:ml,components:{ElInput:Hl,ElSelectMenu:sn,ElOption:sl,ElTag:en,ElScrollbar:Pl,ElTooltip:Dl,ElIcon:ll},directives:{ClickOutside:Ql},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Jl},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:ql.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Wl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:Fl},tagType:{...Il.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[X,wl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=te("select"),h=te("input"),{t:u}=al(),c=rn(e),{optionsArray:s,selectSize:p,readonly:d,handleResize:C,collapseTagSize:b,debouncedOnInputChange:S,debouncedQueryChange:k,deletePrevTag:V,deleteTag:t,deleteSelected:g,handleOptionSelect:y,scrollToOption:w,setSelected:K,resetInputHeight:ae,managePlaceholder:Ve,showClose:be,selectDisabled:se,iconComponent:L,iconReverse:ze,showNewOption:Me,emptyText:ie,toggleLastOptionHitState:Be,resetInputState:Pe,handleComposition:A,onOptionCreate:j,onOptionDestroy:ge,handleMenuEnter:he,handleFocus:re,blur:ye,handleBlur:De,handleClearClick:qe,handleClose:We,handleKeydownEscape:Fe,toggleMenu:Ke,selectOption:Ae,getValueKey:x,navigateOptions:Re,dropMenuVisible:Ne,reference:_,input:Ce,tooltipRef:ue,tags:He,selectWrapper:Q,scrollbar:je,queryChange:Qe,groupQueryChange:Ge}=un(e,c,l),{focus:de}=Yl(_),{inputWidth:ce,selected:Se,inputLength:Ue,filteredOptionsCount:Oe,visible:Je,softFocus:Ye,selectedLabel:Xe,hoverIndex:we,query:Ie,inputHovering:Ze,currentPlaceholder:ee,menuVisibleOnFocus:xe,isOnComposition:ke,isSilentBlur:n,options:o,cachedOptions:a,optionsCount:r,prefixWidth:I,tagInMultiLine:G}=ol(c),U=m(()=>{const z=[i.b()],le=E(p);return le&&z.push(i.m(le)),e.disabled&&z.push(i.m("disabled")),z}),H=m(()=>({maxWidth:`${E(ce)-32}px`,width:"100%"}));Sl($e,Ee({props:e,options:o,optionsArray:s,cachedOptions:a,optionsCount:r,filteredOptionsCount:Oe,hoverIndex:we,handleOptionSelect:y,onOptionCreate:j,onOptionDestroy:ge,selectWrapper:Q,selected:Se,setSelected:K,queryChange:Qe,groupQueryChange:Ge})),il(()=>{c.cachedPlaceHolder=ee.value=e.placeholder||u("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ee.value=""),Cl(Q,C),e.remote&&e.multiple&&ae(),B(()=>{const z=_.value&&_.value.$el;if(!!z&&(ce.value=z.getBoundingClientRect().width,l.slots.prefix)){const le=z.querySelector(`.${h.e("prefix")}`);I.value=Math.max(le.getBoundingClientRect().width+5,30)}}),K()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(X,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(X,"");const D=m(()=>{var z,le;return(le=(z=ue.value)==null?void 0:z.popperRef)==null?void 0:le.contentRef});return{tagInMultiLine:G,prefixWidth:I,selectSize:p,readonly:d,handleResize:C,collapseTagSize:b,debouncedOnInputChange:S,debouncedQueryChange:k,deletePrevTag:V,deleteTag:t,deleteSelected:g,handleOptionSelect:y,scrollToOption:w,inputWidth:ce,selected:Se,inputLength:Ue,filteredOptionsCount:Oe,visible:Je,softFocus:Ye,selectedLabel:Xe,hoverIndex:we,query:Ie,inputHovering:Ze,currentPlaceholder:ee,menuVisibleOnFocus:xe,isOnComposition:ke,isSilentBlur:n,options:o,resetInputHeight:ae,managePlaceholder:Ve,showClose:be,selectDisabled:se,iconComponent:L,iconReverse:ze,showNewOption:Me,emptyText:ie,toggleLastOptionHitState:Be,resetInputState:Pe,handleComposition:A,handleMenuEnter:he,handleFocus:re,blur:ye,handleBlur:De,handleClearClick:qe,handleClose:We,handleKeydownEscape:Fe,toggleMenu:Ke,selectOption:Ae,getValueKey:x,navigateOptions:Re,dropMenuVisible:Ne,focus:de,reference:_,input:Ce,tooltipRef:ue,popperPaneRef:D,tags:He,selectWrapper:Q,scrollbar:je,wrapperKls:U,selectTagsStyle:H,nsSelect:i}}}),cn={class:"select-trigger"},pn=["disabled","autocomplete"],fn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function vn(e,l,i,h,u,c){const s=ne("el-tag"),p=ne("el-tooltip"),d=ne("el-icon"),C=ne("el-input"),b=ne("el-option"),S=ne("el-scrollbar"),k=ne("el-select-menu"),V=Kl("click-outside");return fe((v(),$("div",{ref:"selectWrapper",class:f(e.wrapperKls),onClick:l[22]||(l[22]=R((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[oe(p,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:O(()=>[T("div",cn,[e.multiple?(v(),$("div",{key:0,ref:"tags",class:f(e.nsSelect.e("tags")),style:Y(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(v(),$("span",{key:0,class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[oe(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=t=>e.deleteTag(t,e.selected[0]))},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:Y({maxWidth:e.inputWidth-123+"px"})},J(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(v(),P(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:O(()=>[e.collapseTagsTooltip?(v(),P(p,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3)]),content:O(()=>[T("div",{class:f(e.nsSelect.e("collapse-tags"))},[(v(!0),$(el,null,cl(e.selected.slice(1),(t,g)=>(v(),$("div",{key:g,class:f(e.nsSelect.e("collapse-tag"))},[(v(),P(s,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:y=>e.deleteTag(y,t)},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:Y({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(v(),$("span",{key:1,class:f(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3))]),_:1},8,["size","type"])):M("v-if",!0)],2)):M("v-if",!0),M(" <div> "),e.collapseTags?M("v-if",!0):(v(),P(hl,{key:1,onAfterLeave:e.resetInputHeight},{default:O(()=>[T("span",{class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(v(!0),$(el,null,cl(e.selected,t=>(v(),P(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:g=>e.deleteTag(g,t)},{default:O(()=>[T("span",{class:f(e.nsSelect.e("tags-text")),style:Y({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),M(" </div> "),e.filterable?fe((v(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=t=>e.query=t),type:"text",class:f([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Y({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[3]||(l[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[4]||(l[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[5]||(l[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[6]||(l[6]=q(R(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(R(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[9]||(l[9]=q(R((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[11]||(l[11]=q(t=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[14]||(l[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[15]||(l[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,pn)),[[Al,e.query]]):M("v-if",!0)],6)):M("v-if",!0),oe(C,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:f([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(R(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(R(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(R(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(t=>e.visible=!1,["tab"]))],onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},Rl({suffix:O(()=>[e.iconComponent&&!e.showClose?(v(),P(d,{key:0,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:O(()=>[(v(),P(pl(e.iconComponent)))]),_:1},8,["class"])):M("v-if",!0),e.showClose&&e.clearIcon?(v(),P(d,{key:1,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:O(()=>[(v(),P(pl(e.clearIcon)))]),_:1},8,["class","onClick"])):M("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:O(()=>[T("div",fn,[Z(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:O(()=>[oe(k,null,{default:O(()=>[fe(oe(S,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:f([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:O(()=>[e.showNewOption?(v(),P(b,{key:0,value:e.query,created:!0},null,8,["value"])):M("v-if",!0),Z(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[tl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(v(),$(el,{key:0},[e.$slots.empty?Z(e.$slots,"empty",{key:0}):(v(),$("p",{key:1,class:f(e.nsSelect.be("dropdown","empty"))},J(e.emptyText),3))],64)):M("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[V,e.handleClose,e.popperPaneRef]])}var mn=ve(dn,[["render",vn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const bn=me({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=N(!0),h=nl(),u=N([]);Sl(kl,Ee({...ol(e)}));const c=Le($e);il(()=>{u.value=s(h.subTree)});const s=d=>{const C=[];return Array.isArray(d.children)&&d.children.forEach(b=>{var S;b.type&&b.type.name==="ElOption"&&b.component&&b.component.proxy?C.push(b.component.proxy):(S=b.children)!=null&&S.length&&C.push(...s(b))}),C},{groupQueryChange:p}=Te(c);return F(p,()=>{i.value=u.value.some(d=>d.visible===!0)}),{visible:i,ns:l}}});function gn(e,l,i,h,u,c){return fe((v(),$("ul",{class:f(e.ns.be("group","wrap"))},[T("li",{class:f(e.ns.be("group","title"))},J(e.label),3),T("li",null,[T("ul",{class:f(e.ns.b("group"))},[Z(e.$slots,"default")],2)])],2)),[[tl,e.visible]])}var Ll=ve(bn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const In=yl(mn,{Option:sl,OptionGroup:Ll}),kn=Ol(sl);Ol(Ll);export{kn as E,In as a,en as b,Jl as i,Il as t};
