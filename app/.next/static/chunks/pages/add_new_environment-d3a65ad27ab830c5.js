(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{3542:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add_new_environment",function(){return n(8)}])},1378:function(e,t,n){"use strict";var o,a=n(9669),c=n.n(a);o=localStorage.getItem("Jwt-token");var r=localStorage.getItem("uuid"),i={Authorization:"Bearer ".concat(o)},_=localStorage.getItem("envuuid"),l=localStorage.getItem("envid"),s={Sign_up_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/signup"),data:e})},SignIn_details:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users/authenticate"),data:e})},Get_roles_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r,"/roles"),headers:i})},Get_organization_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r,"/users"),headers:i})},Remove_user_data:function(e){return c()({method:"DELETE",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r,"/users"),data:e,headers:i})},Get_environment_types_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:i})},Get_product_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/product-types"),headers:i})},Create_account_data:function(e,t){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/users"),data:e})},Edit_organisation_name_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations"),data:e,headers:i})},Newmember_invite_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r,"/invite"),data:e,headers:i})},Create_aaccess_token_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Create_webhook_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Create_signin_keys_data:function(e){return c()({method:"POST",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys"),data:e,headers:i}).then((function(e){})).catch((function(e){console.log(e)}))},Editted_data:function(e){return c()({method:"PUT",url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r),data:e,headers:i})},Video_list:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(o),EnvironmentId:"".concat(_)}})},Get_env_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments?organizationId=").concat(r),headers:i})},Env_data:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/environment-types"),headers:i})},Post_env:function(e){return c()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/environments"),headers:i})},post_video:function(e){return c()({method:"POST",data:e,url:"".concat("http://13.235.3.29/video","/services/api/v1/contents"),headers:{Authorization:"Bearer ".concat(o),EnvironmentId:"".concat(_)}})},Get_access_token:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/api-access-tokens?organizationId=").concat(r,"&includeRevoked=true"),headers:i})},Get_sigin_keys:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/signingkeys?environmentId=1&productTypeId=").concat(l),headers:i})},Get_webhook:function(){return c()({method:"GET",url:"".concat("http://13.235.3.29/profile","/services/api/v1/webhooks?environmentId=1"),headers:i})},Selected_option:function(e){return c()({method:"POST",data:e,url:"".concat("http://13.235.3.29/profile","/services/api/v1/organizations/").concat(r,"users"),headers:i})}};t.ZP=s},8:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),a=n(340),c=n.n(a),r=n(7536),i=n(1378),_=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}function d(e){var t=e.closeenv,n=(0,_.useState)([]),a=n[0],l=n[1],d=(0,r.cI)(),m=d.register,u=d.handleSubmit,p=(d.watch,d.formState.errors);return(0,_.useEffect)((function(){i.ZP.Env_data().then((function(e){console.log(e.data),l(e.data.data)})).catch((function(e){console.log(e)}))}),{}),(0,o.jsx)("div",{className:"".concat(c().container," ").concat(c().accesstoken_model),children:(0,o.jsxs)("div",{className:c().body,children:[(0,o.jsx)("div",{className:c().model_nav,children:(0,o.jsxs)("a",{className:c().model_close,role:"button",onClick:function(){return t(!1)},children:[(0,o.jsx)("img",{src:"Images/close.png",alt:"icon"})," "]})}),(0,o.jsxs)("div",{className:c().main,children:[(0,o.jsx)("h3",{className:c().model_title,children:"Add New Environment"}),(0,o.jsxs)("form",{onSubmit:u((function(e){i.ZP.Post_env(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})),children:[(0,o.jsx)("label",{className:c().model_label,children:"Environment Name"}),(0,o.jsx)("input",s({type:"text",className:"".concat(c().model_input," form_control"),name:"name",placeholder:"Enter a name"},m("name",{required:!0}))),p.name&&(0,o.jsx)("p",{className:"".concat(c().validations," validations"),children:"This field is required"}),(0,o.jsx)("label",{className:c().model_label,children:"Type"}),(0,o.jsxs)("select",s({name:"environmentTypeId",className:c().model_selection},m("environmentTypeId",{required:!0}),{children:[p.environmentTypeId&&(0,o.jsx)("p",{className:"".concat(c().validations," validations"),children:"This field is required"}),a.map((function(e,t){return(0,o.jsx)("option",{value:parseInt(e.id),children:e.name},t)}))]})),(0,o.jsxs)("div",{className:c().model_btn,children:[(0,o.jsx)("button",{type:"button",className:"".concat(c().model_canel_btn," btn btn-primary"),onClick:function(){return t(!1)},children:"Cancel"}),(0,o.jsx)("button",{type:"submit",className:"".concat(c().model_save_btn," btn btn-primary"),children:"Add Environment"})]})]})]})]})})}},340:function(e){e.exports={model:"model_model__qubcr",model_main:"model_model_main__dXtXH",model_nav:"model_model_nav__LDuZ_",model_title:"model_model_title__8o3cB",model_close:"model_model_close__U45C_",model_label:"model_model_label__9_VkN",validations:"model_validations__6lTMU",model_input:"model_model_input__Dvya7",model_selection:"model_model_selection__FKXwH",model_btn:"model_model_btn__ZgupC",model_canel_btn:"model_model_canel_btn__qFi6A",model_save_btn:"model_model_save_btn__ItjLX",model_removeuser:"model_model_removeuser__fXcJJ",model_data:"model_model_data__9phpr",remove_user_modal:"model_remove_user_modal__WSNvE",editpaymentdetials:"model_editpaymentdetials__rLWrN",accesstoken_model:"model_accesstoken_model__vshYw",signingkey:"model_signingkey__B87r6",newwebhook_model:"model_newwebhook_model__F5bqH",newkey:"model_newkey__Tbmyg",newtoken:"model_newtoken__t2iLI",unlockpremiumfeatures:"model_unlockpremiumfeatures__n3wwW",newstream:"model_newstream__cg4jn",body:"model_body__iUxHW",main:"model_main__6IX_3",cerditcard_number:"model_cerditcard_number__uiewv",file:"model_file__yykyi",expiration_date:"model_expiration_date__3OCnG",card:"model_card__jUG0Z",cvv:"model_cvv__Dg4FT",detials:"model_detials__JCDhH",state:"model_state__O6ujF",paymenthistory:"model_paymenthistory__l1C6U",table:"model_table__1h9W8",access_token_link:"model_access_token_link__aeFOl",access_token_data:"model_access_token_data__SVww8",access_token_permission:"model_access_token_permission__o45Z4",access_token_checkbox:"model_access_token_checkbox__yqQ5M",read:"model_read__RjrCx",write:"model_write__8rQ3b",data:"model_data__45pln",access_token:"model_access_token__DYn3K",downloadpem:"model_downloadpem__nzHCQ",download_file:"model_download_file__tPJQM",copy:"model_copy__k66iD",up:"model_up__GQhYu",development:"model_development__Qv8f3",select:"model_select__qrZck",content:"model_content__8PuoB",premiumfeatures:"model_premiumfeatures__L9mqR",premiumfeatures_check:"model_premiumfeatures_check__mTWey",check:"model_check__cHPTO",enablepremiumfeatures:"model_enablepremiumfeatures__QulRi",activities:"model_activities__DyufP",nav:"model_nav__b3Wbu",activities_events_logs_table:"model_activities_events_logs_table__yLIlE",outlineimg:"model_outlineimg__3jy9O",check_unlockfeatures:"model_check_unlockfeatures__mHA7G",input:"model_input__S43Ip",unlock_features:"model_unlock_features__AX6F6"}}},function(e){e.O(0,[7536,9669,9774,2888,179],(function(){return t=3542,e(e.s=t);var t}));var t=e.O();_N_E=t}]);