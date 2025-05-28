import { BadgeCheck, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface RestaurantCardProps {
    name: string;
    imageUrl: string;
    rating: number;
    deliveryFee: number;
}

const RestaurantCard = ({ name, imageUrl, rating, deliveryFee }: RestaurantCardProps) => {

    function getDeliveryInfo(deliveryFee: number) {
        const isFree = deliveryFee === 0;

        return {
            icon: isFree ? BadgeCheck : Truck,
            label: isFree ? "Grátis" : `R$ ${deliveryFee.toFixed(2)}`,
            color: isFree ? "text-green-600" : "text-primary",
        };
    }

    const deliveryInfo = getDeliveryInfo(deliveryFee);

    return (
        <div className="flex h-[72px] gap-4 bg-muted rounded-xl">
            <Image
                src={imageUrl}
                alt={name}
                height={72}
                width={72}
            />
            <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="flex gap-2 items-center">
                    <div className={`flex items-center gap-1 ${deliveryInfo.color}`}>
                        <deliveryInfo.icon className="w-4 h-4" />
                        <span>{deliveryInfo.label}</span>
                    </div>
                    <p className="text-sm text-gray-500">Avaliação: {rating.toFixed(1)}</p>
                </div>

            </div>
        </div>
    );
};

export default RestaurantCard;
