import React from "react";
import { useParams } from "react-router-dom";
import { useGetsingleCategory } from "./service/query/useGetsingleCategory";
import { ProductCard } from "../../../components/card/productCard/productCard";


export const Category = () => {
    const { slug } = useParams()
    const { data, isLoading } = useGetsingleCategory(slug)
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {data?.map((item) => <ProductCard key={item.id} {...item} />)}
            </div>
        </div>
    )
}