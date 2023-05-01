import React from "react";
import Question from "@/components/Pages/Panel/Quiz/Question";
import { useGetQuestionsQuery } from "@/features/questions/questionsApiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Quiz: React.FC = () => {
  const location = useLocation();
  const { endpoint } = location.state;
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetQuestionsQuery({
    endpointName: endpoint.toString(),
  });
  React.useEffect(() => {
    if (data) {
      dispatch({ type: "questions/setQuestions", payload: data });
    }
  }, [data, dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <Question />
    </div>
  );
};

export default Quiz;
