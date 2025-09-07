const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories'
    fetch(url)
        .then(res => res.json())
        .then(plant => displayCategories(plant.categories))
}


const loadAllTrees = () => {
    const url = 'https://openapi.programming-hero.com/api/plants'
    fetch(url)
        .then(res => res.json())
        .then(allTress => displayAllTrees(allTress.plants))
}


const displayAllTrees = (allTress) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    allTress.forEach(tree => {
        console.log(tree)
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="bg-white rounded-md space-y-3 max-h-lg shadow-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${tree.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p class="font-bold">${tree.name}</p>
                            <p class="line-clamp-3 text-justify">${tree.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${tree.category}</p>
                                <p>$500</p>
                            </div>
                            <button class="btn w-full rounded-3xl bg-[#15803d] text-white hover:scale-105  transition duration-500 ease-in-out">Add To Card</button>
                            </div>
                        </div>
        `
        cardContainer.appendChild(newDiv)
    })
}




const displayCategories = (plants) => {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    // categoriesContainer.innerHTML = `
    //     <button onclick="loadAllTrees()" class="w-4/5 cursor-pointer text-left my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2">All Trees</button>
    //     `
    plants.forEach(plant => {
        // console.log(plant.category_name)
        categoriesContainer.innerHTML += `
        <button class="w-4/5 cursor-pointer text-left my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2 transition duration-1000">${plant.category_name}</button>
        `
    })
}
loadCategories()
loadAllTrees()