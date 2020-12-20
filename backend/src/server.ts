import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler'

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
// Route to list users 
// Route -> group
// Resource -> users

// Methoods HTTP = GET, POST, PUT, DELETE
// GET = Research an information -> List, Item
// POST = Creating a new information
// PUT = edit an informartion
// DELIT = Delit an information 

// Paramaters
// Query Params: http://localhost:3333/users?search=Hudson
// Route Params: http://localhost:3333/users/1 (Identify one resource)
// Body: http://localhost:3333/users/1 (Send some dates, example: forms)

// app.post('/users/:id', (request, response) => {
    
//     // console.log(request.query);
//     // console.log(request.params);
//     // console.log(request.body);

//     return response.json({message: 'Hello World'});
// })


app.listen(3333);

// Driver Nativo, Queru builder, ORM

