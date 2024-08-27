"use client";

import { useState } from "react";
import { BasicData } from "@/types/movie";
import { BiSearch } from "react-icons/bi";

export default function ShowSearchResult() {

    const [movies, setMovies] = useState<BasicData[] | undefined>();
    const [tvs, setTvs] = useState<BasicData[] | undefined>();
    const [persons, setPersons] = useState<BasicData[] | undefined>();
    const lists = [movies, tvs, persons];

    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        await getDatas('movie');
        await getDatas('tv');
        await getDatas('person');
    }

    const getDatas = async (category: string) => {
        try{
            const res = await fetch(`/api/search-by-keyword?query=${searchQuery}&category=${category}`);
            const data = await res.json();
            const movieData: BasicData[] = data.data.results.map((item: any) => ({
                id: item.id,
                title: category === 'movie' ? item.original_title : item.original_name,
            }));
            if(category === 'movie'){
                setMovies(movieData);
                // original_title
            }else if(category === 'tv'){
                setTvs(movieData);
                // original_name
            }else if(category === 'person'){
                setPersons(movieData);
                // original_name
            }
            console.log(movieData);
        }catch(error){
            console.error(error);
        }
    }


    return (
        <div className="flex flex-col justify-center items-start w-full mb-6">
            <div className="w-full relative">
                <input
                    type="text"
                    value={searchQuery}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full p-2 px-3 bg-neutral-800 rounded-full outline-none"
                />
                <button onClick={handleSearch} className="text-lg absolute p-2 right-2 rounded-full top-1/2 -translate-y-1/2">
                    <BiSearch />
                </button>
            </div>
            {lists.map((list, index) => (
                list && list.length > 0 && (
                    <>
                    <h1 className="text-lg font-bold mt-4">{index === 0 ? 'Movies' : index === 1 ? 'TV Shows' : 'People'}</h1>
                    <ul className="flex flex-wrap gap-3">
                        {list.map((item) => (
                            <li key={item.id}>
                                <h2 className="text-normal bg-neutral-800 py-1 px-3 rounded-full">{item.title}</h2>
                            </li>
                        ))}
                    </ul>
                    </>
                )
            ))}
        </div>
    )
}