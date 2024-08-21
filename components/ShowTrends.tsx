"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Trend = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
}

export default function ShowTrends() {

    const [trends, setTrends] = useState<Trend[] | undefined>();
    const getTrends = async () => {
        try{
            const res = await fetch(`/api/get-trends`);
            const data = await res.json();
            const trendsData: Trend[] = data.data.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                vote_average: item.vote_average,
            }));
            setTrends(trendsData);
            console.log(trendsData);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getTrends();
    }, []);

    return (
        <div className="flex justify-center items-center w-full">
            <ul className="grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3 gap-4">
                {trends && (
                    trends.map((trend) => (
                        <li key={trend.id}>
                            <div>
                                <div className="w-full h-auto aspect-[2/3] rounded-md overflow-hidden relative">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                                        alt={trend.title}
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-lg font-bold">{trend.title}</h2>
                                <p>Rating: {trend.vote_average}</p>
                                <p className="font-sans font-light">{trend.overview}</p>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}