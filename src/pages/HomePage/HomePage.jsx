import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>
        <b>
          To use the phone book, please <Link to="/register">register</Link> or{' '}
          <Link to="/login">log in</Link> | змінити на компонент "WelcomeText"
        </b>
      </div>
    </>
  );
};

export default HomePage;
