import { Table, Pagination } from "react-bootstrap";
import classes from "./Table.module.css";

const ScraperTable = () => {
  let active = 2;
  let items = [];
  let numbe = [1, 2, 3, 4, 5, 6];

  for (let num = 1; num <= 4; num++) {
    items.push(
      <Pagination.Item key={num} active={num === active}>
        {num}
      </Pagination.Item>
    );
  }

  const item = numbe.map((index) => (
    <Pagination.Item key={index} active={index === 3}>
      {index}
    </Pagination.Item>
  ));
  return (
    <div>
      <Table striped responsive>
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td>Akeem</td>
            <td>Akeem@gmail.com</td>
            <td>09056490101</td>
            <td>Nigeria</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Pagination>{item}</Pagination>
      </div>
    </div>
  );
};

export default ScraperTable;
