import { ErrorServer } from '@utils/interfaces/error-server.interface'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
// interface HandleErrorsProp {
//   error: unknown
//   customMessage: string
//   containerId?: string
// }
export const showError = (
  error: unknown,
  customMessage: string,
  containerId?: string,
) => {
  console.log('handle error:', error)
  let localMessage = customMessage
  if (error instanceof AxiosError && error.response)
    localMessage = `${customMessage}: ${(error.response.data as ErrorServer).message}`
  if (error instanceof AxiosError && !error.response)
    localMessage = `${customMessage}: ${error.message}`
  if (!(error instanceof AxiosError))
    localMessage = `${customMessage}: ${error}`
  if (containerId) toast.error(localMessage, { containerId })
  else toast.error(localMessage)
}
