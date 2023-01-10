import { IInitDataUnsafe, IUser } from "../types/telegram";

// @ts-ignore
const tg = window.Telegram.WebApp;
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
    user,
    initDataUnsafe,
  };
}
