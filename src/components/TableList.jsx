import { Link } from 'react-router-dom';
import Button from './Button';
import ProfilePicture from './ProfilePicture';
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
                <td>{el.gender}</td>
                <td>
                  {el.birthday
                    .toLocaleDateString('en-US', options)
                    .replace(',', '')}
                </td>
                <td>
                  <Link to={`/create?id=${el.id}`}>
                    <Button
                      className={'button-yellow'}
                      text={'Edit'}
                    />
                  </Link>
                  <Button
                    onClick={() => handleDelete(el.id)}
                    className={'button-red'}
                    text={'Delete'}
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
