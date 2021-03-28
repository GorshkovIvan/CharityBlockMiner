var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var address = [];
    var score = [];
    var i = 0;
    while(data[i] != ","){
        address.push(data[i]);
        i++;
    }
    i++;
    while(i < data.length){
        console.log("second loop")
        score.push(data[i]);
        i++;
    }

    console.log(address);
    console.log(score);
});