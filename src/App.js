import React from 'react';
import Page1 from './Page1';

const App = () => (
  <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl our-red leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
      <Page1 />
    </div>
  </div>
);

export default App;
