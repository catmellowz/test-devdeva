import Button from '../components/Button';
import UserManagement from '../components/UserManagement';
import TableList from '../components/TableList';
import './UsersList.css';
import { Link } from 'react-router-dom';
import userUserList from '../hooks/useUserList';
import Pagination from '../components/Pagination';
import { useMemo, useState } from 'react';

const PageSize = 5;

export default function UsersList() {
  const { userList, handleDelete } = userUserList();

  const totalPage = Math.ceil(userList.length / 5);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return userList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
              userList={currentTableData}
              handleDelete={handleDelete}
            />
            <Pagination
              totalPage={totalPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
