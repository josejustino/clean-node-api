export type HttpResponse = {
  statusCode: number
  body: any
}

export type HttpRequest<T = any> = {
  body?: any
  headers?: any
  params?: T
  accountId?: string
}
