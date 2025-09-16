import { Schema , model , Types } from "mongoose";

const profileSchema = new Schema({

    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    history : { 
        date: { type: Date, required: true },
        list: { type: String,  required: true },
        amount: { type: Number, required: true },
    
},
   user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

  },
  {
    versionKey: false,
  }
);



export const ProfileModel = model('Profile', profileSchema);
