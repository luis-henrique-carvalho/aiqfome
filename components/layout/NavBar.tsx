import { MapPin, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

import SearchButton from "../SearchButton";

const NavBar = () => {
    return (
        <nav className="bg-primary flex flex-col items-center justify-between gap-4 p-4">
            <div className="flex w-full items-center justify-between text-white">
                <div>
                    <Image
                        aria-hidden
                        src="/logo.svg"
                        alt="Window icon"
                        width={32}
                        height={32}
                    />
                </div>
                <div className="flex w-4/6 items-center justify-between">
                    <div>
                        <MapPin />
                    </div>
                    <div>
                        {/* TODO: Verificar se é possivel pegar a localização */}
                        <p className="primary-foreground text-sm font-bold">
                            entregando em
                        </p>
                        <h2 className="text-base font-bold">
                            Rua Mandaguari, 198 {">"}
                        </h2>
                    </div>
                </div>
                <div>
                    <UserRound size={20} />
                </div>
            </div>
            <SearchButton />
        </nav>
    );
};

export default NavBar;
