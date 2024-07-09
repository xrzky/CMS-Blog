import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface detailBlogPage {}

const detailBlogPage: FC<detailBlogPage> = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-2xl">
                <div className="relative mb-6 pb-3/4">
                    <Image
                        src={"/images/product/product-04.png"}
                        alt="profile cover"
                        className="object-cover w-full h-auto rounded-lg"
                        width={1057}
                        height={697}
                    />
                </div>
                <div className="flex flex-col text-black items-start justify-between mb-4 sm:flex-row sm:items-center ">
                    <h1 className="text-xl font-bold sm:text-2xl">API Design 101: From Basics to Best Practices</h1>
                    <span className="mt-2 text-black sm:mt-0">11/06/2024</span>
                </div>
                <p className="text-black mb-6 text-sm text-justify sm:text-base">
                    For example, to add a new product (Create), you would make a POST request to /api/products where the product details are sent in the request body. To retrieve products (Read), you need to fetch data with a GET request from /products. For updating product information (Update), we use PUT or PATCH requests to /products/:id, where id is the id of a product we need to update. Removing is similar to updating; we make a DELETE request to /products/:id where id is the product we need to remove (Delete).
                </p>
                <div className="flex flex-col items-end gap-4 mt-auto sm:flex-col sm:items-end sm:justify-end">
                    <Link href="/blog">
                        <button className="w-32 px-4 py-1 text-white bg-black border rounded-full ">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default detailBlogPage;