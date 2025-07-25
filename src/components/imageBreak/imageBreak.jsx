import './imageBreak.css';

const ImageBreak = ({ src, alt = '', caption = '' }) => {
  return (
    <section className="image-break">
      <img src={src} alt={alt} />
      {caption && <p className="caption">{caption}</p>}
    </section>
  );
};

export default ImageBreak;