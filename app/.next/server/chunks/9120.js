exports.id = 9120;
exports.ids = [9120];
exports.modules = {

/***/ 2342:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper_signup": "Login_wrapper_signup__XVQ5P",
	"main_signup": "Login_main_signup__1uFmn",
	"logo_title": "Login_logo_title__MukoT",
	"signup_title": "Login_signup_title__lUNYp",
	"signup_area": "Login_signup_area__OpzMz",
	"signup_input": "Login_signup_input__38ZkH",
	"signup_btn": "Login_signup_btn__C5TFQ",
	"btn": "Login_btn__Tc3cc",
	"already_account": "Login_already_account__FSGrf",
	"account": "Login_account__gz7aP",
	"signin_link": "Login_signin_link__PkI1I",
	"label": "Login_label__wToWk",
	"forgotpw": "Login_forgotpw__eVMft"
};


/***/ }),

/***/ 9120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2342);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Signin() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: error1 , 1: seterror  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = (login_details)=>{
        login_details.password = btoa(login_details.password);
        console.log(login_details.password);
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SignIn_details */ .ZP.SignIn_details(login_details).then((res)=>{
            if (res.data.status == "Success") {
                document.cookie = `Jwt-token=${res.data.data.token}`;
                localStorage.setItem('uuid', res.data.data.organizations[0].uuid);
                localStorage.setItem('Jwt-token', res.data.data.token);
                localStorage.setItem('orgName', res.data.data.organizations[0].name);
                window.location.pathname = '/';
            }
        }).catch((error)=>{
            if (error.response.data.code = 400) {
                seterror(error.response.data.message);
            }
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper_signup),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().main_signup),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo_title),
                    children: "Videograph"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signup_area),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signup_title),
                            children: "Signin into your account"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Email"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            autoComplete: "current-password",
                                            type: "email",
                                            placeholder: "Enter email address",
                                            name: "login",
                                            className: `${(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signup_input)} form_control`,
                                            ...register("login", {
                                                required: true
                                            })
                                        })
                                    ]
                                }),
                                errors.login && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: 'validations',
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Password"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            autoComplete: "current-password",
                                            type: "password",
                                            placeholder: "Enter password",
                                            name: "password",
                                            className: `${(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signup_input)} form_control`,
                                            ...register("password", {
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "error",
                                            children: error1
                                        })
                                    ]
                                }),
                                errors.password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: 'validations',
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: `${(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signup_btn)} btn btn-primary`,
                                    children: "Sign in "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/email",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().forgotpw),
                                        children: "Forgot password?"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().already_account),
                            children: "Don't have an account?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/signup",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_6___default().signin_link),
                                children: "Sign up"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;