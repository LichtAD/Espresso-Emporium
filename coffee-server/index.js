const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xy3cn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        // ! db name and collection
        const database = client.db("coffeeDB2");
        const coffeeCollection2 = database.collection("coffees2");

        // ! crate
        app.post('/coffees2', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);

            const result = await coffeeCollection2.insertOne(newCoffee);
            res.send(result);
        })

        // ! read
        app.get('/coffees2', async (req, res) => {
            const cursor = coffeeCollection2.find();
            const result = await cursor.toArray();
            res.send(result);
        })


        // ! delete
        app.delete('/coffees2/:id', async (req, res) => {
            const id = req.params.id;
            console.log('plz delete', id);

            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection2.deleteOne(query);
            res.send(result);
        })


        // ! update - 1 - get specific coffee data
        app.get('/coffees2/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection2.findOne(query);
            res.send(result);
        })


        // ! update - 2 - update specific coffee data
        app.put('/coffees2/:id', async (req, res) => {
            const id = req.params.id;
            const updatedCoffee = req.body;              // body thk info paisi
            console.log('updated coffee', updatedCoffee);

            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedCoffeeDoc = {                 // info gula ekta updated variable e set krsi
                $set: {
                    coffee_name: updatedCoffee.coffee_name,
                    chef_name: updatedCoffee.chef_name,
                    supplier: updatedCoffee.supplier,
                    taste: updatedCoffee.taste,
                    category: updatedCoffee.category,
                    details: updatedCoffee.details,
                    photo_url: updatedCoffee.photo_url,
                }
            }

            const result = await coffeeCollection2.updateOne(filter, updatedCoffeeDoc, options);       // filter kore oita update krsi
            res.send(result);
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('server is running coffee2');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})