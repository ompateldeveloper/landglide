"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SavedLocationsModal from "@/components/saved-locations";

export default function Navbar() {
    const navi = useRouter();
    return (
        <div className="flex items-center justify-between p-4 shadow">
            <div className="flex items-center justify-center gap-2">
                <Link href="/">
                    <div className="text-3xl">LangSlide</div>
                </Link>
                <div className="flex items-center justify-center gap-2">
                    {/* <Link href="/account">
                        <Button variant="link">Account</Button>
                    </Link> */}
                    <Link href="/settings">
                        <Button variant="link">Settings</Button>
                    </Link>
                    <SavedLocationsModal>
                        <Link href="/home">
                            <Button variant="link">Saved Locations</Button>
                        </Link>
                    </SavedLocationsModal>
                </div>
            </div>
            <div className="">
                <Sheet>
                    <SheetTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                        </SheetHeader>
                        {/* <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div> */}
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
