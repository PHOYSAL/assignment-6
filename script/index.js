
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
        .then(allTress => {
            displayAllTrees(allTress.plants)
            // addToCart(allTress.plants)
        })
        
}

const removeActive = () => {
    const removeActiveBtn = document.querySelectorAll(".green-btn");
    // console.log(removeActiveBtn)
    removeActiveBtn.forEach(btn => btn.classList.remove("active"));

}

const loadCategoryTree = (id1, name) => {
    // console.log(id1,name)
    const url = `https://openapi.programming-hero.com/api/category/${id1}`;
    fetch(url)
        .then(res => res.json())
        .then(tree => {
            removeActive()
            const treeBtn = document.getElementById(`tree-btn-${id1}`);
            treeBtn.classList.add("active")
            // console.log(treeBtn)
            displayCategoryTree(tree.plants, name)
        })
}

const loadTreeDetails = (info) => {
    const url = `https://openapi.programming-hero.com/api/plant/${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTreeDetails(data.plants))
}
const displayTreeDetails = (details) => {
    // console.log(details)
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <div class="bg-white rounded-md space-y-3 max-h-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${details.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p  class="font-bold">${details.name}</p>
                            <p class="text-justify">${details.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${details.category}</p>
                                <p>৳<span>${details.price}</span></p>
                            </div>
                            </div>
                        </div>
    `;
    document.getElementById("my_modal_5").showModal()
}

const displayCategoryTree = (trees, name) => {
    // console.log(name)
    const cardContainer = document.getElementById("card-container1");
    const sameTreeContainer = document.getElementById("card-container2");
    cardContainer.classList.add("hidden");

    sameTreeContainer.innerHTML = "";
    trees.forEach(tree => {
        // console.log(tree.category)
        if (tree.category === name) {
            // console.log("same trees")
            const newTreeDiv = document.createElement("div")
            newTreeDiv.innerHTML = `
            <div id="cart-div" class="bg-white rounded-md space-y-3 max-h-lg shadow-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${tree.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p onclick="loadTreeDetails('${tree.id}')"  class="font-bold cursor-pointer">${tree.name}</p>
                            <p class="line-clamp-3 text-justify">${tree.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${tree.category}</p>
                                <p>৳<span>${tree.price}</span></p>
                            </div>
                            <button class="btn w-full rounded-3xl bg-[#15803d] text-white hover:scale-105  transition duration-500 ease-in-out add-cart-btn">Add To Cart</button>
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
        // console.log(tree.id)

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div id="cart-div" class="bg-white rounded-md space-y-3 max-h-lg shadow-lg">
                            <img class="h-48 w-full rounded-tl-md rounded-tr-md" src="${tree.image}" alt="">
                            <div class="p-4 space-y-3">
                            <p onclick="loadTreeDetails('${tree.id}')" class="font-bold cursor-pointer">${tree.name}</p>
                            <p class="line-clamp-3 text-justify">${tree.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="bg-[#DCFCE7] px-2 py-1 rounded-3xl text-[#15803d]">${tree.category}</p>
                                <p>৳<span>${tree.price}</span></p>
                            </div>
                            <button id="add-cart-${tree.id}" class="btn w-full rounded-3xl bg-[#15803d] text-white hover:scale-105  transition duration-500 ease-in-out add-cart-btn">Add To Cart</button>
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
        <button id="tree-btn-${plant.id}" onclick="loadCategoryTree('${plant.id}','${plant.category_name}')" class="w-4/5 cursor-pointer  my-2 hover:text-white hover:bg-[#15803d] hover:rounded-md hover:p-2 transition duration-1000 green-btn">${plant.category_name}</button>
        `
    })
}
loadCategories()
loadAllTrees()

//  const addToCart=(trees)=>{
//     const clickedId=document.getElementById("")
//     trees.find(tree=>{
      
//     })
     
//  }
const cardContainer = document.getElementById("card-container1");
cardContainer.addEventListener("click", function (event) {
    const yourCart = document.getElementById("your-cart");
    // console.log(event.target.parentNode.children[2].children[1].children[0].innerText)
    const treeName=event.target.parentNode.children[0].innerText
    // console.log(treeName)
    const treePrice=Number(event.target.parentNode.children[2].children[1].children[0].innerText)
    // console.log(treePrice)
    
    if (event.target.className.includes("add-cart-btn")) {
        const cartDiv = document.createElement("div");
        cartDiv.innerHTML = `
        <div class="bg-[#F0FDF4] p-2 rounded-md my-2">
                        <p>${treeName}</p>
                        <div class="flex justify-between items-center">
                            <p class="text-gray-400">${treePrice}</p>
                            <p class="cursor-pointer">❌</p>
                        </div>
                      
                    </div>
        `
        yourCart.appendChild(cartDiv)
    }
})



