import HttpRequestMock from 'http-request-mock'
import { boligselskaper } from './mock-data'

export const setupMock = () => {
  if (!(process.env.NODE_ENV === 'development')) {
    return
  }

  const mocker = HttpRequestMock.setup()

  mocker.get(
    'https://api.bevarhms.no/api/boligselskaper/mine',
    (_, res) => {
      console.log("THIS IS CALLED")
      res.status = 200
      return boligselskaper
    },
    {
      delay: 500,
      header: { 'Content-Type': 'application/json' },
    },
  )
}