import { access } from "fs";

export async function GET() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const accessToken = process.env.TMDB_ACCESS_TOKEN || '';
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return Response.json({data});
}