import axios from "axios";
let PROFILE_LINK = process.env.VG_API_HOST + '/profile';
const PROFILE_BASE_URL = () => PROFILE_LINK;

let VIDEO_LINK = process.env.VG_API_HOST + '/video';
const VIDEO_BASE_URL = () => VIDEO_LINK;

let BILLING_LINK = process.env.VG_API_HOST + '/billing';
const BILLING_BASE_URL = () => BILLING_LINK;

let DATA_LINK = process.env.VG_API_HOST + '/data';
const DATA_BASE_URL = () => DATA_LINK;

export const SignIn_Data = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/authenticate`
}
export const Sign_up = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/signup`;
};
export const Create_user_account = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users`;
};
//organization
export const Edit_organisation_name = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}?time=${CurrentDate}`;
};
export const Newmember_invite = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/invite?time=${CurrentDate}`;
};
export const resend_invite=()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/resend`
}
export const get_roles = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/roles?time=${CurrentDate}`
}
export const Remove_user = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
};
export const get_organization = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
};

//Billing
export const list_billing_plans = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/plans?time=${CurrentDate}`
}
export const org_list_billing_plans = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/plans?time=${CurrentDate}`
}
export const list_org_subscriptions = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/subscriptions?time=${CurrentDate}`
}
export const get_account_info = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/account?time=${CurrentDate}`
}
export const payment_history = () => {
    return `${BILLING_BASE_URL()}/services/api/v1/${uuid}/payment/history?time=${CurrentDate}`
}
//wbhook
export const Create_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?time=${CurrentDate}`;
};
export const get_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?organizationId=${uuid}&time=${CurrentDate}`;
};
export const delete_webhook = (del_webhook) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks/${del_webhook}?time=${CurrentDate}`
}
export const updateBtn = (id) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks/${id}`
}
//access token
export const Create_aaccess_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?time=${CurrentDate}`;
};
export const get_access_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?organizationId=${uuid}&includeRevoked=true&time=${CurrentDate}`;
}
export const revoke_acceesstoken = (del) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens/${del}?time=${CurrentDate}`
}
export const editAccessToken = (accessId) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens/${accessId}?time=${CurrentDate}`
}
//signin keys
export const Create_signin_keys = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?time=${CurrentDate}`;
};
export const get_signin_keys = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?organizationId=${uuid}&time=${CurrentDate}`
};
export const get_product = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/product-types?time=${CurrentDate}`
};
//used in wbhook,access token,,signin keys
export const get_environment_types = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types?time=${CurrentDate}`
}
//environment
export const get_environment = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?organizationId=${localStorage.getItem("uuid")}&time=${CurrentDate}`
}
export const get_new_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types?time=${CurrentDate}`
}
export const post_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?time=${CurrentDate}`
}
export const update_env = (data) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments/${data}?time=${CurrentDate}`
}
//video 
export const video_url = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents?time=${CurrentDate}`
}
export const getList_videos = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents?time=${CurrentDate}`
}
export const post_selected = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users?time=${CurrentDate}`
}

//embed
export const get_vdo_player = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}?time=${CurrentDate}`
}
//direct upload

export const post_direct_video = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads?time=${CurrentDate}`
}
export const get_direct_video_data = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/uploads?time=${CurrentDate}`
}
//account
export const create_new_organization = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations?time=${CurrentDate}`
}
export const update_user = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${orgid}?time=${CurrentDate}`
}
export const change_paswrd = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/${user_id}/change-password?time=${CurrentDate}`
}
// videos -> overview
export const delete_asset = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem("videoId")}?time=${CurrentDate}`
}
export const get_video_data = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}?time=${CurrentDate}`
}
// videos -> thumbnails
export const create_thumbnail = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem("videoId")}/thumbnails?time=${CurrentDate}`
}
//videos-> subtitles
export const add_subtitle_api = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}/subtitles?time=${CurrentDate}`
}
export const get_subtitle_list = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}/subtitles?time=${CurrentDate}`
}
export const delete_subtitle = (e) => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem('videoId')}/subtitles/${e}`
}
//others
export const meta_update = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/${localStorage.getItem("videoId")}?time=${CurrentDate}`
}
export const post_emailtoResetPswd = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/reset-password-request?time=${CurrentDate}`
}
export const password_reset = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/users/reset-password?time=${CurrentDate}`
}
export const delSigningKey = (id) => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys/${id}?time=${CurrentDate}`;
}
//statistics
export const usage_statistics = (env, toDate, fromDate) => {
    if (fromDate == undefined) {
        return `${DATA_BASE_URL()}/services/api/v1/usage?environmentId=${env}&from=${pastdate}&to=${CurrentDate}&interval=1d&time=${CurrentDate}`;
    }
    else {
        return `${DATA_BASE_URL()}/services/api/v1/usage?environmentId=${env}&from=${fromDate}&to=${toDate}&interval=1d&time=${CurrentDate}`;
    }

}
export const views_statistics = (env, toDate, fromDate) => {
    if (fromDate == undefined) {
        return `${DATA_BASE_URL()}/services/api/v1/views?environmentId=${env}&from=${pastdate}&to=${CurrentDate}&time=${CurrentDate}`
    } else {
        return `${DATA_BASE_URL()}/services/api/v1/views?environmentId=${env}&from=${fromDate}&to=${toDate}&time=${CurrentDate}`
    }
}


export const realtime_views = (env, fromDate, interval) => {
    return `${DATA_BASE_URL()}/services/api/v1/realtime_views?environmentId=${env}&from=${fromDate}&to=${CurrentDate}&interval=${interval}`
}
export const org_stats = () => {
    return `${DATA_BASE_URL()}/services/api/v1/org_stats?organizationId=${uuid}&from=${pastdate}&to=${CurrentDate}`
}
//embed
export const get_video_playback_url = (asset_id) => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents/` + asset_id + `/playback_url?time=${CurrentDate}`
}
//events and logs
export const get_Logs = () => {
    return `${DATA_BASE_URL()}/services/api/v1/logs?organizationId=${uuid}`
}
export const get_Events = (id) => {
    return `${DATA_BASE_URL()}/services/api/v1/events?organizationId=${id}`
}
export const get_Events_Detail = (uuidEvent) => {
    return `${DATA_BASE_URL()}/services/api/v1/events/${uuidEvent}`
}
export const get_Log_Detail = (id) => {
    return `${DATA_BASE_URL()}/services/api/v1/logs/${id}`
}
//Activities events and logs
export const get_Activities_Events = (query) => {
    return `${DATA_BASE_URL()}/services/api/v1/events?contentId=${query}`
}
export const get_Activities_Logs = (query) => {
    return `${DATA_BASE_URL()}/services/api/v1/logs?contentId=${query}`
}
export const imporsonateAs=()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/users/impersonate`
}
let user_id;
if (process.browser) {
    user_id = localStorage.getItem("userID")

}
const orgid = user_id

let token;
if (process.browser) {
    token = localStorage.getItem("Jwt-token");
}
// let imporsonateAsToken;
// if(process.browser){
//     imporsonateAsToken=document.cookie.split(`Jwt-token=`).pop().split(';')[0]
// }

let uuid_token;
if (process.browser) {
    uuid_token = localStorage.getItem("uuid");
}
const uuid = uuid_token;

let headers = {
    'Authorization': `Bearer ${token}`
};

let Env_uuid;
if (process.browser) {
    Env_uuid = localStorage.getItem("envuuid");
}
const envuuid = Env_uuid;

let asset_id;
if (process.browser) {
    asset_id = localStorage.getItem("videoId");
}
const assetid = asset_id;

let upload_id;
if (process.browser) {
    upload_id = localStorage.getItem("upload_id");
}
const uploadid = upload_id;

let current_date;
if (process.browser) {
    current_date = Date.now();
}
const CurrentDate = current_date;
let sevendaybeforedate;
if (process.browser) {
    //    sevendaybeforedate = new Date().setDate(new Date().getDate() - 7);
    sevendaybeforedate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).setHours(0, 0, 0, 0);
}
const pastdate = sevendaybeforedate;

const loginHandledAxios = (req) => axios(req).catch((error) => {

    if (error.response.data.code == 401) {
        window.localStorage.clear();
        document.cookie = "Jwt-token=;expires=" + new Date().toUTCString();
        window.location.href = "/signin";
    } else throw error
})

const Api = {
    Sign_up_data: (login_details) =>
        loginHandledAxios({
            method: 'POST',
            url: Sign_up(),
            data: login_details,
        }),//this is called signup
    SignIn_details: (signin_details) =>
        loginHandledAxios({
            method: 'POST',
            url: SignIn_Data(),
            data: signin_details,
        }),//this is called in signin
    Reset_pswEmail: (email) =>
        loginHandledAxios({
            method: 'POST',
            data: email,
            url: post_emailtoResetPswd(),
            headers: headers
        }),
    Reset_password: (paswrd) =>
        loginHandledAxios({
            method: 'POST',
            data: paswrd,
            url: password_reset(),
            headers: headers
        }),
    Create_account_data: (createaccount_data, id) =>
        loginHandledAxios({
            method: 'POST',
            url: Create_user_account(),
            data: createaccount_data,
        }),
    Get_roles_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_roles(),
            headers: headers,
        }),//this is called in newmember_invite

    Get_organization_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_organization(),
            headers: headers,
        }),//this is calleed in organization
    Remove_user_data: (data) =>
        loginHandledAxios({
            method: 'DELETE',
            url: Remove_user(),
            data: data,
            headers: headers,
        }),
    Get_environment_types_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_environment_types(),
            headers: headers,
        }),// this is called where ever environments are there
    Edit_organisation_name_data: (organization_data) =>
        loginHandledAxios({
            method: 'PUT',
            url: Edit_organisation_name(),
            data: organization_data,
            headers: headers,
        }),//this is called in edit_organisation_name
    Newmember_invite_data: (admin_invite_code) =>
        loginHandledAxios({
            method: 'POST',
            url: Newmember_invite(),
            data: admin_invite_code,
            headers: headers,
        }),
    ResendInvite:(email)=>
    loginHandledAxios({
        method: 'POST',
        url: resend_invite(),
        data: email,
        headers: headers,
    }),
    //access token
    Get_access_token: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_access_token(),
            headers: headers,
        }),
    Create_aaccess_token_data: (access_data) =>
        loginHandledAxios({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
            headers: headers,
        }),
    Revoke_acceesstoken: (del) =>
        loginHandledAxios({
            method: 'DELETE',
            url: revoke_acceesstoken(del),
            data: del,
            headers: headers,
        }),//revoke accesstoken
    //webhook
    Get_webhook: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_webhook(),
            headers: headers,
        }),
    Create_webhook_data: (webhook_data) =>
        loginHandledAxios({
            method: 'POST',
            url: Create_webhook(),
            data: webhook_data,
            headers: headers,
        }),
    Delete_webhook: (del_webhook) =>
        loginHandledAxios({
            method: 'DELETE',
            url: delete_webhook(del_webhook),
            data: del_webhook,
            headers: headers,
        }),//delete webhook
    WebhookUpdate: (data, webhookid) =>
        loginHandledAxios({
            method: 'PUT',
            url: updateBtn(webhookid),
            data: data,
            headers: headers,
        }),
    //signin key
    Get_sigin_keys: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_signin_keys(),
            headers: headers,
        }),
    Create_signin_keys_data: (signin_key) =>
        loginHandledAxios({
            method: 'POST',
            url: Create_signin_keys(),
            data: signin_key,
            headers: headers,
        }),
    Delete_key_signing: (id) =>
        loginHandledAxios({
            method: 'DELETE',
            url: delSigningKey(id),
            headers: headers
        }),
    Get_product_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_product(),
            headers: headers,
        }),//create_signing_key
    //videos
    Video_list: (data) =>
        loginHandledAxios({
            method: 'GET',
            url: getList_videos(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${data}`
            },
        }),
    post_video: (video_url_data) =>
        loginHandledAxios({
            method: 'POST',
            data: video_url_data,
            url: video_url(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //environments
    Get_env_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_environment(),
            headers: headers,
        }),
    Env_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_new_env(),
            headers: headers,
        }),
    Post_env: (new_env_data) =>
        loginHandledAxios({
            method: 'POST',
            data: new_env_data,
            url: post_env(),
            headers: headers,
        }),
    Update_env: (dev_data, data) =>
        axios({
            method: 'PUT',
            data: dev_data,
            url: update_env(data),
            headers: { 'Authorization': `Bearer ${token}` }
        }),
    //direct upload
    Direct_upload_post: (direct_video_upload) =>
    loginHandledAxios({
            method: 'POST',
            data: direct_video_upload,
            url: post_direct_video(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }

        }),
    Direct_upload_get_data: (data) =>
        loginHandledAxios({
            method: 'GET',
            url: get_direct_video_data(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${data}`
            }
        }),//called in videos
    //selected
    Selected_option: (data) =>
        loginHandledAxios({
            method: 'POST',
            data: data,
            url: post_selected(),
            headers: headers
        }),
    Get_Env_item: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_video_data(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //embed
    Get_vdo_player: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_vdo_player(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }

        }),
    //account
    Create_new_organization: (new_org_name) =>
        loginHandledAxios({
            method: 'POST',
            url: create_new_organization(),
            data: new_org_name,
            headers: headers
        }),
    User_update: (update_user_data) =>
        loginHandledAxios({
            method: "PUT",
            url: update_user(),
            data: update_user_data,
            headers: headers
        }),
    Get_User_update: () =>
        loginHandledAxios({
            method: "GET",
            url: update_user(),
            headers: headers
        }),
    Password_Change: (paswrd) =>
        loginHandledAxios({
            method: 'POST',
            data: paswrd,
            url: change_paswrd(),
            headers: headers
        }),
    //overview
    Delete_asset: () =>
    loginHandledAxios({
            method: 'DELETE',
            url: delete_asset(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //activities in overview
    Get_Activities_Events: (query) =>
        loginHandledAxios({
            method: 'GET',
            url: get_Activities_Events(query),
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }),
    Get_Activities_Logs: (query) =>
        loginHandledAxios({
            method: 'GET',
            url: get_Activities_Logs(query),
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }),
    //thumbnails
    Create_thumbnail: (thumbnail) =>
        loginHandledAxios({
            method: 'POST',
            data: thumbnail,
            url: create_thumbnail(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //subtitles
    Create_subtitle: (subtitle) =>
        loginHandledAxios({
            method: 'POST',
            data: subtitle,
            url: add_subtitle_api(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    Get_subtitle_list: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_subtitle_list(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    Delete_subtitle: (e) =>
        loginHandledAxios({
            method: 'DELETE',
            url: delete_subtitle(e),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //others
    Meta_tag: (data) =>
        loginHandledAxios({
            method: 'PUT',
            data: data,
            url: meta_update(),
            headers: {
                'Authorization': `Bearer ${token}`,
                'EnvironmentId': `${localStorage.getItem("envuuid")}`
            }
        }),
    //billing
    List_billing_plans: () =>
        loginHandledAxios({
            method: 'GET',
            url: list_billing_plans(),
            headers: headers,
        }),
    Org_list_billing_plans: () =>
        loginHandledAxios({
            method: "GET",
            url: org_list_billing_plans(),
            headers: headers,
        }),
    List_org_subscriptions: () =>
        loginHandledAxios({
            method: 'GET',
            url: list_org_subscriptions(),
            headers: headers,
        }),
    Get_account_info: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_account_info(),
            headers: headers,
        }),

    Payment_history: () =>
        loginHandledAxios({
            method: 'GET',
            url: payment_history(),
            headers: headers,
        }),

    //Statistics
    Usage_statistics: (env, toDate, fromDate) =>
        loginHandledAxios({
            method: 'GET',
            url: usage_statistics(env, toDate, fromDate),
            headers: headers,
        }),
    Views_statistics: (env, toDate, fromDate) =>
        loginHandledAxios({
            method: 'GET',
            url: views_statistics(env, toDate, fromDate),
            headers: headers,
        }),
    EditApiAccessToken: (value, accessId) =>
        loginHandledAxios({
            method: 'PUT',
            data: value,
            url: editAccessToken(accessId),
            headers: headers
        }),
    Realtime_views: (env, fromDate, interval) =>
        loginHandledAxios({
            method: 'GET',
            url: realtime_views(env, fromDate, interval),
            headers: headers,
        }),
    Org_stats: () =>
        loginHandledAxios({
            method: 'GET',
            url: org_stats(),
            headers: headers,
        }),
    Get_Playback_URL: (ast_id) =>
        loginHandledAxios({
            method: 'GET',
            url: get_video_playback_url(ast_id)
        }),
    Get_Logs_data: () =>
        loginHandledAxios({
            method: 'GET',
            url: get_Logs(),
            headers: headers
        }),
    Get_Events_data: (id) =>
        loginHandledAxios({
            method: 'GET',
            url: get_Events(id),
            headers: headers
        }),
    Get_Events_details: (uuid) =>
        loginHandledAxios({
            method: 'GET',
            url: get_Events_Detail(uuid),
            headers: headers
        }),
    Get_Log_details: (id) =>
        loginHandledAxios({
            method: 'GET',
            url: get_Log_Detail(id),
            headers: headers
        }),
    Imporsonate:(email)=>
    axios({
        method:'POST',
        data:email,
        url:imporsonateAs(),
        headers:{
            'Authorization': `Bearer ${document.cookie.split(`Jwt-token=`).pop().split(';')[0]}`,
        }
    })
}
export default Api

