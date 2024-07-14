import { Details } from "./detailsUi-module.js";
let searchbyname = document.querySelector(".searchbyname")
let searchbyfirstletter = document.querySelector(".searchbyfirstletter")
export function search() {
    document.querySelector(".searchli").addEventListener("click", function () {
        document.querySelector(".mainpage").classList.replace("d-block", "d-none")
        document.querySelector(".search").classList.remove("d-none")
        document.querySelector(".contactpage").classList.add("d-none")
        document.querySelector(".detailsPage").classList.add("d-none")
        document.querySelector(".categorypage").classList.add("d-none")
        document.querySelector(".mealPage").classList.add("d-none")
        document.querySelector(".areaPage").classList.add("d-none")
        document.querySelector(".integredientPage").classList.add("d-none")        
        $(".sidenav").css("left", "-270px")
        $(".closeopenbtn").removeClass("fa-solid fa-xmark")
        $(".closeopenbtn").addClass("fa-solid fa-bars")
        searchbyname.addEventListener("input", function () {
            getData(searchbyname.value);
        })
        searchbyfirstletter.addEventListener("input", function () {
            getDataFL(searchbyfirstletter.value)
        })
    })
}
async function getData(value) {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let response = await api.json()
    console.log(response);
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    displayDataSearch(response)
    startEvent()
}

function displayDataSearch(data) {
    let displayData = ""
    for (let i = 0; i < 20; i++) {
        displayData += `<div class="col-md-3 item" data-id="${data.meals[i].idMeal}">
                    <div class="inner position-relative overflow-hidden">
                        <img src="${data.meals[i].strMealThumb}" alt="mailimage" class="w-100 rounded-2">
                        <div class="content position-absolute top-0 bottom-0 start-0 end-0 text-black d-flex align-items-center ps-2 bg-white opacity-75 rounded-2">
                            <h3>${data.meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`
    }
    document.querySelector(".searchResaltContent").innerHTML = displayData;
}
function startEvent() {
    let items = document.querySelectorAll(".item")
    for (const item of items) {
        item.addEventListener("click", () => {
            let itemid = item.getAttribute("data-id");
            new Details().getDetails(itemid);
            document.querySelector(".detailsPage").classList.remove("d-none")
            document.querySelector(".search").classList.add("d-none")
        })

    }
}

async function getDataFL(letter) {
    document.querySelector(".loading").classList.remove("d-none");
    document.querySelector(".sidenav").classList.add("d-none");
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let response = await api.json()
    console.log(response);
    document.querySelector(".loading").classList.add("d-none");
    document.querySelector(".sidenav").classList.remove("d-none");
    displayDataSearch(response)
    startEvent()
}


