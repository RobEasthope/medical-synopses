import { Box } from 'rebass';
import { Basic, Combined, Animated, bounce } from '../styles/globalStyles';

const Home = () => (
  <Box>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>
  </Box>
);

export default Home;
