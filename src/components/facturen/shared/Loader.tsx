'use client';

import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center ">
      <PacmanLoader size={35} color="#7C5DFA" />
    </div>
  );
};

export default Loader;
