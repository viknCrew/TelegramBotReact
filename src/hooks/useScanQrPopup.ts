// @ts-ignore
const tg = window.Telegram.WebApp;

export function promptQrCodeScan(message?: string): Promise<string> {
  return new Promise((resolve, reject) => {

    tg.showScanQrPopup({ text: message }, (result:any) => {
      if (result) {
        resolve(result);
        tg.showAlert(result);
        return true
      } else {
        reject(new Error('QR code scan failed'))
        return true
      }
    })
  })
}

export function createPromptQrCodeScan(message?: string) {
  return () => promptQrCodeScan(message)
}