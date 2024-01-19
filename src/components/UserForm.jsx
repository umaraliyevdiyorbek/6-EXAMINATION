import React, { useState } from 'react'
import ModalForm from './ModalForm'

export default function UserForm() {
  const [modal, setModal] = useState(false)
  const [text1, setText1] = useState("")
  const [users, setUsers] = useState([
    { id: 1, text: "Opne", title: "text1", status: "open" },
    { id: 2, text: "Pending", title: "text2", status: "pending" },
    { id: 3, text: "Payload", title: "text3", status: "payload" },
    { id: 4, text: "Progress", title: "text4", status: "progress" },
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let status = e.target[1].value;
    let id = text1.id
    if (text1 !== id) {
      users?.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.status = status;
        }
      })
    } else {
      let payload = {
        id: users.length + 1,
        title,
        status,
      }
      users.push({ ...payload });
      setUsers([...users])
    }
    setModal(false);
    setText1("")
  }

  const remove = (id) => {
    let filteredUsers = users.filter(item => item.id !== id)
    setUsers([...filteredUsers])
  }

  const editUser = (item) => {
    setText1(item)
    setModal(true)
  }

  const toggle = () => {
    setModal(false)
    setText1("")
  }

  return (
    <div className=' container my-3'>
      <ModalForm modal={modal} toggle={toggle} handleSubmit={handleSubmit} text1={text1} />
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h2>open</h2>
            </div>
            {
              users.filter(item => item.status === "open").map((item, index) => {
                return <div className="card-body d-flex justify-content-between" key={index}>
                  <h3>{item.title}</h3>
                  <div>
                    <button onClick={() => editUser(item)} className='btn btn-primary'>edit</button>
                    <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
                  </div>
                </div>
              })
            }
            <div className="card-footer text-center">
              <button onClick={() => setModal(true)} className='btn btn-success'>add user</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h2>pending</h2>
            </div>
            {
              users.filter(item => item.status === "pending").map((item, index) => {
                return <div className="card-body d-flex justify-content-between" key={index}>
                  <h3>{item.title}</h3>
                  <div>
                    <button onClick={() => editUser(item)} className='btn btn-primary'>edit</button>
                    <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
                  </div>
                </div>
              })
            }
            <div className="card-footer text-center">
              <button onClick={() => setModal(true)} className='btn btn-success'>add user</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h2>payload</h2>
            </div>
            {
              users.filter(item => item.status === "payload").map((item, index) => {
                return <div className="card-body d-flex justify-content-between" key={index}>
                  <h3>{item.title}</h3>
                  <div>
                    <button onClick={() => editUser(item)} className='btn btn-primary'>edit</button>
                    <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
                  </div>
                </div>
              })
            }
            <div className="card-footer text-center">

<button onClick={() => setModal(true)} className='btn btn-success'>add user</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h2>progress</h2>
            </div>
            {
              users.filter(item => item.status === "progress").map((item, index) => {
                return <div className="card-body d-flex justify-content-between" key={index}>
                  <h3>{item.title}</h3>
                  <div>
                    <button onClick={() => editUser(item)} className='btn btn-primary'>edit</button>
                    <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
                  </div>
                </div>
              })
            }
            <div className="card-footer text-center">
              <button onClick={() => setModal(true)} className='btn btn-success' >add user</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}