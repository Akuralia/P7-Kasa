// Loader function
export const apiLoader = async () => {
    const res = await fetch('http://localhost:4000/api')

    return res.json()
}