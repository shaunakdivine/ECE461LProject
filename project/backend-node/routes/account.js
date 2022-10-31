const { Router } = require('express');
const { USER_COLLECTION } = require('../utilities/database');
const { sha256 } = require('js-sha256');
const { TOKEN_MAP } = require('../utilities/global');

const router = Router();

router.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const user = await USER_COLLECTION.findOne({ email });

    // check if the user exists
    if (user) {
      res.send({
        status: false,
        error: "User already exists",
      });
      return;
    }

    await USER_COLLECTION.create({
      fname,
      lname,
      email,
      password,
      projectIds: [],
    });
    res.send({
      status: true,
      data: { email },
    });

  } catch (error) {
    res.send({
      status: false,
      error: error.toString()
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await USER_COLLECTION.findOne({ email });

    // check if the user even exists
    if (!user) {
      res.send({
        status: false,
        error: 'User not exist',
      });
      return;
    }

    console.log(user);

    // check if the password is correct
    if (password !== user.password) {
      res.send({
        status: false,
        error: 'Password incorrect',
      });
      return;
    }

    // deal with token
    const loginTime = Date.now();
    const token = sha256(`${email}-${loginTime}`);
    console.log(`token: ${token}`);
    TOKEN_MAP.set(email, {
      token,
      loginTime
    });
    res.send({
      status: true,
      data: {
        email,
        fname: user.fname,
        lname: user.lname,
        token,
      }
    });
  }
  catch (error) {
    res.send({
      status: false,
      error: error.toString(),
    });
  }
});

module.exports = router;