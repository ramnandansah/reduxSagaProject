import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';

const Users = () => {
  const user = useSelector((state) => state?.auth?.user);

  const dispatch = useDispatch();

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <div className='m-4 flex justify-end'>
        <a href='/users/create' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          + Create new user
        </a>
      </div>
      <h2 className='text-center text-xl mt-32'>Welcome to the Users page!</h2>
    </>
  );
};

export default Users;
