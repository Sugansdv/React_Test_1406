import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSurveyById } from "./api";

export default function ViewSurvey() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    fetchSurveyById(id).then((res) => setSurvey(res.data));
  }, [id]);

  if (!survey) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <h2>{survey.title}</h2>
      <p className="lead">{survey.description}</p>
    </div>
  );
}
