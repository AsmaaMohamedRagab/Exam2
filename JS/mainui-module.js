import { Details } from "./detailsUi-module.js";
export class Ui {
    constructor() { }
    displayMeals(data) {
        let displayData = ""
        for (let i = 0; i < data.meals.length; i++) {
            displayData += `<div class="col-md-3 item" data-id="${data.meals[i].idMeal}">
                    <div class="inner position-relative overflow-hidden">
                        <img src="${data.meals[i].strMealThumb}" alt="mailimage" class="w-100 rounded-2">
                        <div class="content position-absolute top-0 bottom-0 start-0 end-0 text-black d-flex align-items-center ps-2 bg-white opacity-75 rounded-2">
                            <h3>${data.meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`
        }
        document.querySelector(".mainPageContent").innerHTML = displayData;
    }
    async getMeals() {
        document.querySelector(".loading").classList.remove("d-none");
        document.querySelector(".sidenav").classList.add("d-none");
        let api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        let response = await api.json();
        console.log(response.meals[0].strMealThumb);
        document.querySelector(".loading").classList.add("d-none");
        document.querySelector(".sidenav").classList.remove("d-none");
        this.displayMeals(response);
        this.startEvent()
    }

    startEvent() {
        let items = document.querySelectorAll(".item")
        for (const item of items) {
            item.addEventListener("click", () => {
                let itemid = item.getAttribute("data-id");
                new Details().getDetails(itemid);
                document.querySelector(".detailsPage").classList.remove("d-none")
                document.querySelector(".mainpage").classList.add("d-none")
            })

        }
    }
}
