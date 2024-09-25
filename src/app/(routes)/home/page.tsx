import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function page() {
    return (
        <div className="flex py-4 min-w-full ">
            <div className="info-search p-2">
                <Input />
                <Card className="w-full my-2">
                    <ScrollArea className="">
                        {Array(5)
                            .fill(undefined)
                            .map((data, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-muted/50">
                                    {index}
                                </div>
                            ))}
                    </ScrollArea>
                </Card>
            </div>
            <div className="min-h-full m-2 mr-0 p-2 rounded-md bg-zinc-100 flex-1  ">map</div>
        </div>
    );
}
