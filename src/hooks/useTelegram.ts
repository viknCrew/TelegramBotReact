import { IInitDataUnsafe, IUser } from "../types/telegram";

// @ts-ignore
const tg = window.Telegram.WebApp;

const DemoApp = {
  initData: tg.initData || "",
  initDataUnsafe: tg.initDataUnsafe || {},
  MainButton: tg.MainButton,

  showAlert: function (message: any) {
    tg.showAlert(message);
  },

  showScanQrPopup: function (
    links_only: any,
    p: (text: { toString: () => string }) => boolean
  ) {
    tg.showScanQrPopup(
      {
        text: links_only ? "with any link" : "for test purposes",
      },
      function (text: { toString: () => string }) {
        DemoApp.showAlert(text);
        return true;
        
      }
    );
  },
};

export function useTelegram() {
  // @ts-ignore
  tg.showScanQrPopup = function (params, callback) {
    // @ts-ignore
    if (!versionAtLeast("6.4")) {
      console.error(
        "[Telegram.WebApp] Method showScanQrPopup is not supported in version " +
          tg.webAppVersion
      );
      throw Error("WebAppMethodUnsupported");
    }
    // @ts-ignore
    if (webAppScanQrPopupOpened) {
      console.error("[Telegram.WebApp] Popup is already opened");
      throw Error("WebAppScanQrPopupOpened");
    }
    var text = "";
    var popup_params = {};
    if (typeof params.text !== "undefined") {
      // @ts-ignore
      text = strTrim(params.text);
      if (text.length > 64) {
        console.error("[Telegram.WebApp] Scan QR popup text is too long", text);
        throw Error("WebAppScanQrPopupParamInvalid");
      }
      if (text.length > 0) {
        // @ts-ignore
        popup_params.text = text;
      }
    }
    // @ts-ignore
    webAppScanQrPopupOpened = {
      callback: callback,
    };
    tg.postEvent("web_app_open_scan_qr_popup", false, popup_params);
  };
  tg.closeScanQrPopup = function () {
    // @ts-ignore
    if (!versionAtLeast("6.4")) {
      // @ts-ignore
      console.error(
        "[Telegram.WebApp] Method closeScanQrPopup is not supported in version " +
          tg.webAppVersion
      );
      throw Error("WebAppMethodUnsupported");
    }
    // @ts-ignore
    webAppScanQrPopupOpened = false;
    tg.postEvent("web_app_close_scan_qr_popup", false);
  };

  var webAppScanQrPopupOpened = false;
  // @ts-ignore
  function onQrTextReceived(eventType, eventData) {
    if (webAppScanQrPopupOpened) {
      var popupData: any = webAppScanQrPopupOpened;
      var data = null;
      if (typeof eventData.data !== "undefined") {
        data = eventData.data;
      }
      if (popupData.callback) {
        if (popupData.callback(data)) {
          webAppScanQrPopupOpened = false;
          tg.postEvent("web_app_close_scan_qr_popup", false);
        }
      }
      // @ts-ignore
      receiveWebViewEvent("qrTextReceived", {
        data: data,
      });
      tg.showAlert(data);
    }
  }
  // @ts-ignore
  function onScanQrPopupClosed(eventType, eventData) {
    webAppScanQrPopupOpened = false;
  }

  const onClose = () => {
    tg.close();
  };

  const user: IUser = tg.initDataUnsafe?.user;
  const initDataUnsafe: IInitDataUnsafe = tg.initDataUnsafe;

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    DemoApp,
    onQrTextReceived,
    user,
    initDataUnsafe,
  };
}
