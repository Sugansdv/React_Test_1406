import { Routes, Route } from "react-router-dom";
import SurveyList from "./SurveyList";
import EditSurvey from "./EditSurvey";
import ViewSurvey from "./ViewSurvey";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<SurveyList />} />
      <Route path="/surveys/:id/edit" element={<EditSurvey />} />
      <Route path="/surveys/:id/view" element={<ViewSurvey />} />
    </Routes>
    </BrowserRouter>
  );
}
