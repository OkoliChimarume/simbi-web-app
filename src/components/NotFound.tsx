// import { Helmet } from "react-helmet-async";
import ErrorIcon from "/sitting-simbi.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen grid-cols-1 p-[4rem] grid place-items-center bg-brand-300">
      {/* <Helmet>
        <title>Simbi | 404</title>
      </Helmet> */}

      <div className=" grid place-items-center text-center ">
        <img src={ErrorIcon} alt="" className="w-[12rem] lg:w-[30rem]" />
        <p className="text-brand-700 mt-8 font-medium">
          {" "}
          Oops! Page not found.
        </p>
        <small className="md:w-[40ch] text-center text-light mt-2">
          There’s nothing here... The link you followed is probably broken or
          the page has been removed. We’re sorry you had to see this.
        </small>
        <Button
          className="p-4 rounded-xl !mt-4 !text-brand-100 !bg-brand-500 hover:!bg-brand-400"
          fullWidth
          onClick={() => navigate("/")}
        >
          <span>GO HOME</span>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
