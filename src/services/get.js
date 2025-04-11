export async function get() {
    try {
        let respuesta = await fetch('https://some-example-foods.glitch.me/randomFoods')
        let datos = await respuesta.json()
        return datos
    } catch (error) {
        console.log(error)
    }
}