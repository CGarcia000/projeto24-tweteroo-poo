import express from "express";

import * as loginControllers from './controllers/login.controller.js'
import * as tweetControllers from './controllers/tweet.controller.js'

const router = express.Router();

router.post("/sign-up", loginControllers.signUp);

router.post("/tweets", tweetControllers.createTweet);
router.get("/tweets/:username", tweetControllers.getTweetsByUser);
router.get("/tweets", tweetControllers.getTweets);

export default router;