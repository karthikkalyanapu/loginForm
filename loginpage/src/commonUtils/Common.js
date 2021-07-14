
export const getUser = () => {
    const user= localStorage.getItem("login");
    console.log(user);
    if(user) return JSON.parse(user);
    else return null;

}

export const removeUser = ()=> {
localStorage.removeItem("login");

}













// router.get('/', (req, res) => {
//     if(!req.user) return res.status(401).json( {success : false, message: "invalid user"})
//     res.send("the server is running at auth.js"+ req.user.name);
// });


// export const Username = () => {
//     const user= localStorage.getItem("username");
//     console.log(user);
//     if(user) return JSON.parse(user);
//     else return null;

// }