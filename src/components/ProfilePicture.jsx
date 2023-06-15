import './ProfilePicture.css';

export default function ProfilePicture({ className, profilePic }) {
  return (
    <>
      <div className={`profile ${className}`}>
        {profilePic ? (
          <img src={profilePic} alt='profileTable' />
        ) : (
          <img
            src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png'
            atl='avatar'
          />
        )}
      </div>
    </>
  );
}
