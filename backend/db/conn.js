const mongoose = require('mongoose');

const DB=process.env.DATABASE;


mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log("connected successfull");
}).catch((err) => { 
    console.log("error no connection");
});
 
