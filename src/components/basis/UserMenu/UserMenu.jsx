import { useSelector, useDispatch } from 'react-redux';

import Button from 'shared/components/Button';
import { ReactComponent as Avatar } from '../../../icons/user.svg';

import { fetchLogout } from 'redux/auth/operations';
import { selectUserInfo } from 'redux/auth/slice';

const UserMenu = () => {
  // const { name, email } = useSelector(selectUserInfo);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div>
      <Avatar />
      <p>name</p>
      <p>email</p>
      <Button onClick={onLogout} type="button">
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
