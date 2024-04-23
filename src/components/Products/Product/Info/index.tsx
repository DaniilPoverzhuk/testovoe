import { IProduct } from "@/types";
import styles from "./index.module.scss";
import Delivery from "@/icons/Delivery";
import { useMemo } from "react";

const Info = ({
  name,
  price,
  deliveryFee,
}: Pick<IProduct, "name" | "price" | "deliveryFee">) => {
  const { isFreeDelivery, textDelivery } = useMemo(
    () =>
      !deliveryFee
        ? { isFreeDelivery: true, textDelivery: "CIS Free Delivery" }
        : {
            isFreeDelivery: false,
            textDelivery: `Delivery cost: ${deliveryFee} TON`,
          },
    [deliveryFee]
  );

  return (
    <div className={styles.root}>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>
        <img src="/images/product/ton.svg" alt="currency-ton" />
        <span>{price} ton</span>
      </p>
      <p className={styles.delivery}>
        <Delivery isActive={isFreeDelivery} activeColor="#EDA44E" />
        <span>{textDelivery}</span>
      </p>
    </div>
  );
};

export default Info;
