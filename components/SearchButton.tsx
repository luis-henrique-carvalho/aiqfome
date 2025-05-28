'use client';
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Input } from './ui/input';

export default function SearchButton() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('name_like', term);
        } else {
            params.delete('name_like');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <div className="flex w-full items-center gap-2 rounded-md bg-white px-3">
                <Search className="text-primary-foreground h-5 w-5" />
                <Input
                    placeholder="busque pela loja ou culinária"
                    type="search"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('name_like')?.toString()}
                    className="text-primary-foreground border-0 bg-white text-sm font-medium shadow-none focus:border-0 focus:ring-0"
                />
            </div>
        </div>
    );
}
