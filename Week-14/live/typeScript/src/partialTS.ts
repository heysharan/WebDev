interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

type updateUser = Pick<User, 'name' | 'age' | 'password'>

type updateUserOptional = Partial<updateUser>

const updateUserDb = (updateUserOptional: updateUserOptional) => {
    
}