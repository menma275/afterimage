export async function GET() {
    const url = `${process.env.BASE_URL}/trending/all/day`;
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