"use strict";
exports.id = 7113;
exports.ids = [7113];
exports.modules = {

/***/ 7113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Add_new_environment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Add_new_environment({ closeenv  }) {
    const { 0: env , 1: setenv  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = (new_env_data)=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Post_env */ .ZP.Post_env(new_env_data).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Env_data */ .ZP.Env_data().then((res)=>{
            console.log(res.data);
            setenv(res.data.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, {});
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().accesstoken_model)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_nav),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_close),
                        role: "button",
                        onClick: ()=>closeenv(false)
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
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_title),
                            children: "Add New Environment"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_label),
                                    children: "Environment Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_input)} form_control`,
                                    name: "name",
                                    placeholder: "Enter a name",
                                    ...register("name", {
                                        required: true
                                    })
                                }),
                                errors.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().validations)} validations`,
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_label),
                                    children: "Type"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "environmentTypeId",
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_selection),
                                    ...register("environmentTypeId", {
                                        required: true,
                                        valueAsNumber: true
                                    }),
                                    children: [
                                        errors.environmentTypeId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().validations)} validations`,
                                            children: "This field is required"
                                        }),
                                        env.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: parseInt(item.id),
                                                children: item.name
                                            }, key)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_btn),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_canel_btn)} btn btn-primary`,
                                            onClick: ()=>closeenv(false)
                                            ,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_4___default().model_save_btn)} btn btn-primary`,
                                            children: "Add Environment"
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