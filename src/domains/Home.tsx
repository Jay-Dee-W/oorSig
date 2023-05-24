import React from 'react';
import { SearchableDropdown } from '@atoms/index';


export const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>GITSTART HOME PAGE</h1>
      <SearchableDropdown
    options={[
      { label: 'Option 1', value: 'option1', imgSrc: '/profile.jpeg' },
      { label: 'Option 2', value: 'option2', imgSrc: '/profile.jpeg' },
      { label: 'Option 3', value: 'option3', imgSrc: '/profile.jpeg'  },
    ]}
    placeholder="Search Team"
    label="Select Team"
    imgSize='2rem'
    isSearchable={true}
  />
    </div>
  );
};
