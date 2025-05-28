import { Heart, Share2 } from "lucide-react";
import Image from "next/image";

import { fetchRestaurantById } from "@/services/restaurantService";

interface RestaurantPageProps {
    params: { id: string };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
    const { id } = params;
    const restaurant = await fetchRestaurantById(id);

    return (
        <main className="p-4 flex flex-col gap-6">
            <header className="flex flex-col gap-4 border-b pb-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={restaurant.imageUrl}
                        alt={`Imagem do restaurante ${restaurant.name}`}
                        width={36}
                        height={36}
                        className="rounded-md border border-muted"
                    />
                    <h1 className="text-lg font-bold">{restaurant.name}</h1>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <button
                            className="flex items-center gap-1 text-primary"
                            aria-label="Compartilhar restaurante"
                        >
                            <Share2 size={20} />
                        </button>

                        <button
                            className="flex items-center gap-1 text-primary"
                            aria-label="Favoritar restaurante"
                        >
                            <Heart size={20} />
                        </button>
                    </div>

                    <button
                        className="text-sm text-primary-foreground"
                        aria-label="Mais informações sobre o restaurante"
                    >
                        Mais infos &gt;
                    </button>
                </div>
            </header>

            <section>
                <p className="text-muted-foreground">
                    {/* Aqui você pode adicionar mais informações do restaurante */}
                    Informações do restaurante...
                </p>
            </section>
        </main>
    );
}
