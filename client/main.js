fetch('/get')
    .then(res => res.json())
    .then(data => {
        document.getElementById('output').textContent =
            JSON.stringify(data, null, 2);
    });