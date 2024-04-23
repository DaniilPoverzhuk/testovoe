import axios from "@/axios";
import { IProduct } from "@/types";

// export const getAll = async () =>
//   await axios("/product", {
//     params: {
//       _id: "drop-coin",
//     },
//   });

export const getAll = async (): Promise<IProduct[]> =>
  (await axios<IProduct[]>("/products")).data;
