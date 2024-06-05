// Instead of using require, use dynamic import
import('chalk').then((chalk) => {
    console.log(chalk.default.blue('Hello wadhwA!'));
}).catch((error) => {
    console.error('Error:', error);
});

//validator is also an npm package
const validator = require("validator");
const res = validator.isEmail("chanchal@gmail.com");
console.log(res);
