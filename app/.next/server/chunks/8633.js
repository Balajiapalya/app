"use strict";
exports.id = 8633;
exports.ids = [8633];
exports.modules = {

/***/ 8633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Create_new_organization)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Create_new_organization({ closeneworg  }) {
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = (new_org_name)=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Create_new_organization */ .ZP.Create_new_organization(new_org_name).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().accesstoken_model)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_nav),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: ()=>closeneworg(false)
                        ,
                        className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_close),
                        role: "button",
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
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_title),
                            children: "Create new organization"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "New organization will have separate teams and settings from your current organization"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                    children: " Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_input)} form_control`,
                                    name: "name",
                                    placeholder: "Enter organization name",
                                    ...register("name", {
                                        required: true
                                    })
                                }),
                                errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().validations)} validations`,
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_btn),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>closeneworg(false)
                                            ,
                                            type: "button",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_canel_btn)} btn btn-primary`,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_save_btn)} btn btn-primary`,
                                            children: "Create Organization"
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