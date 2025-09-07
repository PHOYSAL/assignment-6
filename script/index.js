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

const loadCategoryTree=(id1,name)=>{
    console.log(id1,name)
    const url=`https://openapi.programming-hero.com/api/category/${id1}`;
    fetch(url)
    .then(res=>res.json())
    .then(tree=>displayCategoryTree(tree.plants,name))
}

const displayCategoryTree=(trees,name)=>{
    // console.log(name)
    const  cardContainer = document.getElementById("card-container1");
    const sameTreeContainer=document.getElementById("card-container2");
    cardContainer.classList.add("hidden");

    sameTreeContainer.innerHTML="";
    trees.forEach(tree=>{
        console.log(tree.category)
        if(tree.category===name){
            // console.log("same trees")
            const newTreeDiv=document.createElement("div")
            newTreeDiv.innerHTML=`
            <div class="bg-white rounded-md space-y-3 max-h-lg shadow-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${tree.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p class="font-bold">${tree.name}</p>
                            <p class="line-clamp-3 text-justify">${tree.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${tree.category}</p>
                                <p>৳<span>${tree.price}</span></p>
                            </div>
                            <button class="btn w-full rounded-3xl bg-[#15803d] text-white hover:scale-105  transition duration-500 ease-in-out">Add To Card</button>
                            </div>
                        </div>
            `
            sameTreeContainer.appendChild(newTreeDiv)
        }
    })
}


const displayAllTrees = (allTress) => {
    const cardContainer = document.getElementById("card-container1");
    cardContainer.innerHTML = "";
    allTress.forEach(tree => {
        // console.log(tree)
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="bg-white rounded-md space-y-3 max-h-lg shadow-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${tree.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p class="font-bold">${tree.name}</p>
                            <p class="line-clamp-3 text-justify">${tree.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${tree.category}</p>
                                <p>৳<span>${tree.price}</span></p>
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
        // console.log(plant)
        categoriesContainer.innerHTML += `
        <button onclick="loadCategoryTree('${plant.id}','${plant.category_name}')" class="w-4/5 cursor-pointer  my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2 transition duration-1000">${plant.category_name}</button>
        `
    })
}
loadCategories()
loadAllTrees()