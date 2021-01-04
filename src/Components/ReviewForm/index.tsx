import { Button } from "@material-ui/core";
import "./reviewform.css";
const ReviewForm = () => {
  return (
    <div style={{ padding: "0px 10px" }}>
      <h3 className="reviewHeading  ">Review Details</h3>
      <hr />
      <p className="fieldList">
        {" "}
        <span className="fieldName">FullName</span>: Muhammad Shiraz
      </p>
      <p className="fieldList">
        <span className="fieldName">UserName</span>: Shazy
      </p>
      <p className="fieldList">
        <span className="fieldName">Gender</span>: Male
      </p>
      <p className="fieldList">
        <span className="fieldName">Email</span>: Mshazy999@gmail.com
      </p>
      <p className="fieldList">
        <span className="fieldName">Contact</span>: 03461160898
      </p>
      <p className="fieldList">
        {" "}
        <span className="fieldName">Payment Option</span>: Credit Card
      </p>
      <p className="fieldList">
        {" "}
        <span className="fieldName">CardNumber</span>: 09007860114
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
      >
        {" "}
        <Button variant="contained" color="secondary">
          Finish
        </Button>
      </div>
      {/* <p>Hello : World Is My Name</p>
            <p>Hello : World Is My Name</p> */}
    </div>
  );
};

export default ReviewForm;
