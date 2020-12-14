import React from "react";

import { Container as GoogleMap } from "../GoogleMap";
import { Container as RestaurantsList } from "../RestaurantsList";
import { Container as FiltersList } from "../FiltersList";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MapPlace = styled.div`
  width: 100%;
  height: 360px;
  background-color: #ccc;
`;

class Main extends React.Component {
  render() {
    return (
      <MainContainer>
        <MapPlace id="places-map" className="places-map"></MapPlace>
        <GoogleMap zoom={12} mapId="places-map"></GoogleMap>
        <FiltersList></FiltersList>
        <RestaurantsList></RestaurantsList>
      </MainContainer>
    );
  }
}

export default Main;
