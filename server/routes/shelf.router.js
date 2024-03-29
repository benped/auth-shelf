const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    console.log('are you here');
    if (req.isAuthenticated()) {
        console.log('/shelf GET route');
        console.log('is authenticated', req.isAuthenticated());
        console.log('user', req.user);
        const queryText = `SELECT * FROM "item";`;
        pool.query(queryText).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
    // res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", (req, res) => {
  let queryText = `insert into item ("description", "image_url","user_id") values
  ($1,$2,$3);`;
  console.log("Req.user.id is", req.user.id);

  let queryInserts = [req.body.description, req.body.imageURL, req.user.id];
  if (req.isAuthenticated()) {
    pool
      .query(queryText, queryInserts)
      .then((results) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("error in post", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
}); // end of

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
  let queryText = `DELETE FROM "item" WHERE id = $1;`;
  let queryInsert = req.params.id;

  if (req.isAuthenticated()) {
    pool
      .query(queryText, [queryInsert])
      .then((results) => {
        console.log("Success on delete", results);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log("Error on delete,", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
    console.log('/shelf put route', req.body);
    const queryText = `UPDATE "item"
  SET "description" =  $1, "image_url" = $2
  WHERE id = $3;`;
    // endpoint functionality

    const queryValues = [req.body.description, req.body.image_url, req.params.id];

    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating item', error);
        res.sendStatus(500);
    })
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => { // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => { // endpoint functionality
});

module.exports = router;
