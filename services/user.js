let users = []

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if(user) throw new Error('Usuário já cadastrado')
}

export function login(body) {

}