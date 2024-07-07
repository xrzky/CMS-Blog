import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import vector1 from '@/../public/images/vector/vector1.svg';
import { LockKeyhole, Mail } from 'lucide-react';

interface signInPage { }

const signInPage: FC<signInPage> = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="flex flex-wrap items-center">
                <div className="hidden w-full xl:block xl:w-1/2 ">
                    <div className="px-26 py-17.5 text-center">
                        <span className="mt-15 inline-block">
                            <Image src={vector1} width={450} height={450} alt='vector1' />
                        </span>
                    </div>
                </div>

                <div className="w-full border border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2 rounded-lg shadow">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <span className="mb-1.5 block font-medium">Welcome to Blog CMS</span>
                        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                            Sign In
                        </h2>

                        <form>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email.."
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                    <span className="absolute right-4 top-4">
                                        <Mail />
                                    </span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                    <span className="absolute right-4 top-4">
                                        <LockKeyhole />
                                    </span>
                                </div>
                            </div>

                            <div className="mb-5">
                                <Link href='/'>
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                                    />
                                </Link>
                            </div>

                            <div className="mt-6 text-center">
                                <p>
                                    Don&apos;t have any account?{" "}
                                    <Link href="/auth/sign-up" className="text-primary">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signInPage;