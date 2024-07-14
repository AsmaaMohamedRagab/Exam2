import { Details } from "./detailsUi-module.js";
function openCategory() {
    document.querySelector(".categoryli").addEventListener("click", function () {
        document.querySelector(".mainpage").classList.replace("d-block", "d-none")
        document.querySelector(".categorypage").classList.remove("d-none")
        document.querySelector(".search").classList.add("d-none")
        document.querySelector(".contactpage").classList.add("d-none")
        document.querySelector(".detailsPage").classList.add("d-none")
        document.querySelector(".mealPage").classList.add("d-none")
        document.querySelector(".areaPage").classList.add("d-none")
        document.querySelector(".integredientPage").classList.add("d-none")
        $(".sidenav").css("left", "-270px")
        $(".closeopenbtn").removeClass("fa-solid fa-xmark")
        $(".closeopenbtn").addClass("fa-solid fa-bars")
    })
}
function displayCategory(categoryData) {
    let category = ""
    for (let i = 0; i < categoryData.categories.length; i++) {
        category += `<div class="categoryitem col-md-3 position-relative overflow-hidden" data-id=${categoryData.categories[i].idCategory} data-category=${categoryData.categories[i].strCategory}>
                    <img src="${categoryData.categories[i].strCategoryThumb}" alt="" class="w-100 rounded-2 mt-2 ">
                    <div class="categorylayer text-black text-center  bg-white opacity-75 px-3 pt-2 rounded-2 position-absolute top-0 start-0 end-0 bottom-0">
                        <h3>${categoryData.categories[i].strCategory}</h3>
                        <p>${categoryData.categories[i].strCategoryDescription.slice(0, 120)}</p>
                    </div>
                </div>`
    }
    document.querySelector(".category").innerHTML = category;
   
}

export async function getCategory() {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let response = await api.json()
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    openCategory()
    displayCategory(response)
    startEvent()
}

async function getMeailsByCategory(cat){
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    let response = await api.json();
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    displayMeailsByCategory(response)
    startDetailsEvent()
   
}
function displayMeailsByCategory(categoryMeal){
    let displayData = ""
        for (let i = 0; i < 20; i++) {
            displayData += `<div class="col-md-3 item" data-id="${categoryMeal.meals[i].idMeal}">
                    <div class="inner position-relative overflow-hidden">
                        <img src="${categoryMeal.meals[i].strMealThumb}" alt="mailimage" class="w-100 rounded-2">
                        <div class="content position-absolute top-0 bottom-0 start-0 end-0 text-black d-flex align-items-center ps-2 bg-white opacity-75 rounded-2">
                            <h3>${categoryMeal.meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`
        }
        document.querySelector(".mealCategoryPage").innerHTML = displayData;
}
function startEvent() {
    let items = document.querySelectorAll(".categoryitem")
    for (const item of items) {
        item.addEventListener("click", () => {
            let categoryName=item.getAttribute("data-category")
            getMeailsByCategory(categoryName)
            document.querySelector(".mealPage").classList.remove("d-none")
            document.querySelector(".categorypage").classList.add("d-none")
        })

    }
}
function startDetailsEvent() {
    let items = document.querySelectorAll(".item")
    for (const item of items) {
        item.addEventListener("click", () => {
            let categoryId=item.getAttribute("data-id")
            new Details().getDetails(categoryId);
            console.log("hi");
            document.querySelector(".detailsPage").classList.remove("d-none")
            document.querySelector(".mealPage").classList.add("d-none")
        })

    }
}
