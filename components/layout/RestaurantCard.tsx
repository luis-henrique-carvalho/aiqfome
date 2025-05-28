import Image from "next/image";
import React from "react";

import { ReactComponent as BikeIcon } from "@/public/icons/bike.svg";
import { ReactComponent as DeliveryIcon } from "@/public/icons/delivery.svg";
import { ReactComponent as StarIcon } from "@/public/icons/star.svg";

interface RestaurantCardProps {
    name: string;
    imageUrl: string;
    rating: number;
    deliveryFee: number;
}

const RestaurantCard = ({ name, imageUrl, rating, deliveryFee }: RestaurantCardProps) => {

    function getDeliveryInfo(deliveryFee: number) {
        const isFree = deliveryFee === 0;

        const Icon = isFree ? BikeIcon : DeliveryIcon;

        return {
            Icon,
            label: isFree ? "grátis" : `R$${deliveryFee.toFixed(2)}`,
            color: isFree ? "text-success" : "text-primary",
        };
    }

    const { Icon, label, color } = getDeliveryInfo(deliveryFee);

    return (
        <div className="flex h-[72px] gap-4 bg-muted rounded-xl">
            <Image
                src={imageUrl}
                alt={name}
                height={72}
                width={72}
                className="rounded-xl"
            />

            <div className="flex flex-col justify-center">
                <h3 className="text-base font-bold">{name}</h3>
                <div className="flex gap-2 items-center">
                    <div className={`flex items-center gap-1 ${color}`}>
                        <Icon />
                        <span>{label}</span>
                    </div>
                    <div className="flex items-center">
                        <StarIcon /> <p className="text-sm text-gray-500 ">{rating.toFixed(1)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
