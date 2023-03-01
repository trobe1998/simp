/** @format */

import React, {useState} from "react";
import style from "../assets/css/admin.module.css";
import { type data } from "../pages/admin/admin-dashboard";

type propsType = {
  action: string | boolean;
  closeModal: React.Dispatch<React.SetStateAction<string | boolean>>;
  data: data | undefined;
};
const Modal: React.FC<propsType> = ({action, closeModal, data}) => {
  console.log(data);
  const [newUser, setNewUser] = useState(
    data?.fullName === undefined
      ? {
          fullName: "",
          email: "",
          password: "",
          status: "",
        }
      : data
  );
  const [trn, setTrn] = useState({
    description: "",
    type: "",
    card: "",
    date: "",
    amount: "",
    status: 0,
  });

  const addNewUser = async (e: any) => {
    e.preventDefault()

   try {
     const response = await fetch(`/api/admin/user/${newUser.status}`, {
       method: "POST",
       body: JSON.stringify(newUser),
       headers: {"Content-Type": "application/json"},
     });
    const data = await response.json();
    console.log(data);
    closeModal(false);
   } catch (error) {
    console.log('error', error)
    
   }
  };

  const updateUser = async (id: string | undefined) => {
    const response = await fetch(`/api/admin/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(newUser),
      headers: {"Content-Type": "application/json"},
    });
    const data = await response.json();
    console.log(data);
    closeModal(false);
  };
  // update input field  for adding new user
  const setUserAdd = (e: any) => {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // update input field  for editing user
  const setUserEdit = (e: any) => {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // add new transaction to user
  const addTransaction = async (id: string) => {
    console.log(id);
    // const response = await fetch("/api/admin/transaction/newTransaction", {
    //   method: "POST",
    //   body: JSON.stringify(trn),
    //   headers: {"Content-Type": "application/json"},
    // });
    // const data = await response.json();
    // console.log(data);
    // closeModal(false);
  };

  console.log(trn);

  return (
    <>
      {action === "add" ? (
        //   add modal
        <div className={style.modal_wrapper}>
          <i className="mdi mdi-close" onClick={() => closeModal(false)}></i>
          <form
            className={`d-flex flex-column justify-content-center align-items-center ${style.edit_wrapper}`}
            onSubmit={(e)=> addNewUser(e)}
          >
            <p>Add new user</p>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="fullName"
                value={newUser.fullName}
                onChange={setUserAdd}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">email</label>

              <input
                type="text"
                name="email"
                value={newUser.email}
                onChange={setUserAdd}
                className="form-control"
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="username">password</label>

              <input
                type="text"
                name={"password"}
                value={newUser.password}
                onChange={setUserAdd}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">status</label>

              <input
                type="number"
                name="status"
                value={newUser.status}
                onChange={setUserAdd}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success" >
              add new user
            </button>
          </form>
        </div>
      ) 
      
      
      : action === "del" ? (
        //   delete modal
        <div className={style.modal_wrapper}>
          <i className="mdi mdi-close" onClick={() => closeModal(false)}></i>
          <form
            className={`d-flex flex-column justify-content-center align-items-center ${style.edit_wrapper}`}
          >
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="username">email</label>

              <input type="text" name="" id="" className="form-control" />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="username">password</label>

              <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="username">status</label>

              <input type="text" name="" id="" className="form-control" />
            </div>
          </form>
        </div>
      ) 
      
          : action === "edit" ? (
        //   edit modal
        <div className={style.modal_wrapper}>
          <i className="mdi mdi-close" onClick={() => closeModal(false)}></i>
              <form
                onSubmit={()=>  updateUser(data?._id)}
            className={`d-flex flex-column justify-content-center align-items-center ${style.edit_wrapper}`}
          >
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="fullName"
                value={newUser?.fullName}
                onChange={setUserEdit}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">email</label>

              <input
                type="text"
                name="email"
                value={newUser?.email}
                onChange={setUserEdit}
                className="form-control"
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="username">password</label>

              <input
                type="text"
                name="password"
                value={newUser?.password}
                onChange={setUserEdit}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">status</label>

              <input
                type="text"
                name="status"
                value={newUser?.status}
                onChange={setUserEdit}
                className="form-control"
              />
            </div>
            <button
            type="submit"
              className="btn btn-success"
            
            >
              update user
            </button>
          </form>
        </div>
      ) 
      
            : action === "addT" ? (
        // add transactions
        <p>pp</p>
      ) : null}
    </>
  );
};

export default Modal;
