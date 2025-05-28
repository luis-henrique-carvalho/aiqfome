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

async function getRestaurants(query?: string): Promise<Restaurant[]> {
  const params = new URLSearchParams();

  if (query) {
    params.set("name_like", query);
  }

  console.log(params)

  console.log(params)

  const res = await fetch(
    `http://localhost:3001/restaurants?${params.toString()}`,
  );


  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return res.json();
}

export default async function Home(props: {
  searchParams?: Promise<{
    name_like?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.name_like || '';

  const restaurants = await getRestaurants(query);

  console.log(restaurants.length)

  return (
    <div>
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>

      <main className="flex flex-col gap-4 p-4">
        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">Abertos</h2>
          {restaurants.filter((r) => r.isOpen).length === 0 ? (
            <span className="text-gray-500">Nenhum restaurante aberto no momento.</span>
          ) : (
            restaurants
              .filter((r) => r.isOpen)
              .map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  name={restaurant.name}
                  imageUrl={restaurant.imageUrl}
                  rating={restaurant.rating}
                  deliveryFee={restaurant.deliveryFee}
                />
              ))
          )}
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">Fechados</h2>
          {restaurants.filter((r) => !r.isOpen).length === 0 ? (
            <span className="text-gray-500">Nenhum restaurante fechado no momento.</span>
          ) : (
            restaurants
              .filter((r) => !r.isOpen)
              .map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  name={restaurant.name}
                  imageUrl={restaurant.imageUrl}
                  rating={restaurant.rating}
                  deliveryFee={restaurant.deliveryFee}
                />
              ))
          )}
        </section>
      </main>
    </div>
  );
}
