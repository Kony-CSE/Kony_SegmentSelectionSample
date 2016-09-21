//Form JS File
function addWidgetsfrmHome() {
    var segment268508040428595box = new kony.ui.FlexContainer({
        "id": "segment268508040428595box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segment268508040428595 = new kony.ui.SegmentedUI2({
        "id": "segment268508040428595",
        "top": "110dp",
        "left": "15dp",
        "width": "86.67%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "image268508040428599": "image268508040428599",
            "label68508040428598": "label68508040428598"
        },
        "data": [{
            "image268508040428599": "imagedrag.png",
            "label68508040428598": "AAAAAAAAAAA"
        }, {
            "image268508040428599": "imagedrag.png",
            "label68508040428598": "BBBBBBBBBBBBB"
        }, {
            "image268508040428599": "imagedrag.png",
            "label68508040428598": "CCCCCCCCCCC"
        }],
        "Location": "[15,110]",
        "rowTemplate": segment268508040428595box,
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "image268508040428599",
            "selectedStateImage": "ic_check_black_36dp.png",
            "unselectedStateImage": "ic_check_white_36dp.png"
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var label68508040428598 = new kony.ui.Label({
        "id": "label68508040428598",
        "top": "12dp",
        "left": "14dp",
        "width": "366dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "textCopyable": false
    });
    var image268508040428599 = new kony.ui.Image2({
        "id": "image268508040428599",
        "top": "52dp",
        "left": "293dp",
        "width": "89dp",
        "height": "66dp",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {});
    segment268508040428595box.add(label68508040428598, image268508040428599);
    frmHome.add(segment268508040428595);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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