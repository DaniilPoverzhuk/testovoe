import { IProduct } from "@/types";
import { AxiosError } from "axios";

export type Status = "loading" | "error" | "success" | null;

export type Error = AxiosError | null;

export interface InitialState {
  data: IProduct[];
  status: Status;
  error: Error;
}
