const loader = require("loader")
const axios = require("axios");
const assert = require("assert");
 

 
const baseURL = "https://reqres.in/api";
 
const ax = axios.create({
  baseURL,
});
 
function testListUser() {
  ax.get("/users?page=2")
    .then((res) => {
      const { data, status, statusText } = res;
      console.log("data = ", data);
    //   console.log("status = ", status);
    //   console.log("status Text = ", statusText);
 
      assert.strictEqual(status, 200);
    })
    .catch((err) => {
      console.log(err);
    });
}

function testSingleUser() {
    ax.get("/users/2")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testSingleUserNotFound() {
    ax.get("/users/23")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 404);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testSingleUserNotFound() {
    ax.get("/unknown")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 404);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testListResource() {
    ax.get("/unknown")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testSingleListResource() {
    ax.get("/unknown/2")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testSingleListResourceNotFound() {
    ax.get("/unknown/23")
      .then((res) => {
        const { data, status, statusText } = res;
        console.log("data = ", data);
   
        assert.strictEqual(status, 404);
      })
      .catch((err) => {
        console.log(err);
      });
}
 
function testCreateUser() {
  ax.post("/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((res) => {
      const { data, status } = res;
 
      // assert.strictEqual()
      console.log(data);
      assert.strictEqual(status, 200);
    })
    .catch((err) => {
      console.log(err);
    });
}

function testUpdateUser() {
    ax.post("/users/2", {
      name: "morpheus",
      job : "zion resident",
    })
      .then((res) => {
        const { data, status } = res;
   
        // assert.strictEqual()
        console.log(data);
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testRegisterUser() {
    ax.post("/register", {
      email: "eve.holt@reqres.in",
      password : "pistol",
    })
      .then((res) => {
        const { data, status } = res;
   
        // assert.strictEqual()
        console.log(data);
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

function testRegisterFailed() {
    ax.post("/register", {
      email: "sydney@fife"
    })
      .then((res) => {
        const { data, status } = res;
   
        // assert.strictEqual()
        console.log(data);
        assert.strictEqual(status, 200);
      })
      .catch((err) => {
        console.log(err);
      });
}

testListUser();
testSingleUser();
testSingleUserNotFound();
testSingleUserNotFound();
testListResource();
testSingleListResource();
testSingleListResourceNotFound();

testCreateUser();
testUpdateUser();
testRegisterUser();
testRegisterFailed();