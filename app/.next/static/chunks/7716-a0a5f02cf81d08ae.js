(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7716],{1378:function(e,t,n){"use strict";var o,r=n(9669),i=n.n(r);o=localStorage.getItem("Jwt-token");var a=localStorage.getItem("uuid"),s={Authorization:"Bearer ".concat(o)},c=localStorage.getItem("envuuid"),d=localStorage.getItem("envid"),l={Sign_up_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/signup"),data:e})},SignIn_details:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/authenticate"),data:e})},Get_roles_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a,"/roles"),headers:s})},Get_organization_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a,"/users"),headers:s})},Remove_user_data:function(e){return i()({method:"DELETE",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a,"/users"),data:e,headers:s})},Get_environment_types_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:s})},Get_product_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/product-types"),headers:s})},Create_account_data:function(e,t){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users"),data:e})},Edit_organisation_name_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations"),data:e,headers:s})},Newmember_invite_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a,"/invite"),data:e,headers:s})},Create_aaccess_token_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens"),data:e,headers:s}).then((function(e){})).catch((function(e){console.log(e)}))},Create_webhook_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks"),data:e,headers:s}).then((function(e){})).catch((function(e){console.log(e)}))},Create_signin_keys_data:function(e){return i()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys"),data:e,headers:s}).then((function(e){})).catch((function(e){console.log(e)}))},Editted_data:function(e){return i()({method:"PUT",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a),data:e,headers:s})},Video_list:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(o),EnvironmentId:"".concat(c)}})},Get_env_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments?organizationId=").concat(a),headers:s})},Env_data:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:s})},Post_env:function(e){return i()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments"),headers:s})},post_video:function(e){return i()({method:"POST",data:e,url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(o),EnvironmentId:"".concat(c)}})},Get_access_token:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens?organizationId=").concat(a,"&includeRevoked=true"),headers:s})},Get_sigin_keys:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys?environmentId=1&productTypeId=").concat(d),headers:s})},Get_webhook:function(){return i()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks?environmentId=1"),headers:s})},Selected_option:function(e){return i()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(a,"users"),headers:s})}};t.ZP=l},7190:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(c){s=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,o=e.disabled||!s,l=i.useRef(),u=r(i.useState(!1),2),_=u[0],v=u[1],p=r(i.useState(t?t.current:null),2),h=p[0],f=p[1],m=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),o||_||e&&e.tagName&&(l.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=d.find((function(e){return e.root===n.root&&e.margin===n.margin}));o?t=c.get(o):(t=c.get(n),d.push(n));if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(r);var t=d.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&d.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:h,rootMargin:n}))}),[o,h,n,_]);return i.useEffect((function(){if(!s&&!_){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[_]),i.useEffect((function(){t&&f(t.current)}),[t]),[m,_]};var i=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,d=[]},3377:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(5893),r=n(4238),i=n.n(r),a=n(7536),s=n(1378);n(1664);function c(){var e=(0,a.cI)();e.register,e.handleSubmit,e.watch,e.formState.errors;return(0,o.jsxs)("div",{className:i().Videodelivery_addnewassets,children:[(0,o.jsx)("h2",{children:"Create new asset"}),(0,o.jsxs)("div",{className:i().upload_file,children:[(0,o.jsx)("h2",{children:"upload your video file"}),(0,o.jsx)("div",{className:i().upload_btn_wrapper,children:(0,o.jsxs)("form",{children:[(0,o.jsx)("button",{className:i().btn,children:"Select File"}),(0,o.jsx)("input",{type:"file",name:"myfile"})]})})]})]})}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){d(e,t,n[t])}))}return e}function u(e){var t=e.close_asset,n=(0,a.cI)(),r=n.register,d=n.handleSubmit,u=(n.watch,n.formState.errors);return(0,o.jsxs)("div",{className:i().videodelivery,children:[(0,o.jsx)("div",{className:i().model_nav,children:(0,o.jsxs)("a",{onClick:function(){return t(!1)},className:i().model_close,role:"button",children:[(0,o.jsx)("img",{src:"/Images/close.png",alt:"close"})," "]})}),(0,o.jsxs)("div",{className:i().Videodelivery_addnewassets,children:[(0,o.jsx)(c,{}),(0,o.jsx)("div",{className:i().or}),(0,o.jsx)("div",{className:i().or_text,children:(0,o.jsx)("span",{children:"[or]"})}),(0,o.jsx)("div",{children:(0,o.jsxs)("form",{className:i().post,onSubmit:d((function(e){s.ZP.post_video(JSON.parse(e.code)).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))})),children:[(0,o.jsx)("label",{children:"Post using Video URL:"}),(0,o.jsx)("input",{type:"text",readOnly:!0,value:"http://13.235.3.29/video//services/api/v1/contents"}),(0,o.jsx)("span",{children:"Post body editor:"}),(0,o.jsxs)("div",{className:i().language_select,children:[(0,o.jsxs)("button",{className:"".concat(i().model_btn," ").concat(i().active),children:[(0,o.jsx)("img",{className:i().languge_img,src:"/Images/python.png",alt:"python"}),"Python"]}),(0,o.jsxs)("button",{className:i().model_btn,children:[(0,o.jsx)("img",{className:i().languge_img,src:"/Images/node-js.png",alt:"node"}),"Node"]}),(0,o.jsxs)("button",{className:i().model_btn,children:[(0,o.jsx)("img",{className:i().languge_img,src:"/Images/php.png",alt:"php"}),"Php"]}),(0,o.jsxs)("button",{className:i().model_btn,children:[(0,o.jsx)("img",{className:i().languge_img,src:"/Images/go.png",alt:"go"}),"Go"]})]}),(0,o.jsxs)("div",{className:i().code,children:[(0,o.jsx)("textarea",l({className:"".concat(i().code_input," form_control"),type:"text",name:"code"},r("code",{required:!0}))),u.code&&(0,o.jsx)("p",{className:"validations",children:"This field is required"})]}),(0,o.jsx)("button",{type:"submit",className:i().btn,children:"Run Request"})]})})]})]})}},4238:function(e){e.exports={header:"videos_header__kjZ9F",close:"videos_close__4lEyG",videos:"videos_videos__lExO6",background_develepment:"videos_background_develepment__mcf4j",header_development:"videos_header_development__C4SUF",content_development:"videos_content_development__pP_iG",store_icon_png:"videos_store_icon_png__KJLe3",select:"videos_select__xKNX_",videos_delivery:"videos_videos_delivery__eLOaT",search:"videos_search__elD0t",actions:"videos_actions__ggJyR",videos_table:"videos_videos_table__kZ6Rl",check:"videos_check__MZEXT",asset_id:"videos_asset_id__dNbEE",actionicons:"videos_actionicons__WinYj",checkcircle:"videos_checkcircle__PNqje",model_close:"videos_model_close__vpZqa",videodelivery:"videos_videodelivery__ukB2S",Videodelivery_addnewassets:"videos_Videodelivery_addnewassets__v21qo",upload_btn_wrapper:"videos_upload_btn_wrapper__nIvZX",btn:"videos_btn__fgPSL",upload_file:"videos_upload_file__9h6fm",or:"videos_or__WhfHj",or_text:"videos_or_text___yzeT",post:"videos_post__SEFRC",model_btn:"videos_model_btn__JNMDE",active:"videos_active__pPIEo",languge_img:"videos_languge_img__BNYMt",code:"videos_code__7QGDD",code_input:"videos_code_input__wXgc9",videosdelivery_assets:"videos_videosdelivery_assets__UFLen",padding:"videos_padding__Bilzf",assets:"videos_assets__E184Y",icon_stat:"videos_icon_stat__jjLCY",edit_img:"videos_edit_img__xrc5k"}}}]);