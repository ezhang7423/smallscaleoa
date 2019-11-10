d3.csv("../datasets/Cheeca.csv").get(function (error, data) {

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Salinity);

    }
});
