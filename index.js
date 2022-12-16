const express = require('express');
const path =  require('path');
const app =  express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    console.log('__dirname', path.join(__dirname));
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})