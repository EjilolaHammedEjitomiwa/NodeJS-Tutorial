const fs = require('fs')

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result

    // read the second file
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }

        const second = result

        console.log(first);
        console.log(second);

        //to write file
        fs.writeFile('./content/result-async.txt', "Here is what I created", (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log("Successfully created");
        })

    })

})

// 1:27:17