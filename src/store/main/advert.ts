import { createEvent, createStore } from "effector";
import { IAdvert } from "../../types/advert";

export const advert: IAdvert[] = [
  {
    image: "https://sun7-3.userapi.com/impg/CxRej8uPEoxhCkO7FVn1-dJa7bvr76Vh9iRX3Q/WILUyuoWU_g.jpg?size=810x1080&quality=96&sign=a9f3aa5ff4d00182f347b50619655dc7&c_uniq_tag=ZeBOA6fsRFNYonpd1xIqTY3nga9J8L6GM1HBgWsXiFc&type=album",
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