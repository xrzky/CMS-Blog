import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Tables from "@/components/Tables/Tables";

export const metadata: Metadata = {
  title: "Next.js BlogPage | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js BlogPage page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BlogPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Blog" />
      <div className="flex flex-col gap-10">
        <Tables/>
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;