import axios from "axios";
// let LINK = process.env.APIURL;
const BASE_URL = () => 'http://13.235.3.29:8080';


export const Sign_up = () => {
    return `${BASE_URL()}/profile/services/api/v1/users/signup`;
};
export const Create_user_account = () => {
    return `${BASE_URL()}/profile/services/api/v1/users`;
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
export const Create_signin_keys = () =>{
    return `${BASE_URL()}/profile/services/api/v1/signingkeys`;
};

const Api = {
    Sign_up_data: (login_details) =>
        axios({
            method: 'POST',
            url: Sign_up(),
            data: login_details,
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),//this is called in login
    Create_account_data: (createaccount_data) =>
        axios({
            method: 'POST',
            url: Create_user_account(),
            data: createaccount_data,
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }),//this is called in Create account
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
    Create_webhook_data: (webhook_data) =>
        axios({
            method: 'POST',
            url: Create_webhook(),
            data: webhook_data,
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }), //this is called in Create_new_webhook
    Create_aaccess_token_data: (access_data) =>
        axios({
            method: 'POST',
            url: Create_aaccess_token(),
            data: access_data,
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            }), //this is called in new_access_token
    Create_signin_keys_data: (signin_key) => {
        axios({
            method:'POST',
            url:Create_signin_keys(),
            data: signin_key,
        })
        .then(res=>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })//this is called in Create_signin_keys
    }
}


export default Api

