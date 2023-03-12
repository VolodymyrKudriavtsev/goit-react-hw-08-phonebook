import { useSelector } from 'react-redux';

import Button from 'shared/components/Button';
import { ReactComponent as Avatar } from '../../../icons/user.svg';

import { selectUserInfo } from 'redux/auth/slice';

const UserMenu = () => {
  const { name, email } = useSelector(selectUserInfo);

  return (
    <div>
      <Avatar />
      <p>{name}</p>
      <p>{email}</p>
      <Button type="button">Log out</Button>
    </div>
  );
};

export default UserMenu;
