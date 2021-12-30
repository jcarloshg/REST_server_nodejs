


this.app.get('/api', (req, res) => {
    res.json({
        msg: "get api"
    });
    // res.send('Hello word')
});

this.app.put('/api', (req, res) => {
    res.json({
        msg: "put api"
    });
    // res.send('Hello word')
});

this.app.post('/api', (req, res) => {
    res.json({
        msg: "post api"
    });
    // res.send('Hello word')
});

this.app.delete('/api', (req, res) => {
    res.json({
        msg: "delelte api"
    });
    // res.send('Hello word')
});