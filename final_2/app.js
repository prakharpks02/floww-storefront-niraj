
let display = document.querySelector(".verified")

let collapse = document.querySelector(".option-list-mob")

let openlinks = document.querySelector(".nav-toggle")


let close1 = document.querySelector(".fa-times")

// loader

let loader = document.querySelector(".loader")

let elements = document.getElementsByClassName("section");

let timeout;

for (i = 0; i < elements.length; i++) {
    elements[i].classList.add('hide');
    }



timeout = setTimeout(loaderFunc, 2000);


function loaderFunc() {
  loader.classList.add("hide")
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hide');
    }
}

// end of loader

collapse.classList.add("hide");

openlinks.addEventListener("click", function() {
    collapse.classList.remove("hide")
})

close1.addEventListener('click', function() {
   close1.parentElement.parentElement.classList.add("hide");
})



const cpy_name = document.querySelector(".name")
const ctt_no = document.querySelector(".number_foot")
const start_rate = document.querySelector(".price")
const headline_1 = document.querySelector(".h1")
const headline_2 = document.querySelector(".h2")
const loc = document.querySelector(".location")
const rating = document.querySelector(".rating")
const btns_popular = document.querySelector(".btns")
const fd_yr = document.querySelector(".found_yr")
const fleet_sz = document.querySelector(".fl_size")
const service_container = document.querySelector(".container2")
const base_chrge = document.querySelector(".base_charge_per")
const per_km_chrge = document.querySelector(".per_km_charge_order")
const per_kg_chrge = document.querySelector(".per_kg_charge_order")
const base_chrge_rental = document.querySelector(".base_charge_rental")
const per_hr_chrge_rental = document.querySelector(".per_hr_charge_rental")
const per_km_chrge_rental = document.querySelector(".per_km_charge_rental")
const addr = document.querySelector(".address_foot")


const cpy_name_mob = document.querySelector(".name-mob")
const ctt_no_mob = document.querySelector(".number_foot_mob")
const start_rate_mob = document.querySelector(".cost_mob")
const btns_popular_mob = document.querySelector(".btns_mob")
const headline_1_mob = document.querySelector(".h1_mob")
const headline_2_mob = document.querySelector(".h2_mob")
const loc_mob = document.querySelector(".location_mob")
const rating_mob = document.querySelector(".rating_mob")
const fd_yr_mob = document.querySelector(".found_yr_mob")
const fleet_sz_mob = document.querySelector(".fl_size_mob")
const service_container_mob = document.querySelector(".container2_mob")
const base_chrge_mob = document.querySelector(".base_charge_per_mob")
const per_km_chrge_mob = document.querySelector(".per_km_charge_order_mob")
const per_kg_chrge_mob = document.querySelector(".per_kg_charge_order_mob")
const base_chrge_rental_mob = document.querySelector(".base_charge_rental_mob")
const per_hr_chrge_rental_mob = document.querySelector(".per_hr_charge_rental_mob")
const per_km_chrge_rental_mob = document.querySelector(".per_km_charge_rental_mob")


let testVariable = {
    "vendor_id": "ven1029921",
    "company_name": "TMoS",
    "contact_no": "9769200565",
    "delivery_starting_from": 40,
    "popular_tags": ['otp', 'same_day'],
    "headline_text_1": "Your Delivery Partner",
    "headline_text_2": "ALWAYS READY <br> TO SERVE",
    "logo_url": " ",
    "fleet_type": "bike",
    "location": "mumbai",
    "ratings": 4.7,
    "founded_year": "2016",
    "fleet_size": "1-10",
    "services": ['otp', 'secured', '30_min', 'sanitized'],
    "base_charge_per_order": 25,
    "per_km_charge_order": 8,
    "per_kg_charge_order": 8,
    "base_charge_rental": 350,
    "per_km_charge_rental": 15,
    "per_hr_charge_rental": 60,
    "address": "Marol pipeline Andheri",
    "primary_color": "#03fffe",
    "secondary_color": "#1e92fb",
    "tertiary_color": "#a3a3a38f",
}

let primary_clr = testVariable.primary_color
let secondary_clr = testVariable.secondary_color
let tertiary_clr = testVariable.tertiary_color


document.documentElement.style.setProperty('--primary', primary_clr);
document.documentElement.style.setProperty('--secondary', secondary_clr);
document.documentElement.style.setProperty('--tertiary', tertiary_clr);


function myfunc(){
    
    // desktop
    cpy_name.innerHTML = testVariable.company_name
    ctt_no.innerHTML = testVariable.contact_no
    start_rate.innerHTML = testVariable.delivery_starting_from
    // for (let j = 0; j < testVariable.popular_tags.length; j++){
    //     let popular_temp = testVariable.popular_tags[i]
    //     let popular_temp2 = document.createElement(button)
    //     button.innerHTML = 
    //     `
    //     <button type="button" class="features">${tagNames.popular_temp}</button>          
    //     `
    //     btns_popular.appendChild(popular_temp2)
    // }

    headline_1.innerHTML = testVariable.headline_text_1
    headline_2.innerHTML = testVariable.headline_text_2

    loc.innerHTML = testVariable.location
    rating.innerHTML = testVariable.ratings
    fd_yr.innerHTML = testVariable.founded_year
    fleet_sz.innerHTML = testVariable.fleet_size

    for (let i = 0; i < testVariable.services.length; i++) {
        console.log(testVariable.services[i]);
        console.log(serviceTags.findIndex(x => x.id === `${testVariable.services[i]}`))
        // let service_temp = document.createElement('div')
        // service_temp.innerHTML = 
        // `
        // <div class="icon_outline">
        //     <i class="fa fa-3x ${serviceTags.iconClass} icon_1"></i>
        // </div>
        // <h2 class="service_title">${serviceTags.name}</h2>
        // <p class="description">${serviceTags.description}</p>
        // `
        // service_container.appendChild(service_temp)
    }

    base_chrge.innerHTML = testVariable.base_charge_per_order
    per_km_chrge.innerHTML = testVariable.per_kg_charge_order
    per_kg_chrge.innerHTML = testVariable.per_kg_charge_order
    base_chrge_rental.innerHTML = testVariable.base_charge_rental
    per_hr_chrge_rental.innerHTML = testVariable.per_hr_charge_rental
    per_km_chrge_rental.innerHTML = testVariable.per_km_charge_rental
    addr.innerHTML = testVariable.address
    

    // mobile
    cpy_name_mob.innerHTML = testVariable.company_name
    ctt_no_mob.innerHTML = testVariable.contact_no
    start_rate_mob.innerHTML = testVariable.delivery_starting_from

    //  for (let j = 0; j < testVariable.popular_tags.length; j++){
    //     let popular_temp_mob = testVariable.popular_tags[i]
    //     let popular_temp2_mob = document.createElement(button)
    //     button.innerHTML = 
    //     `
    //     <button type="button" class="features">${tagNames.popular_temp}</button>          
    //     `
    //     btns_popular_mob.appendChild(popular_temp2_mob)
    // }

    headline_1_mob.innerHTML = testVariable.headline_text_1
    headline_2_mob.innerHTML = testVariable.headline_text_2
    loc_mob.innerHTML = testVariable.location
    rating_mob.innerHTML = testVariable.ratings
    fd_yr_mob.innerHTML = testVariable.founded_year
    fleet_sz_mob.innerHTML = testVariable.fleet_size

    // for (let i = 0; i < testVariable.services.length; i++) {
    //     console.log(testVariable.services[i]);
    //     console.log(serviceTags.findIndex(x => x.id === `${testVariable.services[i]}`))
    //     let service_temp_mob = document.createElement('div')
    //     service_temp_mob.innerHTML = 
    //     `
    //     <div class="icon_outline_mob">
    //         <i class="fa fa-2x icon_1_mob ${serviceTags.iconClass}"></i>s
    //     </div>
    //     <h2 class="service_title_mob">${serviceTags.name}</h2>
    //     <div class="para_mob">${serviceTags.description}</div>
    //     `
    //     service_container_mob.appendChild(service_temp_mob)
    }

    base_chrge_mob.innerHTML = testVariable.base_charge_per_order
    per_km_chrge_mob.innerHTML = testVariable.per_kg_charge_order
    per_kg_chrge_mob.innerHTML = testVariable.per_kg_charge_order
    base_chrge_rental_mob.innerHTML = testVariable.base_charge_rental
    per_hr_chrge_rental_mob.innerHTML = testVariable.per_hr_charge_rental
    per_km_chrge_rental_mob.innerHTML = testVariable.per_km_charge_rental
    

}




let list1 = [ 
{ "title":"OTP Based", "description":"Your delivery would be confirmed with OTP verification at point of delivery", "iconClass":"fa-bell" },
{ "title":"OTP Based", "description":"Your delivery would be confirmed with OTP verification at point of delivery", "iconClass":"fa-bell" },
{ "title":"OTP Based", "description":"Your delivery would be confirmed with OTP verification at point of delivery", "iconClass":"fa-bell" },
{ "title":"OTP Based", "description":"Your delivery would be confirmed with OTP verification at point of delivery", "iconClass":"fa-bell" },
{ "title":"OTP Based", "description":"Your delivery would be confirmed with OTP verification at point of delivery", "iconClass":"fa-bell" }, ]


const titleElement = document.getElementsByClassName("service_title")
const titleElementMob = document.getElementsByClassName("service_title_mob")
const descElement = document.getElementsByClassName("description")
const descElementMob = document.getElementsByClassName("para_mob")
const icon = document.getElementsByClassName("icon_1")
const iconMob = document.getElementsByClassName("icon_1_mob")


for(i=0 ;i<= list1.length ;i++){
    titleElement[i].innerHTML = `${list1[i].title}`
    titleElementMob[i].innerHTML = `${list1[i].title}`
    descElement[i].innerHTML = `${list1[i].description}`
    descElementMob[i].innerHTML = `${list1[i].description}`
    icon[i].classList.add(`${list1[i].iconClass}`)
    iconMob[i].classList.add(`${list1[i].iconClass}`)
}

