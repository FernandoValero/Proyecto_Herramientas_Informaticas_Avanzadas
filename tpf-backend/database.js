const mongoose = require('mongoose');
const URI = 'mongodb+srv://cristian:x23EHY788ioDe@cluster0.u9pznjn.mongodb.net/tpf-db';
 mongoose.connect(URI)
    .then(db=>console.log('BD is Connected'))
    .catch(err=>console.error(err))
 module.exports = mongoose;