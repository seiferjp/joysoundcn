function h(){}function C(e){return e()}function E(){return Object.create(null)}function $(e){e.forEach(C)}function j(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}let x=!1;function P(){x=!0}function q(){x=!1}function D(e,t,n,r){for(;e<t;){const c=e+(t-e>>1);n(c)<=r?e=c+1:t=c}return e}function G(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let l=0;l<t.length;l++){const s=t[l];s.claim_order!==void 0&&i.push(s)}t=i}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let c=0;for(let i=0;i<t.length;i++){const l=t[i].claim_order,s=(c>0&&t[n[c]].claim_order<=l?c+1:D(1,c,y=>t[n[y]].claim_order,l))-1;r[i]=n[s]+1;const a=s+1;n[a]=i,c=Math.max(a,c)}const u=[],f=[];let o=t.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(u.push(t[i-1]);o>=i;o--)f.push(t[o]);o--}for(;o>=0;o--)f.push(t[o]);u.reverse(),f.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<f.length;i++){for(;l<u.length&&f[i].claim_order>=u[l].claim_order;)l++;const s=l<u.length?u[l]:null;e.insertBefore(f[i],s)}}function L(e,t){if(x){for(G(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function R(e,t,n){x&&!n?L(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e){return document.createElement(e)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function z(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function F(e,t,n,r,c=!1){z(e);const u=(()=>{for(let f=e.claim_info.last_index;f<e.length;f++){const o=e[f];if(t(o)){const i=n(o);return i===void 0?e.splice(f,1):e[f]=i,c||(e.claim_info.last_index=f),o}}for(let f=e.claim_info.last_index-1;f>=0;f--){const o=e[f];if(t(o)){const i=n(o);return i===void 0?e.splice(f,1):e[f]=i,c?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=f,o}}return r()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function J(e,t,n,r){return F(e,c=>c.nodeName===t,c=>{const u=[];for(let f=0;f<c.attributes.length;f++){const o=c.attributes[f];n[o.name]||u.push(o.name)}u.forEach(f=>c.removeAttribute(f))},()=>r(t))}function K(e,t,n){return J(e,t,n,B)}let v;function p(e){v=e}const _=[],S=[];let m=[];const A=[],Q=Promise.resolve();let g=!1;function W(){g||(g=!0,Q.then(I))}function w(e){m.push(e)}const b=new Set;let d=0;function I(){if(d!==0)return;const e=v;do{try{for(;d<_.length;){const t=_[d];d++,p(t),X(t.$$)}}catch(t){throw _.length=0,d=0,t}for(p(null),_.length=0,d=0;S.length;)S.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];b.has(n)||(b.add(n),n())}m.length=0}while(_.length);for(;A.length;)A.pop()();g=!1,b.clear(),p(e)}function X(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}function Y(e){const t=[],n=[];m.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),m=t}const Z=new Set;function ee(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function te(e,t,n){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),w(()=>{const u=e.$$.on_mount.map(C).filter(j);e.$$.on_destroy?e.$$.on_destroy.push(...u):$(u),e.$$.on_mount=[]}),c.forEach(w)}function ne(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(_.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,r,c,u,f=null,o=[-1]){const i=v;p(e);const l=e.$$={fragment:null,ctx:[],props:u,update:h,not_equal:c,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:E(),dirty:o,skip_bound:!1,root:t.target||i.$$.root};f&&f(l.root);let s=!1;if(l.ctx=n?n(e,t.props||{},(a,y,...k)=>{const N=k.length?k[0]:y;return l.ctx&&c(l.ctx[a],l.ctx[a]=N)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](N),s&&ie(e,a)),y}):[],l.update(),s=!0,$(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){P();const a=V(t.target);l.fragment&&l.fragment.l(a),a.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor),q(),I()}p(i)}class re{$$=void 0;$$set=void 0;$destroy(){ne(this,1),this.$destroy=h}$on(t,n){if(!j(n))return h;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);function fe(e){let t,n="热门歌手";return{c(){t=B("h1"),t.textContent=n,this.h()},l(r){t=K(r,"H1",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-18a7w0p"&&(t.textContent=n),this.h()},h(){T(t,"class","text-3xl font-bold")},m(r,c){R(r,t,c)},p:h,i:h,o:h,d(r){r&&O(t)}}}class oe extends re{constructor(t){super(),le(this,t,null,fe,H,{})}}export{oe as default};
