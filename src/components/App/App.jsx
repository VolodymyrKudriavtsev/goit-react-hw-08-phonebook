import { Route, Routes, Navigate } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

import Layout from 'components/basis/Layout';
// import ContactForm from 'components/phonebook/ContactForm';
// import Filter from 'components/phonebook/Filter';
// import ContactList from 'components/phonebook/ContactList';

// import { Container } from './App.styled';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </>
  );
};

export default App;
