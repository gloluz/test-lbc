import React, { memo } from 'react';

import { Dots, Dot } from './styles';

const Loader = () => (
  <Dots>
    {[0, 0.2, 0.4].map((duration) => (
      <Dot key={duration} dotDelay={duration} />
    ))}
  </Dots>
);

export default memo(Loader);
