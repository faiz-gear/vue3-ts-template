import lyRequest from '../index'

export function test() {
  return lyRequest.get({
    url: 'http://httpbin.org/get',
    params: {
      name: 'zs'
    }
  })
}
