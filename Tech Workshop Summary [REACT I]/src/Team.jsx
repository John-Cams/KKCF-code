import Member from './Member';
import { useState, useEffect } from 'react';

function Create({ index, characters }) {
  if (!characters[index]) {
    return null;
  }

  return (
    <Member
      name={characters[index].name}
      homeworld={characters[index].homeworld}
      affiliations={characters[index].affiliations}
      birthyear={characters[index].born}
      link={characters[index].image}
      wiki={characters[index].wiki}
    />
  );
}

function Team() {
  const [characters, setChara] = useState([]);

  // I found a different API that provides images
  useEffect(() => {
    fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json')
      .then((res) => res.json())
      .then((data) => setChara(data));
  }, []);

  return (
    <div className="team-container">
      <Create index={0} characters={characters} />
      <Create index={1} characters={characters} />
      <Create index={3} characters={characters} />
      <Create index={20} characters={characters} />
      <Create index={5} characters={characters} />
      <Create index={25} characters={characters} />
      <Create index={19} characters={characters} />
    </div>
  );
}

export default Team;
