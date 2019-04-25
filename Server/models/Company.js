import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let Company = new Schema({
    companyName: {
        type: String
    },
    securityIndicator1: {
        type: String 
    },
    securityIndicator2: {
        type: String
    },
    securityIndicator3: {
        type: String
    },
    securityIndicator4: {
        type: String,
        default: 'Open'
    }
});
export default mongoose.model('Company', Company);