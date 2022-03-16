import axios from "axios";
let PROFILE_LINK = process.env.VG_PROFILE_SERVICE_API;
const PROFILE_BASE_URL = () => PROFILE_LINK;

let VIDEO_LINK = process.env.VG_VEDIO_SERVICE_API;
const VIDEO_BASE_URL = () => VIDEO_LINK;

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
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations`;
};
export const Newmember_invite = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/invite`;
};
export const get_roles = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/roles`
}
export const Remove_user = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users`
};
export const get_organization = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}/users`
};
export const editted_data = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}`
};
//wbhook
export const Create_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks`;
};
export const get_webhook = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/webhooks?environmentId=1`;
};
//access token
export const Create_aaccess_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens`;
};
export const get_access_token = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/api-access-tokens?organizationId=${uuid}&includeRevoked=true`;
}
//signin keys
export const Create_signin_keys = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys`;
};
// export const get_signin_keys = () => {
//     return `${PROFILE_BASE_URL()}/services/api/v1/signingkeys?environmentId=1&productTypeId=${envid}`
// };
export const get_product = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/product-types`
};
//used in wbhook,access token,,signin keys
export const get_environment_types = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types`
}
//environment
export const get_environment = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments?organizationId=${uuid}`
}
export const get_new_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environment-types`
}
export const post_env = () => {
    return `${PROFILE_BASE_URL()}/services/api/v1/environments`
}
export const update_env =() =>{
    return `${PROFILE_BASE_URL()}/services/api/v1/environments/105`
}
//video 
export const video_url = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents`
}
export const getList_videos = () => {
    return `${VIDEO_BASE_URL()}/services/api/v1/contents`
}
export const post_selected=()=>{
    return `${PROFILE_BASE_URL()}/services/api/v1/organizations/${uuid}users`
}

let token;
if (process.browser) {
    token = localStorage.getItem("Jwt-token");
}
let uuid_token;
if (process.browser) {
    uuid_token = localStorage.getItem("uuid");
}
const uuid = uuid_token;

let headers = {
    'Authorization': `Bearer ${token}`
};

let Env_uuid;
if (process.browser){
    Env_uuid = localStorage.getItem("envuuid");
}
const envuuid = Env_uuid;



const Api = {
    Sign_up_data: (login_details) =>
        axios({
            method: 'POST',
            url: Sign_up(),
            data: login_details,
        }),//this is called signup
    SignIn_details: (signin_details) =>
        axios({
            method: 'POST',
            url: SignIn_Data(),
            data: signin_details,
        }),//this is called in signin
    Get_roles_data: () =>
        axios({
            method: 'GET',
            url: get_roles(),
            headers: headers,
        }),//this is called in newmember_invite

    Get_organization_data: () =>
        axios({
            method: 'GET',
            url: get_organization(),
            headers: headers,
        }),//this is calleed in organization
    Remove_user_data: (data) =>
        axios({
            method: 'DELETE',
            url: Remove_user(),
            data:data,
            headers: headers,
        }),
    Get_environment_types_data: () =>
        axios({
            method: 'GET',
            url: get_environment_types(),
            headers: headers,
        }),// this is called where ever environments are there
    Get_product_data: () =>
        axios({
            method: 'GET',
            url: get_product(),
            headers: headers,
        }),//create_signing_key

    Create_account_data: (createaccount_data, id) =>
        axios({
            method: 'POST',
            url: Create_user_account(),
            data: createaccount_data,
        }),//this is called in Create account
    Edit_organisation_name_data: (organization_data) =>
        axios({
            method: 'POST',
            url: Edit_organisation_name(),
            data: organization_data,
            headers: headers,
        }),//this is called in edit_organisation_name
    Newmember_invite_data: (admin_invite_code) =>
        axios({
            method: 'POST',
            url: Newmember_invite(),
            data: admin_invite_code,
            headers: headers,
        }),
    Create_aaccess_token_data: (access_data) =>
        axios({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
            headers: headers,
        })
            .then(res => {
                // console.log(res)
            })
            .catch(error => {
                console.log(error)
            }), //this is called in new_access_token
    Create_webhook_data: (webhook_data) =>
        axios({
            method: 'POST',
            url: Create_webhook(),
            data: webhook_data,
            headers: headers,
        })
            .then(res => {
                // console.log(res)
            })
            .catch(error => {
                console.log(error)
            }), //this is called in Create_new_webhook
    Create_signin_keys_data: (signin_key) =>
        axios({
            method: 'POST',
            url: Create_signin_keys(),
            data: signin_key,
            headers: headers,
        })
            .then(res => {
                // console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),//this is called in Create_signin_keys
    Editted_data: (data) =>
        axios({
            method: 'PUT',
            url: editted_data(),
            data: data,
            headers: headers,
        }),//called in edit_organisation_name
    Video_list: (data) =>
        axios({
            method: 'GET',
            url: getList_videos(),
            headers:{'Authorization': `Bearer ${token}`,
            'EnvironmentId': `${data}`},
        }),

    Get_env_data: () =>
        axios({
            method: 'GET',
            url: get_environment(),
            headers: headers,
        }),
    Env_data: () =>
        axios({
            method: 'GET',
            url: get_new_env(),
            headers: headers,
        }),
    Post_env: (new_env_data) =>
        axios({
            method: 'POST',
            data: new_env_data,
            url: post_env(),
            headers: headers,
        }),
    Update_env: (dev_data) =>
        axios({
            method:'POST',
            data:dev_data,
            url:update_env(),
            headers:headers,
        }),
    post_video: (video_url_data) =>
        axios({
            method: 'POST',
            data: video_url_data,
            url: video_url(),
            headers: {'Authorization': `Bearer ${token}`,
            'EnvironmentId': `${envuuid}`}
        }),
    //get api token
    Get_access_token: () =>
        axios({
            method: 'GET',
            url: get_access_token(),
            headers: headers,
        }),
    //get signin keys
    Get_sigin_keys: () =>
        axios({
            method: 'GET',
            url: get_signin_keys(),
            headers: headers,
        }),
    //get webhook
    Get_webhook: () =>
        axios({
            method: 'GET',
            url: get_webhook(),
            headers: headers,
        }),
        Selected_option:(data)=>
        axios({
            method:'POST',
            data:data,
            url:post_selected(),
            headers:headers
        })
}
export default Api

