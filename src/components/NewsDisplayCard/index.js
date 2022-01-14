
import "./index.css"

function NewsDisplayCard({ title, image, descrip, source }) {
  return (
    <section key={descrip} className="displayCard">
      <h2 className="displayCardTitle">{title}</h2>

      <img className="displayImage" src={image} alt={"No image available"} />

      <p className="displayDescrip ">{descrip}</p>

      <h3 className="displaySource ">{source}</h3>
    </section>
  );
}

export default NewsDisplayCard;
