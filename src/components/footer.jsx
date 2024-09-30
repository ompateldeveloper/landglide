import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <div className="border-t-[1px] px-4 flex items-center justify-center">
            <div className="flex items-center justify-between ">
                <div className="px-2">LandSlide</div>
                <div className="">
                    <Link href="/account">
                        <Button variant="link" className="text-xs">Terms & Conditions</Button>
                    </Link>
                    <Link href="/settings">
                        <Button variant="link" className="text-xs">FAQ</Button>
                    </Link>
                    <Link href="/saved-locations">
                        <Button variant="link" className="text-xs">License</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
