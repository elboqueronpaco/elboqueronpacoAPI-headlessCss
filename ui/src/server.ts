import express from 'express'
import next from 'next'

// Setting un Next App
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()
  app.all('*', (req:any, res: any) =>{
    return handle(req, res)
  })
  app.listen(3000)
})
