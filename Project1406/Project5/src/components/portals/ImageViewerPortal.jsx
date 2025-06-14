import ReactDOM from 'react-dom';


const ImageViewerPortal = ({ imageUrl, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <img src={imageUrl} alt="Large View" className="modal-img" />
    </div>,
    document.body
  );
};

export default ImageViewerPortal;
