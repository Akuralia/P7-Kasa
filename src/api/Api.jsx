// Loader function
export const lodgingLoader = async () => {
    const res = await fetch('http://localhost:4000/lodging')

    return res.json()
}
export const aboutLoader = async () => {
    const res = await fetch('http://localhost:4200/about')

    return res.json()
}