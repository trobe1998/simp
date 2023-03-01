/** @format */

import React, {useEffect, useState, useMemo, useCallback} from "react";
import style from "../../assets/css/admin.module.css";
import {Modal} from "../../components";

type idProp = {
  userId: string;
  closeModal: React.Dispatch<React.SetStateAction<string | boolean>>;
  toggleTrn: React.Dispatch<React.SetStateAction<boolean>>;
};
export type data = {
  _id: string | undefined;
  fullName: string;
  email: string;
  password: string;
  status: string;
};
type toggleProps = {
  toggleTrn: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
};
type trnType = {
  amount: string;
  card: string;
  date: string;
  description: string;
  status: string;
  type: string;
};
const TrnModal = ({toggleTrn, userId}: toggleProps) => {
  const [trn, setTrn] = useState({
    description: "",
    type: "",
    card: "",
    date: "",
    amount: "",
    status: "",
  });

  const setTransact = (e: any) => {
    setTrn((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const addTransaction = async (e: any, id: string) => {
    e.preventDefault();
    const response = await fetch(`/api/admin/transactions/${id}`, {
      method: "POST",
      body: JSON.stringify(trn),
      headers: {"Content-Type": "application/json"},
    });
    const data = await response.json();
    console.log(data);
  };
  console.log(trn);
  return (
    <div className={` ${style.modal_wrapper}`}>
      <i className="mdi mdi-close" onClick={() => toggleTrn(false)}></i>
      <form
        onSubmit={(e) => addTransaction(e, userId)}
        className={`row mx-auto justify-content-center align-items-center ${style.edit_wrapper}`}
      >
        <p className="col-12 d-flex justify-content-center align-items-center mb-2">
          <p> add new transaction</p>
        </p>
        <div className="form-group col-6 col-md-6">
          <label htmlFor="username">description</label>
          <input
            type="text"
            name="description"
            value={trn?.description}
            onChange={setTransact}
            className="form-control"
          />
        </div>
        <div className="form-group col-6 col-md-6">
          <label htmlFor="username">type</label>

          <input
            type="text"
            name="type"
            value={trn?.type}
            onChange={setTransact}
            className="form-control"
          />
        </div>{" "}
        <div className="form-group col-12 col-md-6">
          <label htmlFor="username">card</label>

          <input
            type="text"
            name="card"
            value={trn?.card}
            onChange={setTransact}
            className="form-control"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="username">date</label>

          <input
            type="text"
            name="date"
            value={trn?.date}
            onChange={setTransact}
            className="form-control"
          />
        </div>
        <div className="form-group col-12 col-md-6 ">
          <label htmlFor="username">amount</label>

          <input
            type="number"
            name="amount"
            value={trn?.amount}
            onChange={setTransact}
            className="form-control"
          />
        </div>
        <div className="form-group col-12 col-md-6 ">
          <label htmlFor="username">status</label>

          <input
            type="number"
            name="status"
            value={trn?.status}
            onChange={setTransact}
            className="form-control"
          />
        </div>
        <button className="btn btn-success" type="submit">
          add transaction
        </button>
      </form>
    </div>
  );
};
const Transactions = ({userId, closeModal, toggleTrn}: idProp) => {
  console.log("userID", userId);
  const [transact, setTransact] = useState([]);
  const memoTransact = useMemo(() => transact, []);

  const removeTrn = async (trnNo: string) => {
    try {
      const response = await fetch(
        `/api/admin/transactions/${userId}|${trnNo}`,
        {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
        }
      );
      const data = await response.json();
      console.log(data);
      setTransact(data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    try {
      const getUsers = async () => {
        const response = await fetch(`/api/admin/transactions/${userId}`);
        const data = await response.json();
        if (data.length > 0) {
          console.log("inner", transact);
          setTransact(data[0].userTransactions);
        } else {
          setTransact([]);
        }
      };
      getUsers();
    } catch (error) {
      console.log("error");
    }
  }, [memoTransact, userId]);
  console.log(transact);
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>description</th>
            <th>type</th>
            <th>card</th>
            <th>date</th>
            <th>amount</th>
            <th>status</th>
            <th>
              <button
                className="btn btn-primary"
                onClick={() => toggleTrn(true)}
              >
                <i className="mdi mdi-plus"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {transact &&
            transact.map((trns: trnType, i) => (
              <tr key={i}>
                <td scope="row">{trns.description}</td>
                <td>{trns.type}</td>
                <td>{trns.card}</td>
                <td>{trns.date}</td>
                <td>{trns.amount}</td>
                <td>{trns.status === "1" ? "successfull" : "declined"}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeTrn(`${i}`)}
                  >
                    <i className="mdi mdi-close"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [trn, setTrn] = useState(false);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<data>();
  const [modal, setModal] = useState<string | boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);

  const openModal = (action: string) => {
    setModal(action);
  };
  //  delete user
  const delUser = async (userId: string) => {
    console.log("del");
    try {
      const response = await fetch(`/api/admin/user/${userId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
      });
      const data = await response.json();
      console.log(data);
      setUpdated(updated ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //  auto update windows on change of action
    const getUser = async () => {
      try {
        const response = await fetch("/api/admin");
        const data = await response.json();
        // active user
        console.log(data);
        setUsers(data);
      } catch (error) {}
    };
    getUser();
  }, [modal, updated]);

  console.log(modal);
  return (
    <div className={style.admin_wrapper}>
      {modal ? (
        <Modal action={modal} closeModal={setModal} data={data} />
      ) : null}

      {trn ? <TrnModal userId={userId} toggleTrn={setTrn} /> : null}
      <table className={`table ${style.table}`}>
        <thead>
          <tr>
            <th>unique id</th>
            <th>username</th>
            <th>status</th>
            <th>action</th>
            <th>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setModal("add");
                  setData({
                    _id: data?._id,
                    fullName: "",
                    email: "",
                    password: "",
                    status: "",
                  });
                }}
              >
                <i className="mdi mdi-plus"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td scope="row">{user._id}</td>
              <td>{user.fullName}</td>
              <td>{user.status ? "Active" : "Non-active"}</td>
              <td className="d-flex gap-1">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setUserId(user._id);
                    setData(user);
                  }}
                >
                  <i className="mdi mdi-book"></i>
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setModal("edit");
                    setData(user);
                  }}
                >
                  <i className="mdi mdi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => delUser(user._id)}
                >
                  <i className="mdi mdi-close"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {userId.length !== 0 && (
        <Transactions
          userId={userId}
          closeModal={setModal}
          toggleTrn={setTrn}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
