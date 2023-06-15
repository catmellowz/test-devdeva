import './UploadProfile.css';

export default function UploadProfile({ profilePic }) {
  return (
    <>
      <div className='profile-creater'>
        {profilePic && <img src={profilePic} alt='Selected' />}
      </div>
    </>
  );
}
