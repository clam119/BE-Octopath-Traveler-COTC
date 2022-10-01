import app from './app.js';

app.listen(9090, (err) => {
    if(err) console.log(err);
    console.log('Successfully connected on port 9090.')
})