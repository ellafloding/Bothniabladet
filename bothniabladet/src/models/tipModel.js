import {Schema, model, models} from 'mongoose';

const testSchema = new Schema({
    descrTip: {
        type: String,
        required: true
    },
    keywordTip: {
        type: String,
        required: true
    },
    emailTip: {
        type: String,
        required: true
    },
    firstnameTip: {
        type: String,
        required: true
    },
    lastnameTip: {
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // }
})

const Test = models.Test || model('Test', testSchema)
export default Test;

// module.exports = model('Tip', tipSchema)