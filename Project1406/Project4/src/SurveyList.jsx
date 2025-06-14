import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSurveys } from "./api";

export default function SurveyList() {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSurveys().then((res) => setSurveys(res.data));
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {surveys.map((survey) => (
          <div className="col-md-4" key={survey.id}>
            <div className="card shadow rounded-4 p-4 h-100">
              <h4>{survey.title}</h4>
              <p className="text-muted">{survey.description}</p>
              <div className="d-flex gap-3 mt-auto">
                <button
                  className="btn btn-primary rounded-pill px-3"
                  onClick={() => navigate(`/surveys/${survey.id}/edit`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-secondary rounded-pill px-3"
                  onClick={() => navigate(`/surveys/${survey.id}/view`)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
