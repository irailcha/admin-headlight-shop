import{y as it,r as le,j as st}from"./index-DkIWbRm3.js";var E=function(){return E=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},E.apply(this,arguments)};function at(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",ot="-moz-",d="-webkit-",ge="comm",Ct="rule",qt="decl",Ze="@import",me="@keyframes",Je="@layer",ye=Math.abs,Kt=String.fromCharCode,Lt=Object.assign;function Qe(t,e){return I(t,0)^45?(((e<<2^I(t,0))<<2^I(t,1))<<2^I(t,2))<<2^I(t,3):0}function ve(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function u(t,e,r){return t.replace(e,r)}function yt(t,e,r){return t.indexOf(e,r)}function I(t,e){return t.charCodeAt(e)|0}function K(t,e,r){return t.slice(e,r)}function j(t){return t.length}function be(t){return t.length}function nt(t,e){return e.push(t),t}function Ve(t,e){return t.map(e).join("")}function te(t,e){return t.filter(function(r){return!D(r,e)})}var At=1,U=1,we=0,R=0,C=0,V="";function It(t,e,r,n,s,o,i,c){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:At,column:U,length:i,return:"",siblings:c}}function F(t,e){return Lt(It("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function H(t){for(;t.root;)t=F(t.root,{children:[t]});nt(t,t.siblings)}function Xe(){return C}function tr(){return C=R>0?I(V,--R):0,U--,C===10&&(U=1,At--),C}function O(){return C=R<we?I(V,R++):0,U++,C===10&&(U=1,At++),C}function B(){return I(V,R)}function vt(){return R}function Et(t,e){return K(V,t,e)}function Ft(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(t){return At=U=1,we=j(V=t),R=0,[]}function rr(t){return V="",t}function jt(t){return ve(Et(R-1,Mt(t===91?t+2:t===40?t+1:t)))}function nr(t){for(;(C=B())&&C<33;)O();return Ft(t)>2||Ft(C)>3?"":" "}function sr(t,e){for(;--e&&O()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return Et(t,vt()+(e<6&&B()==32&&O()==32))}function Mt(t){for(;O();)switch(C){case t:return R;case 34:case 39:t!==34&&t!==39&&Mt(C);break;case 40:t===41&&Mt(t);break;case 92:O();break}return R}function or(t,e){for(;O()&&t+C!==57;)if(t+C===84&&B()===47)break;return"/*"+Et(e,R-1)+"*"+Kt(t===47?t:O())}function ir(t){for(;!Ft(B());)O();return Et(t,R)}function ar(t){return rr(bt("",null,null,null,[""],t=er(t),0,[0],t))}function bt(t,e,r,n,s,o,i,c,a){for(var l=0,h=0,g=i,m=0,p=0,w=0,x=1,_=1,k=1,S=0,b="",$=s,A=o,y=n,f=b;_;)switch(w=S,S=O()){case 40:if(w!=108&&I(f,g-1)==58){yt(f+=u(jt(S),"&","&\f"),"&\f",ye(l?c[l-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:f+=jt(S);break;case 9:case 10:case 13:case 32:f+=nr(w);break;case 92:f+=sr(vt()-1,7);continue;case 47:switch(B()){case 42:case 47:nt(cr(or(O(),vt()),e,r,a),a);break;default:f+="/"}break;case 123*x:c[l++]=j(f)*k;case 125*x:case 59:case 0:switch(S){case 0:case 125:_=0;case 59+h:k==-1&&(f=u(f,/\f/g,"")),p>0&&j(f)-g&&nt(p>32?re(f+";",n,r,g-1,a):re(u(f," ","")+";",n,r,g-2,a),a);break;case 59:f+=";";default:if(nt(y=ee(f,e,r,l,h,s,c,b,$=[],A=[],g,o),o),S===123)if(h===0)bt(f,e,y,y,$,o,g,c,A);else switch(m===99&&I(f,3)===110?100:m){case 100:case 108:case 109:case 115:bt(t,y,y,n&&nt(ee(t,y,y,0,0,s,c,b,s,$=[],g,A),A),s,A,g,c,n?$:A);break;default:bt(f,y,y,y,[""],A,0,c,A)}}l=h=p=0,x=k=1,b=f="",g=i;break;case 58:g=1+j(f),p=w;default:if(x<1){if(S==123)--x;else if(S==125&&x++==0&&tr()==125)continue}switch(f+=Kt(S),S*x){case 38:k=h>0?1:(f+="\f",-1);break;case 44:c[l++]=(j(f)-1)*k,k=1;break;case 64:B()===45&&(f+=jt(O())),m=B(),h=g=j(b=f+=ir(vt())),S++;break;case 45:w===45&&j(f)==2&&(x=0)}}return o}function ee(t,e,r,n,s,o,i,c,a,l,h,g){for(var m=s-1,p=s===0?o:[""],w=be(p),x=0,_=0,k=0;x<n;++x)for(var S=0,b=K(t,m+1,m=ye(_=i[x])),$=t;S<w;++S)($=ve(_>0?p[S]+" "+b:u(b,/&\f/g,p[S])))&&(a[k++]=$);return It(t,e,r,s===0?Ct:c,a,l,h,g)}function cr(t,e,r,n){return It(t,e,r,ge,Kt(Xe()),K(t,2,-2),0,n)}function re(t,e,r,n,s){return It(t,e,r,qt,K(t,0,n),K(t,n+1,-1),n,s)}function Se(t,e,r){switch(Qe(t,e)){case 5103:return d+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+t+t;case 4789:return ot+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return d+t+ot+t+v+t+t;case 5936:switch(I(t,e+11)){case 114:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return d+t+v+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return d+t+v+t+t;case 6165:return d+t+v+"flex-"+t+t;case 5187:return d+t+u(t,/(\w+).+(:[^]+)/,d+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return d+t+v+"flex-item-"+u(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":v+"grid-row-"+u(t,/flex-|-self/g,""))+t;case 4675:return d+t+v+"flex-line-pack"+u(t,/align-content|flex-|-self/g,"")+t;case 5548:return d+t+v+u(t,"shrink","negative")+t;case 5292:return d+t+v+u(t,"basis","preferred-size")+t;case 6060:return d+"box-"+u(t,"-grow","")+d+t+v+u(t,"grow","positive")+t;case 4554:return d+u(t,/([^-])(transform)/g,"$1"+d+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+t+t;case 4200:if(!D(t,/flex-|baseline/))return v+"grid-column-align"+K(t,e)+t;break;case 2592:case 3360:return v+u(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,D(n.props,/grid-\w+-end/)})?~yt(t+(r=r[e].value),"span",0)?t:v+u(t,"-start","")+t+v+"grid-row-span:"+(~yt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":v+u(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:v+u(u(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,d+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(t)-1-e>6)switch(I(t,e+1)){case 109:if(I(t,e+4)!==45)break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+ot+(I(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~yt(t,"stretch",0)?Se(u(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return u(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,c,a,l){return v+s+":"+o+l+(i?v+s+"-span:"+(c?a:+a-+o)+l:"")+t});case 4949:if(I(t,e+6)===121)return u(t,":",":"+d)+t;break;case 6444:switch(I(t,I(t,14)===45?18:11)){case 120:return u(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(I(t,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+v+"$2box$3")+t;case 100:return u(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return u(t,"scroll-","scroll-snap-")+t}return t}function $t(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function ur(t,e,r,n){switch(t.type){case Je:if(t.children.length)break;case Ze:case qt:return t.return=t.return||t.value;case ge:return"";case me:return t.return=t.value+"{"+$t(t.children,n)+"}";case Ct:if(!j(t.value=t.props.join(",")))return""}return j(r=$t(t.children,n))?t.return=t.value+"{"+r+"}":""}function fr(t){var e=be(t);return function(r,n,s,o){for(var i="",c=0;c<e;c++)i+=t[c](r,n,s,o)||"";return i}}function pr(t){return function(e){e.root||(e=e.return)&&t(e)}}function dr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case qt:t.return=Se(t.value,t.length,r);return;case me:return $t([F(t,{value:u(t.value,"@","@"+d)})],n);case Ct:if(t.length)return Ve(r=t.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":H(F(t,{props:[u(s,/:(read-\w+)/,":"+ot+"$1")]})),H(F(t,{props:[s]})),Lt(t,{props:te(r,n)});break;case"::placeholder":H(F(t,{props:[u(s,/:(plac\w+)/,":"+d+"input-$1")]})),H(F(t,{props:[u(s,/:(plac\w+)/,":"+ot+"$1")]})),H(F(t,{props:[u(s,/:(plac\w+)/,v+"input-$1")]})),H(F(t,{props:[s]})),Lt(t,{props:te(r,n)});break}return""})}}var hr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P={},Z=typeof process<"u"&&P!==void 0&&(P.REACT_APP_SC_ATTR||P.SC_ATTR)||"data-styled",$e="active",xe="data-styled-version",_t="6.1.13",Ut=`/*!sc*/
`,xt=typeof window<"u"&&"HTMLElement"in window,lr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&P.REACT_APP_SC_DISABLE_SPEEDY!==""?P.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&P.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&P!==void 0&&P.SC_DISABLE_SPEEDY!==void 0&&P.SC_DISABLE_SPEEDY!==""&&P.SC_DISABLE_SPEEDY!=="false"&&P.SC_DISABLE_SPEEDY),Pt=Object.freeze([]),J=Object.freeze({});function gr(t,e,r){return r===void 0&&(r=J),t.theme!==r.theme&&t.theme||e||r.theme}var ke=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yr=/(^-|-$)/g;function ne(t){return t.replace(mr,"-").replace(yr,"")}var vr=/(a)(d)/gi,gt=52,se=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gt(t){var e,r="";for(e=Math.abs(t);e>gt;e=e/gt|0)r=se(e%gt)+r;return(se(e%gt)+r).replace(vr,"$1-$2")}var Tt,Ce=5381,q=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Ae=function(t){return q(Ce,t)};function Ie(t){return Gt(Ae(t)>>>0)}function br(t){return t.displayName||t.name||"Component"}function Dt(t){return typeof t=="string"&&!0}var Ee=typeof Symbol=="function"&&Symbol.for,_e=Ee?Symbol.for("react.memo"):60115,wr=Ee?Symbol.for("react.forward_ref"):60112,Sr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xr=((Tt={})[wr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt[_e]=Pe,Tt);function oe(t){return("type"in(e=t)&&e.type.$$typeof)===_e?Pe:"$$typeof"in t?xr[t.$$typeof]:Sr;var e}var kr=Object.defineProperty,Cr=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,Ar=Object.getOwnPropertyDescriptor,Ir=Object.getPrototypeOf,ae=Object.prototype;function Re(t,e,r){if(typeof e!="string"){if(ae){var n=Ir(e);n&&n!==ae&&Re(t,n,r)}var s=Cr(e);ie&&(s=s.concat(ie(e)));for(var o=oe(t),i=oe(e),c=0;c<s.length;++c){var a=s[c];if(!(a in $r||r&&r[a]||i&&a in i||o&&a in o)){var l=Ar(e,a);try{kr(t,a,l)}catch{}}}}return t}function Q(t){return typeof t=="function"}function Zt(t){return typeof t=="object"&&"styledComponentId"in t}function G(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Bt(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function ct(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Wt(t,e,r){if(r===void 0&&(r=!1),!r&&!ct(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Wt(t[n],e[n]);else if(ct(e))for(var n in e)t[n]=Wt(t[n],e[n]);return t}function Jt(t,e){Object.defineProperty(t,"toString",{value:e})}function ut(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Er=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw ut(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var c=this.indexOfGroup(e+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(c,r[i])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Ut);return r},t}(),wt=new Map,kt=new Map,St=1,mt=function(t){if(wt.has(t))return wt.get(t);for(;kt.has(St);)St++;var e=St++;return wt.set(t,e),kt.set(e,t),e},_r=function(t,e){St=e+1,wt.set(t,e),kt.set(e,t)},Pr="style[".concat(Z,"][").concat(xe,'="').concat(_t,'"]'),Rr=new RegExp("^".concat(Z,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nr=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},Or=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Ut),s=[],o=0,i=n.length;o<i;o++){var c=n[o].trim();if(c){var a=c.match(Rr);if(a){var l=0|parseInt(a[1],10),h=a[2];l!==0&&(_r(h,l),Nr(t,h,a[3]),t.getTag().insertRules(l,s)),s.length=0}else s.push(c)}}},ce=function(t){for(var e=document.querySelectorAll(Pr),r=0,n=e.length;r<n;r++){var s=e[r];s&&s.getAttribute(Z)!==$e&&(Or(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function jr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ne=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(c){var a=Array.from(c.querySelectorAll("style[".concat(Z,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(Z,$e),n.setAttribute(xe,_t);var i=jr();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},Tr=function(){function t(e){this.element=Ne(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw ut(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Dr=function(){function t(e){this.element=Ne(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),zr=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ue=xt,Lr={isServer:!xt,useCSSOMInjection:!lr},Oe=function(){function t(e,r,n){e===void 0&&(e=J),r===void 0&&(r={});var s=this;this.options=E(E({},Lr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&xt&&ue&&(ue=!1,ce(this)),Jt(this,function(){return function(o){for(var i=o.getTag(),c=i.length,a="",l=function(g){var m=function(k){return kt.get(k)}(g);if(m===void 0)return"continue";var p=o.names.get(m),w=i.getGroup(g);if(p===void 0||!p.size||w.length===0)return"continue";var x="".concat(Z,".g").concat(g,'[id="').concat(m,'"]'),_="";p!==void 0&&p.forEach(function(k){k.length>0&&(_+="".concat(k,","))}),a+="".concat(w).concat(x,'{content:"').concat(_,'"}').concat(Ut)},h=0;h<c;h++)l(h);return a}(s)})}return t.registerId=function(e){return mt(e)},t.prototype.rehydrate=function(){!this.server&&xt&&ce(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(E(E({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new zr(s):n?new Tr(s):new Dr(s)}(this.options),new Er(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(mt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(mt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(mt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Fr=/&/g,Mr=/^\s*\/\/.*$/gm;function je(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=je(r.children,e)),r})}function Gr(t){var e,r,n,s=J,o=s.options,i=o===void 0?J:o,c=s.plugins,a=c===void 0?Pt:c,l=function(m,p,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):m},h=a.slice();h.push(function(m){m.type===Ct&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Fr,r).replace(n,l))}),i.prefix&&h.push(dr),h.push(ur);var g=function(m,p,w,x){p===void 0&&(p=""),w===void 0&&(w=""),x===void 0&&(x="&"),e=x,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var _=m.replace(Mr,""),k=ar(w||p?"".concat(w," ").concat(p," { ").concat(_," }"):_);i.namespace&&(k=je(k,i.namespace));var S=[];return $t(k,fr(h.concat(pr(function(b){return S.push(b)})))),S};return g.hash=a.length?a.reduce(function(m,p){return p.name||ut(15),q(m,p.name)},Ce).toString():"",g}var Br=new Oe,Yt=Gr(),Te=it.createContext({shouldForwardProp:void 0,styleSheet:Br,stylis:Yt});Te.Consumer;it.createContext(void 0);function fe(){return le.useContext(Te)}var De=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Yt);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Jt(this,function(){throw ut(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Yt),this.name+e.hash},t}(),Wr=function(t){return t>="A"&&t<="Z"};function pe(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Wr(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var ze=function(t){return t==null||t===!1||t===""},Le=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!ze(o)&&(Array.isArray(o)&&o.isCss||Q(o)?n.push("".concat(pe(s),":"),o,";"):ct(o)?n.push.apply(n,at(at(["".concat(s," {")],Le(o),!1),["}"],!1)):n.push("".concat(pe(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in hr||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function W(t,e,r,n){if(ze(t))return[];if(Zt(t))return[".".concat(t.styledComponentId)];if(Q(t)){if(!Q(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return W(s,e,r,n)}var o;return t instanceof De?r?(t.inject(r,n),[t.getName(n)]):[t]:ct(t)?Le(t):Array.isArray(t)?Array.prototype.concat.apply(Pt,t.map(function(i){return W(i,e,r,n)})):[t.toString()]}function Yr(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Q(r)&&!Zt(r))return!1}return!0}var Hr=Ae(_t),qr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Yr(e),this.componentId=r,this.baseHash=q(Hr,r),this.baseStyle=n,Oe.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=G(s,this.staticRulesId);else{var o=Bt(W(this.rules,e,r,n)),i=Gt(q(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var c=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,c)}s=G(s,i),this.staticRulesId=i}else{for(var a=q(this.baseHash,n.hash),l="",h=0;h<this.rules.length;h++){var g=this.rules[h];if(typeof g=="string")l+=g;else if(g){var m=Bt(W(g,e,r,n));a=q(a,m+h),l+=m}}if(l){var p=Gt(a>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),s=G(s,p)}}return s},t}(),Fe=it.createContext(void 0);Fe.Consumer;var zt={};function Kr(t,e,r){var n=Zt(t),s=t,o=!Dt(t),i=e.attrs,c=i===void 0?Pt:i,a=e.componentId,l=a===void 0?function($,A){var y=typeof $!="string"?"sc":ne($);zt[y]=(zt[y]||0)+1;var f="".concat(y,"-").concat(Ie(_t+y+zt[y]));return A?"".concat(A,"-").concat(f):f}(e.displayName,e.parentComponentId):a,h=e.displayName,g=h===void 0?function($){return Dt($)?"styled.".concat($):"Styled(".concat(br($),")")}(t):h,m=e.displayName&&e.componentId?"".concat(ne(e.displayName),"-").concat(e.componentId):e.componentId||l,p=n&&s.attrs?s.attrs.concat(c).filter(Boolean):c,w=e.shouldForwardProp;if(n&&s.shouldForwardProp){var x=s.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;w=function($,A){return x($,A)&&_($,A)}}else w=x}var k=new qr(r,m,n?s.componentStyle:void 0);function S($,A){return function(y,f,X){var ft=y.attrs,Be=y.componentStyle,We=y.defaultProps,Ye=y.foldedComponentIds,He=y.styledComponentId,qe=y.target,Ke=it.useContext(Fe),Ue=fe(),Rt=y.shouldForwardProp||Ue.shouldForwardProp,Vt=gr(f,Ke,We)||J,T=function(dt,et,ht){for(var rt,M=E(E({},et),{className:void 0,theme:ht}),Ot=0;Ot<dt.length;Ot+=1){var lt=Q(rt=dt[Ot])?rt(M):rt;for(var L in lt)M[L]=L==="className"?G(M[L],lt[L]):L==="style"?E(E({},M[L]),lt[L]):lt[L]}return et.className&&(M.className=G(M.className,et.className)),M}(ft,f,Vt),pt=T.as||qe,tt={};for(var z in T)T[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&T.theme===Vt||(z==="forwardedAs"?tt.as=T.forwardedAs:Rt&&!Rt(z,pt)||(tt[z]=T[z]));var Xt=function(dt,et){var ht=fe(),rt=dt.generateAndInjectStyles(et,ht.styleSheet,ht.stylis);return rt}(Be,T),Nt=G(Ye,He);return Xt&&(Nt+=" "+Xt),T.className&&(Nt+=" "+T.className),tt[Dt(pt)&&!ke.has(pt)?"class":"className"]=Nt,tt.ref=X,le.createElement(pt,tt)}(b,$,A)}S.displayName=g;var b=it.forwardRef(S);return b.attrs=p,b.componentStyle=k,b.displayName=g,b.shouldForwardProp=w,b.foldedComponentIds=n?G(s.foldedComponentIds,s.styledComponentId):"",b.styledComponentId=m,b.target=n?s.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(A){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var X=0,ft=y;X<ft.length;X++)Wt(A,ft[X],!0);return A}({},s.defaultProps,$):$}}),Jt(b,function(){return".".concat(b.styledComponentId)}),o&&Re(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function de(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var he=function(t){return Object.assign(t,{isCss:!0})};function Me(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Q(t)||ct(t))return he(W(de(Pt,at([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?W(n):he(W(de(n,e)))}function Ht(t,e,r){if(r===void 0&&(r=J),!e)throw ut(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,Me.apply(void 0,at([s],o,!1)))};return n.attrs=function(s){return Ht(t,e,E(E({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Ht(t,e,E(E({},r),s))},n}var Ge=function(t){return Ht(Kr,t)},Y=Ge;ke.forEach(function(t){Y[t]=Ge(t)});function Qt(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=Bt(Me.apply(void 0,at([t],e,!1))),s=Ie(n);return new De(s,n)}const Ur="#4fa94d";Y.div`
  display: ${t=>t.$visible?"flex":"none"};
`;const Zr="http://www.w3.org/2000/svg",N=242.776657104492,Jr=1.6,Qr=Qt`
12.5% {
  stroke-dasharray: ${N*.14}px, ${N}px;
  stroke-dashoffset: -${N*.11}px;
}
43.75% {
  stroke-dasharray: ${N*.35}px, ${N}px;
  stroke-dashoffset: -${N*.35}px;
}
100% {
  stroke-dasharray: ${N*.01}px, ${N}px;
  stroke-dashoffset: -${N*.99}px;
}
`,Vr=Y.path`
  stroke-dasharray: ${N*.01}px, ${N};
  stroke-dashoffset: 0;
  animation: ${Qr} ${Jr}s linear infinite;
`,Xr=({color:t=Ur,width:e="200"})=>st.jsxs("svg",{xmlns:Zr,width:`${e}`,height:`${Number(e)*.5}`,viewBox:`0 0 ${e} 100`,"data-testid":"infinity-spin",children:[st.jsx(Vr,{"data-testid":"infinity-spin-path-1",stroke:t,fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}),st.jsx("path",{"data-testid":"infinity-spin-path-2",opacity:"0.07",fill:"none",stroke:t,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"})]}),tn=Qt`
to {
   transform: rotate(360deg);
 }
`;Y.svg`
  animation: ${tn} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;Y.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const en=Qt`
to {
   stroke-dashoffset: 136;
 }
`;Y.polygon`
  stroke-dasharray: 17;
  animation: ${en} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Y.svg`
  transform-origin: 50% 65%;
`;const nn=()=>st.jsx("div",{className:"loader",children:st.jsx(Xr,{visible:!0,width:"200",color:"#dee2e6",ariaLabel:"infinity-spin-loading"})});export{nn as L};