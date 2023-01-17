
export interface ITransation{
  blockHash:string,
  blockNumber:string,  
  gas:string,
  from:string,
  to:string,
  timeStamp:string,
  value:string,
  status:statusType
}

export enum statusTransation{
  receiving = "receiving",
  send = "send"
}
  
export  type statusType = statusTransation.receiving | statusTransation.send;