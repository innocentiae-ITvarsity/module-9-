var timer = setInterval(displayWorldTime, 1000)

var cities = [
    {name: "South Africa", utcOffset: 2, flag: "South-Africa.png"},
    {name: "Turkey", utcOffset: 9, flag: "Turkey.png"},
    {name: "Togo", utcOffset: 9, flag: "Togo.png"},
    {name: "Morocco", utcOffset: 3, flag: "morocco.png"},
    {name: "Russia", utcOffset: -3, flag: "Russia.png"},
    {name: "Nepal", utcOffset: 11, flag: "Nepal.png"},
    {name: "Vietnam", utcOffset: -8, flag: "Vietnam.png"},
    {name: "Qatar", utcOffset: 3, flag: "Qatar.png"}
];

cities.sort(compare);

function compare(a,b){
    var cityA = a.name;
    var cityB = b.name;

    var comparison = 0;
    if(cityA > cityB){
        comparison = 1;
    } else
        if(cityA < cityB){
            comparison = -1;
        }
        return comparison;
}

function getUtcTime(){
    var dt = new Date();
    var utcOffset = dt.getTimezoneOffset() * 60000;
    var utcTime = new Date(dt.getTime() + utcOffset);
    console.log(utcTime);

    return utcTime.getTime();
}


function getCurrentTime(utcOffset){
    var mil = 1000 * 60 * 60;
    var time = new Date(getUtcTime() + utcOffset * mil)
    return time.toLocaleTimeString();
}

function displayWorldTime(){
    var dt = new Date();
    document.getElementById("local").innerHTML = "Local Time: " + dt.toLocaleTimeString();

    var output = `<table id="cities">`
    output += `
                    <tr>
                        <th class="col1"></th>
                        <th class="col2"></th>
                        <th></th>
                    </tr>
                `;

    for(a = 0; a < cities.length;a++){
        output += `
            <tr>
                <td> <img src="img/${cities[a].flag}"/> </td>
                <td>${cities[a].name}</td>
                <td>${getCurrentTime(cities[a].utcOffset)}</td>
            </tr>
        `;
    }

    output += `</table>`
    document.getElementById("output").innerHTML = output;
}