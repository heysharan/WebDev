// import { z } from 'zod';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const userProfileSchema = z.object({
//     name: z.string().min(1, { message: 'Name cannot be empty' }),
//     email: z.string().email({ message: 'Invalid email format' }),
//     age: z.number().min(18, { message: 'You must be alteast 18 years old'}).optional()
//     // these indeed check the types - but the problem here is, it is done during runtime
// })

// app.put('/user', (req, res) => {
//     const { success } = userProfileSchema.safeParse(req.body);
//     const updateUser = req.body;   // here there the type for updateUser is [any], ideally should be given proper types to catch any errors 

//     if(!success){
//         res.status(411).json({})
//         return
//     }

//     res.json({
//         message: 'User Updated'
//     })

// })

// app.listen(3000)


// import { z } from 'zod';
// import express from 'express';

// const app = express();
// app.use(express.json());

// const userProfileSchema = z.object({
//     name: z.string().min(1, { message: 'Name cannot be empty' }),
//     email: z.string().email({ message: 'Invalid email format' }),
//     age: z.number().min(18, { message: 'You must be alteast 18 years old'}).optional()
// })

// app.put('/user', (req, res) => {
//     const { success } = userProfileSchema.safeParse(req.body);
//     const updateUser: {
//         name: string,       // this is ok, but it seems like there is some code repetition here, ( i.e., is it written inside the zod object also and here also )
//         email: string,      // this repetition can be avoided by using Type inference in zod
//         age?: number
//     } = req.body; 

//     if(!success){
//         res.status(411).json({})
//         return
//     }

//     res.json({
//         message: 'User Updated'
//     })

// })

// app.listen(3000)


import { z } from 'zod';
import express from 'express';

const app = express();
app.use(express.json());

const userProfileSchema = z.object({
    name: z.string().min(1, { message: 'Name cannot be empty' }),
    email: z.string().email({ message: 'Invalid email format' }),
    age: z.number().min(18, { message: 'You must be alteast 18 years old'}).optional()
})

type finalUserProfileSchema = z.infer<typeof userProfileSchema>

app.put('/user', (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateUser: finalUserProfileSchema = req.body;    
// this makes sure all the values entered are in correct format this is called type infering, rather than doing manually, zod helps us do it
// You can extract the TypeScript type of any schema with z.infer<typeof mySchema>

    if(!success){
        res.status(411).json({})
        return
    }

    res.json({
        message: 'User Updated'
    })

})

app.listen(3000)


