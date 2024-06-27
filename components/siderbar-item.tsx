"use client"; //negocio do next, só libera para o cliente

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

 

type Props = {
    label: string;
    iconScr: string;
    href: string;
};

export const SidebarItem = ({
    label,
    iconScr,
    href,
}: Props) => {
    const pathname = usePathname( );
    const active = pathname === href;

    return (
        <Button
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href}>
                <Image
                    src={iconScr}
                    alt={label}
                    className="mr-5"
                    height={32}
                    width={32}
                />
                {label}
            </Link>
        </Button>
    );
};