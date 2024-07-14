sideNavAnimation()
import { Ui } from "./mainui-module.js"
new Ui().getMeals()

import { openContactPage  } from "./contact-module.js"
openContactPage()


import { Details } from "./detailsUi-module.js"
new Details().getDetails()

import { search } from "./search-module.js"
search()

import { getCategory } from "./caterory-module.js"
getCategory()

import { getAreas } from "./area-module.js"
getAreas()

import { getIngredients } from "./ingredients-module.js"
getIngredients()



function sideNavAnimation(){
    $(".closeopenbtn").click(function () {
        if ($(".sidenav").css("left") == "-270px") {
            $(".sidenav").css("left", "0")
            $(".backside ul li").each(function (index) {
                $(this).delay(50 * index).animate({ top: "0" }, 500)
            })
            $(".closeopenbtn").removeClass("fa-solid fa-bars")
            $(".closeopenbtn").addClass("fa-solid fa-xmark")
        } else {
            $(".sidenav").css("left", "-270px")
            $(".backside ul li").each(function (index) {
                $(this).delay(50 * index).animate({ top: "300" }, 500)
            })
            $(".closeopenbtn").removeClass("fa-solid fa-xmark")
            $(".closeopenbtn").addClass("fa-solid fa-bars")
        }
    })
}



