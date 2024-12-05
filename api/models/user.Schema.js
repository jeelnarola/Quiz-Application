const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        require:true,
        enum:['User','Teacher'],
        default:'User'
    }
})

UserSchema.pre('save',async function (next) {
    if(!this.isModified('password')) next() 
    this.password = await bcrypt.hash(this.password,10);
    next()
})

UserSchema.methods.compareSchema = async function(password) {
    return await bcrypt.compare(password,this.password)
}


const User = mongoose.model('User',UserSchema)

module.exports = User