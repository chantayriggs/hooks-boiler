const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const boilerRoutes = express.Router();
const PORT = 4000;

let Boiler = require('./model');

app.use(cors());
app.use(bodyParser.json());

mongoose.set("useCreateIndex", true);
mongoose.connect('mongodb://127.0.0.1:27017/boilers', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//READ ALL BOILER ITEMS

boilerRoutes.route('/read').get((request, response) => {
    Boiler.find((error, boilers) => {
        if (error) {
            console.log(error);
        } else {
            response.json(boilers);
        }
    });
});

//BRINGING BACK A SINGLE BOILER ITEM

boilerRoutes.route('/read/:id').get((request, response) => {
    let id = request.params.id;
    Boiler.findById(id, (error, boiler) => {
        response.json(boiler);
    });
});

//UPDATING A BOILER ITEM

boilerRoutes.route('/update/:id').post((request, response) => {
    Boiler.findById(request.params.id, (error, boiler) => {
        if (!boiler)
            response.status(404).send("data is not found");
        else
            boiler.boiler_string = request.body.boiler_string;
            boiler.boiler_boolean = request.body.boiler_boolean;
            boiler.boiler_number = request.body.boiler_number;

            boiler.save().then(boiler => {
                response.json('Boiler updated!');
            })
            .catch(error => {
                response.status(400).send("Update not possible");
            });
    });
});

// CREATING A BOILER

boilerRoutes.route('/create').post((request, response) => {
    let boiler = new Boiler(request.body);
    boiler.save()
        .then(boiler => {
            response.status(200).json({'boiler': 'boiler added successfully'});
        })
        .catch(error => {
            response.status(400).send('adding new boiler failed');
        });
});

// DELETE A BOILER

boilerRoutes.route("/delete/:id").delete((request, response) => {
    Boiler.findById(request.params.id, (error, boiler) => {
        if (!boiler)
            response.status(404).send("Item was not found");
        else 
        boiler.deleteOne();
        boiler.save().then(boiler => {
            response.json('Boiler deleted!');
        })
        .catch(error => {
            response.status(400).send("Deletion not possible");
        });
    })

})


app.use('/boilers', boilerRoutes);

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});