import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
export default function ModalForm({ modal, toggle, handleSubmit, text1 }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          <h2>User Qo'shish</h2>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} id='form' className=' form-control'>
            <input type="text" defaultValue={text1?.title} placeholder='Enter your text' className=' form-control my-3' />
            <select defaultValue={text1?.status} className=' form-control' >
              <option value="" hidden>Tanlash</option>
              <option value="open">open</option>
              <option value="pending">pending</option>
              <option value="payload">ingpro</option>
              <option value="progress">progress</option>
            </select>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="submit" form='form' className='btn btn-success'>add user</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}