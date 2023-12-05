// User Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  first_name: { type: String, required: [true, "All fields are required"] },
  last_name: {
    type: String,
    required: [true, "All fields are required"],
  },
  email: {
    type: String,
    required: [true, "All fields are required"],
  },
  age: {
    type: String,
    required: [true, "All fields are required"],
  },
  active: Boolean,
});

export default mongoose.models.UserModel ||
  mongoose.model("UserModel", userSchema);
