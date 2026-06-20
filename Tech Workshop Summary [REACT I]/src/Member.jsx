function Member(props) {
  let affiliationItems = [];

  for (let i = 0; i < props.affiliations.length; i++) {
    affiliationItems.push(<li key={i}>{props.affiliations[i]}</li>);
  }

  return (
    <div className="member-card">
      <h2>{props.name}</h2>
      <p>Birth Year: {props.birthyear}</p>
      <p>Homeworld: {props.homeworld}</p>
      <ul>{affiliationItems}</ul>
      <p>Affiliations:</p>
      <img src={props.link} className="member-image" />
      <a href={props.wiki}>
        <button type="button">Visit my wiki!</button>
      </a>
    </div>
  );
}

export default Member;
