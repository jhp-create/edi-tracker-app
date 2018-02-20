const app = require('./server/server');
const port = 4040

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});