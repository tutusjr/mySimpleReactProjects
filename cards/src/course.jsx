export default function Course({ image, title, description }) {
  return (
      <div className="card">
        <div className="card-image">
          <figure className="image ">
            <img className="image-second" src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
              <p className="title is-4">{title}</p>
          </div>
          <div className="content">
            {description}
          </div>
        </div>

        
  );
}
