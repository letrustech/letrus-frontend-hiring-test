import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterById } from '../store/actions/actions'; 
import './Characters.scss';

export interface Character {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  episode: string[];
}
type RootState = {
  characters: {
    loading: boolean;
    data: any;
    error: null | any;
  };
};

const Characters = ({ characterId }: { characterId: number }) => {
  const dispatch = useDispatch();
  const charactersData = useSelector((state: RootState) => state.characters);
  console.log(charactersData)

  useEffect(() => {
    
    dispatch(fetchCharacterById(characterId));
  }, [dispatch, characterId]);

  if (charactersData.loading) {
    return <p>Loading...</p>;
  }

  if (charactersData.error) {
    return <div>Error: {charactersData.error}</div>;
  }

  if (!charactersData.data) {
    return <h1>Personagem não encontrado</h1>
  }
  

  const character = charactersData.data; 

  return (
    <div className="character-container">
      <div
        className="character-image"
        style={{ backgroundImage: `url(${character.image})` }}
      >
        <div className="character-info">
          <h3>{character.name}</h3>
          <div className='character-informacao'>
            <p className='character-human'>{character.species}</p>
            <p className='character-gender'>{character.gender}</p>
          </div>
          <p className='character-aparencia'>First 5 Appearances:</p>
          <ul className='character-informacao'>
            {character.episode.slice(0, 5).map((ep: string, index: number) => (
              <li key={index}>{ep}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characters;
