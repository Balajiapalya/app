(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{8971:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(4266)}])},1378:function(e,t,n){"use strict";var r,o=n(9669),a=n.n(o);r=localStorage.getItem("Jwt-token");var i=localStorage.getItem("uuid"),c={Authorization:"Bearer ".concat(r)},u=localStorage.getItem("envuuid"),s=localStorage.getItem("envid"),l={Sign_up_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/signup"),data:e})},SignIn_details:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/authenticate"),data:e})},Get_roles_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i,"/roles"),headers:c})},Get_organization_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i,"/users"),headers:c})},Remove_user_data:function(e){return a()({method:"DELETE",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i,"/users"),data:e,headers:c})},Get_environment_types_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:c})},Get_product_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/product-types"),headers:c})},Create_account_data:function(e,t){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users"),data:e})},Edit_organisation_name_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations"),data:e,headers:c})},Newmember_invite_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i,"/invite"),data:e,headers:c})},Create_aaccess_token_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens"),data:e,headers:c}).then((function(e){})).catch((function(e){console.log(e)}))},Create_webhook_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks"),data:e,headers:c}).then((function(e){})).catch((function(e){console.log(e)}))},Create_signin_keys_data:function(e){return a()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys"),data:e,headers:c}).then((function(e){})).catch((function(e){console.log(e)}))},Editted_data:function(e){return a()({method:"PUT",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i),data:e,headers:c})},Video_list:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(r),EnvironmentId:"".concat(u)}})},Get_env_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments?organizationId=").concat(i),headers:c})},Env_data:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:c})},Post_env:function(e){return a()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments"),headers:c})},post_video:function(e){return a()({method:"POST",data:e,url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(r),EnvironmentId:"".concat(u)}})},Get_access_token:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens?organizationId=").concat(i,"&includeRevoked=true"),headers:c})},Get_sigin_keys:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys?environmentId=1&productTypeId=").concat(s),headers:c})},Get_webhook:function(){return a()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks?environmentId=1"),headers:c})},Selected_option:function(e){return a()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(i,"users"),headers:c})}};t.ZP=l},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},c=n(6273),u=n(387),s=n(7190);var l={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),p=a.href,d=a.as,h=e.children,v=e.replace,_=e.shallow,g=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=o(s.useIntersection({rootMargin:"200px"}),2),S=b[0],E=b[1],w=i.default.useCallback((function(e){S(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,S]);i.default.useEffect((function(){var e=E&&n&&c.isLocalURL(p),t="undefined"!==typeof m?m:r&&r.locale,o=l[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(r,p,d,{locale:t})}),[d,p,E,m,n,r]);var T={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,r,p,d,v,_,g,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&f(r,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:r&&r.locale,I=r&&r.isLocaleDomain&&c.getDomainLocale(d,k,r&&r.locales,r&&r.domainLocales);T.href=I||c.addBasePath(c.addLocale(d,k,r&&r.defaultLocale))}return i.default.cloneElement(t,T)};t.default=p},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,l=a.useRef(),f=o(a.useState(!1),2),p=f[0],d=f[1],h=o(a.useState(t?t.current:null),2),v=h[0],_=h[1],g=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),s.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,p]);return a.useEffect((function(){if(!c&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&_(t.current)}),[t]),[g,p]};var a=n(7294),i=n(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map,s=[]},4266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(9294),a=n.n(o),i=n(7536),c=n(1378),u=n(1163),s=n(1664),l=n(7294);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function d(){localStorage.getItem("invite-code");var e=(0,u.useRouter)(),t=(0,i.cI)(),n=t.register,o=t.handleSubmit,f=(t.watch,t.formState.errors),d=(0,l.useState)([]),h=d[0],v=d[1];return(0,r.jsx)("div",{className:a().wrapper_signup,children:(0,r.jsxs)("main",{className:a().main_signup,children:[(0,r.jsx)("h1",{className:a().logo_title,children:"Videograph"}),(0,r.jsxs)("div",{className:a().signup_area,children:[(0,r.jsx)("h2",{className:a().signup_title,children:"Create your account"}),(0,r.jsxs)("form",{onSubmit:o((function(t){c.ZP.Sign_up_data(t).then((function(t){(t.data.status="Success")&&e.push({pathname:"/invitationsent"})})).catch((function(e){v(e.response.data.message)}))})),children:[(0,r.jsx)("h4",{className:a().label,children:"Email"}),(0,r.jsx)("input",p({autoComplete:"current-password",type:"email",placeholder:"Enter your email address",name:"login",className:"".concat(a().signup_input," form_control")},n("email",{required:!0}))),f.email&&(0,r.jsx)("p",{className:"validations",children:"This field is required"}),(0,r.jsx)("span",{className:"error",children:h}),(0,r.jsx)("button",{type:"submit",className:"".concat(a().btn," btn btn-primary"),children:"Sign Up"})]}),(0,r.jsx)("h4",{className:a().already_account,children:"Already have an account?"}),(0,r.jsx)(s.default,{href:"/signin",children:(0,r.jsx)("a",{className:a().signin_link,children:"Sign in"})})]})]})})}},9294:function(e){e.exports={wrapper_signup:"Login_wrapper_signup__XVQ5P",main_signup:"Login_main_signup__1uFmn",logo_title:"Login_logo_title__MukoT",signup_title:"Login_signup_title__lUNYp",signup_area:"Login_signup_area__OpzMz",signup_input:"Login_signup_input__38ZkH",signup_btn:"Login_signup_btn__C5TFQ",btn:"Login_btn__Tc3cc",already_account:"Login_already_account__FSGrf",account:"Login_account__gz7aP",signin_link:"Login_signin_link__PkI1I",label:"Login_label__wToWk",forgotpw:"Login_forgotpw__eVMft"}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[7536,9669,9774,2888,179],(function(){return t=8971,e(e.s=t);var t}));var t=e.O();_N_E=t}]);