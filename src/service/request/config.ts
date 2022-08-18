let BASE_URL: string
const TIMEOUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org/get'
} else {
  BASE_URL = '192.168.148.154'
}

export { BASE_URL, TIMEOUT }
