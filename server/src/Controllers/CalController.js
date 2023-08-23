function onePlusCal(data) {
    console.log(data);
    return data + 1;
}

function isPrime(data) {
    let result = true;
    for (let i = 2, s = Math.sqrt(data); i <= s; i++) {
        if (data % i === 0) result = false;
    }
    if (data <= 1) result = false;

    return result ;
}

module.exports = {
    due1(req, res) {
        let input = req.body.input;
        if (typeof input == "number") {
            console.log(`input is ${input}`);
            let ans = onePlusCal(input);
            res.send(JSON.stringify(ans));
        } else {
            res.send("Please input number only!!");
        }
    },
    due2(req, res) {
        let input = req.body.input;
        if (typeof input == "number") {
            console.log(`input is ${input}`);
            let ans = isPrime(input);
            res.send(JSON.stringify(ans));
        }else{
            res.send("Check prime number API,Please input number only!!");
        }
    }
}