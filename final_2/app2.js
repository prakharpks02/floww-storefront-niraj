let testVariable = {
    "vendor_id": "1ven029921",
    "company_name": "TMoS",
    "contact_no": "9769200565",
    "delivery_starting_from": 40,
    "popular_tags": ['otp', 'same_day'],
    "headline_text_1": "Your Delivery Partner",
    "headline_text_2": "ALWAYS READY TO SERVE",
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
    "primary_color": "#FFFF00",
    "secondary_color": "#FFFFFF",
    "tertiary_color": "#000000",
}


function myfunc(){
    console.log(tagNames[testVariable.services[0]]);

}

window.onload = myfunc()