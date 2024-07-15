import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import FadeLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Layout({ children }: { children: ReactNode }) {
  const {isLoading} = useSelector((state: RootState) => state.loading)
  return (
    <>
      { isLoading && <FadeLoader color="#36d7b7" className="spinner-container"/> }
      <Navbar />
      <main>{children}</main>
    </>
  );
}
