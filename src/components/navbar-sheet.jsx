'use client'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, MailIcon, Settings, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { instance } from "@/lib/axios";
import { useRouter } from "next/navigation";


export default function NavbarSheet({ children, name, email }) {
    const router = useRouter()
    const logout = () =>{
        instance.post('/api/auth/logout')
        .then(()=>{
            router.push('/signin')
            localStorage.clear()
        })
    }
    return (
        <Sheet> 
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Profile Information</SheetTitle>
                    <SheetDescription>Your personal information is displayed below.</SheetDescription>
                </SheetHeader>
                <div className="flex justify-center mt-6">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src="https://github.com/ompateldeveloper.png" alt={name} />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="flex items-center space-x-4">
                        <UserIcon className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium leading-none">Name</p>
                            <p className="text-sm text-muted-foreground">{name}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MailIcon className="w-5 h-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium leading-none">Email</p>
                            <p className="text-sm text-muted-foreground">{email}</p>
                        </div>
                    </div>
                </div>
                <SheetFooter className="mt-6">
                    <Link href="/settings">
                        <SheetClose>
                            <Button className="w-full">
                                <Settings className="mr-2 h-4 w-4" />
                                Edit Profile
                            </Button>
                        </SheetClose>
                    </Link>
                    <SheetClose>
                        <Button variant="destructive" className="w-full"  onClick={logout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
