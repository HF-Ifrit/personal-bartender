export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const data = await request.json()
    const { ingredients } = data
    console.log(ingredients)
    const res = await (await fetch("http://thecocktaildb.com/api/json/v1/1/search.php?s=vodka")).json()
    console.log(res)
    return Response.json({ status: 200, message: "Hello from Next.js!"})
}
