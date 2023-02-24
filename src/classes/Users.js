export default class Users {
    static #arr = [];

    static getArr() {
      return this.#arr;
    }

    static findUser(username) {
      return this.#arr.find(user => user.username === username);
    }

    static pushUser(user) {
      // checar se pode dar push

      this.#arr.push(user);
      return;
    }
}
