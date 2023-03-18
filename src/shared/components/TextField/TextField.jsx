import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { icon, isRequired, styles } from './styles';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <>
      <FormControl {...styles.formControl} isRequired={isRequired(props)}>
        <FormLabel m="0">{label}</FormLabel>
        <InputGroup>
          <InputLeftElement {...styles.icon} children={icon(props)} />
          <Input {...styles.input} onChange={handleChange} {...props} />
        </InputGroup>
      </FormControl>
    </>
  );
};

TextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextField;
