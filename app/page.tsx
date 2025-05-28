import Image from "next/image";

import RestaurantSection from "@/components/layout/RestaurantSection";
import { fetchRestaurants } from "@/services/restaurantService";

export default async function Home(props: {
  searchParams?: Promise<{
    name_like?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.name_like || '';

  const restaurants = await fetchRestaurants(query);
  const opened = restaurants.filter((r) => r.isOpen);
  const closed = restaurants.filter((r) => !r.isOpen);

  return (
    <div>
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>

      <main className="flex flex-col gap-4 p-4">
        <RestaurantSection
          title="Abertos"
          restaurants={opened}
          emptyMessage="Nenhum restaurante aberto no momento."
        />
        <RestaurantSection
          title="Fechados"
          restaurants={closed}
          emptyMessage="Nenhum restaurante fechado no momento."
        />
      </main>
    </div>
  );
}
