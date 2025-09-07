const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories'
    fetch(url)
        .then(res => res.json())
        .then(plant => displayCategories(plant.categories))
}


const loadAllTrees=()=>{
    const url='https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then(res=>res.json())
    .then(allTress=>displayAllTrees(allTress.plants))
}


const displayAllTrees=(allTress)=>{
    console.log(allTress)
}




const displayCategories = (plants) => {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML="";
    categoriesContainer.innerHTML = `
        <button onclick="loadAllTrees()" class="w-4/5 cursor-pointer text-left my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2">All Trees</button>
        `
    plants.forEach(plant => {
        // console.log(plant.category_name)
        categoriesContainer.innerHTML += `
        <button class="w-4/5 cursor-pointer text-left my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2">${plant.category_name}</button>
        `
    })
}
loadCategories()