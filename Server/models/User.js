import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let User = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String 
    },
    company: {
        type: String
    }
});
export default mongoose.model('User', User);