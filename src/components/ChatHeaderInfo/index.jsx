import React, { useState, useEffect, useContext } from "react";
import { Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { AppContext } from "../../context/AppProvider";

export default function ChatHeaderInfo({ currentChat }) {
  const { roomChat, contacts, user, setIsInfoUserOtherModalOpen } =
    useContext(AppContext);

  const [name, setname] = useState("");

  const [members, setMembers] = useState([]);
  useEffect(() => {
    if (roomChat !== undefined) {
      setname(roomChat.roomName);
      const memberss = [];
      contacts.forEach((element) => {
        if (roomChat.members.indexOf(element._id) >= 0) {
          memberss.push(element);
        }
      });
      memberss.push(user);
      setMembers(memberss);
    } else {
      setname(currentChat.username);
      // setMembers([])
    }
  });

  const user1 = {
    displayName: name,
    photoURL: "",
    onlineStatus: "Đang truy cập",
  };

  const handleOpenInfo = () => {
    setIsInfoUserOtherModalOpen(true);
  };

  return (
    <div className="chat-header-info">
      {roomChat === undefined ? (
        <div className="chat-header-info-user">
          <Button className="info-avatar-user" type="text">
            {currentChat.avatarImage ? (
              <Avatar
                size={60}
                src={currentChat.avatarImage}
                onClick={handleOpenInfo}
              />
            ) : (
              <Avatar size={60} onClick={handleOpenInfo}>
                <span style={{ fontSize: "34px" }}>
                  {currentChat.username?.charAt(0)?.toUpperCase()}
                </span>
              </Avatar>
            )}
          </Button>
          <div className="info-desc">
            <Typography.Text className="info-desc-name">
              {user1.displayName}
            </Typography.Text>
            <Typography.Text className="onlineStatus">
              {user1.onlineStatus}
            </Typography.Text>
          </div>
        </div>
      ) : (
        <div className="chat-header-info-group">
          <Button className="info-avatar-group" type="text">
            <Avatar.Group
              size={40}
              maxCount={1}
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            >
              {members.map((member) =>
                member.avatarImage ? (
                  <Avatar src={member.avatarImage} />
                ) : (
                  <Avatar>{member.username?.charAt(0)?.toUpperCase()}</Avatar>
                )
              )}
            </Avatar.Group>
          </Button>
          <div className="info-desc">
            <Typography.Text className="info-desc-name">
              {roomChat.roomName}
            </Typography.Text>
            <Button className="info-desc-members" type="text">
              <UserOutlined /> {roomChat.members.length} thành viên
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
