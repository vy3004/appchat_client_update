import { Avatar } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function SearchList({ contacts, changeChat }) {
  const { setRoomChat, roomChat, rooms, setShowInfoRoom } =
    useContext(AppContext);

  useEffect(() => {
    setShowInfoRoom(false);
  }, [roomChat]);

  const click = (contact) => {
    changeChat(contact);
  };

  return (
    <div className="search-list">
      <span
        style={{ fontWeight: "bold", fontSize: "16px", paddingLeft: "0.8rem" }}
      >
        Tìm gần đây{" "}
      </span>

      {/* Data tets */}
      {contacts.map((contact, index) => {
        return (
          <div className="contact" onClick={() => click(contact)}>
            <div className="avt">
              {contact.avatarImage ? (
                <Avatar size={60} src={contact.avatarImage}></Avatar>
              ) : (
                <Avatar size={60}>
                  <span style={{ fontSize: "34px" }}>
                    {contact.username?.charAt(0)?.toUpperCase()}
                  </span>
                </Avatar>
              )}
            </div>
            <div className="name">
              <h3>{contact.username}</h3>
            </div>
          </div>
        );
      })}

      {rooms.map((room, index) => {
        return (
          <div className="contact" onClick={() => setRoomChat(room)}>
            <div className="avt">
              <Avatar size={60} src={room.avatarImage}>
                {room.avatarImage
                  ? ""
                  : room.roomName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </div>
            <div className="name">
              <h3>{room.roomName}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
