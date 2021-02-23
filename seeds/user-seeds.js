const { User } = require('../models');

const userData = [
    {
        username: "ross_gellar",
        email: "ross_gellar@gmail.com",
        password: "password1"
    },
    {
        username: "joey_tribbiani",
        email: "joey_tribbiani@gmail.com",
        password: "password2"
    },
    {
        username: "chandler_bing",
        email: "chandler_bing@gmail.com",
        password: "password3"
    },
    {
        username: "rachel_green",
        email: "rachel_green@gmail.com",
        password: "password4"
    },
    {
        username: "monica_gellar",
        email: "monica_gellar@gmail.com",
        password: "password5"
    },
    {
        username: "phoebe_buffay",
        email: "phoebe_buffaya@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
