import express, {Request, Response} from 'express'
// interfaces
import Item from '../interfaces/item.interface'

export const indexRoutes = express.Router();

indexRoutes.get('/items', async(request: Request, response: Response) => {
  // to do something
  const items: Item[] = [
    {
      author: 'Juan Jose',
      content: 'test text for content field',
      title: 'The infinity'
    }
  ]

  response.status(200).send({
    data: items,
    status: 200
  })
})