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
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useExitModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient ){
        return null;
    }

    return (
        <Dialog open={isOpen } onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Espere!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Você irá perder seu progresso. Tem certeza?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button 
                        variant="primary" 
                        className="w-full" 
                        size="lg" 
                        onClick={close}
                        >
                            Continue aprendendo
                        </Button>
                        <Button 
                        variant="dangerOutline" 
                        className="w-full" 
                        size="lg" 
                        onClick={() => {
                            close();
                            router.push("/learn");
                        }}
                        >
                            Sair
                        </Button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

};