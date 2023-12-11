import { MouseEvent, RefObject } from 'react'

export const useModalCloseHandler = (
  closeModal: () => void,
  modalRef: RefObject<HTMLDivElement>
) => {
  const handleModalClose = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalRef.current.contains(event.target as Node)) {
      return
    }
    closeModal()
  }

  return handleModalClose
}
