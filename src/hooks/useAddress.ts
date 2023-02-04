import { useUnit } from "effector-react";
import { useEffect } from "react";
import { GlobalStore } from "../store";

export default function getAddress() {
  const { AddressStore } = GlobalStore();
  const address = useUnit(AddressStore.store);

  useEffect(() => {
    AddressStore.event();
  }, []);

  return address;
}
