import { Box } from 'rebass';
import { Basic, Combined, Animated, bounce } from '../styles/globalStyles';

const Home = () => (
  <Box>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
  </Box>
);

export default Home;
