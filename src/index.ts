import express, { Request, Response } from 'express'

const app = express()

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello Typescript')
})

const port: number = 8000
app.listen(port, () => console.log(`SERVER ON! PORT : ${port}`))