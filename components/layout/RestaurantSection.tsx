import RestaurantCard from "@/components/layout/RestaurantCard";
import { Restaurant } from "@/types/Restaurant";

type RestaurantSectionProps = {
    title: string;
    restaurants: Restaurant[];
    emptyMessage: string;
};

export default function RestaurantSection({
    title,
    restaurants,
    emptyMessage,
}: RestaurantSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-primary text-xl font-extrabold">{title}</h2>
            {restaurants.length === 0 ? (
                <span className="text-gray-500">{emptyMessage}</span>
            ) : (
                restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        imageUrl={restaurant.imageUrl}
                        rating={restaurant.rating}
                        deliveryFee={restaurant.deliveryFee}
                    />
                ))
            )}
        </section>
    );
}
