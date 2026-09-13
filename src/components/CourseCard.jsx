export default function CourseCard({ title, description, duration, onSelect, onFavourite }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>duration:{duration}months</p>
      <button onClick={() => onSelect(title)}>Select</button>
      <button className="fav" onClick={()=> onFavourite(title)}>Favourite</button>

    </div>
  );
}
