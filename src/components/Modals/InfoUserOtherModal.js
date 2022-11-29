import React, { useContext } from "react";
import { Avatar, Button, Image, Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import bg_user_default from "../../assets/images/bg_user_default.jfif";
import {
  DeleteOutlined,
  EditOutlined,
  StopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./style.css";

export default function InfoUserOtherModal() {
  const { isInfoUserOtherModalOpen, setIsInfoUserOtherModalOpen } =
    useContext(AppContext);

  const handleCancel = () => {
    setIsInfoUserOtherModalOpen(false);
  };

  const user = {
    displayName: "Trần Nguyễn Kha Vỹ",
    photoURL: "",
    phoneNumber: "0986504217",
    gender: "Nam",
    birthday: "30 tháng 4, 2001",
    isFriend: false,
    generalGroup: 3,
  };

  return (
    <div>
      <Modal
        title="Thông tin tài khoản"
        centered // căn giữa
        open={isInfoUserOtherModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="md-info-user-header user-other">
          <Image
            className="md-info-user-img"
            src={user.photoURL ? user.photoURL : bg_user_default}
          />
          <Avatar className="md-info-user-avt" size={70} src={user.photoURL}>
            {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div className="chat-room-info-body-btn-name">
            <span
              style={{
                marginLeft: "2rem",
              }}
            >
              {user.displayName}
            </span>
            <Button type="text" icon={<EditOutlined />} />
          </div>
          <div className="user-orther-btn">
            {user.isFriend ? "" : <Button type="text">Kết bạn</Button>}
            <Button type="text">Nhắn tin</Button>
          </div>
        </div>
        <div className="md-info-user-body user-other user-other-body">
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            Thông tin cá nhân
          </span>
          <div className="md-info-user-body-bd">
            <div className="md-info-user-body-bd-1">
              <span>Điện thoại</span>
              <span>Giới tính</span>
              <span>Ngày sinh</span>
            </div>
            <div className="md-info-user-body-bd-2">
              <span>{user.phoneNumber}</span>
              <span>{user.gender}</span>
              <span>{user.birthday}</span>
            </div>
          </div>
        </div>
        <div className="user-other-footer">
          <Button type="text" icon={<TeamOutlined />}>
            Nhóm chung ({user.generalGroup})
          </Button>
          <Button type="text" icon={<StopOutlined />}>
            Chặn tin nhắn
          </Button>
          {user.isFriend ? (
            <Button type="text" icon={<DeleteOutlined />}>
              Xóa khỏi danh sách bạn bè
            </Button>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </div>
  );
}
