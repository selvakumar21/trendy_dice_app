import { Form, Input, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/users";

   const UserModal = ({ edit, setEdit, user }) => {
   const users = useSelector((state) => state.users.currentUsers);
   const dispatch = useDispatch();
   const { id, name, email, phone, website, username } = user;
   const [form] = Form.useForm();
   const handleSubmit = () => {
      form
         .validateFields()
         .then((values) => {
            let updatedUser = users.find((user) => user.id === id);
            updatedUser = values;
            updatedUser.username = username;
            const allUsers = [...users]
            allUsers[id-1] = updatedUser;
            dispatch(setUsers(allUsers));
            setEdit(!edit);
         })
         .catch((error) => {
            console.log("Validate Failed:", error);
         });
   };
   return (
      <Modal title="Manage Info" open={edit} onOk={handleSubmit} onCancel={() => setEdit(!edit)}>
         <Form form={form} style={{marginTop: "50px", marginBottom: "50px", marginLeft: "30px"}}>
            <Form.Item
               label="Name"
               name="name"
               initialValue={name}
               rules={[{ required: true, message: "Please input your username!" }]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="email"
               name="email"
               initialValue={email}
               rules={[{ required: true, message: "Please input your email!" }]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="phone"
               name="phone"
               initialValue={phone}
               rules={[{ required: true, message: "Please input your phone!" }]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               label="website"
               name="website"
               initialValue={website}
               rules={[{ required: true, message: "Please input your website!" }]}
            >
               <Input />
            </Form.Item>
         </Form>
      </Modal>
   );
};

export default UserModal;
