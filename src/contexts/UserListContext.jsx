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
    {
      id: 2,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Sompong',
      lastName: 'Jaidee',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 3,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Mali',
      lastName: 'Somjeed',
      gender: 'Female',
      birthday: new Date(),
    },
    {
      id: 4,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Sakda',
      lastName: 'Meeta',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 5,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Somjit',
      lastName: 'Deemak',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 6,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Malee',
      lastName: 'Mawmeow',
      gender: 'Female',
      birthday: new Date(),
    },
    {
      id: 1,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Kornkamol',
      lastName: 'Kerdthong',
      gender: 'Female',
      birthday: new Date(),
    },
    {
      id: 2,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Sompong',
      lastName: 'Jaidee',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 3,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Mali',
      lastName: 'Somjeed',
      gender: 'Female',
      birthday: new Date(),
    },
    {
      id: 4,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Sakda',
      lastName: 'Meeta',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 5,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Somjit',
      lastName: 'Deemak',
      gender: 'Male',
      birthday: new Date(),
    },
    {
      id: 6,
      profilePicture:
        'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
      firstName: 'Malee',
      lastName: 'Mawmeow',
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
