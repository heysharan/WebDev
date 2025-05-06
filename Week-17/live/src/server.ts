// import { Client } from 'pg';

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });

// const main = async () => {
//     await pgClient.connect();

//     const response = await pgClient.query(`CREATE TABLE todos (
//         id SERIAL PRIMARY key,
//         title VARCHAR(50),
//         description VARCHAR(100),
//         done BOOLEAN
//         );`)
//     console.log(response.rows);
// }

// main();



// // Express App for Signing up with username, email, password
// // This method can be vulnerable to SQL injection
// import { Client } from 'pg';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });
// pgClient.connect();

// app.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         const response = await pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`)

//         res.json({
//             message: 'You have Sign Up!'
//         })
//     } catch (e) {
//         res.json({
//             message: 'Error while Signing Up'
//         })
//     }

// })

// app.listen(3000)


// import { Client } from 'pg';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });
// pgClient.connect();

// app.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);` // Only this SQL query will be excuted and their values will be picked from the other variable
//         const insertValues = [username, email, password]  //Even if the user sends any highly engineered string like (password: DELETE FROM users;) this wont get excuted as SQL query but rather it will be stored as the value of that variable 
//         const response = await pgClient.query(insertQuery, insertValues)

//         res.json({
//             message: 'You have Sign Up!'
//         })
//     } catch (e) {
//         res.json({
//             message: 'Error while Signing Up'
//         })
//     }

// })

// app.listen(3000)


// // Creating users and address table
// import { Client } from 'pg';

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });

// const main = async () => {
//     await pgClient.connect();

//     const response = await pgClient.query(`CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(100) UNIQUE NOT NULL,
//         password VARCHAR(100) NOT NULL,
//         createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         ); 
//         CREATE TABLE address (
//         id SERIAL PRIMARY KEY,
//         userId INTEGER NOT NULL,
//         street VARCHAR(100) NOT NULL,
//         city VARCHAR(100) NOT NULL,
//         pincode INTEGER NOT NULL,
//         country VARCHAR(100) NOT NULL,
//         createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//         FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
//         );`)
// }

// main();


// import { Client } from 'pg';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });
// pgClient.connect();

// app.post('/signup', async (req, res) => {
//     const { username, email, password, street, city, country, pincode } = req.body;

//     try {
//         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
//         const addressInsertQuery = `INSERT INTO address (street, city, country, password, userId) VALUES ($1, $2, $3, $4, $5)`

//         await pgClient.query('BEGIN');
//         const response = await pgClient.query(insertQuery, [username, email, password])
//         const userId = response.rows[0].id;
//         const addressResponse = await pgClient.query(addressInsertQuery, [street, city, country, pincode, userId])
//         await pgClient.query('COMMIT');

//         res.json({
//             message: 'You have Sign Up!'
//         })
//     } catch (e) {
//         res.json({
//             message: `Error while Signing Up ${e}`
//         })
//     }

// })

// app.listen(3000)


// // Un-optimal Solutions → sending two different request to get the data from DB
// import { Client } from 'pg';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_2qZtGEJ1NAjQ",
//     port: 5432,
//     host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
//     database: 'neondb',
//     ssl: true
// });
// pgClient.connect();

// app.get('/metadata', async (req, res) => {

//     const id = req.query.id;

//     const query1 = `SELECT id, username, email FROM users WHERE id=$1`;
//     const response1 = await pgClient.query(query1, [id])

//     const query2 = `SELECT * FROM address WHERE userId=$1`;
//     const response2 = await pgClient.query(query2, [id]);

//     res.json({
//         user: response1.rows[0],
//         address: response2.rows
//     })

// })

// app.listen(3000)



import { Client } from 'pg';
import express from 'express';

const app = express();
app.use(express.json());

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_2qZtGEJ1NAjQ",
    port: 5432,
    host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
    database: 'neondb',
    ssl: true
});
pgClient.connect();

app.get('/metadata', async (req, res) => {

    const id = req.query.id;

    const query = `SELECT u.id, u.username, u.email, a.street, a.city, a.country, a.pincode
                    FROM users u FULL JOIN address a ON u.id = a.userId WHERE a.userId = $1;`
    const response = await pgClient.query(query, [id])

    res.json({
        response: response.rows[0]
    })

})

app.listen(3000)