let express = require('express')
let app = express()
app.get('/', (req,res) => {
    console.log('lap9-pm2')
    res.send({

            NAME: 'kittikun Chaiprasit',
            ID: 5835512117,
            sec: 02
    }
    )
})
app.get('/crash',(req, res)=> {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT, 
    () => console.log('Server is running at ', process.env.PORT))