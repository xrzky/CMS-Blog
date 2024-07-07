"use client"

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import EditorComponent from '@/components/Editor/editor';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Link from 'next/link';
import React, { FC } from 'react';

interface AddPostPage { }

const AddPostPage: FC<AddPostPage> = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Blog / Add-Post" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Create new article
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Description
                        </label>
                        <div className="w-full bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                            <EditorComponent />
                        </div>
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Image
                        </label>
                        <input
                            type="file"
                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                    </div>

                    <div className='inline-flex justify-between'>
                        <Link
                            href="/blog"
                            className=" rounded-md bg-primary px-8  py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
                        >
                            Cancel
                        </Link>
                        <Link
                            href="/blog"
                            className=" rounded-md bg-primary px-8  py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-8 "
                        >
                            Post
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AddPostPage;