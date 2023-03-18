import { Box } from '@chakra-ui/react';

import WellcomeText from '../../shared/components/WellcomText';

import { styles } from './styles';

const HomePage = () => {
  return (
    <Box {...styles.page}>
      <WellcomeText />
    </Box>
  );
};

export default HomePage;
