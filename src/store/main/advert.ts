import { createEvent, createStore } from "effector";
import { IAdvert } from "../../types/advert";

export const advert: IAdvert[] = [
  {
    image: "blob:https://web.telegram.org/2c8a64d2-3ea5-4b38-9589-1b7070c0ac71",
    nickname: "Tsigulsky Nikita",
    available: 234.442,
    limits: 15.3213,
    paymentMethod: "СБЕР",
    currency: "RUB",
    crypto: "TMY",
    numberAdventer: "#AS-0002343",
    payWithin: "15 min",
    comment: "string",
  },
  {
    image: "https://media.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif",
    nickname: "Gigachad Gigachadovich",
    available: 9999.9999,
    limits: 15.3213,
    paymentMethod: "Альфа Банк",
    currency: "RUB",
    crypto: "TMY",
    numberAdventer: "#AS-0002343",
    payWithin: "15 min",
    comment: "string",
  },
  {
    image:
      "https://w7.pngwing.com/pngs/504/252/png-transparent-pepe-the-frog-television-meme-meme-television-vertebrate-grass.png",
    nickname: "PEPE",
    available: 52.9999,
    limits: 1.3213,
    paymentMethod: "Альфа Банк",
    currency: "RUB",
    crypto: "TMY",
    numberAdventer: "#AS-0002343",
    payWithin: "15 min",
    comment: "string",
  },
];

const getAdvert= createEvent<IAdvert[]>();
const $advertStore = createStore<IAdvert[]>(advert);


export const AdvertStore = {
  store: $advertStore,
  event: getAdvert,
  loader: false,
};