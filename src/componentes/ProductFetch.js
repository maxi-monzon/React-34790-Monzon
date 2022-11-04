import Producto from "./Producto"

export const productsFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Producto)
        }, 2000)
    })
}
