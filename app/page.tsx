import Image from "next/image";

import RestaurantCard from "@/components/layout/RestaurantCard";

export default function Home() {

  const restaurants = [
    {
      name: "Burger King",
      imageUrl: "/restaurants/burgerking.png",
      rating: 4.8,
      deliveryFee: 4.99,
    },
    {
      name: "Matsuri",
      imageUrl: "/restaurants/matsuri.png",
      rating: 4.6,
      deliveryFee: 6.5,
    },
    {
      name: "McDonald's",
      imageUrl: "/restaurants/mcdonalds.png",
      rating: 4.4,
      deliveryFee: 3.99,
    },
    {
      name: "Subway",
      imageUrl: "/restaurants/subway.png",
      rating: 4.2,
      deliveryFee: 2.99,
    }
  ];

  return (
    <div className="">
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>
      <main className="flex flex-col gap-4 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.name}
            name={restaurant.name}
            imageUrl={restaurant.imageUrl}
            rating={restaurant.rating}
            deliveryFee={restaurant.deliveryFee}
          />
        ))}

      </main>
      <footer className=""></footer>
    </div>
  );
}
