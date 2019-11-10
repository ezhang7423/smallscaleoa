d3.csv("../datasets/Cheeca_80W_25N_May2016_Mar2017.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});
