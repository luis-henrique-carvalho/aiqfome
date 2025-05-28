import { MapPin, Search, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Input } from "@/components/ui/input";

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
            <h2 className="text-base font-bold">Rua Mandaguari, 198 {">"}</h2>
          </div>
        </div>
        <div>
          <UserRound size={20} />
        </div>
      </div>
      <div className="flex w-full items-center gap-2 rounded-md bg-white px-3">
        <Search className="text-primary-foreground h-5 w-5" />
        <Input
          placeholder="busque pela loja ou culinária"
          type="search"
          className="text-primary-foreground border-0 bg-white text-sm font-medium shadow-none focus:border-0 focus:ring-0"
        />
      </div>
    </nav>
  );
};

export default NavBar;
