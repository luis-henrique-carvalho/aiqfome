import { Restaurant } from "@/types/Restaurant";

const API_BASE_URL = "http://localhost:3001";

export async function fetchRestaurants(query?: string): Promise<Restaurant[]> {
    const params = new URLSearchParams();

    if (query) {
        params.set("name_like", query);
    }

    const response = await fetch(
        `${API_BASE_URL}/restaurants?${params.toString()}`,
    );

    if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
    }

    return response.json();
}

export async function fetchRestaurantById(
    id: number | string,
): Promise<Restaurant> {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch restaurant");
    }

    return response.json();
}
