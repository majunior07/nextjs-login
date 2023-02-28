import jwt from 'jsonwebtoken'

let users = []

const SECRET = process.env.JWR_SECRET

function createToken(user) {
    return jwt.sign({ email: user.email, name: user.name}, SECRET)
}

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if(user) throw new Error('Usuário já cadastrado')

    users.push(body)
    return body
}

export function login(body) {
    const user = users.find(({ email }) => email === body.email)
    if(!user) throw new Error('Usuário não encontrado')
    if(user.password !== body.password) throw new Error('Senha incorreta')

    return user
}

