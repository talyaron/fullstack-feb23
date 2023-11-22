import  { Product } from "../data/products";

export function getRandomPastelColor() {
    const letters = 'ABCDE'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

export const createArrColorByCategory = (products:Product[]) => {
    const categories = [...new Set(products.map(product => product.category))];
    const colorCatArr = categories.map(cat => ({
        category: cat,
        randomColor: getRandomPastelColor()
    }));
    return colorCatArr
}