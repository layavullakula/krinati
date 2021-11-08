const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const Location = require('./modal/index');
const Car = require('./modal/car')
// const Driver = require('./modal/driver')

const app = express();
app.use(express.json())

app.use(cors())
app.listen(3001, () => {
    console.log('started 3001 server');
});
                  
mongoose.connect('mongodb+srv://laya:KRsDUY3JcHi9URv2@cluster0.wzqj8.mongodb.net/project?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then((data) => {
        console.log('connected to database');
    });


app.get('/cabs/', async(req, res, next) => {
    const {lat} = req.query 
    const la = lat.split(",")
    const la1 = Number(la[0])
    const la2 = Number(la[1])
    const options = {
        location: {
            $geoWithin: {
                $centerSphere: [[la1, la2], 15 / 3963.2],
            }
        }
    }
    
    Location.find(options).limit(3).then(data => {
        if (data.length===3){
        var result = []
        data.map((eachItem,i)=>(
            Car.findOne({ number_plate: eachItem.number_plate}, async(err, user) => {
                if(user){
                    const f = {
                        id: data[i]._id,
                        driver: user.driver,
                        number_plate: data[i].number_plate,
                        location: data[i].location,
                    }
                    result.push(f)
                }
                if (i==2){
                    res.send(result);
                }
            })
            
            
        ))
        
        }else{
            res.send(data)
        }
        
    })
    
    
})
