import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ReactComponent as BikeIcon } from "@/public/icons/bike.svg";
import { ReactComponent as DeliveryIcon } from "@/public/icons/delivery.svg";
import { ReactComponent as StarIcon } from "@/public/icons/star.svg";

interface RestaurantCardProps {
    id: number;
    name: string;
    imageUrl: string;
    rating: number;
    deliveryFee: number;
}

const RestaurantCard = ({
    id,
    name,
    imageUrl,
    rating,
    deliveryFee,
}: RestaurantCardProps) => {
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
        <Link href={`/restaurant/${id}`} className="block">
            <div className="bg-muted flex h-[72px] gap-4 rounded-xl">
                <Image
                    src={imageUrl}
                    alt={name}
                    height={72}
                    width={72}
                    className="rounded-xl"
                />

                <div className="flex flex-col justify-center">
                    <h3 className="text-base font-bold">{name}</h3>
                    <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1 ${color}`}>
                            <Icon />
                            <p className="font-bold">{label}</p>
                        </div>
                        <div className="flex items-center">
                            <StarIcon />{" "}
                            <span className="text-sm font-bold text-gray-500">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
