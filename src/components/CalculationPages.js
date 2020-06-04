import React, { useContext } from "react";
import Context from "../context/context";
import Main from "./main";
import ResultPage from "./resultPage";
const CalculationPage = (props) => {
  const { filters } = useContext(Context);
  console.log("this is calcultaion:");
  return <div>{filters.genrateFilter ? <ResultPage /> : <Main />}</div>;
};

export default CalculationPage;
