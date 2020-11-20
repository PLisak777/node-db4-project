const express = require('express');
const server = express();
const recipeRouter = require('./router/recipeRouter')

server.use(express.json());
server.use('/api/recipes', recipeRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
