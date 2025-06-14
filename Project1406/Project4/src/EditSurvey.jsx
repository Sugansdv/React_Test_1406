import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSurveyById } from "./api";
import withAutoSave from "./withAutoSave";

function EditSurvey() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSurveyById(id).then((res) => {
      setSurvey(res.data);
      setDescription(res.data.description);
    });
  }, [id]);

  const handleSave = () => {
    setSaving(true);

    // Simulate save with a fake API call
    setTimeout(() => {
      console.log(`Saved survey ${id}:`, description);
      setSaving(false);
      alert("Survey saved!");
    }, 1000);
  };

  if (!survey) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <h2>Edit Survey: {survey.title}</h2>
      <textarea
        className="form-control mt-3"
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="btn btn-success mt-3"
        onClick={handleSave}
        disabled={saving}
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

export default withAutoSave(EditSurvey);
