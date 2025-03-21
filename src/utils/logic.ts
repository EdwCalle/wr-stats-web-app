//TO DO IMPORTANT
//add securty in nosql injection and others securities options (backend)

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getTableHeaders(params: object) {
  return Object.keys(params)
}
