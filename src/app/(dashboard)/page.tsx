import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h2 className="text-title-md2 font-semibold text-black dark:text-white my-6">
          Welcome to dashboard
        </h2>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
