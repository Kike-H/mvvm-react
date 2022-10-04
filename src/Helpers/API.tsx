const URL = "https://rickandmortyapi.com/api/character/?page="

export async function  getData<T>(page: number): Promise<T> {
    const respose = await fetch(URL+page)
    return respose.json()
}