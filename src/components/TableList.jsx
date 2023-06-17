import { Link } from 'react-router-dom';
import Button from './Button';
import ProfilePicture from './ProfilePicture';
import { ReactComponent as EditButton } from '../assets/edit.svg';
import { ReactComponent as DeleteButton } from '../assets/delete.svg';
import './TableList.css';

export default function TableList({ userList, handleDelete }) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <>
      <div className='main-table'>
        <table>
          <thead>
            <tr>
              <th>Profile picture</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((el) => (
              <tr key={el.id}>
                <td className={'profile-table'}>
                  <ProfilePicture
                    profilePic={el.profilePicture}
                    className={'profile-table-list'}
                  />
                </td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.gender ? el.gender : '-'}</td>
                <td>
                  {el.birthday
                    ? el.birthday
                        .toLocaleDateString('en-SG', options)
                        .replace(',', '')
                    : '-'}
                </td>
                <td className='edit-delete-button'>
                  <Link to={`/create?id=${el.id}`}>
                    <Button
                      className={'button-yellow'}
                      text={'Edit'}
                    />
                    <EditButton className='edit-button' />
                  </Link>
                  <Button
                    onClick={() => handleDelete(el.id)}
                    className={'button-red'}
                    text={'Delete'}
                  />
                  <DeleteButton
                    onClick={() => handleDelete(el.id)}
                    className='delete-button'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
