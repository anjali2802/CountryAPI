let center = document.querySelector(".center")
let second = document.querySelector(".second")

function create(table, key, value) {
    let tr = document.createElement("tr")

    let th = document.createElement("th")
    th.innerHTML = key

    let td = document.createElement("td")
    if (key == "Flag") {
        let img = document.createElement("img")
        img.src = value
        td.appendChild(img)
    }
    else if (key == "Map") {
        let a = document.createElement("a")
        a.href = value
        a.innerHTML = "Open Map"
        a.target = "_blank"
        td.appendChild(a)
    }
    else
        td.innerHTML = value

    tr.appendChild(th)
    tr.appendChild(td)

    table.appendChild(tr)
}

async function getAPIData() {
    try {
        let input = document.getElementById("name")
        let name = input.value ?? ""
        let url = name ? "https://restcountries.com/v3.1/name/" + name : "https://restcountries.com/v3.1/all"
        let response = await fetch(url)
        let data = await response.json()
        center.removeChild(second)
        second = document.createElement("div")
        second.classList.add("second")
        center.appendChild(second)
        let table = document.createElement("table")
        for (let item of data) {
            create(table, "Official Name", item.name.official)
            create(table, "Capital", item.capital)
            create(table, "Flag", item.flags.svg)
            create(table, "Population", item.population)
            create(table, "Area", item.area)
            create(table, "Region", item.region)
            create(table, "Sub-Region", item.subregion)
            create(table, "Continents", item.continents)
            create(table, "Landlocked", item.landlocked)
            create(table, "Independent", item.independent)
            create(table, "UnMember", item.unMember)
            create(table, "Timezones", item.timezones)
            create(table, "Borders", item.borders)
            create(table, "Map", item.maps.googleMaps)
            second.appendChild(table)
        }
    } catch (error) {
        alert("Invalid Country Name")
    }
}
getAPIData()

async function first() {
    try {
        let response = await fetch("https://restcountries.com/v3.1/all")
        let data = await response.json()
        let dataList = document.getElementById("countryList")
        for (let item of data) {
            let option = document.createElement("option")
            option.value = item.name.common
            option.innerHTML = item.name.common
            dataList.appendChild(option)
        }
    } catch (error) {
        alert("Internal Server Error")
    }
}
first()
// function getAPIData() {
//     let input = document.getElementById("name")
//     let name = input.value??""
//     let url = name? "https://restcountries.com/v3.1/name/" + name:"https://restcountries.com/v3.1/all"
//     fetch(url)
//         .then((response) => {
//             response.json()
//                 .then((data) => {
//                     center.removeChild(second)
//                     second = document.createElement("div")
//                     second.classList.add("second")
//                     center.appendChild(second)
//                     let table = document.createElement("table")
//                     for (let item of data) {
//                         create(table, "Official Name", item.name.official)
//                         create(table, "Capital", item.capital)
//                         create(table, "Flag", item.flags.svg)
//                         create(table, "Population", item.population)
//                         create(table, "Area", item.area)
//                         create(table, "Region", item.region)
//                         create(table, "Sub-Region", item.subregion)
//                         create(table, "Continents", item.continents)
//                         create(table, "Landlocked", item.landlocked)
//                         create(table, "Independent", item.independent)
//                         create(table, "UnMember", item.unMember)
//                         create(table, "Timezones", item.timezones)
//                         create(table, "Borders", item.borders)
//                         create(table, "Map", item.maps.googleMaps)
//                         second.appendChild(table)
//                     }
//                 })
//                 .catch((error) => {
//                     alert("Invalid Country Name")
//                 })
//         })
//         .catch((error) => {
//             alert("Internal Server Error")
//         })
// }
// getAPIData()

// function first() {
//     fetch("https://restcountries.com/v3.1/all")
//         .then((response) => {
//             response.json()
//                 .then((data) => {
//                     let dataList = document.getElementById("countryList")
//                     for (let item of data) {
//                         let option = document.createElement("option")
//                         option.value = item.name.common
//                         option.innerHTML = item.name.common
//                         dataList.appendChild(option)
//                     }
//                 })
//         })
//         .catch((error) => {
//             alert("Internal Server Error")
//         })
// }
// first()

// function getAPIData() {
//     let input = document.getElementById("name")
//     let name = input.value

//     const request = new XMLHttpRequest()
//     if (name)
//         request.open("get", "https://restcountries.com/v3.1/name/" + name)
//     else
//         request.open("get", "https://restcountries.com/v3.1/all")
//     request.send()

//     center.removeChild(second)
//     second = document.createElement("div")
//     second.classList.add("second")
//     center.appendChild(second)
//     request.addEventListener("load", () => {
//         let data = JSON.parse(request.responseText)
//         let table = document.createElement("table")
//         for (let item of data) {
//             create(table, "Official Name", item.name.official)
//             create(table, "Capital", item.capital)
//             create(table, "Flag", item.flags.svg)
//             create(table, "Population", item.population)
//             create(table, "Area", item.area)
//             create(table, "Region", item.region)
//             create(table, "Sub-Region", item.subregion)
//             create(table, "Continents", item.continents)
//             create(table, "Landlocked", item.landlocked)
//             create(table, "Independent", item.independent)
//             create(table, "UnMember", item.unMember)
//             create(table, "Timezones", item.timezones)
//             create(table, "Borders", item.borders)
//             create(table, "Map", item.maps.googleMaps)
//             second.appendChild(table)
//         }
//     })
// }
// getAPIData()

// function first() {
//     const request = new XMLHttpRequest()
//     request.open("get", "https://restcountries.com/v3.1/all")
//     request.send()

//     request.addEventListener("load", () => {
//         let dataList = document.getElementById("countryList")
//         let data = JSON.parse(request.responseText)
//         for (let item of data) {
//             let option = document.createElement("option")
//             option.value = item.name.common
//             option.innerHTML = item.name.common
//             dataList.appendChild(option)
//         }
//     })
// }
// first()