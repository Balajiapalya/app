"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Create_new_webhook)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1378);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Create_new_webhook({ closewebhook  }) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Get_environment_types_data */ .ZP.Get_environment_types_data().then((res)=>setData(res.data.data)
        );
    }, []);
    const onSubmit = (webhook_data)=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Create_webhook_data */ .ZP.Create_webhook_data(webhook_data);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().newwebhook_model)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_nav),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_close),
                        role: "button",
                        onClick: ()=>closewebhook(false)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/Images/close.png",
                                alt: "icon"
                            }),
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_title),
                            children: "New Webhook"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_label),
                                    children: "Environment"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            name: "environmentId",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().development)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_selection)}`,
                                            ...register("environmentId", {
                                                required: true
                                            }),
                                            children: data.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: option.id,
                                                        children: option.name
                                                    }, option.id)
                                                })
                                            )
                                        }),
                                        errors.Environment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().validations)} validations`,
                                            children: "This field is required"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().file),
                                            src: "/Images/Icon awesome-folder.png",
                                            alt: "icon"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "text",
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().up),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/Images/updown.png",
                                                alt: "icon"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_label),
                                    children: "URL to notify:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_input)} form_control`,
                                    name: "url",
                                    placeholder: "Enter url",
                                    ...register("url", {
                                        required: true
                                    })
                                }),
                                errors.URL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().validations)} validations`,
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().access_token_link),
                                    children: [
                                        "All events will be sent to this URL.To learn more about the types of events see our ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "",
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().access_token_data),
                                            children: "docs"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_btn),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_canel_btn)} btn btn-primary`,
                                            onClick: ()=>closewebhook(false)
                                            ,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_save_btn)} btn btn-primary`,
                                            children: "create Webhook"
                                        })
                                    ]
                                })
                            ]
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