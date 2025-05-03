import { Client } from 'pg';
import express from 'express';

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_2qZtGEJ1NAjQ",
    port: 5432,
    host: "ep-gentle-snow-a4fgzbzm-pooler.us-east-1.aws.neon.tech",
    database: 'neondb',
    ssl: true
});

const main = async () => {
    await pgClient.connect();

    const response = await pgClient.query(`CREATE TABLE todos (
        id SERIAL PRIMARY key,
        title VARCHAR(50),
        description VARCHAR(100),
        done BOOLEAN
        );`)
    console.log(response.rows);
}

main();


 