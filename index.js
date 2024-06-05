import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { Employee } from './models/employ.js'; // Assuming correct capitalization
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const conn = mongoose.connect("mongodb://localhost:27017/company");
app.use(express.static(path.join(__dirname, 'public')));  // Assuming your static files are in a 'public' directory

app.get('/', (req, res) => {
    res.sendFile('index.html')
})
app.post('/datagenerated', async(req, res) => {
    console.log('Button Clicked!');
    const deletedcall = await Employee.deleteMany({}).exec();
    const names = ["Ahmad", "Ali", "Kashif", "John", "Bro", "Ghost", "Pric"];
    for (let i = 0; i < 10; i++) {
        const employee = new Employee({ name:names[Math.floor(Math.random() * names.length)], salary:Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000
, lanuage: "Urdu", city: "Lahore" });
        employee.save()
    }
    const results = await Employee.find({}).exec(); // Execute the query
    res.json(results);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})