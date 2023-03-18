import { Box } from '@chakra-ui/react';

import WellcomeText from '../../shared/components/WellcomText';

import { styles } from './home-page.styled';

const HomePage = () => {
  return (
    <Box {...styles.page}>
      <WellcomeText />
    </Box>
  );
};

export default HomePage;
