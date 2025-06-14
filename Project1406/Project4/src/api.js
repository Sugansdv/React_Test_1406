// api.js
import { mockSurveys } from "./mockdata";

export const fetchSurveys = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockSurveys });
    }, 500); 
  });
};

export const fetchSurveyById = (id) => {
  return new Promise((resolve, reject) => {
    const survey = mockSurveys.find((s) => s.id === id);
    setTimeout(() => {
      if (survey) resolve({ data: survey });
      else reject(new Error("Survey not found"));
    }, 500);
  });
};
