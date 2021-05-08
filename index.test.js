const superagent = require("superagent")

try {
    const res = await request
      .get('https://reqres.in/api/users?page=2');
    // res.body, res.headers, res.status
  } catch(err) {
    // err.message, err.response
  }