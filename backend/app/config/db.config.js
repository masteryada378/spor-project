// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "123456",
//     DB: "testdb",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };
module.exports = {
    HOST: "127.0.0.1", // Рекомендовано використовувати IPv4 замість "localhost"
    USER: "root",
    PASSWORD: "11115", // Ваш оновлений пароль
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
