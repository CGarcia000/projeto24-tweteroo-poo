export default class Tweets{
    static #LIMIT = 10;

    static #arr = [];

    static getArr() {
      return this.#arr;
    }

    static getArrLength() {
      return this.#arr.length;
    }

    static pushNewTweet({username, tweetContent, avatar}) {
      // checar se pode dar push


      this.#arr.push({username, tweetContent, avatar});
      return;
    }

    static reverse() {
      return [...this.#arr].reverse();
    }

    static tweetsByPage(page) {
      return [...this.#arr].reverse().slice(this.#start(page), this.#end(page));
    }

    static tweetsByUsername(username) {
      return this.#arr.filter(t => t.username === username);
    }

    static #start(page) { // private
      return (page - 1) * this.#LIMIT;
    }

    static #end(page) { // private
      return page * this.#LIMIT;
    }
}
