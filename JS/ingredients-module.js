import { Details } from "./detailsUi-module.js";
function openIngredients() {
    document.querySelector(".ingredientsli").addEventListener("click", function () {
        document.querySelector(".mainpage").classList.replace("d-block", "d-none")
        document.querySelector(".integredientPage").classList.remove("d-none")
        document.querySelector(".search").classList.add("d-none")
        document.querySelector(".contactpage").classList.add("d-none")
        document.querySelector(".detailsPage").classList.add("d-none")
        document.querySelector(".categorypage").classList.add("d-none")
        document.querySelector(".mealPage").classList.add("d-none")
        document.querySelector(".areaPage").classList.add("d-none")
        $(".sidenav").css("left", "-270px")
        $(".closeopenbtn").removeClass("fa-solid fa-xmark")
        $(".closeopenbtn").addClass("fa-solid fa-bars")
    })
}
export async function getIngredients() {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let response = await api.json()
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    openIngredients()
    displayIngredients(response)
    startEvent()

}

function displayIngredients(data) {
    let ingredients = ""
    for (let i = 2; i < 22; i++) {
        ingredients += `<div class="col-md-3 intgreItem overflow-hidden" data-category="${data.meals[i].strIngredient}">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${data.meals[i].strIngredient}</h3>
                    <p>"${data.meals[i].strDescription.slice(0,100)}"</p>
                </div>`
    }
    document.querySelector(".integredientPageData").innerHTML = ingredients
}
async function getMeailsByIngre(integ) {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${integ}`);
    let response = await api.json();
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    displayMeailsByInteg(response)
    startDetailsEvent()
}
function displayMeailsByInteg(areaMeal) {
    let displayData = ""
    for (let i = 0; i < 20; i++) {
        displayData += `<div class="col-md-3 item" data-id="${areaMeal.meals[i].idMeal}">
                    <div class="inner position-relative overflow-hidden">
                        <img src="${areaMeal.meals[i].strMealThumb}" alt="mailimage" class="w-100 rounded-2">
                        <div class="content position-absolute top-0 bottom-0 start-0 end-0 text-black d-flex align-items-center ps-2 bg-white opacity-75 rounded-2">
                            <h3>${areaMeal.meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`
    }
    document.querySelector(".mealCategoryPage").innerHTML = displayData;
}
function startEvent() {
    let items = document.querySelectorAll(".intgreItem")
    for (const item of items) {
        item.addEventListener("click", () => {
            let intgreName = item.getAttribute("data-category")
            getMeailsByIngre(intgreName)
            document.querySelector(".mealPage").classList.remove("d-none")
            document.querySelector(".integredientPage").classList.add("d-none")
        })
    }
}
function startDetailsEvent() {
    let items = document.querySelectorAll(".item")
    for (const item of items) {
        item.addEventListener("click", () => {
            let categoryId = item.getAttribute("data-id")
            new Details().getDetails(categoryId);
            document.querySelector(".detailsPage").classList.remove("d-none")
            document.querySelector(".mealPage").classList.add("d-none")
        })

    }
}