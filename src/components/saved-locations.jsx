"use client";

import { useState } from "react";
import { MapPin, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SavedLocationsModal({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const locations = [
        { id: 1, name: "Home", address: "123 Main St, Anytown, USA" },
        { id: 2, name: "Work", address: "456 Business Ave, Cityville, USA" },
        { id: 3, name: "Gym", address: "789 Fitness Blvd, Healthytown, USA" },
        { id: 4, name: "Favorite Restaurant", address: "321 Gourmet Lane, Tastyville, USA" },
        { id: 5, name: "Park", address: "159 Green St, Natureville, USA" },
    ];
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLocations = locations.filter((location) => location.name.toLowerCase().includes(searchTerm.toLowerCase()) || location.address.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children ? children : <Button variant="outline">Saved Locations</Button>}</DialogTrigger>
            <DialogContent className="max-w-full h-full flex flex-col">
                <DialogHeader className="px-4 py-2 border-b">
                    <DialogTitle>Saved Locations</DialogTitle>
                </DialogHeader>
                <div className="flex-1 p-4">
                    <div className="max-w-2xl mx-auto flex flex-col gap-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search locations" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-8" />
                        </div>
                        <ScrollArea className="flex-1 border rounded-md h-[calc(100vh-200px)]">
                            {filteredLocations.map((location) => (
                                <div key={location.id} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-muted/50">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <h4 className="font-medium">{location.name}</h4>
                                            <p className="text-sm text-muted-foreground">{location.address}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => {
                                            // You can implement remove functionality here
                                        }}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </ScrollArea>
                        <Button className="w-full">Add New Location</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
