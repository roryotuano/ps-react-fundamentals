import { Number, Currency } from "react-intl-number-format";

const HouseRow = ({ house }) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>  <Currency locale="en-US" currency="USD">{house.price}</Currency> </td>
    </tr>
  );
};

export default HouseRow;
