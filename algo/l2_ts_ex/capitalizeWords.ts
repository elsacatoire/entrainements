export const  capitalizeWords = (text: string): string => {
    if (typeof text !== 'string' || text.length < 1) throw new Error ("Invalid text")
    const capitalizeText = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return capitalizeText
}