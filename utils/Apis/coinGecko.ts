import { coinGeckoApiUrl } from '../constants'

const extractBody = (res: Response) => {
  if (res.ok) {
    return res.json()
  } else {
    return res.text().then((text) => {
      console.log('Error: ', text)
      let errMessage
      try {
        const err = JSON.parse(text)
        errMessage = err.message
      } catch (error) {
        // do nothing
      }
      throw new Error(errMessage || text)
    })
  }
}

export const fetchEthereumPriceInUSD = async () =>
  fetch(`${coinGeckoApiUrl}/simple/price?ids=ethereum&vs_currencies=usd`, {
    method: 'GET',
  }).then((res) => extractBody(res))
