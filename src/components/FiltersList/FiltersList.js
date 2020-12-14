import React from "react";
import styled, { css } from "styled-components";

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;
const FilterCardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterCard = styled.div`
  padding: 10px;
  margin: 10px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  ${(props) =>
    props.isSelected &&
    css`
      background: #e8e8e8;
      color: #811312;
    `}
`;

function FiltersList({ filters, selectedFilter, updateRestaurantsFilter }) {
  return (
    <FiltersContainer>
      <h2>Filter by restaurant's cousin</h2>
      <FilterCardsContainer>
        {filters.map((filter) => {
          return (
            <FilterCard
              onClick={() => updateRestaurantsFilter(filter.id)}
              isSelected={selectedFilter === filter.id}
              key={filter.id}
            >
              {filter.label}
            </FilterCard>
          );
        })}
      </FilterCardsContainer>
    </FiltersContainer>
  );
}

export default FiltersList;
