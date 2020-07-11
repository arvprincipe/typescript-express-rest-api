import express from 'express'
// Create a new express app instance
const app: express.Application = express();
const port = 80; // default port to listen

// call routes
import { indexRoutes } from './routes/items.routes'

// define a route handler for the default home page
app.use('/api', indexRoutes)

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});