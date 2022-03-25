"use strict";
exports.id = 2542;
exports.ids = [2542];
exports.modules = {

/***/ 9904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Direct_upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9384);
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1378);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Direct_upload() {
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const { 0: filename , 1: set_filename  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    let handleChange = (e1)=>{
        var files = e1.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach((e)=>{
            set_filename(e.name);
        });
    };
    const onSubmit = (direct_video_upload)=>{
        const file = direct_video_upload.file[0];
        _api_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Direct_upload_post */ .ZP.Direct_upload_post(direct_video_upload).then((res)=>{
            if (res.data.success = "Success") {
                const url = res.data.data.url;
                axios__WEBPACK_IMPORTED_MODULE_4___default()({
                    method: "PUT",
                    url: url,
                    data: file
                });
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);
    // console.log(ids)
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().Videodelivery_addnewassets),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Create new asset"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().upload_file),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "upload your video file"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().upload_btn_wrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),
                                        children: "Select file"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "file",
                                        name: "file",
                                        ...register("file", {
                                            required: true
                                        }),
                                        onChange: (e)=>handleChange(e)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().direct_upload_title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    readOnly: true,
                                    name: "file_name",
                                    defaultValue: filename,
                                    ...register("file_name", {
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_5___default().direct_upload_submit),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    children: "Upload"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Videodelivery_addnewassets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9384);
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _components_direct_uploade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9904);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _components_direct_uploade__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _components_direct_uploade__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Videodelivery_addnewassets({ close_asset  }) {
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = (video_url_data)=>{
        _components_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post_video */ .ZP.post_video(JSON.parse(video_url_data.code)).then((res)=>{
            if (res.data.status = "Success") {
                window.location.reload();
            }
        }).catch((error)=>{
            console.log(error);
        });
    };
    const printTheJSONInPrettyFormat = ()=>{
        var badJSON = document.getElementById('prettyJSONFormat').value;
        var parseJSON = JSON.parse(badJSON);
        var JSONInPrettyFormat = JSON.stringify(parseJSON, undefined, 4);
        document.getElementById('prettyJSONFormat').value = JSONInPrettyFormat;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().videodelivery),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_nav),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: ()=>close_asset(false)
                    ,
                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_close),
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/Images/close.png",
                            alt: "close"
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().Videodelivery_addnewassets),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_direct_uploade__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().or)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().or_text),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "[or]"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Post using Video URL:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    readOnly: true,
                                    value: `http://13.235.3.29/video/services/api/v1/contents`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Post body editor:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().language_select),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: `${(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_btn)} ${(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().active)}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().languge_img),
                                                    src: "/Images/python.png",
                                                    alt: "python"
                                                }),
                                                "Python"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_btn),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().languge_img),
                                                    src: "/Images/node-js.png",
                                                    alt: "node"
                                                }),
                                                "Node"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_btn),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().languge_img),
                                                    src: "/Images/php.png",
                                                    alt: "php"
                                                }),
                                                "Php"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().model_btn),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().languge_img),
                                                    src: "/Images/go.png",
                                                    alt: "go"
                                                }),
                                                "Go"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().code),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            defaultValue: `${JSON.stringify([
                                                {
                                                    "title": "Video title",
                                                    "description": "Video description",
                                                    "video": [
                                                        {
                                                            "url": "http://techslides.com/demos/sample-videos/small.mp4",
                                                            "start_offset": 0
                                                        }
                                                    ],
                                                    "tags": [
                                                        "tag1",
                                                        "tag2"
                                                    ],
                                                    "metadata": [
                                                        {
                                                            "key": "abc",
                                                            "value": "pqr"
                                                        }
                                                    ],
                                                    "playback_policy": [
                                                        "public"
                                                    ],
                                                    "mp4_support": false,
                                                    "save_original_copy": false,
                                                    "test_video": true
                                                }
                                            ], undefined, 2)}`,
                                            id: "prettyJSONFormat",
                                            className: `${(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().code_input)} form_control`,
                                            type: "text",
                                            name: "code",
                                            ...register("code", {
                                                required: true
                                            })
                                        }),
                                        errors.code && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: 'validations',
                                            children: "This field is required"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: (_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn),
                                    children: "Run Request"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;