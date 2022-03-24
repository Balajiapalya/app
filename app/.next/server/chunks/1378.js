"use strict";
exports.id = 1378;
exports.ids = [1378];
exports.modules = {

/***/ 1378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports SignIn_Data, Sign_up, Create_user_account, Edit_organisation_name, Newmember_invite, get_roles, Remove_user, get_organization, editted_data, Create_webhook, get_webhook, Create_aaccess_token, get_access_token, Create_signin_keys, get_product, get_environment_types, get_environment, get_new_env, post_env, update_env, video_url, getList_videos, post_selected, get_video_data, post_direct_video, get_direct_video_data, get_direct_video, create_new_organization, update_user, change_paswrd, meta_update */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let PROFILE_LINK = "http://13.235.3.29/profile";
const PROFILE_BASE_URL = ()=>PROFILE_LINK
;
let VIDEO_LINK = "http://13.235.3.29/video";
const VIDEO_BASE_URL = ()=>VIDEO_LINK
;
const SignIn_Data = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users/authenticate`;
};
const Sign_up = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users/signup`;
};
const Create_user_account = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users`;
};
//organization
const Edit_organisation_name = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations`;
};
const Newmember_invite = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/invite`;
};
const get_roles = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/roles`;
};
const Remove_user = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users`;
};
const get_organization = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users`;
};
const editted_data = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}`;
};
//wbhook
const Create_webhook = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks`;
};
const get_webhook = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?environmentId=1`;
};
//access token
const Create_aaccess_token = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens`;
};
const get_access_token = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?organizationId=${uuid}&includeRevoked=true`;
};
//signin keys
const Create_signin_keys = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys`;
};
// export const get_signin_keys = () => {
//     return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?environmentId=1&productTypeId=${envid}`
// };
const get_product = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/product-types`;
};
//used in wbhook,access token,,signin keys
const get_environment_types = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types`;
};
//environment
const get_environment = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?organizationId=${uuid}`;
};
const get_new_env = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types`;
};
const post_env = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environments`;
};
const update_env = (data)=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environments/${data}`;
};
//video 
const video_url = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/contents`;
};
const getList_videos = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/contents`;
};
const post_selected = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}users`;
};
const get_video_data = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${assetid}`;
};
//direct upload
const post_direct_video = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads`;
};
const get_direct_video_data = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads`;
};
const get_direct_video = (upload_data)=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads/${upload_data}`;
};
//account
const create_new_organization = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations`;
};
const update_user = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${orgid}`;
};
const change_paswrd = ()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${user_id}/change-password`;
};
//others
const meta_update = ()=>{
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${asset_id}`;
};
let user_id;
if (false) {}
const orgid = user_id;
let token;
if (false) {}
let uuid_token;
if (false) {}
const uuid = uuid_token;
let headers = {
    'Authorization': `Bearer ${token}`
};
let Env_uuid;
if (false) {}
const envuuid = Env_uuid;
let asset_id;
if (false) {}
const assetid = asset_id;
let upload_id;
if (false) {}
const uploadid = (/* unused pure expression or super */ null && (upload_id));
const Api = {
    Sign_up_data: (login_details)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Sign_up(),
            data: login_details
        })
    ,
    SignIn_details: (signin_details)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: SignIn_Data(),
            data: signin_details
        })
    ,
    Get_roles_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_roles(),
            headers: headers
        })
    ,
    Get_organization_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_organization(),
            headers: headers
        })
    ,
    Remove_user_data: (data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'DELETE',
            url: Remove_user(),
            data: data,
            headers: headers
        })
    ,
    Get_environment_types_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_environment_types(),
            headers: headers
        })
    ,
    Get_product_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_product(),
            headers: headers
        })
    ,
    Create_account_data: (createaccount_data, id)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Create_user_account(),
            data: createaccount_data
        })
    ,
    Edit_organisation_name_data: (organization_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Edit_organisation_name(),
            data: organization_data,
            headers: headers
        })
    ,
    Newmember_invite_data: (admin_invite_code)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Newmember_invite(),
            data: admin_invite_code,
            headers: headers
        })
    ,
    Create_aaccess_token_data: (access_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
            headers: headers
        }).then((res)=>{
        // console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
    ,
    Create_webhook_data: (webhook_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Create_webhook(),
            data: webhook_data,
            headers: headers
        }).then((res)=>{
        // console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
    ,
    Create_signin_keys_data: (signin_key)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: Create_signin_keys(),
            data: signin_key,
            headers: headers
        }).then((res)=>{
        // console.log(res)
        }).catch((error)=>{
            console.log(error);
        })
    ,
    Editted_data: (data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'PUT',
            url: editted_data(),
            data: data,
            headers: headers
        })
    ,
    Video_list: (data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: getList_videos(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${data}`
            }
        })
    ,
    Get_env_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_environment(),
            headers: headers
        })
    ,
    Env_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_new_env(),
            headers: headers
        })
    ,
    Post_env: (new_env_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            data: new_env_data,
            url: post_env(),
            headers: headers
        })
    ,
    Update_env: (dev_data, data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'PUT',
            data: dev_data,
            url: update_env(data),
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    ,
    post_video: (video_url_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            data: video_url_data,
            url: video_url(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
    ,
    //direct upload
    Direct_upload_post: (direct_video_upload)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            data: direct_video_upload,
            url: post_direct_video(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
    ,
    Direct_upload_get_data: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_direct_video_data(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
    ,
    Direct_upload_get: (upload_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_direct_video(upload_data),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
    ,
    //get api token
    Get_access_token: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_access_token(),
            headers: headers
        })
    ,
    //get signin keys
    Get_sigin_keys: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_signin_keys(),
            headers: headers
        })
    ,
    //get webhook
    Get_webhook: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_webhook(),
            headers: headers
        })
    ,
    Selected_option: (data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            data: data,
            url: post_selected(),
            headers: headers
        })
    ,
    Get_Env_item: (ast_id)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'GET',
            url: get_video_data(ast_id),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
    ,
    //account
    Create_new_organization: (new_org_name)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            url: create_new_organization(),
            data: new_org_name,
            headers: headers
        })
    ,
    User_update: (update_user_data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "PUT",
            url: update_user(),
            data: update_user_data,
            headers: headers
        })
    ,
    Get_User_update: ()=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "GET",
            url: update_user(),
            headers: headers
        })
    ,
    Password_Change: (paswrd)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'POST',
            data: paswrd,
            url: change_paswrd(),
            headers: headers
        })
    ,
    //others
    Meta_tag: (data)=>axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: 'PUT',
            data: data,
            url: meta_update(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${envuuid}`
            }
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ })

};
;