const fetch = window.fetch;

document.addEventListener('click', event => {
  if (event.target.id !== 'scrapeData') {
    fetch(`/stack/${event.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(r => {
      window.location.reload();
    });
  } else {
    fetch(`/scrape`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({})
    })
      .then(_ => window.location.reload())
      .catch(e => console.log(e));
  }
});
