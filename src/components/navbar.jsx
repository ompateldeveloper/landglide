"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SavedLocationsModal from "@/components/saved-locations";
import NavbarSheet from '@/components/navbar-sheet'
export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 shadow">
            <div className="flex items-center justify-center gap-2">
                <Link href="/">
                    <div className="text-3xl">LandSlide</div>
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
                <NavbarSheet name="om" email="ohpstarobo543@gmail.com">
                    <Avatar>
                        <AvatarImage src="https://github.com/ompateldeveloper.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </NavbarSheet>
            </div>
        </div>
    );
}
