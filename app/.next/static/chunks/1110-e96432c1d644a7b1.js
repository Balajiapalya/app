(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1110],{7190:function(e,t,n){"use strict";function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,_=new Array(t);n<t;n++)_[n]=e[n];return _}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var _,a,s=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(_=n.next()).done)&&(s.push(_.value),!t||s.length!==t);i=!0);}catch(r){o=!0,a=r}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,_=e.disabled||!o,l=s.useRef(),d=a(s.useState(!1),2),m=d[0],u=d[1],b=a(s.useState(t?t.current:null),2),v=b[0],h=b[1],f=s.useCallback((function(e){l.current&&(l.current(),l.current=void 0),_||m||e&&e.tagName&&(l.current=function(e,t,n){var _=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},_=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));_?t=r.get(_):(t=r.get(n),c.push(n));if(t)return t;var a=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r.set(n,t={id:n,observer:s,elements:a}),t}(n),a=_.id,s=_.observer,i=_.elements;return i.set(e,t),s.observe(e),function(){if(i.delete(e),s.unobserve(e),0===i.size){s.disconnect(),r.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&u(e)}),{root:v,rootMargin:n}))}),[_,v,n,m]);return s.useEffect((function(){if(!o&&!m){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[m]),s.useEffect((function(){t&&h(t.current)}),[t]),[f,m]};var s=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var r=new Map,c=[]},3120:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var _=n(5893),a=n(340),s=n.n(a),i=(n(1664),n(7294)),o=n(8636),r=n.n(o);var c=function(){return(0,_.jsxs)("div",{className:s().activities_events,children:[(0,_.jsxs)("p",{children:["Events let you know when something ha happened in your system.",(0,_.jsx)("br",{}),"Events will be stored up to 30 days."]}),(0,_.jsxs)("table",{className:s().activities_events_logs_table,children:[(0,_.jsx)("thead",{children:(0,_.jsxs)("tr",{children:[(0,_.jsx)("th",{children:"EVENTS"}),(0,_.jsx)("th",{children:"ID"}),(0,_.jsx)("th",{children:"DATE"})]})}),(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]})]})]})]})};var l=function(){return(0,_.jsxs)("div",{className:s().activities_logs,children:[(0,_.jsx)("p",{children:"Logs show every API action taken.Logs will be stored up to 30 days."}),(0,_.jsxs)("table",{className:s().activities_events_logs_table,children:[(0,_.jsx)("thead",{children:(0,_.jsxs)("tr",{children:[(0,_.jsx)("th",{children:"Status"}),(0,_.jsx)("th",{children:"Description"}),(0,_.jsx)("th",{children:"Date"})]})}),(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]}),(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:"Video.detect.framefreeze"}),(0,_.jsx)("td",{children:"abae8ba0-0970-41a6-834c-667110b861031"}),(0,_.jsx)("td",{children:"11/11/2021 3:57PM"})]})]})]})]})};var d=function(){var e=(0,i.useState)(1),t=e[0],n=e[1],a=function(e){n(e)};return(0,_.jsx)("div",{className:r().Activities_tabs,children:(0,_.jsxs)("div",{className:r().wrapper_tabs,children:[(0,_.jsxs)("div",{className:r().bloc_tabs,children:[(0,_.jsx)("button",{className:1===t?"".concat(r().tabs_item," ").concat(r().active_tabs):"".concat(r().tabs_item),onClick:function(){return a(1)},children:(0,_.jsx)("span",{children:"Events"})}),(0,_.jsx)("button",{className:2===t?"".concat(r().tabs_item," ").concat(r().active_tabs):"".concat(r().tabs_item),onClick:function(){return a(2)},children:(0,_.jsx)("span",{children:"Logs"})})]}),(0,_.jsxs)("div",{className:r().content_tabs_area,children:[(0,_.jsx)("div",{className:1===t?"".concat(r().content_tabs," ").concat(r().active_content):"".concat(r().content_tabs),children:(0,_.jsx)(c,{})}),(0,_.jsx)("div",{className:2===t?"".concat(r().content_tabs," ").concat(r().active_content):"".concat(r().content_tabs),children:(0,_.jsx)(l,{})})]})]})})};function m(e){var t=e.closeactivities;return(0,_.jsx)("div",{className:s().activities,children:(0,_.jsxs)("div",{className:s().main,children:[(0,_.jsxs)("div",{className:s().nav,children:[(0,_.jsx)("h3",{className:s().title,children:"Activities"}),(0,_.jsx)("a",{onClick:function(){return t(!1)},className:s().model_close,role:"button",children:(0,_.jsx)("img",{src:"Images/close.png",alt:"close"})})]}),(0,_.jsx)(d,{})]})})}},8636:function(e){e.exports={wrapper_tabs:"activities_tabs_wrapper_tabs__UmvsQ",Activities_tabs:"activities_tabs_Activities_tabs__gTKNs",bloc_tabs:"activities_tabs_bloc_tabs___l8Fu",tabs_item:"activities_tabs_tabs_item__aa76R",active_tabs:"activities_tabs_active_tabs__J8t3H",content_tabs_area:"activities_tabs_content_tabs_area__tZL3I",content_tabs:"activities_tabs_content_tabs__MQvzj",active_content:"activities_tabs_active_content__Whyab",videoclips:"activities_tabs_videoclips__bKhwl"}},340:function(e){e.exports={model:"model_model__qubcr",model_main:"model_model_main__dXtXH",model_nav:"model_model_nav__LDuZ_",model_title:"model_model_title__8o3cB",model_close:"model_model_close__U45C_",model_label:"model_model_label__9_VkN",validations:"model_validations__6lTMU",model_input:"model_model_input__Dvya7",model_selection:"model_model_selection__FKXwH",model_btn:"model_model_btn__ZgupC",model_canel_btn:"model_model_canel_btn__qFi6A",model_save_btn:"model_model_save_btn__ItjLX",model_removeuser:"model_model_removeuser__fXcJJ",model_data:"model_model_data__9phpr",remove_user_modal:"model_remove_user_modal__WSNvE",editpaymentdetials:"model_editpaymentdetials__rLWrN",accesstoken_model:"model_accesstoken_model__vshYw",signingkey:"model_signingkey__B87r6",newwebhook_model:"model_newwebhook_model__F5bqH",newkey:"model_newkey__Tbmyg",newtoken:"model_newtoken__t2iLI",unlockpremiumfeatures:"model_unlockpremiumfeatures__n3wwW",newstream:"model_newstream__cg4jn",body:"model_body__iUxHW",main:"model_main__6IX_3",cerditcard_number:"model_cerditcard_number__uiewv",file:"model_file__yykyi",expiration_date:"model_expiration_date__3OCnG",card:"model_card__jUG0Z",cvv:"model_cvv__Dg4FT",detials:"model_detials__JCDhH",state:"model_state__O6ujF",paymenthistory:"model_paymenthistory__l1C6U",table:"model_table__1h9W8",access_token_link:"model_access_token_link__aeFOl",access_token_data:"model_access_token_data__SVww8",access_token_permission:"model_access_token_permission__o45Z4",access_token_checkbox:"model_access_token_checkbox__yqQ5M",read:"model_read__RjrCx",write:"model_write__8rQ3b",data:"model_data__45pln",access_token:"model_access_token__DYn3K",downloadpem:"model_downloadpem__nzHCQ",download_file:"model_download_file__tPJQM",copy:"model_copy__k66iD",up:"model_up__GQhYu",development:"model_development__Qv8f3",select:"model_select__qrZck",content:"model_content__8PuoB",premiumfeatures:"model_premiumfeatures__L9mqR",premiumfeatures_check:"model_premiumfeatures_check__mTWey",check:"model_check__cHPTO",enablepremiumfeatures:"model_enablepremiumfeatures__QulRi",activities:"model_activities__DyufP",nav:"model_nav__b3Wbu",activities_events_logs_table:"model_activities_events_logs_table__yLIlE",outlineimg:"model_outlineimg__3jy9O",check_unlockfeatures:"model_check_unlockfeatures__mHA7G",input:"model_input__S43Ip",unlock_features:"model_unlock_features__AX6F6"}}}]);