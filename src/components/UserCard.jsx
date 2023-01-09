import { Card, Space } from "antd";
import {
   MailOutlined,
   PhoneOutlined,
   HeartOutlined,
   HeartFilled,
   EditOutlined,
   DeleteFilled,
   GlobalOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Typography } from "antd";
import UpdateModal from "./UpdateModal";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUsers } from "../features/users";

const { Text, Title } = Typography;

const UserCard = ({ user }) => {
   const users = useSelector((state) => state.users.currentUsers);
   const dispatch = useDispatch();
   const [like, setLike] = useState(false);
   const [edit, setEdit] = useState(false);

   const { id, name, email, phone, website, username } = user;

   const handleDelete = () => {
      const restUsers = users.filter((usr) => usr.id !== id);
      dispatch(setCurrentUsers(restUsers));
   };

   return (
      <Card
         style={{
            width: "100%",
            backgroundColor: "#F5F5F5",
         }}
         bodyStyle={{
            backgroundColor: "white",
         }}
         cover={
            <img
               alt="userImage"
               src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
               style={{ height: "200px", width: "200px", margin: "auto" }}
            />
         }
         actions={[
            <>
               {like ? (
                  <HeartFilled
                     onClick={() => setLike((prev) => !prev)}
                     style={{ fontSize: "18px", color: "red" }}
                     key="setting"
                  />
               ) : (
                  <HeartOutlined
                     onClick={() => setLike((prev) => !prev)}
                     style={{ fontSize: "18px", color: "red" }}
                     key="setting"
                  />
               )}
            </>,
            <EditOutlined onClick={() => setEdit(!edit)} style={{ fontSize: "18px" }} key="edit" />,
            <DeleteFilled onClick={handleDelete} style={{ fontSize: "18px" }} key="ellipsis" />,
         ]}
      >
         <Space direction="vertical">
            <Title level={5} style={{ margin: "0" }}>
               {name}
            </Title>
            <Text style={{ color:"#000000A6", fontSize:"14px" }}>
               <MailOutlined /> {email}
            </Text>
            <Text style={{ color:"#000000A6", fontSize:"14px" }}>
               <PhoneOutlined /> {phone}
            </Text>
            <Text style={{ color:"#000000A6", fontSize:"14px" }}>
               <GlobalOutlined /> http://{website}
            </Text>
         </Space>

         <UpdateModal user={user} edit={edit} setEdit={setEdit} />
      </Card>
   );
};

export default UserCard;
