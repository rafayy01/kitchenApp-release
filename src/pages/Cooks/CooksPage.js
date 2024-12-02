import React from "react";
import Card from "react-bootstrap/Card";
import "./CooksPage.css";
const CooksPage = () => {
  return (
    <div className="cooksMain">
      {/* <Cards /> */}
      <br />
      <br />
      <br />

      <h4 style={{ textAlign: "center", color: "#d4002c" }}>
        Round ID: <span>5</span>
      </h4>
      <br />
      <br />

      <Card
        style={{ width: "18rem", backgroundColor: "#d4002c" }}
        className="mb-2"
        variant="info"
      >
        <Card.Header>Chicken Masala</Card.Header>
      </Card>
      <Card
        style={{ width: "18rem", backgroundColor: "#d4002c" }}
        className="mb-2"
        variant="info"
      >
        <Card.Header>Rice</Card.Header>
      </Card>
      <Card
        style={{ width: "18rem", backgroundColor: "#d4002c" }}
        className="mb-2"
        variant="info"
      >
        <Card.Header>Beef</Card.Header>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />

      <table class="table table-hover">
        <thead class="table-info">
          <tr>
            <th scope="col">Client Id</th>
            <th scope="col">Date</th>
            <th scope="col">Meal Category</th>
            <th scope="col">Meal Name</th>
            <th scope="col">Min Portion</th>
            <th scope="col">Max Portion</th>
            <th scope="col">Portion</th>
            <th scope="col">Meal Calories</th>
            <th scope="col">Total Calories</th>
            <th scope="col">Total Portion</th>
            <th scope="col">Target Calories</th>
            <th scope="col">Target Protein</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CooksPage;
