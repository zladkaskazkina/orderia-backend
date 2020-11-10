const database = require('../../config/database');

const TestController = () => {
  const index = async (req, res) => {
    const users = await database.query('SELECT * FROM users');

    return res.status(200).json({ id: users[0][0].id, email: users[0][0].email });
  };

  return {
    index,
  };
};


module.exports = TestController;
