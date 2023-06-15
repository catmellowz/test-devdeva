import ProfilePicture from '../components/ProfilePicture';
import './UserManagement.css';

export default function UserManagement() {
  return (
    <>
      <div className='management-bar'>
        <div className='title-management'>User Management</div>
        <ProfilePicture />
      </div>
    </>
  );
}
