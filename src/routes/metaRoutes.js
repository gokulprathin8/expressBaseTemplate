const express = require('express');
const meta = express.Router();

const router= (nav) => {
    meta.route('/meta')
        .get(((req, res) => {
            res.send("Core Meta Route");
        }));

    meta.route('/meta/:id')
        .get(((req, res) => {
            const id = req.params.id;
            res.send(`Single Meta Route for ${id}`);
        }));

}

module.exports = router;