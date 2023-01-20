import React from 'react';
import { FilterLable, FilterInput, FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from '../../redux/myValue/slice';
import { selectValueFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectValueFilter);
  const dispatch = useDispatch();

  return (
    <FilterWrap>
      <FilterLable htmlFor="filter">Find contacts by name</FilterLable>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
      />
    </FilterWrap>
  );
};
