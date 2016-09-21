//Form JS File
function frmIdeal_frmIdeal_init_seq0(eventobject) {
    initEvents.call(this);
};

function frmIdeal_frmIdeal_preshow_seq0(eventobject) {
    /* 
highLightRows.call(this);

 */
};

function frmIdeal_frmIdeal_postshow_seq0(eventobject) {
    highLightRows.call(this);
};

function frmIdeal_btnEmail_onClick_seq0(eventobject) {
    frmtest.show();
};

function addWidgetsfrmIdeal() {
    var segLeftQuesbox = new kony.ui.FlexContainer({
        "id": "segLeftQuesbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segLeftQues = new kony.ui.SegmentedUI2({
        "id": "segLeftQues",
        "top": "0dp",
        "left": "0%",
        "width": "100%",
        "height": "80.0%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imgIdentifier": "imgIdentifier",
            "tmpSegQuestionLeft": "tmpSegQuestionLeft",
            "lblQuesLeft": "lblQuesLeft",
            "fcLeftQuestion": "fcLeftQuestion"
        },
        "data": [{
            "imgIdentifier": "imagedrag.png",
            "lblQuesLeft": "Questions to ask at dealership"
        }, {
            "imgIdentifier": "imagedrag.png",
            "lblQuesLeft": "How is price calculated"
        }, {
            "imgIdentifier": "imagedrag.png",
            "lblQuesLeft": "What factors impact pricing"
        }, {
            "imgIdentifier": "imagedrag.png",
            "lblQuesLeft": "Help me pick a finance product that meets my needs"
        }, {
            "imgIdentifier": "imagedrag.png",
            "lblQuesLeft": "Your credit and how can it impact your payment"
        }],
        "Location": "[0,0]",
        "rowTemplate": fcLeftQuestion,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgIdentifier",
            "selectedStateImage": "ic_check_black_36dp.png",
            "unselectedStateImage": "ic_check_white_36dp.png"
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segLeftQuesbox.add();
    var fscLeftQuestion = new kony.ui.FlexScrollContainer({
        "id": "fscLeftQuestion",
        "top": "0dp",
        "left": "0.00%",
        "width": "30%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[-1,0]",
        "skin": "slFSbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    fscLeftQuestion.setDefaultUnit(kony.flex.DP);
    fscLeftQuestion.add(segLeftQues);
    var btnEmail = new kony.ui.Button({
        "id": "btnEmail",
        "top": "5dp",
        "left": "35%",
        "width": "30%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Email",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmIdeal_btnEmail_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnSave = new kony.ui.Button({
        "id": "btnSave",
        "top": "5dp",
        "left": "2%",
        "width": "30%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "save",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var fcEmail = new kony.ui.FlexContainer({
        "id": "fcEmail",
        "top": "0dp",
        "left": "0%",
        "width": "100%",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_HORIZONTAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    fcEmail.setDefaultUnit(kony.flex.DP)
    fcEmail.add(btnEmail, btnSave);
    var segRightQuesbox = new kony.ui.FlexContainer({
        "id": "segRightQuesbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segRightQues = new kony.ui.SegmentedUI2({
        "id": "segRightQues",
        "top": "10dp",
        "left": "3.49%",
        "bottom": "10dp",
        "width": "93.33%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imgIdentifier": "imgIdentifier",
            "lblQues": "lblQues",
            "tmpSegRightQues": "tmpSegRightQues",
            "fcQues": "fcQues",
            "lblHeading": "lblHeading"
        },
        "data": [
            [{
                    "lblHeading": "Test Drive:"
                },
                [{
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "Ask the dealer if you can test drive the exact car (color, options, model) you want to buy."
                }, {
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "Test the features of the car before the test drive, do the seats fit your family? is there enough cargo space?"
                }, {
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "Is it easy to adjust the seat and mirrors, and use the controls?"
                }]
            ],
            [{
                    "lblHeading": "Pricing:"
                },
                [{
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "How much money you have to put down. Be prepared to discuss with the dealer the impact of your down payment on your monthly payments (your payment should decrease with a higher down payment)."
                }, {
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "Determine your credit score and ask the dealer if you qualify for lower-interest financing. You're allowed one free credit report per year from each of the three providers (TransUnion, Experian, Equifax) from AnnualCreditReport.com"
                }, {
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "Ask what terms are available and how does it affect your payment/price."
                }, {
                    "imgIdentifier": "imagedrag.png",
                    "lblQues": "What fees/taxes will affect you, Stage, City & Local"
                }]
            ],
            [{
                    "lblHeading": "Leasing:"
                },
                [{
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "Additional questions about the benefits of leasing or purchasing vehicles"
                }, {
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "If Leasing, What to expect during the life of Lease."
                }]
            ],
            [{
                    "lblHeading": "Insurance:"
                },
                [{
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "Ask questions about dealer option and insurance products."
                }, {
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "Check with your insurance company (or search online) to determine how much your insurance cost will be with your new vehicle."
                }]
            ],
            [{
                    "lblHeading": "Other:"
                },
                [{
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "Know the sale or trade-in value of your existing car so you can be prepared for dealer discussion"
                }, {
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "Review the online contract before going into the dealer so you are prepared with questions for the dealer."
                }, {
                    "imgIdentifier": "ic_check_white_36dp.png",
                    "lblQues": "How much tome will the process take and what I do to reduce that time before hand?"
                }]
            ]
        ],
        "Location": "[10,60]",
        "rowTemplate": fcQues,
        "sectionHeaderTemplate": fcSecHeader,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgIdentifier",
            "selectedStateImage": "ic_check_black_36dp.png",
            "unselectedStateImage": "ic_check_white_36dp.png"
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segRightQuesbox.add();
    var fscRightQuestion = new kony.ui.FlexScrollContainer({
        "id": "fscRightQuestion",
        "top": "0dp",
        "left": "0%",
        "width": "70%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": false,
        "pagingEnabled": false,
        "Location": "[133,0]",
        "skin": "sknFscGrey",
        "focusSkin": "sknFscGrey",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    fscRightQuestion.setDefaultUnit(kony.flex.DP);
    fscRightQuestion.add(fcEmail, segRightQues);
    var fcQuestion = new kony.ui.FlexContainer({
        "id": "fcQuestion",
        "top": "0dp",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_HORIZONTAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    fcQuestion.setDefaultUnit(kony.flex.DP)
    fcQuestion.add(fscLeftQuestion, fscRightQuestion);
    frmIdeal.add(fcQuestion);
    frmIdeal.setDefaultUnit(kony.flex.DP);
};

function frmIdealGlobals() {
    var MenuId = [];
    frmIdeal = new kony.ui.Form2({
        "id": "frmIdeal",
        "enableScrolling": false,
        "bounces": false,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "headers": [fcHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmWhite",
        "init": frmIdeal_frmIdeal_init_seq0,
        "preShow": frmIdeal_frmIdeal_preshow_seq0,
        "postShow": frmIdeal_frmIdeal_postshow_seq0,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "addWidgets": addWidgetsfrmIdeal
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};