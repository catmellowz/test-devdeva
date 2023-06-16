import { createContext, useState } from 'react';

export const UserListContext = createContext();

export default function UserListProvider({ children }) {
  const [userList, setUserList] = useState([
    {
      id: 1,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Kornkamol',
      lastName: 'Kerdthong',
      gender: 'Female',
      birthday: new Date(),
    },
  ]);

  const handleDelete = (id) => {
    const deleteUser = userList.filter((el) => el.id !== id);
    setUserList(deleteUser);
  };

  return (
    <>
      <UserListContext.Provider
        value={{ userList, setUserList, handleDelete }}
      >
        {children}
      </UserListContext.Provider>
    </>
  );
}
