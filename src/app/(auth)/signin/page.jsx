"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/validators/authValidators";
export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = (formData) => {
        axios
            .post("http://localhost:4000/api/auth/signin", formData, { withCredentials: true })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <Input type="email" name="email" id="email" placeholder="name@company.com" {...register("email")} />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <Input type="password" name="password" id="password" placeholder="••••••••" {...register("password")} />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Not a user{" "}
                                <Link href="/signup" className="font-medium text-primary hover:underline dark:text-primary-500">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
