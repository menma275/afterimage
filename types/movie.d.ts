export type BasicData = {
    id: number;
    title: string;
}

export type ExpandedData = BasicData & {
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}