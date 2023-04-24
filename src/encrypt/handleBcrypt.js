const bcrypt = require('bcrypt');

const encrypt = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const compare = async (passwordPlain, passwordHash) =>{
    return await bcrypt.compare(passwordPlain, passwordHash)
}

module.exports={encrypt, compare}