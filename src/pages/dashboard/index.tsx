import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo_gif.gif';
import api from '../../services/api';
import { Title, Form, GifsLocation, Error } from './styles';

interface GifInterface {
  id: string;
  images: {
    original: {
      url: string;
    };
    /*  fixed_height: {
      url: string;
    };
    fixed_height_small: {
      url: string;
    }; */
  };
}

const Dashboard: React.FC = () => {
  const [newGif, setNewGif] = useState('');
  const [inputError, setInputError] = useState('');
  const [gifs, setGifs] = useState<GifInterface[]>([] as GifInterface[]);

  async function handleAddGif(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newGif) {
      setInputError('Digite o nome para buscar o Gif');
      return;
    }
    try {
      const response = await api.get(
        `gifs/search?api_key=WPG9Qz5zAjvvR1Gofw40SRn98BtQTSbi&q=${newGif}&limit=50&offset=0&rating=g&lang=pt`,
      );
      const gifFind = response.data;
      setGifs([...gifFind.data]);
      setNewGif('');
      setInputError('');
      if (gifFind.data.length === 0) {
        setInputError('Essa gif não existe!');
      }
    } catch (err) {
      setInputError('Não consegui acessar a api');
    }
  }

  return (
    <>
      <Title>
        <img src={logoImg} alt="Github explorer" />
        <h2>Gif Finder</h2>
      </Title>
      <Form hasError={!!inputError} onSubmit={handleAddGif}>
        <input
          value={newGif}
          onChange={e => setNewGif(e.target.value)}
          placeholder="Digite um nome para buscar o gif"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <GifsLocation>
        {gifs.map(gif => (
          <Link key={gif.id} to={`/images/${gif.id}`} target="_blank">
            <img src={gif.images.original.url} alt="teste" />
          </Link>
        ))}
      </GifsLocation>
    </>
  );
};

export default Dashboard;
