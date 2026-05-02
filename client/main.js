fetch('http://localhost:3000/get')
    .then(res => res.json())
    .then(data => {
        document.getElementById('output').textContent =
            JSON.stringify(data, null, 2);
    });