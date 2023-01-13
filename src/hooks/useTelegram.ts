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

showScanQrPopup:function (links_only: any, p: (text: { toString: () => string }) => boolean) {
    tg.showScanQrPopup(
        {
          text: links_only ? "with any link" : "for test purposes",
        },
        function (text: { toString: () => string }) {

          DemoApp.showAlert(text);
          return true;
          return true;

        }
    );
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



  return {
    onClose,
    onToggleButton,
    tg,
    DemoApp,
    user,
    initDataUnsafe,
  };
}
