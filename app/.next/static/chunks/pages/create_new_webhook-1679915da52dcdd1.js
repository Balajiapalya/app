(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3936],{6256:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create_new_webhook",function(){return o(5165)}])},1378:function(e,t,o){"use strict";var n,a=o(9669),r=o.n(a);n=localStorage.getItem("Jwt-token");var c=localStorage.getItem("uuid"),i={Authorization:"Bearer ".concat(n)},_=localStorage.getItem("envuuid"),s=localStorage.getItem("envid"),l={Sign_up_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/signup"),data:e})},SignIn_details:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/authenticate"),data:e})},Get_roles_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c,"/roles"),headers:i})},Get_organization_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c,"/users"),headers:i})},Remove_user_data:function(e){return r()({method:"DELETE",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c,"/users"),data:e,headers:i})},Get_environment_types_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:i})},Get_product_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/product-types"),headers:i})},Create_account_data:function(e,t){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users"),data:e})},Edit_organisation_name_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations"),data:e,headers:i})},Newmember_invite_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c,"/invite"),data:e,headers:i})},Create_aaccess_token_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Create_webhook_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Create_signin_keys_data:function(e){return r()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Editted_data:function(e){return r()({method:"PUT",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c),data:e,headers:i})},Video_list:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(n),EnvironmentId:"".concat(_)}})},Get_env_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments?organizationId=").concat(c),headers:i})},Env_data:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:i})},Post_env:function(e){return r()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments"),headers:i})},post_video:function(e){return r()({method:"POST",data:e,url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(n),EnvironmentId:"".concat(_)}})},Get_access_token:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens?organizationId=").concat(c,"&includeRevoked=true"),headers:i})},Get_sigin_keys:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys?environmentId=1&productTypeId=").concat(s),headers:i})},Get_webhook:function(){return r()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks?environmentId=1"),headers:i})},Selected_option:function(e){return r()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(c,"users"),headers:i})}};t.ZP=l},5165:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}});var n=o(5893),a=o(340),r=o.n(a),c=o(7536),i=(o(9669),o(1378)),_=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){s(e,t,o[t])}))}return e}function d(e){var t=e.closewebhook,o=(0,_.useState)([]),a=o[0],s=o[1],d=(0,c.cI)(),m=d.register,u=d.handleSubmit,p=(d.watch,d.formState.errors);(0,_.useEffect)((function(){i.ZP.Get_environment_types_data().then((function(e){return s(e.data.data)}))}),[]);return(0,n.jsx)("div",{className:"".concat(r().container," ").concat(r().newwebhook_model),children:(0,n.jsxs)("div",{className:r().body,children:[(0,n.jsx)("div",{className:r().model_nav,children:(0,n.jsxs)("a",{className:r().model_close,role:"button",onClick:function(){return t(!1)},children:[(0,n.jsx)("img",{src:"/Images/close.png",alt:"icon"})," "]})}),(0,n.jsxs)("div",{className:r().main,children:[(0,n.jsx)("h3",{className:r().model_title,children:"New Webhook"}),(0,n.jsxs)("form",{onSubmit:u((function(e){i.ZP.Create_webhook_data(e)})),children:[(0,n.jsx)("label",{className:r().model_label,children:"Environment"}),(0,n.jsxs)("div",{className:r().select,children:[(0,n.jsx)("select",l({name:"environmentId",className:"".concat(r().development," ").concat(r().model_selection)},m("environmentId",{required:!0}),{children:a.map((function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("option",{value:e.id,children:e.name},e.id)})}))})),p.Environment&&(0,n.jsx)("p",{className:"".concat(r().validations," validations"),children:"This field is required"}),(0,n.jsx)("img",{className:r().file,src:"/Images/Icon awesome-folder.png",alt:"icon"}),(0,n.jsx)("button",{type:"text",className:r().up,children:(0,n.jsx)("img",{src:"/Images/updown.png",alt:"icon"})})]}),(0,n.jsx)("label",{className:r().model_label,children:"URL to notify:"}),(0,n.jsx)("input",l({type:"text",className:"".concat(r().model_input," form_control"),name:"url",placeholder:"Enter url"},m("url",{required:!0}))),p.URL&&(0,n.jsx)("p",{className:"".concat(r().validations," validations"),children:"This field is required"}),(0,n.jsxs)("p",{className:r().access_token_link,children:["All events will be sent to this URL.To learn more about the types of events see our ",(0,n.jsx)("a",{href:"",className:r().access_token_data,children:"docs"})]}),(0,n.jsxs)("div",{className:r().model_btn,children:[(0,n.jsx)("button",{type:"button",className:"".concat(r().model_canel_btn," btn btn-primary"),onClick:function(){return t(!1)},children:"Cancel"}),(0,n.jsx)("button",{type:"submit",className:"".concat(r().model_save_btn," btn btn-primary"),children:"create Webhook"})]})]})]})]})})}},340:function(e){e.exports={model:"model_model__qubcr",model_main:"model_model_main__dXtXH",model_nav:"model_model_nav__LDuZ_",model_title:"model_model_title__8o3cB",model_close:"model_model_close__U45C_",model_label:"model_model_label__9_VkN",validations:"model_validations__6lTMU",model_input:"model_model_input__Dvya7",model_selection:"model_model_selection__FKXwH",model_btn:"model_model_btn__ZgupC",model_canel_btn:"model_model_canel_btn__qFi6A",model_save_btn:"model_model_save_btn__ItjLX",model_removeuser:"model_model_removeuser__fXcJJ",model_data:"model_model_data__9phpr",remove_user_modal:"model_remove_user_modal__WSNvE",editpaymentdetials:"model_editpaymentdetials__rLWrN",accesstoken_model:"model_accesstoken_model__vshYw",signingkey:"model_signingkey__B87r6",newwebhook_model:"model_newwebhook_model__F5bqH",newkey:"model_newkey__Tbmyg",newtoken:"model_newtoken__t2iLI",unlockpremiumfeatures:"model_unlockpremiumfeatures__n3wwW",newstream:"model_newstream__cg4jn",body:"model_body__iUxHW",main:"model_main__6IX_3",cerditcard_number:"model_cerditcard_number__uiewv",file:"model_file__yykyi",expiration_date:"model_expiration_date__3OCnG",card:"model_card__jUG0Z",cvv:"model_cvv__Dg4FT",detials:"model_detials__JCDhH",state:"model_state__O6ujF",paymenthistory:"model_paymenthistory__l1C6U",table:"model_table__1h9W8",access_token_link:"model_access_token_link__aeFOl",access_token_data:"model_access_token_data__SVww8",access_token_permission:"model_access_token_permission__o45Z4",access_token_checkbox:"model_access_token_checkbox__yqQ5M",read:"model_read__RjrCx",write:"model_write__8rQ3b",data:"model_data__45pln",access_token:"model_access_token__DYn3K",downloadpem:"model_downloadpem__nzHCQ",download_file:"model_download_file__tPJQM",copy:"model_copy__k66iD",up:"model_up__GQhYu",development:"model_development__Qv8f3",select:"model_select__qrZck",content:"model_content__8PuoB",premiumfeatures:"model_premiumfeatures__L9mqR",premiumfeatures_check:"model_premiumfeatures_check__mTWey",check:"model_check__cHPTO",enablepremiumfeatures:"model_enablepremiumfeatures__QulRi",activities:"model_activities__DyufP",nav:"model_nav__b3Wbu",activities_events_logs_table:"model_activities_events_logs_table__yLIlE",outlineimg:"model_outlineimg__3jy9O",check_unlockfeatures:"model_check_unlockfeatures__mHA7G",input:"model_input__S43Ip",unlock_features:"model_unlock_features__AX6F6"}}},function(e){e.O(0,[7536,9669,9774,2888,179],(function(){return t=6256,e(e.s=t);var t}));var t=e.O();_N_E=t}]);