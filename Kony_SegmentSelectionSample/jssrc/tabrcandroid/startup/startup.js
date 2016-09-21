//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Project0db97a9c6",
    appName: "idealvehicle",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.107.212",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    secureurl: "https://169.254.107.212:443/middleware/MWServlet",
    url: "http://169.254.107.212:80/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializetmpHdrTest();
    initializetmpSegQuestionLeft();
    initializetmpSegRightQues();
    initializetmpSegSectionHeader();
    frmIdealGlobals();
    frmtestGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIdeal.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;