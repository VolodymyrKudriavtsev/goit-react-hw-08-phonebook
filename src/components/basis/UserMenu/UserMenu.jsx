import Button from 'shared/components/Button';
import { ReactComponent as Avatar } from '../../../icons/user.svg';

const UserMenu = () => {
  return (
    <div>
      <Avatar />
      <p>mango@mail.com</p>
      <Button type="button">Log out</Button>
    </div>
  );
};

export default UserMenu;
