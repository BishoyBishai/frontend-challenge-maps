import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 200px;
  min-height: 350px;
  margin: 10px;
`;
const CardImg = styled.img`
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 100%;
`;

const CardContainer = styled.div`
  padding: 2px 16px;
`;
function RestaurantCard({ data }) {
  return (
    <Card>
      <CardImg src={data.image_url} alt={data.name} />
      <CardContainer>
        <h4>
          <a href={data.url}>{data.name}</a>
        </h4>
        {data.location && data.location.display_address && (
          <p>
            {data.location.display_address[0]}
            <br />
            {data.location.display_address[1]}
          </p>
        )}
        <p>{data.display_phone}</p>
      </CardContainer>
    </Card>
  );
}

export default RestaurantCard;
