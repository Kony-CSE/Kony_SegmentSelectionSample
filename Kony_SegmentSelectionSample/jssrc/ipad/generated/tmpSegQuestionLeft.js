//Template File
function initializetmpSegQuestionLeft() {
    var lblQuesLeft = new kony.ui.Label({
        "id": "lblQuesLeft",
        "top": "5dp",
        "left": "2%",
        "bottom": "5",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblQues2"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgIdentifier = new kony.ui.Image2({
        "id": "imgIdentifier",
        "top": "15dp",
        "left": "10%",
        "width": "8%",
        "height": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "imagedrag.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "skin": "slImage"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    fcLeftQuestion = new kony.ui.FlexContainer({
        "id": "fcLeftQuestion",
        "height": "75dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_HORIZONTAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    fcLeftQuestion.setDefaultUnit(kony.flex.DP)
    fcLeftQuestion.add(lblQuesLeft, imgIdentifier);
};