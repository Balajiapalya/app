"use strict";
exports.id = 6655;
exports.ids = [6655];
exports.modules = {

/***/ 6655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Create_signing_key)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Create_signing_key({ closesigninkeys  }) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: prod , 1: setProd  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Get_environment_types_data */ .ZP.Get_environment_types_data().then((res)=>setData(res.data.data)
        );
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Get_product_data */ .ZP.Get_product_data().then((res)=>setProd(res.data.data)
        );
    }, []);
    const onSubmit = (signin_key)=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Create_signin_keys_data */ .ZP.Create_signin_keys_data(signin_key);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().container)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().newkey)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_nav),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: ()=>closesigninkeys(false)
                        ,
                        className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_close),
                        role: "button",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: "/Images/close.png",
                                alt: "icon",
                                width: "20",
                                height: "20"
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
                            children: "New Signing Key"
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
                                            children: data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: item.id,
                                                        children: item.name
                                                    }, item.id)
                                                })
                                            )
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_label),
                                            children: "Product"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            name: "productTypeId",
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_selection),
                                            ...register("productTypeId", {
                                                required: true
                                            }),
                                            children: prod.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: product.id,
                                                    children: product.name
                                                }, product.id)
                                            )
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_btn),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_canel_btn)} btn btn-primary`,
                                            onClick: ()=>closesigninkeys(false)
                                            ,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_5___default().model_save_btn)} btn btn-primary`,
                                            children: "create Signing Key"
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