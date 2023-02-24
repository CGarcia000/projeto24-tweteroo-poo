import Tweets from "../classes/Tweets.js";
import Users from "../classes/Users.js";

export function createTweet(req, res) {
    const { tweet: tweetContent , username } = req.body;

    if (!username || !tweetContent) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    const user = Users.findUser(username);
    if (!user || user.length === 0) {
        return res.status(400).send('Usuário inválido!');
    }
    const avatar = user.avatar;

    Tweets.pushNewTweet({username, tweetContent, avatar});

    res.status(201).send('OK, seu tweet foi criado');
}

export function getTweetsByUser(req, res) {
    const { username } = req.params;

    const tweetsDoUsuario = Tweets.tweetsByUsername(username);

    res.status(200).send(tweetsDoUsuario);
}

export function getTweets(req, res) {
    let { page } = req.query;

    if (isNaN(page) || page && page < 1) {
        res.status(400).send('Informe uma página válida!');
        return;
    }

    if (!page && page === 0) {
        page = 1;
    }

    if (Tweets.getArrLength() <= 10) {
        return res.send(Tweets.reverse());
    }

    res.status(200).send(Tweets.tweetsByPage(page));
}