"use strict";
exports.id = 7132;
exports.ids = [7132];
exports.modules = {

/***/ 7132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stream_unlockfeatures)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Stream_unlockfeatures({ closestream  }) {
    // const[openmonitoring,setmonitoring]=useState(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().newstream)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_nav),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        onClick: ()=>closestream(false)
                        ,
                        className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_close),
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
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_title),
                            children: "Add new stream to monitor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                            children: "Display Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_input)} form_control`,
                            name: "Displayname",
                            placeholder: "Enter a name for this stream"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                            children: "Stream URL"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_input)} form_control`,
                            name: "Streamurl",
                            placeholder: "Enter HLS stream url"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                            children: "Geo locations to monitor"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().select),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "product",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().development)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_selection)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "1",
                                            children: "Select locations"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "2",
                                            children: "2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "3",
                                            children: "3"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "4",
                                            children: "4"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "text",
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().up),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/Images/updown.png",
                                        alt: "close"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                            children: "Check Streams"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().select),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "product",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().development)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_selection)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "1",
                                            children: "Realtime"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "2",
                                            children: "2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "3",
                                            children: "3"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "4",
                                            children: "4"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "text",
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().up),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/Images/updown.png",
                                        alt: "close"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().unlock_features),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                    children: "premiumfeatures"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/Images/Icon material-lock.png",
                                    alt: "lock"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/tools/streammonitor/unlock_premiumpayment",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "unlock premium"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Realtime Monitoring"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Stream will be monitored continously.You will receive realtime info on overall stream health and other key metrics."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Track PTS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Track Presentation Time Stamp(PTS) of streams from location close to stream origin."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Detailed Stream info"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Get detailed stream info such as Video codec,Audio codec,Aspect Ratio,Profile,Color,Space,etc."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Frame freeze detection"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Detects frame freeze events in a stream."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Black frame detection"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Detects frame freeze events in a stream."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Audio loss detection"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Notifies when audio is missing from the stream."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Preview Thumbnail"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Image thumbnails will be automatically generated for the entire video timeline for a quick preview."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().premiumfeatures_check),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().check),
                                            src: "/Images/Icon awesome-check.png",
                                            alt: "check"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_label),
                                            children: "Receive alerts"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Receive email alerts every time we detect an isue with streams."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_btn),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>closestream(false)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_canel_btn)} btn btn-primary`,
                                        children: "Cancel"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/tools/streammonitor/stream_statistics_enable",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_3___default().model_save_btn)} btn btn-primary`,
                                            children: "Start Monitoring"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ })

};
;