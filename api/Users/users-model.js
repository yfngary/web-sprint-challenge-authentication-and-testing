const db = require('../../data/dbConfig')

/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
function find() {
  return db('users')
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findByUsername(username) {
  return db('users').where({username}).first()
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(id) {
  return db('users')
  .where({id}).first()
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
  const [id] = await db('users').insert(user)
  return db ('users')
  .where({id}).first()
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findByUsername,
  findById,
  add
}