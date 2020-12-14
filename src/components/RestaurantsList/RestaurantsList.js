import React, { useEffect } from "react";
import RestaurantsCard from "./../RestaurantCard";
import styled from "styled-components";

const RestaurantContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function RestaurantsList({
  fetchRestaurants,
  restaurants,
  loading,
  selectedFilter,
}) {
  useEffect(() => {
    let query = {
      limit: 50,
      location: "Berlin, Germany",
      term: "restaurants",
    };
    query = selectedFilter ? { ...query, categories: selectedFilter } : query;

    fetchRestaurants && fetchRestaurants(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <RestaurantContainer>
      {restaurants.map((business) => {
        return (
          <div data-testid="restaurants-card" key={business.id}>
            <RestaurantsCard data={business}></RestaurantsCard>
          </div>
        );
      })}
    </RestaurantContainer>
  );
}

export default RestaurantsList;
