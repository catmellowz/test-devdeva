import { createContext, useState } from 'react';

export const UserListContext = createContext();

export default function UserListProvider({ children }) {
  const [userList, setUserList] = useState([
    {
      id: 1,
      profilePicture:
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
