import { Col, Row} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../UserCard";
import { setUsers } from "../../features/users";
import "./Users.css";


const User = () => {
   const userList = useSelector((state) => state.users);
   const dispatch = useDispatch();
   console.log(userList);
   const users = userList.currentUsers;

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => {
            dispatch(setUsers(data));
         });
   }, [dispatch]);

   if (userList.loading) {
      return (
        <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
        </div>
      );
   }
   return (
      <div style={{ margin: "15px" }}>
         <Row gutter={[32, 32]}>
            {users.map((user) => (
               <Col
                  key={user.id}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
               >
                  <UserCard user={user} />
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default User;
