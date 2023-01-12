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
};

export function useTelegram() {
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

  const showScanQrPopup = (links_only: any) => {
    tg.showScanQrPopup(
      {
        text: links_only ? "with any link" : "for test purposes",
      },
      function (text: { toString: () => string }) {
        if (links_only) {
          var lower_text = text.toString().toLowerCase();
          if (
            lower_text.substr(0, 7) == "http://" ||
            lower_text.substr(0, 8) == "https://"
          ) {
            setTimeout(function () {
              tg.openLink(text);
            }, 50);
            return true;
          }
        } else {
          DemoApp.showAlert(text);
          return true;
        }
      }
    );
  };

  return {
    onClose,
    onToggleButton,
    showScanQrPopup,
    tg,
    DemoApp,
    user,
    initDataUnsafe,
  };
}
