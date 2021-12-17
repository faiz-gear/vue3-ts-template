let BASE_URL = ''
const TIMEOUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
}

export { BASE_URL, TIMEOUT }
