/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const o=(t,...s)=>{const o=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(o,i)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const r=window.trustedTypes,l=r?r.emptyScript:"",a=window.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=u){var e,o;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const h=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:d.toAttribute)(i,s.type);this._$Ei=t,null==h?this.removeAttribute(n):this.setAttribute(n,h),this._$Ei=null}}_$AK(t,i){var s,e,o;const n=this.constructor,h=n._$Eu.get(t);if(void 0!==h&&this._$Ei!==h){const t=n.getPropertyOptions(h),r=t.converter,l=null!==(o=null!==(e=null===(s=r)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=h,this[h]=l(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:v}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.3.2");const f=globalThis.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,b="?"+w,y=`<${b}>`,m=document,$=(t="")=>m.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,_=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,E=/"/g,T=/^(?:script|style|textarea|title)$/i,k=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),L=new WeakMap,P=m.createTreeWalker(m,129,null,!1),V=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",h=C;for(let i=0;i<s;i++){const s=t[i];let r,l,a=-1,d=0;for(;d<s.length&&(h.lastIndex=d,l=h.exec(s),null!==l);)d=h.lastIndex,h===C?"!--"===l[1]?h=A:void 0!==l[1]?h=_:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),h=M):void 0!==l[3]&&(h=M):h===M?">"===l[0]?(h=null!=o?o:C,a=-1):void 0===l[1]?a=-2:(a=h.lastIndex-l[2].length,r=l[1],h=void 0===l[3]?M:'"'===l[3]?E:U):h===E||h===U?h=M:h===A||h===_?h=C:(h=M,o=void 0);const c=h===M&&t[i+1].startsWith("/>")?" ":"";n+=h===C?s+y:a>=0?(e.push(r),s.slice(0,a)+"$lit$"+s.slice(a)+w+c):s+w+(-2===a?(e.push(void 0),i):c)}const r=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(r):r,e]};class H{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const h=t.length-1,r=this.parts,[l,a]=V(t,i);if(this.el=H.createElement(l,s),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=P.nextNode())&&r.length<h;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const s=a[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?B:"?"===i[1]?J:"@"===i[1]?Z:j})}else r.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(w),i=t.length-1;if(i>0){e.textContent=f?f.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],$()),P.nextNode(),r.push({type:2,index:++o});e.append(t[i],$())}}}else if(8===e.nodeType)if(e.data===b)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)r.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,i){const s=m.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,h,r;if(i===z)return i;let l=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const a=S(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(h=(r=s)._$Cl)&&void 0!==h?h:r._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=N(t,l._$AS(t,i.values),l,e)),i}class O{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:m).importNode(s,!0);P.currentNode=o;let n=P.nextNode(),h=0,r=0,l=e[0];for(;void 0!==l;){if(h===l.index){let i;2===l.type?i=new R(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new q(n,this,t)),this.v.push(i),l=e[++r]}h!==(null==l?void 0:l.index)&&(n=P.nextNode(),h++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),S(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return x(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==I&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=H.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new O(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new H(t)),i}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.M($()),this.M($()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class j{constructor(t,i,s,e,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!S(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const e=t;let h,r;for(t=o[0],h=0;h<o.length-1;h++)r=N(this,e[s+h],i,h),r===z&&(r=this._$AH[h]),n||(n=!S(r)||r!==this._$AH[h]),r===I?t=I:t!==I&&(t+=(null!=r?r:"")+o[h+1]),this._$AH[h]=r}n&&!e&&this.C(t)}C(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===I?void 0:t}}const D=f?f.emptyScript:"";class J extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==I?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class Z extends j{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:I)===z)return;const e=this._$AH,o=t===I&&e!==I||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==I&&(e===I||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,F;null==K||K(H,R),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.4");class G extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let h=n._$litPart$;if(void 0===h){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=h=new R(i.insertBefore($(),t),t,void 0,null!=s?s:{})}return h._$AI(t),h})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}G.finalized=!0,G._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.0");class X extends G{static properties={homeLink:"",calendarLink:"",personLink:""};static get styles(){return o`
      :host {
        position: fixed;
      }

      .container {
        /* Layout Properties */
        position: absolute;
        top: 52px;
        left: 0px;
        width: 50px;
        height: 708px;
        /* UI Properties */
        background: #2E308E 0% 0% no-repeat padding-box;
        opacity: 1;
      }

      #homeIcon {
        /* Layout Properties */
        position: absolute;
        top: 128px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
        color: white;
      }

      #calendarIcon {
        /* Layout Properties */
        position: absolute;
        top: 187px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
        color: white;
      }

      #personIcon {
        /* Layout Properties */
        position: absolute;
        top: 246px;
        left: 10px;
        width: 30px;
        height: 30px;
        /* UI Properties */
        opacity: 1;
        color: white;
      }
    `}render(){return k`
      <div class="container">
        <a href=${this.homeLink}>
          <svg id="homeIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>
        </a>

        <a href=${this.calendarLink}>
          <svg id="calendarIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
        </a>

        <a href=${this.personLink}>
          <svg id="personIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </a>
      </div>
      
    `}}window.customElements.define("side-bar",X);export{X as SideBar};
