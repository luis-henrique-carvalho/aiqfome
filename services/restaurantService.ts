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
