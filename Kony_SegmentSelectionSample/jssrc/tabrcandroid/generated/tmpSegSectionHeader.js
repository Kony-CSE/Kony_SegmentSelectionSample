//Template File
function initializetmpSegSectionHeader() {
    var lblHeading = new kony.ui.Label({
        "id": "lblHeading",
        "top": "2dp",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblHeading"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    fcSecHeader = new kony.ui.FlexContainer({
        "id": "fcSecHeader",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    fcSecHeader.setDefaultUnit(kony.flex.DP)
    fcSecHeader.add(lblHeading);
};