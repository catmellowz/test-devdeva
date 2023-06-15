import { useContext } from 'react';
import { UserListContext } from '../contexts/UserListContext';

export default function userUserList() {
  return useContext(UserListContext);
}
