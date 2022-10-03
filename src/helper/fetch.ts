const request = (url: string, params = {}, method = 'GET') => {
  let options: any = {
    method,
  }

//   options.body = JSON.stringify(params)

  return fetch(url, params).then((response) => {
    const t = 0
    const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t))

    if (response.status === 204) {
      // No content
      // return;
      return delay(t).then(() => void 0)
    }

    const res = delay(t).then(() => response.json())
    console.log({ res })
    return res
    // return delay(t).then(() => response.json())
  })
}

const post = (url: string, params: { method: string; headers: { [key: string]: string }; body: string }) =>
  request(url, params, 'POST')

export { post }
