"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExpandedData } from "@/types/movie";
import { motion } from "framer-motion";

export default function ShowTrends() {

    const [movies, setMovies] = useState<ExpandedData[] | undefined>();
    const getTopRatedMovies = async () => {
        try{
            const res = await fetch(`/api/get-trends`);
            const data = await res.json();
            console.log(data);
            const trendsData: ExpandedData[] = data.data.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                vote_average: item.vote_average,
                release_date: item.release_date
            }));
            setMovies(trendsData);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {movies && movies.map((movie) => (
                <li key={movie.id}>
                    <div className="w-full bg-gradient-to-b from-neutral-900 to-black grid grid-cols-12 gap-3 border border-neutral-800 rounded-xl p-3">
                        <motion.div
                            className="col-span-5 aspect-[2/3] rounded-md overflow-hidden relative border border-neutral-800"
                            whileHover={{ scale: 1.1, rotate: -5, x: -5, transition: { duration: 0.2 } }}
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                layout="fill"
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="col-span-7 flex flex-col h-full justify-between">
                            <div className="w-full flex gap-2 text-xs justify-end">
                                {movie.release_date && <span className="bg-neutral-800 rounded-full px-1.5 py-0.5">{movie.release_date.substring(0, 4)}</span>}
                                {movie.vote_average && <span className="bg-neutral-800 rounded-full px-1.5 py-0.5">{movie.vote_average.toFixed(1)}</span>}
                            </div>
                            <h1 className="text-md font-bold w-full whitespace-break-spaces">{movie.title}</h1>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}