export const handleShowModal = (id: string): void => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  modal?.showModal()
}
export const handleCloseModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  if (modal && id === 'confirm') {
    modal.close()
  }
}
//TO DO IMPORTANT
//add securty in nosql injection and others securities options (backend)

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
