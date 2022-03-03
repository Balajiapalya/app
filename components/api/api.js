import axios from "axios";
let LINK = process.env.APIURL;
const BASE_URL = () => LINK;

export const SignIn_Data = () => {
    return `${BASE_URL()}/profile/services/api/v1/users/authenticate`
}
export const Sign_up = () => {
    return `${BASE_URL()}/profile/services/api/v1/users/signup`;
};
export const Create_user_account = () => {
    return `${BASE_URL()}/profile/services/api/v1/users`;
};
export const Edit_organisation_name = () => {
    return `${BASE_URL}/profile/services/api/v1/organizations`;
};
export const Newmember_invite = () => {
    return `${BASE_URL()}/profile/services/api/v1/organizations/1/invite`;
};
export const Create_webhook = () => {
    return `${BASE_URL()}/profile/services/api/v1/webhooks`;
};
export const Create_aaccess_token = () => {
    return `${BASE_URL()}/profile/services/api/v1/api-access-tokens`;
};
export const Create_signin_keys = () => {
    return `${BASE_URL()}/profile/services/api/v1/signingkeys`;
};
export const get_roles = () => {
    return `${BASE_URL()}/profile/services/api/v1/organizations/${uuid}/roles`
}

export const get_organization = () => {
    return `${BASE_URL()}/profile/services/api/v1/organizations/${uuid}/users`
}
export const get_environment_types = () =>{
    return `${BASE_URL}/profile/services/api/v1/environment-types`
}
export const get_environment = ()=>{
    return `${BASE_URL}/profile/services/api/v1/environments?organizationId={{organizationId}}`
}//no used yet

export const get_product = ()=>{
    return `${BASE_URL}/profile/services/api/v1/product-types`
}

let token;
if (process.browser) {
    token = localStorage.getItem("Jwt-token");
}

let headers = {
    'Authorization': `Bearer ${token}`
};

let uuid_token;
if (process.browser) {
    uuid_token = localStorage.getItem("uuid");
}
const uuid = uuid_token;



const Api = {
    Sign_up_data: (login_details) =>
        axios({
            method: 'POST',
            url: Sign_up(),
            data: login_details,
        }),//this is called in login
    SignIn_details: (signin_details) =>
        axios({
            method: 'POST',
            url: SignIn_Data(),
            data: signin_details
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
    Get_environment_types_data: () =>
        axios({
            method:'GET',
            url:get_environment_types(),
            headers:headers,
        }),
    Get_product_data: () =>
        axios({
            method:'GET',
            url:get_product(),
            headers:headers,
        }),
    
    Create_account_data: (createaccount_data) =>
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
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),
    Newmember_invite_data: (admin_invite_code) =>
        axios({
            method: 'POST',
            url: Newmember_invite(),
            data: admin_invite_code,
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),//this is called in Newmwmber_invite
    Create_aaccess_token_data: (access_data) =>
        axios({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
            headers: headers,
        })
            .then(res => {
                console.log(res)
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
                console.log(res)
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
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),//this is called in Create_signin_keys
}


export default Api

