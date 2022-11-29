import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isInfoUserModalOpen, setIsInfoUserModalOpen] = useState(false);
  const [isInfoUserOtherModalOpen, setIsInfoUserOtherModalOpen] =
    useState(false);
  const [isInfoGroupModalOpen, setIsInfoGroupModalOpen] = useState(false);
  const [isUpdateInfoUserModalOpen, setIsUpdateInfoUserModalOpen] =
    useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [isAddFriendModalOpen, setIsAddFriendModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLogoutChatRoomModalOpen, setIsLogoutChatRoomModalOpen] =
    useState(false);
  const [isShowChatRoomInfo, setIsShowChatRoomInfo] = useState(false);
  const [isDeleteChatHistoryModalOpen, setIsDeleteChatHistoryModalOpen] =
    useState(false);
  const [isDeleteGroupModalOpen, setIsDeleteGroupModalOpen] = useState(false);
  const [isRenameGroupModalOpen, setIsRenameGroupModalOpen] = useState(false);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const [isMessageWindow, setIsMessageWindow] = useState(true);
  const [isFriendWindow, setIsFriendWindow] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState();
  const [room, setRoom] = useState(undefined);
  const [roomChat, setRoomChat] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const [isShowInfoRoom, setShowInfoRoom] = useState(false);
  const [currentsocket, setcurrentsocket] = useState();

  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const clearState = () => {
    setIsInfoUserModalOpen(false);
    setIsInfoUserOtherModalOpen(false);
    setIsInfoGroupModalOpen(false);
    setIsUpdateInfoUserModalOpen(false);
    setIsAddUserModalOpen(false);
    setIsAddGroupModalOpen(false);
    setIsAddMemberModalOpen(false);
    setIsLogoutModalOpen(false);
    setIsLogoutChatRoomModalOpen(false);
    setIsShowChatRoomInfo(false);
    setIsDeleteChatHistoryModalOpen(false);
    setIsDeleteGroupModalOpen(false);
    setIsRenameGroupModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isInfoUserModalOpen,
        setIsInfoUserModalOpen,
        isInfoUserOtherModalOpen,
        setIsInfoUserOtherModalOpen,
        isInfoGroupModalOpen,
        setIsInfoGroupModalOpen,
        isUpdateInfoUserModalOpen,
        setIsUpdateInfoUserModalOpen,
        isAddUserModalOpen,
        setIsAddUserModalOpen,
        isAddGroupModalOpen,
        setIsAddGroupModalOpen,
        isAddMemberModalOpen,
        setIsAddMemberModalOpen,
        isAddFriendModalOpen,
        setIsAddFriendModalOpen,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        isLogoutChatRoomModalOpen,
        setIsLogoutChatRoomModalOpen,
        isShowChatRoomInfo,
        setIsShowChatRoomInfo,
        isDeleteChatHistoryModalOpen,
        setIsDeleteChatHistoryModalOpen,
        isDeleteGroupModalOpen,
        setIsDeleteGroupModalOpen,
        isRenameGroupModalOpen,
        setIsRenameGroupModalOpen,
        isSearchInput,
        setIsSearchInput,
        isMessageWindow,
        setIsMessageWindow,
        isFriendWindow,
        setIsFriendWindow,
        contacts,
        setContacts,
        user,
        setUser,
        room,
        setRoom,
        roomChat,
        setRoomChat,
        currentChat,
        setCurrentChat,
        rooms,
        setRooms,
        currentsocket,
        setcurrentsocket,
        // isActive,
        // setIsActive,
        clearState,
        isShowInfoRoom,
        setShowInfoRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
