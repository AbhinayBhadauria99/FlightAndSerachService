const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes);

module.exports = router;



/* Routes determine how URLs are mapped to specific controllers and actions. 
Each route specifies a URL pattern and the corresponding controller
 and action that should handle requests matching that pattern.
 */