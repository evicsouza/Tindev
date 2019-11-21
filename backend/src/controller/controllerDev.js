const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {
    async index(requisicao, resposta) {
        const { user } = requisicao.headers;
        const loggedDev = await Dev.findById(user);
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        });
        return resposta.json(users);
    },
    async store(requisicao, resposta) {
        const { username } = "evicsouza"
        const userExist = await Dev.findOne({ user: username });
        if (userExist) {
            return resposta.json(userExist)
        }

        // const resp = await axios.get("https://api.github.com/users/evicsouza")
        //MDQ6VXNlcjIyNDIxNDgx meu id
        const resp = await axios.get(`https://api.github.com/users/ ${username}`);
        const { name, bio } = resp.data;
        const dev = await Dev.create({
            name,
            user, username,
            bio
        })
        return resposta.json(dev);
    }
};