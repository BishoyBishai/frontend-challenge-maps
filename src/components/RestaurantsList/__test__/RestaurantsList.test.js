import React from "react";
import RestaurantsList from "./../RestaurantsList";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Restaurant List", () => {
  test("should render loading state", () => {
    act(() => {
      render(<RestaurantsList restaurants={[]} loading={true} />, container);
    });
    expect(container.textContent).toBe("Loading.....");
  });

  test("should not render loading state", () => {
    act(() => {
      render(<RestaurantsList restaurants={[]} loading={false} />, container);
    });
    expect(container.textContent).toBeFalsy();
  });

  test("should not contains restaurant",  () => {
    const restaurantList = [
      {
        id: "8uBE9ZgfZOM2z_Rllw478Q",
        alias: "stadtklause-berlin",
        name: "Stadtklause",
        image_url:
          "https://s3-media3.fl.yelpcdn.com/bphoto/vqFLzToYyFfAoYKlBRq0jA/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/stadtklause-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA",
        review_count: 172,
        categories: [{ alias: "german", title: "German" }],
        rating: 4.5,
        coordinates: { latitude: 52.504779, longitude: 13.380618 },
        transactions: [],
        price: "€",
        location: {
          address1: "Bernburger Str. 35",
          address2: "",
          address3: null,
          city: "Berlin",
          zip_code: "10963",
          country: "DE",
          state: "BE",
          display_address: ["Bernburger Str. 35", "10963 Berlin", "Germany"],
        },
        phone: "+493051056381",
        display_phone: "+49 30 51056381",
        distance: 2205.244050414826,
      },
    ];

     act(() => {
        render(<RestaurantsList restaurants={restaurantList} loading={false} />, container);
    });
      expect(container.querySelector('[data-testid="restaurants-card"]').textContent).toMatch(/StadtklauseBernburger/);
  });
});
