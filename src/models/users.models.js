const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const UsersShema = Schema({
    name: {
        type: String,
        required: [true, "The text is requerid"]
    },
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: "Todos"
    }
    ]
})

// UsersShema.pre('save', async function passwordEncrypt(next) {
//     try{
//         const hash = await bcrypt.hash(this.password, 10);
//         this.password = hash;
//         return next()
//     }catch(error){
//         return next(error)
//     }
// })

const UsersModels = model("Users", UsersShema)

module.exports = UsersModels