

app.get('/index', function (req, res) {
    res.render('./index');
  });

app.get('/timestamp', (req, res) => {
    res.send(`${Date.now()}`);
  });

//404
app.get('*', function (req, res, next) {
    res.render('/404');
  });
