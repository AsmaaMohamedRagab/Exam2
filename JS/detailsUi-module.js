export class Details {
    displayDetails(detailsdata) {
        let displayDetail = "";
        for (let i = 0; i < 20; i++) {
            displayDetail += `<div class="col-md-4">
                    <div class="inner">
                        <img src="${detailsdata.meals[i].strMealThumb}" alt="" class="w-100 rounded-2">
                        <h2>${detailsdata.meals[i].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>${detailsdata.meals[i].strInstructions}</p>
                    <h3><span>Area : </span>${detailsdata.meals[i].strArea}</h3>
                    <h3><span>Category : </span>${detailsdata.meals[i].strCategory}</h3>
                    <h3>Recipes : </h3>
                    <ul class="recipeslist list-unstyled d-flex flex-wrap g-3">
                        <li>${detailsdata.meals[i].strMeasure1}+${detailsdata.meals[i].strIngredient1}</li>
                        <li>${detailsdata.meals[i].strMeasure2}+${detailsdata.meals[i].strIngredient2}</li>
                        <li>${detailsdata.meals[i].strMeasure3}+${detailsdata.meals[i].strIngredient3}</li>
                        <li>${detailsdata.meals[i].strMeasure4}+${detailsdata.meals[i].strIngredient4}</li>
                        <li>${detailsdata.meals[i].strMeasure5}+${detailsdata.meals[i].strIngredient5}</li>
                        <li>${detailsdata.meals[i].strMeasure6}+${detailsdata.meals[i].strIngredient6}</li>
                        <li>${detailsdata.meals[i].strMeasure7}+${detailsdata.meals[i].strIngredient7}</li>
                        <li>${detailsdata.meals[i].strMeasure8}+${detailsdata.meals[i].strIngredient8}</li>
                        <li>${detailsdata.meals[i].strMeasure9}+${detailsdata.meals[i].strIngredient9}</li>
                    </ul>
                    <h3>Tags : </h3>
                    <ul class="tag list-unstyled my-4 ms-2">
                        <li>${detailsdata.meals[i].strTags}</li>
                    </ul>
                    <a class="text-decoration-none text-white bg-success py-2 px-3 rounded-2" href="${detailsdata.meals[i].strSource}" target="_blank">Source</a>
                    <a class="text-decoration-none text-white bg-danger py-2 px-3 rounded-2" href="${detailsdata.meals[i].strYoutube}" target="_blank">Youtube</a>
                </div>`
            document.querySelector(".details").innerHTML = displayDetail;
        }
    }
    async getDetails(id) {
        document.querySelector(".loading").classList.remove("d-none");
        document.querySelector(".sidenav").classList.add("d-none");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let reponse = await api.json()
        document.querySelector(".loading").classList.add("d-none");
        document.querySelector(".sidenav").classList.remove("d-none");
        this.displayDetails(reponse)
    }


}