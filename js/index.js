document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu")


    fetch("http://localhost:3000/menu")
        .then(res => res.json())
        .then(menu => {


            menu.forEach(food => {
                const foodElement = createFoodElement(food)
                menu.appendChild(food)
            })
        })
    function foodElement(food) {
        const foodElement = document.createElement("div")
        foodElement.classList.add("food")

        const nameElement = document.createElement("h1")
        nameElement.textContent = food.name
        foodElement.appendChild(nameElement)

        const descriptionElement = document.createElement("p")
        descriptionElement.textContent = food.description
        foodElement.appendChild(descriptionElement)

        const priceElement = document.createElement("p")
        priceElement.textContent = `$${food.price}`
        foodElement.appendChild(priceElement)
        return foodElement
    }


})
