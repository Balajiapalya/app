exports.id = 6087;
exports.ids = [6087];
exports.modules = {

/***/ 4502:
/***/ ((module) => {

// Exports
module.exports = {
	"containercomponents": "stream_statistics_containercomponents__gRfBg",
	"uppercomponents": "stream_statistics_uppercomponents__y1Bgz",
	"tools": "stream_statistics_tools__0x5ap",
	"list_heading": "stream_statistics_list_heading__3gwv9",
	"list": "stream_statistics_list__zo00K",
	"lowercomponents": "stream_statistics_lowercomponents__pUYNj",
	"stream_statistics": "stream_statistics_stream_statistics__RSWAJ",
	"stream_list": "stream_statistics_stream_list__0rw8H",
	"header": "stream_statistics_header__HM_mV",
	"stream_url_check": "stream_statistics_stream_url_check__HNQG5",
	"stream_url": "stream_statistics_stream_url__Us_nH",
	"stream_check": "stream_statistics_stream_check__JHDFy",
	"functional_buttons": "stream_statistics_functional_buttons__lQOws",
	"actions": "stream_statistics_actions__nBweY",
	"delete_stream": "stream_statistics_delete_stream__Jr5t9",
	"margin_bottom": "stream_statistics_margin_bottom__J518Q",
	"border_bottom": "stream_statistics_border_bottom__MMzJu",
	"padding": "stream_statistics_padding__GSN_r",
	"Utime_check": "stream_statistics_Utime_check__GgA3D",
	"uptime_header": "stream_statistics_uptime_header__UjvhT",
	"Preview": "stream_statistics_Preview__4DuEl",
	"image_preview": "stream_statistics_image_preview__Rhudb",
	"input": "stream_statistics_input__2Krcc",
	"time_line": "stream_statistics_time_line__p_2Tp",
	"scte": "stream_statistics_scte__YQHPq",
	"scte_header": "stream_statistics_scte_header__G__Ka",
	"scte_markers": "stream_statistics_scte_markers__9Zx2v",
	"text_align": "stream_statistics_text_align__2dSiy",
	"master_manifest": "stream_statistics_master_manifest__pnARM",
	"master_manifest_header": "stream_statistics_master_manifest_header__tcPkW",
	"child_manifest": "stream_statistics_child_manifest__LwGic",
	"child_manifest_header": "stream_statistics_child_manifest_header__OybPv",
	"stream_info": "stream_statistics_stream_info__qnqJN",
	"stream_info_table": "stream_statistics_stream_info_table__D7ToN",
	"Video": "stream_statistics_Video__2IMb4",
	"table_Video": "stream_statistics_table_Video__ZXGJC",
	"track_pts": "stream_statistics_track_pts__v8Sr2",
	"track_pts_header": "stream_statistics_track_pts_header__rb7s0",
	"timestamp": "stream_statistics_timestamp__tbYV8",
	"timestamp_details": "stream_statistics_timestamp_details__QJj8Z",
	"geo_locations": "stream_statistics_geo_locations___qO3Z",
	"geo_loacations_header": "stream_statistics_geo_loacations_header___JxN4",
	"select_loaction": "stream_statistics_select_loaction__w9GVk",
	"alert_box": "stream_statistics_alert_box__b5YFm",
	"alert": "stream_statistics_alert__u0tfP",
	"copyurl": "stream_statistics_copyurl__d0VDn",
	"premium_features": "stream_statistics_premium_features__UMTmW",
	"streamenable": "stream_statistics_streamenable__ZQ8_1",
	"statistics_unlockpremium": "stream_statistics_statistics_unlockpremium__zntRr",
	"pts_background": "stream_statistics_pts_background__1HGqT",
	"error_alert": "stream_statistics_error_alert__GG6cr",
	"background": "stream_statistics_background__DYi0J",
	"pts": "stream_statistics_pts__uD7yi",
	"stream_details": "stream_statistics_stream_details__1H98y",
	"settings": "stream_statistics_settings__ZHzav",
	"member_table": "stream_statistics_member_table__KdVyL"
};


/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Delete__stream)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3840);
/* harmony import */ var _styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);



function Delete__stream({ close_delete_stream  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model)} ${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().remove_user_modal)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_main),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_nav),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_title),
                            children: "Delete Stream"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            onClick: ()=>close_delete_stream(false)
                            ,
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_close),
                            role: "button",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "Images/close.png",
                                    alt: "close"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_removeuser),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_removeusername),
                            children: "Are you sure you want to delete this Stream?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_data),
                            children: "Once deleted,this stream will no longer monitored and all historical data will be erased."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_btn),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>close_delete_stream(false)
                            ,
                            type: "button",
                            className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_canel_btn)} btn btn-primary`,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "stream_monitor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: `${(_styles_model_module_css__WEBPACK_IMPORTED_MODULE_2___default().model_save_btn)} btn btn-primary`,
                                    children: "Yes,delete"
                                })
                            })
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