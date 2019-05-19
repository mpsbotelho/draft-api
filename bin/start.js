const Api = require("../dist/api.js").default;

try {
  const api = new Api();
  api.main();
} catch (err) {
  console.error(err);
}