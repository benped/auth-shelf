const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  let queryText=`insert into item ("description", "image_url","user_id") values
  ($1,$2,$3);`;
  console.log('Req.user.id is', req.user.id);
  
  let queryInserts = [req.body.description,req.body.imageURL,req.user.id];
  if (req.isAuthenticated())
  pool.query(queryText,queryInserts)
  .then((results) => {
    res.sendStatus(200);
  }) .catch (error => {
    console.log('error in post', error)
    res.sendStatus(500);
  });

}); // end of



/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  


});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
