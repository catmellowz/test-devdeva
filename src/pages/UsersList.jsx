import Button from '../components/Button';
import UserManagement from '../components/UserManagement';
import TableList from '../components/TableList';
import './UsersList.css';
import { Link } from 'react-router-dom';
import userUserList from '../hooks/useUserList';
import Pagination from '../components/Pagination';

export default function UsersList() {
  const { userList, handleDelete } = userUserList();

  const totalPage = Math.ceil(userList.length / 5);

  console.log(totalPage);
  return (
    <>
      <div>
        <div>
          <UserManagement />
        </div>
        <div className='list-container'>
          <div className='user-list-bar'>
            <div className='users-list'>Users List</div>
            <Link to='/create'>
              <Button text={'Add +'} className={'button-blue-add'} />
            </Link>
          </div>
          <div>
            <TableList
              userList={userList}
              handleDelete={handleDelete}
            />
            <Pagination totalPage={totalPage} />
          </div>
        </div>
      </div>
    </>
  );
}
