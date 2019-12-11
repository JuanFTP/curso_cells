fetch('http://httpbin.org/ip')
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        console.log('data=', data);
    })
    .catch(function (err) {
        console.error(err)
    });


fetch('https://httpbin.org/post', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:'a=1&b=2'
    })
    .then(function(response) {
        console.log('response=', response);
        return response.json();
    })
    .then(function (data) {
        console.log('data=', data);
    })
    .catch(function (err) {
        console.log(err);
    });


    

    fetch("https://httpbin.org/post", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"a": 1, "b": 2}),
        cache: 'no-cache',
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log("data =", data);
    })
    .catch(function(err) {
        console.err(err);
    });