import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import { balance, Web3, web3 } from "../store/coinStore";

export default function Send() {
  const { user, initDataUnsafe } = useTelegram();
  console.log("web3", web3);
  console.log("Web3", Web3);
  return (
    <div className="mx-8 grid lg:grid-cols-3  grid-cols-1">
      <div>
        <p>User</p>
        <div className="flex  justify-between">
          <p>First name :</p>
          {user.first_name}
        </div>
        <div className="flex  justify-between">
          <p>id :</p>
          {user.id}
        </div>
        <div className="flex  justify-between">
          <p>language_code :</p>
          {user.language_code}
        </div>
        <div className="flex  justify-between">
          <p>last_name</p>
          {user.last_name}
        </div>
        <div className="flex  justify-between">
          <p>username:</p>
          {user.username}
        </div>
      </div>
      <div>
        <p>initDataUnsafe</p>
        <div className="flex  justify-between">
          <p>auth_date :</p>
          {initDataUnsafe.auth_date}
        </div>
        <div className="flex  justify-between">
          <p>hash :</p>
          {initDataUnsafe.hash}
        </div>
        <div className="flex  justify-between">
          <p>query_id:</p>
          {initDataUnsafe.query_id}
        </div>
      </div>
      <div>
        <div className="flex  justify-between">
          <p>web3</p>
          {web3}
        </div>
        <div className="flex  justify-between">
          <p>Web3</p>
          {Web3}
        </div>
        <div className="flex  justify-between">
          <p>Balance</p>
          {balance}
        </div>
      </div>
    </div>
  );
}
