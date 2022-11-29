import React, { useContext } from "react";
import { Avatar, DatePicker, Image, Input, Modal, Radio } from "antd";
import { AppContext } from "../../context/AppProvider";
import bg_user_default from "../../assets/images/bg_user_default.jfif";
import AvatarUploader from "react-avatar-uploader";
import "./style.css";

export default function UpdateInfoUserModal() {
  const { isUpdateInfoUserModalOpen, setIsUpdateInfoUserModalOpen } =
    useContext(AppContext);

  const handleUpdate = () => {
    setIsUpdateInfoUserModalOpen(false);
  };

  const handleCancel = () => {
    setIsUpdateInfoUserModalOpen(false);
  };

  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
    phoneNumber: "0986504217",
    gender: "Nam",
    birthday: "30 tháng 4, 2001",
  };

  return (
    <div>
      <Modal
        title="Cập nhật thông tin"
        centered // căn giữa
        open={isUpdateInfoUserModalOpen}
        onCancel={handleCancel}
        onOk={handleUpdate}
        cancelText="Hủy"
        okText="Cập nhật"
      >
        <form>
          <div className="md-info-user-header">
            <Image
              className="md-info-user-img"
              src={user.photoURL ? user.photoURL : bg_user_default}
            />
            {user.photoURL ? (
              <Avatar
                className="md-info-user-avt"
                size={70}
                src={user.photoURL}
              ></Avatar>
            ) : (
              <AvatarUploader
                className="md-update-info-user-avt"
                defaultImg="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                size={70}
                uploadURL="http://localhost:3000"
                fileType={"image"}
                style={{ width: "500px" }}
              />
            )}
          </div>
          <div className="md-u-info-user-form-body">
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              Thông tin cá nhân
            </span>
            <span>Tên hiển thị</span>
            <Input value={user.displayName} />
            <span>Giới tính</span>
            <Radio.Group defaultValue={user.gender === "Nam" ? "nam" : "nu"}>
              <Radio value="nam"> Nam </Radio>
              <Radio value="nu"> Nữ </Radio>
            </Radio.Group>
            <span>Ngày sinh</span>
            <DatePicker />
          </div>
        </form>
      </Modal>
    </div>
  );
}
