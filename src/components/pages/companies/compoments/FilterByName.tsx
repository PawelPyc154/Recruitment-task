import React from 'react';
import styled from 'styled-components';

export interface FilterByNameProps {
  setNameInput: React.Dispatch<React.SetStateAction<string>>;
  nameInput: string;
}

const FilterByName: React.FC<FilterByNameProps> = ({ setNameInput, nameInput }) => {
  const handleChangeFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  return <Input type="text" placeholder="Filter By Name" value={nameInput} onChange={handleChangeFilterByName} />;
};

export default FilterByName;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #202020;
  color: white;
  font-size: 20px;
  padding: 10px;
  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;
