/** @format */

import React, {useEffect, useState} from "react";
import style from "../../assets/css/dash.module.css";
import {HomeNav, HomeSidebar, Card, DashView, Payment} from "../../components";

const Dashboard = () => {
  // capture screen size to show or hide sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const [shipment, setShipment] = useState([]);
  const [user, setUser] = useState({
    _id: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [view, setView] = useState(1);
  const toggle = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);
  };
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`/api/user`);
      const data = await response.json();

      setUser(data);
    };

    getUser();
  }, [showSidebar]);

  return (
    <>
      {user._id !== "" ? (
        <div>
          <div className={style.container}>
            <HomeNav show={showSidebar} toggle={toggle} />
            <HomeSidebar
              show={showSidebar}
              setShow={setShowSidebar}
              set={setView}
              view={view}
            />
            {view === 1 && user._id !== "" ? (
              <DashView show={showSidebar} user={user} />
            ) : view === 2 && user._id !== "" ? (
              <Card show={showSidebar} />
            ) : view === 3 && user._id !== "" ? (
              <Payment show={showSidebar} />
            ) : null}
          </div>
        </div>
      ) : (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          loading...
        </h3>
      )}
    </>
  );
};

export default Dashboard;
