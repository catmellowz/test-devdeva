import Button from '../components/Button';
import UserManagement from '../components/UserManagement';
import UploadProfile from '../components/UploadProfile';
import InputName from '../components/InputName';
import InputList from '../components/InputList';
import InputDate from '../components/InputDate';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import useUserList from '../hooks/useUserList';
import './CreateUser.css';
import { useEffect, useState } from 'react';
const initialInput = {
  id: 0,
  profilePicture: null,
  firstName: '',
  lastName: '',
  gender: '',
  birthday: '',
};

export default function CreateUser() {
  const { userList, setUserList } = useUserList();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigateHome = useNavigate();

  const [input, setInput] = useState(initialInput);

  const [profilePic, setProfilePic] = useState();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError('');
  };

  const handleChangeDate = (e) => {
    setInput({ ...input, ['birthday']: e });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError('');
    if (!input.firstName || !input.lastName) {
      setError('Please fill in all required fields');
      return;
    }
    const confirmSave = window.confirm(
      'Are you sure you want to save?'
    );
    if (confirmSave) {
      if (!id) {
        setIsLoading(true);
        setUserList([
          ...userList,
          { ...input, id: userList.length + 1 },
        ]);
      } else {
        const userIndex = userList.findIndex((e) => +id === e.id);
        const userClone = [...userList];
        userClone[userIndex] = input;
        setUserList(userClone);
      }

      setTimeout(() => {
        setIsLoading(false);
        navigateHome('/');
      }, 2000);
    } else {
      setIsLoading(fasle);
    }
  };

  const handleDeletePic = (e) => {
    setProfilePic(null);
  };

  const onChangeProfilePic = (e) => {
    const file = e.target.files[0];
    // console.log(e.target.files[0]);
    const profilePic = URL.createObjectURL(file);
    setProfilePic(profilePic);
  };

  useEffect(() => {
    if (id) {
      const user = userList.find((e) => +id === e.id);
      setInput(user);
    }
  }, [id]);

  return (
    <>
      <div>
        <div>
          <UserManagement />
        </div>
        <div className='create-container'>
          <div className='create-bar'>
            <div className='create-list'>Create new User</div>
            <Button
              onClick={handleSave}
              text={'Add +'}
              className={'button-blue-add'}
            />
          </div>
          <div className='create-input-container'>
            <div className='management-profile'>
              <div className='profile-upload-container'>
                <UploadProfile profilePic={profilePic} />
              </div>
              <div className='button-manage-create'>
                <div>
                  <label
                    htmlFor='file-input'
                    className='custom-file-button'
                  >
                    <input
                      onChange={onChangeProfilePic}
                      type='file'
                      id='file-input'
                      className='hidden-file-input'
                    />
                    Upload Profile Picture
                  </label>
                </div>
                <Button
                  onClick={handleDeletePic}
                  text={'Delete Picture'}
                  className={'button-red-pic'}
                />
              </div>
            </div>
            <div className='input-container'>
              <div className='grid grid-rows-2 gap-10'>
                <div className='input-gender-date-container'>
                  <div>
                    <div className='input-text-name '>First Name</div>
                    <InputName
                      label={'Please enter First name'}
                      onChange={handleChangeInput}
                      value={input.firstName}
                      name={'firstName'}
                    />
                    {error && !input.firstName && (
                      <div className='input-error'>
                        First name is required
                      </div>
                    )}
                  </div>

                  <div>
                    <div className='input-text-name '>Last Name</div>
                    <InputName
                      label={'Please enter Last name'}
                      onChange={handleChangeInput}
                      value={input.lastName}
                      name={'lastName'}
                    />
                    {error && !input.lastName && (
                      <div className='input-error'>
                        Last name is required
                      </div>
                    )}
                  </div>
                </div>
                <div className='input-gender-date-container'>
                  <div>
                    <div className='input-text-name '>Gender</div>
                    <InputList
                      onChange={handleChangeInput}
                      value={input.gender}
                      name={'gender'}
                    />
                  </div>
                  <div>
                    <div className='input-text-name '>Birthday</div>
                    <InputDate
                      onChange={(e) => handleChangeDate(e)}
                      selectedDate={input.birthday}
                      name={'birthday'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className='spinner-overlay'>
              <FaSpinner
                className='text-blue-500 animate-spin'
                size={24}
              />
            </div>
          ) : (
            <div className='button-manage-create-container '>
              <Link to='/'>
                <Button text={'CANCEL'} className={'button-gray'} />
              </Link>
              <Button
                onClick={handleSave}
                disabled={isLoading}
                text={'SAVE'}
                className={'button-green'}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
