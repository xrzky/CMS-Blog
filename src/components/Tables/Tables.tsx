"use client"

import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { articleData } from "@/config/listArticle";
import { truncateString } from "@/utils/truncateString";

const TableTwo = () => {
  const [ModalOpen, setModalOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setModalOpen(true)
  }
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex justify-between">
        <h4 className="text-2xl font-semibold text-black dark:text-white">
          List Article
        </h4>
        <Link
          href="/blog/add-post"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8  py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
        >
          Add Post
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-10 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Title</p>
        </div>
        <div className="col-span-4 hidden sm:flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Image</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>
      {articleData.map((article, key) => (
        <div
          className="grid grid-cols-6 border-t gap-10 border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center ">
            <p className="text-sm text-black dark:text-white">
              {article.title}
            </p>
          </div>
          <div className="col-span-4 sm:flex hidden items-center">
            <p className="text-sm text-black dark:text-white">
              {truncateString(article.description)}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={article.image_url}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center space-x-3.5">
            <button className="hover:text-primary">
              <Link href="/blog/detail-article/1">
                <Eye className="w-5 h-5" />
              </Link>
            </button>
            <button className="hover:text-primary">
              <Link href="/blog/edit-article/1">
                <Pencil className="w-4 h-4" />
              </Link>
            </button>
            <button className="hover:text-primary" onClick={() => handleDelete()}>
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {ModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Confirm Delete</h2>
            <p className="mt-4">Are you sure you want to delete this article?</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 bg-gray-300 rounded hover:bg-red-600"
                onClick={() => setModalOpen(false)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableTwo;