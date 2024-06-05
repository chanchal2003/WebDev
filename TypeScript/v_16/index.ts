// represent set of related values and choose one value from multiple options
//when enum constants are not explciitly assigned, they are automatically assigned incremental numeric values starting from 0,
// firstVal is assigned 0,  secondVal 1 and so on
// user1 = login => normal
enum Roles{
    user="user",
    admin="admin" //hover
}

type loginDetails = {
    name?:string;
    email:string;
    password:string;
    role : Roles;
}
const user1:loginDetails={
    email:"chanchal@gmail.com",
    password :"asdfg",
    role:Roles.admin,
    // phoneNumber : 1892039,
}
const user2:loginDetails={
    email:"chanchal@gmail.com",
    password :"asdfg",
    role:Roles.user
}

//const fatA = () => {
    // return 
// }