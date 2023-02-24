import Users from "../classes/Users.js";
import User from "../classes/User.js"

export function signUp(req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
    }

    const user = new User({username, avatar});

    Users.pushUser(user);

    res.status(200).send('OK deu tudo certo');
}