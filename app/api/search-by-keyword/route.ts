export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('query') || '';
    const category = searchParams.get('category') || '';

    console.log("query", query);
    console.log("category", category);

    const url = `${process.env.BASE_URL}/search/${category}?query=${query}`;

    const accessToken = process.env.TMDB_ACCESS_TOKEN || '';
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    return Response.json({data});
}