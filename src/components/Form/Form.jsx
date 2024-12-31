import './form.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { uploadAnime } from "../../utils/UploadAnime"; 
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; 

const Form = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleUpload = async () => {
    const title = document.getElementById("title").value.trim();
    const rating = parseInt(document.getElementById("rating").value, 10);
    const file = document.getElementById("image").files[0];
    

    setLoading(true); 

    try {
      await uploadAnime(title, rating, file);
      navigate("/");
      toast.success("Anime added successfully!");

    } catch (err) {
      console.error("Error:", err.message);
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer /> 
      <div className="card_container">
        <div>
          <div className="forms">
            <h1>Update here</h1>
            <div className="form-group mt-3">
              <label htmlFor="title" className="form-label">Anime Title</label>
              <input type="text" id="title" className="form-control" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="rating" className="form-label">Rate the Anime</label>
              <input
                type="number"
                id="rating"
                min="0"
                max="10"
                placeholder="out of 10"
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="image" className="form-label">Select Image</label>
              <input type="file" id="image" className="form-control" />
            </div>
            <div className="form-group mt-3">
              <button
                className="btn w-100"
                onClick={handleUpload}
                id="btn"
                disabled={loading} 
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
