import { useCallback } from 'react'
const useModal = () => {
  const openModal = useCallback((id: string): void => {
    const modal = document.getElementById(id) as HTMLDialogElement | null
    modal?.showModal()
  }, [])
  const closeModal = useCallback((id: string) => {
    const modal = document.getElementById(id) as HTMLDialogElement | null
    if (modal) {
      modal.close()
    }
  }, [])

  return { openModal, closeModal }
}
export default useModal
