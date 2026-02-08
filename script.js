const d = new Date();
let year = d.getFullYear();
let date = d.getDate();
let month = d.getMonth()
let day = d.getDay()







const dateh = document.querySelector(".date")
dateh.textContent = date

const yearh = document.querySelector(".year")
yearh.textContent = year

const monthh = document.querySelector(".month")



if(month == 0){
    monthh.textContent = "January"
}
else if(month == 1){
    monthh.textContent = "February"
}
else if(month == 2){
    monthh.textContent = "March"
}
else if(month == 3){
    monthh.textContent = "April"
}
else if(month == 4){
    monthh.textContent = "May"
}
else if(month == 5){
    monthh.textContent = "June"
}
else if(month == 6){
    monthh.textContent = "July"
}
else if(month == 7){
    monthh.textContent = "August"
}
else if(month == 8){
    monthh.textContent = "September"
}
else if(month == 9){
    monthh.textContent = "October"
}
else if(month == 10){
    monthh.textContent = "November"
}
else if(month == 11){
    monthh.textContent = "December"
}

const dayh = document.querySelector(".day")

if(day == 0){
    dayh.textContent = "Sunday"
}
else if(day == 1){
    dayh.textContent = "Monday"
}
else if(day == 2){
    dayh.textContent = "Tuesday"
}
else if(day == 3){
    dayh.textContent = "Wednesday"
}
else if(day == 4){
    dayh.textContent = "Thursday"
}
else if(day == 5){
    dayh.textContent = "Friday"
}
else if(day == 6){
    dayh.textContent = "Saturday"
}