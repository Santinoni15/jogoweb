"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useHeartsModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient ){
        return null;
    }

    return (
        <Dialog open={isOpen } onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Você esta sem vidas!
                    </DialogTitle>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button 
                        variant="secondaryOutline" 
                        className="w-full" 
                        size="lg" 
                        onClick={close}
                        >
                            Sair
                        </Button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

};