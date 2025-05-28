import Image from "next/image";

import RestaurantCard from "@/components/layout/RestaurantCard";

export default function Home() {
  const restaurants = [
    {
      id: 1,
      name: "Burger King - Colombo",
      imageUrl: "/restaurants/burgerking.png",
      rating: 4.8,
      deliveryFee: 4.99,
      isOpen: true,
    },
    {
      id: 2,
      name: "Matsuri - Avenida Paulista",
      imageUrl: "/restaurants/matsuri.png",
      rating: 4.6,
      deliveryFee: 6.5,
      isOpen: false,
    },
    {
      id: 3,
      name: "McDonald's - Colombo",
      imageUrl: "/restaurants/mcdonalds.png",
      rating: 4.4,
      deliveryFee: 0,
      isOpen: true,
    },
    {
      id: 4,
      name: "Subway - Avenida Paulista",
      imageUrl: "/restaurants/subway.png",
      rating: 4.2,
      deliveryFee: 2.99,
      isOpen: false,
    },
    {
      id: 5,
      name: "Burger King - Colombo",
      imageUrl: "/restaurants/burgerking.png",
      rating: 4.8,
      deliveryFee: 4.99,
      isOpen: true,
    },
    {
      id: 6,
      name: "Matsuri - Paulista",
      imageUrl: "/restaurants/matsuri.png",
      rating: 4.6,
      deliveryFee: 6.5,
      isOpen: false,
    },
    {
      id: 7,
      name: "McDonald's - Avenida Paulista",
      imageUrl: "/restaurants/mcdonalds.png",
      rating: 4.4,
      deliveryFee: 0,
      isOpen: true,
    },
    {
      id: 8,
      name: "Subway - Colombo",
      imageUrl: "/restaurants/subway.png",
      rating: 4.2,
      deliveryFee: 2.99,
      isOpen: false,
    },
  ];

  return (
    <div className="">
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>
      <main className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">
            Abertos
          </h2>
          {restaurants
            .filter((restaurant) => restaurant.isOpen)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}
                deliveryFee={restaurant.deliveryFee}
              />
            ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-primary text-xl font-extrabold">
            Fechados
          </h2>
          {restaurants
            .filter((restaurant) => !restaurant.isOpen)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.name}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}
                deliveryFee={restaurant.deliveryFee}
              />
            ))}
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
