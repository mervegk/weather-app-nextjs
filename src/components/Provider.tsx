"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/Redux/store";

export default function ReduxProvider({ children }: ChildrenProp) {
  return <Provider store={store}>{children}</Provider>;
}
