//Template File
function initializetmpHdrTest() {
    var lblTest = new kony.ui.Label({
        "id": "lblTest",
        "top": "9dp",
        "left": "43.38%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Ideal Vehicle",
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    fcHeader = new kony.ui.FlexContainer({
        "id": "fcHeader",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "sknFcBlack",
        "focusSkin": "sknFcBlack",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    fcHeader.setDefaultUnit(kony.flex.DP)
    fcHeader.add(lblTest);
};