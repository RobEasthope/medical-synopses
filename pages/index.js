import { Basic, Combined, Animated, bounce } from '../styles/globalStyles';

const Home = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>
  </div>
);

export default Home;
