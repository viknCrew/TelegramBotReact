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
