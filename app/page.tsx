import Image from "next/image";

import RestaurantCard from "@/components/layout/RestaurantCard";

type Restaurant = {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  deliveryFee: number;
  isOpen: boolean;
};

async function getRestaurants(): Promise<Restaurant[]> {
  const res = await fetch("http://localhost:3001/restaurants", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return res.json();
}

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <div>
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>

      <main className="flex flex-col gap-4 p-4">
        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">Abertos</h2>
          {restaurants
            .filter((r) => r.isOpen)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}
                deliveryFee={restaurant.deliveryFee}
              />
            ))}
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">Fechados</h2>
          {restaurants
            .filter((r) => !r.isOpen)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}
                deliveryFee={restaurant.deliveryFee}
              />
            ))}
        </section>
      </main>
    </div>
  );
}
