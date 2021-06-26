import React from 'react';

import Flex from '../../components/atoms/Flex';
import ProfilImage from '../../assets/img/photo.jpeg';

import { Image, Link, Introduction } from './styles';

const Intro = () => (
  <Flex justify="center" direction="column" align="center" style={{ height: '100vh' }}>
    <Image src={ProfilImage} alt="Gloria Luzio" />
    <h1>
      Test technique de Gloria Luzio{' '}
      <span role="img" aria-label="emoji fusée">
        🚀
      </span>
    </h1>
    <Introduction>
      Et si vous le souhaitez, vous pouvez aussi <br />
      consulter <Link href="https://www.glorialuzio.fr/">mon portfolio</Link> avec zéro image (full
      CSS)
    </Introduction>
  </Flex>
);

export default Intro;
