!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class s{constructor(e="page view",t={}){this._type="string"==typeof e?e.toLowerCase():"page view",this._shooted=0,this._event="",this._config=t}set type(e){return!1}set shooted(e){return!1}set event(e){return""!==this._event?(console.warn("Warning: Event name was already setted."),!1):(this._event=e,!0)}get type(){return this._type}get shooted(){return this._shooted}get event(){return this._event}async*run(){const e=this;let t=0;try{if(t=1,"page view"==e._type)t=2,("loading"===document.readyState||document.querySelector("body"))&&(t=2.1,yield!0);else if("dom ready"==e._type){t=3;let e=!1;for(;!e;)await new Promise(e=>setTimeout(e,50)),"interactive"!==document.readyState&&"complete"!==document.readyState||(e=!0);yield!0}else if("window loaded"==e._type){t=4;let e=!1;for(;!e;)await new Promise(e=>setTimeout(e,50)),"complete"===document.readyState&&(e=!0);yield!0}else if("custom event"==e._type){if(t=5,!window.dataLayer)return console.warn('Warning: There is no "window.dataLayer", check that GTM is properly installed.'),!1;t=5.1;const r=function*(e){for(console.log("Canal",e);;){const t=e.take();yield t}}(function(e,t){const r=function(){const e=[],t=[];return{take:function(){return e.length?Promise.resolve(e.shift()):new Promise(e=>t.push(e))},put:function(r){if(t.length){t.shift()(r)}else e.push(r)}}}();return e.addEventListener(t,(function(e){r.put(!0)})),r}(document,e._event));for(;;)yield r.next().value}}catch(e){console.error(`Línea: ${t} | Mensaje: ${e.message}`)}}}class n{constructor(e="custom html"){this._type="string"==typeof e?e.toLowerCase():"custom html",this._html="",this._stateOK=!1}set type(e){return!1}set html(e){return"string"!==typeof e?(console.error("Error: html value expected to be a string."),!1):(this._html=e,this._stateOK=!0,!0)}set stateOK(e){return!1}get type(){return this._type}get html(){return this._html}get stateOK(){return this._stateOK}run(){const e=document.getElementsByTagName("body")[0];if("custom html"===this._type){"string"===typeof this._html&&(this._html?e.innerHTML=e.innerHTML+this._html:console.warn("Warning: Something went wrong with html property passed."))}}}const o=new s("custom event");o.event="atm.test.event";var i=o;const a=new n("custom html");a.html="<style>body { background-color: #AF0; }</style>",a.html+='<script>if(document.body) { alert("This a Custom HTML tag."); }<\/script>',new class{constructor(e,t){if(self=this,this._prevtriggers=e,this._triggers=[],this._prevtags=t,this._tags=[],this._triggersOK=!1,this._tagsOK=!1,this._stateOK=!1,"none"===self.testTrigger(self._prevtriggers))console.warn('Warning: The "triggers" param is not a valid object.');else if("trigger"===self.testTrigger(self._prevtriggers))self._triggers[0]=[{trigger:self._prevtriggers,value:!1}],this._triggersOK=!0;else for(let e=0;e<self._prevtriggers.length;e++){const t=self._prevtriggers[e];if("none"===self.testTrigger(t));else if("trigger"===self.testTrigger(t))self._triggers[0]||(self._triggers[0]=[]),self._triggers[0][e]={trigger:t,value:!1},this._triggersOK=!0;else{self._triggers[e]||(self._triggers[e]=[]);for(let r=0;r<t.length;r++){const t=self._prevtriggers[e][r];"trigger"===self.testTrigger(t)&&(self._triggers[e][r]={trigger:t,value:!1},this._triggersOK=!0)}}}null!=this._prevtags?"object"==typeof this._prevtags?this._prevtags.length||(this._prevtags instanceof n?(this._tags=[[this._prevtags]],this._tagsOK=!0):console.log("Warning1: Your tag is not well-formed.")):console.log("Warning2: Your tag is not a valid object."):console.warn("Warning3: You did not passed a tag."),this._triggersOK&&this._tagsOK?this._stateOK=!0:console.error("Error: The project is not able. There is an error on setting Triggers or Tags.")}set stateOK(e){return!1}get stateOK(){return this._stateOK}testTrigger(e){let t="none";try{null!=e&&"object"==typeof e&&(e.length?t="array":e instanceof s&&(t="trigger"))}catch(e){t="none"}return t}run(){const e=this;let t=0;const r=setInterval(()=>{void 0!==window.dataLayer&&"object"==typeof window.dataLayer&&window.dataLayer.length>=0&&(clearInterval(r),window.dataLayer.push=function(){for(let e=0;e<arguments.length;e++){const t=arguments[e];if(void 0!==t.event){const e=new CustomEvent(t.event,{detail:{element:t}});document.dispatchEvent(e)}}Array.prototype.push.apply(this,arguments)})},10);if(this._stateOK){t=1;try{let t=this._tags[0][0];for(let t=0;t<e._triggers.length;t++)e._triggers[t].resolve=function(){let e=!0;return this.forEach(t=>{e=e&&t.value}),e};e._triggers.resolve=function(){let e=!1;return this.forEach(t=>{e=e||t.resolve()}),e};for(let r=0;r<e._triggers.length;r++){const s=e._triggers[r];for(let r=0;r<s.length;r++){const n=s[r];let o=n.trigger.run();!async function(){for await(let r of o)n.value=!0,e._triggers.resolve()&&(console.warn("Se ejecuta el TAG"),t.run())}()}}}catch(e){console.error(`Línea: ${t} | Mensaje: ${e.message}`)}}else console.error("Error: There was an error while setting the project.")}}([[i]],a).run()}]);