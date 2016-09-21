//Form JS File
function frmtest_button1993298877194_onClick_seq0(eventobject) {
    frmIdeal.show();
};

function addWidgetsfrmtest() {
    var button1993298877194 = new kony.ui.Button({
        "id": "button1993298877194",
        "top": "158dp",
        "left": "91dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Button",
        "onClick": frmtest_button1993298877194_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmtest.add(button1993298877194);
    frmtest.setDefaultUnit(kony.flex.DP);
};

function frmtestGlobals() {
    var MenuId = [];
    frmtest = new kony.ui.Form2({
        "id": "frmtest",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmtest
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