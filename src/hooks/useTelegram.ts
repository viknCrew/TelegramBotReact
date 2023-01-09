
// @ts-ignore
const tg = window.Telegram.WebApp;
console.log('tg',tg)
export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const initData = tg.initData || '';
    const initDataUnsafe = tg.initDataUnsafe || {};

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        initData,
        initDataUnsafe,
    }
}