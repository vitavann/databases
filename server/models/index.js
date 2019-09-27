var db = require('../db');
// possibly require a pathway from chatterbox????

module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var selectUsers = `SELECT * FROM users`;
      db.query(selectUsers, (error, results) => {
        if (error) {
          throw (error);
        }
        console.log(results);
        callback(results);
      });
    },
    post: function (params, callback) {
      db.query(`INSERT into users values ${json.username}`, (params, results) => {
        callback(params, results);
      });
    }
  }
};

