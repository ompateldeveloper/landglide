import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@/components/ui/checkbox";
export default function Signup() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign up</h1>
                        <form>
                            <Button variant="outline" className="rounded-full w-full">
                                <FontAwesomeIcon icon={faGoogle} className="h-full px-2" />
                                <span>Continue with Google</span>
                            </Button>
                        </form>
                        <form>
                            <Button variant="outline" className="rounded-full w-full">
                                <FontAwesomeIcon icon={faApple} className="h-full px-2" />
                                <span>Continue with Apple</span>
                            </Button>
                        </form>
                        <div className="text-center text-bold ">or</div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <Input type="email" name="email" id="email" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <Input type="password" name="password" id="password" placeholder="••••••••" />
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <Checkbox
                                        id="terms"
                                        // aria-describedby="terms"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the{" "}
                                        <a className="font-medium text-primary hover:underline dark:text-primary-500" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link href="/signin" className="font-medium text-primary hover:underline dark:text-primary-500">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
