import { Details } from "./detailsUi-module.js";
function openArea() {
    document.querySelector(".areali").addEventListener("click", function () {
        document.querySelector(".mainpage").classList.replace("d-block", "d-none")
        document.querySelector(".areaPage").classList.remove("d-none")
        document.querySelector(".search").classList.add("d-none")
        document.querySelector(".contactpage").classList.add("d-none")
        document.querySelector(".detailsPage").classList.add("d-none")
        document.querySelector(".categorypage").classList.add("d-none")
        document.querySelector(".mealPage").classList.add("d-none")
        document.querySelector(".integredientPage").classList.add("d-none")
        $(".sidenav").css("left", "-270px")
        $(".closeopenbtn").removeClass("fa-solid fa-xmark")
        $(".closeopenbtn").addClass("fa-solid fa-bars")
    })
}
export async function getAreas(){
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api =await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let response=await api.json()
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    openArea()
    displayArea(response)
    startEvent()
    
}

function displayArea(data){
    let areas=""
    for (let i=0 ; i<data.meals.length ; i++){
        areas+=`<div class="col-md-3 areaItem" data-category="${data.meals[i].strArea}">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${data.meals[i].strArea}</h3>
                </div>`
    }
    document.querySelector(".areaPageData").innerHTML=areas
}
async function getMeailsByArea(area){
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    let response = await api.json();
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    displayMeailsByArea(response)
    startDetailsEvent()
}
function displayMeailsByArea(categoryMeal){
    let displayData = ""
        for (let i = 0; i <  20; i++) {
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
    let items = document.querySelectorAll(".areaItem")
    for (const item of items) {
        item.addEventListener("click", () => {
            let areaName=item.getAttribute("data-category")
            console.log(areaName);
            getMeailsByArea(areaName)
            document.querySelector(".mealPage").classList.remove("d-none")
            document.querySelector(".areaPage").classList.add("d-none")
        })
    }
}
function startDetailsEvent() {
    let items = document.querySelectorAll(".item")
    for (const item of items) {
        item.addEventListener("click", () => {
            let categoryId=item.getAttribute("data-id")
            new Details().getDetails(categoryId);
            document.querySelector(".detailsPage").classList.remove("d-none")
            document.querySelector(".mealPage").classList.add("d-none")
        })

    }
}