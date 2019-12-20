
fetch("http://httpbin.org/ip")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.err(err);
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