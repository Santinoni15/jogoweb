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
import { usePracticeModal } from "@/store/use-practice-modal copy";

export const PracticeModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = usePracticeModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient ){
        return null;
    }

    return (
        <Dialog open={isOpen } onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Praticar lição já concluida.
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Você pode praticar a lição para ganhar mais vidas! Fique tranquilo, nesta etapa você não perde vidas.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button 
                        variant="secondary" 
                        className="w-full" 
                        size="lg" 
                        onClick={close}
                        >
                            praticar
                        </Button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

};