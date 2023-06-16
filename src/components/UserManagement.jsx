import ProfilePicture from '../components/ProfilePicture';
import './UserManagement.css';

export default function UserManagement() {
  return (
    <>
      <div className='management-bar'>
        <div className='title-management'>User Management</div>
        <ProfilePicture
          className={'profile-bar'}
          // profilePic={
          //   'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
          // }
        ></ProfilePicture>
      </div>
    </>
  );
}
