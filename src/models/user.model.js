import { Schema , model ,}  from 'mongoose';



const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,

    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    }
});
export const UserModel= model('User', userSchema);

// },
// email: {
//     type: String,
//     required: true,
//     unique: true,
// },
// password: {
//     type: String,
//     required: true,