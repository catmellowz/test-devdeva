import Button from '../components/Button';
import UserManagement from '../components/UserManagement';
import UploadProfile from '../components/UploadProfile';
import InputName from '../components/InputName';
import InputList from '../components/InputList';
import InputDate from '../components/InputDate';
import { Link, useSearchParams } from 'react-router-dom';
import useUserList from '../hooks/useUserList';
import './CreateUser.css';
import { useEffect, useState } from 'react';
const initialInput = {
  id: 0,
  firstName: '',
  lastName: '',
  gender: '',
  birthday: '',
};

export default function CreateUser() {
  const { userList, setUserList } = useUserList();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (e) => {
    setInput({ ...input, ['birthday']: e });
  };
  const handleSave = (e) => {
    if (!id) {
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
            <Button text={'Add +'} className={'button-blue-add'} />
          </div>
          <div className='create-input-container'>
            <div className='management-profile'>
              <div className='profile-upload-container'>
                <UploadProfile />
              </div>
              <div className='button-manage-create'>
                <Button
                  text={'Upload profile Picture'}
                  className={'button-blue-upload '}
                >
                  <input type='file'></input>
                </Button>
                <Button
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
                  </div>
                  <div>
                    <div className='input-text-name '>Last Name</div>
                    <InputName
                      label={'Please enter Last name'}
                      onChange={handleChangeInput}
                      value={input.lastName}
                      name={'lastName'}
                    />
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
          <div className='button-manage-create-container '>
            <Link to='/'>
              <Button text={'CANCEL'} className={'button-gray'} />
            </Link>
            <Button
              onClick={handleSave}
              text={'SAVE'}
              className={'button-green'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
