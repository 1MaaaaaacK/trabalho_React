import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import logoImg from '../../assets/logo_gif.gif';
import api from '../../services/api';
import { Title, GifsLocation } from './styles';

interface GifInterface {
  id: string;
  images: {
    original: {
      url: string;
    };
    fixed_height: {
      url: string;
    };
    fixed_height_small: {
      url: string;
    };
    fixed_width: {
      url: string;
    };
    fixed_width_small: {
      url: string;
    };
  };
}

interface MatchParams {
  id: string;
}

const Dashboard: React.FC<RouteComponentProps<MatchParams>> = props => {
  const [gifs, setGifs] = useState<GifInterface>({} as GifInterface);
  const { match } = props;
  const { id } = match.params;

  async function handleLoadGif(): Promise<void> {
    const response = await api.get(
      `gifs/${id}?api_key=WPG9Qz5zAjvvR1Gofw40SRn98BtQTSbi`,
    );
    const gifFind = response.data;

    setGifs(gifFind.data);
  }
  useEffect(() => {
    handleLoadGif();
  }, [id]);

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title>
          <img src={logoImg} alt="Github explorer" />
          <h2>Gif Finder</h2>
        </Title>
      </Link>
      {gifs.id !== undefined ? (
        <GifsLocation>
          <img className="a" src={gifs.images.original.url} alt="Original" />
          <img className="a" src={gifs.images.fixed_height.url} alt="Grande" />
          <img className="a" src={gifs.images.fixed_width.url} alt="Médio" />
          <img
            className="a"
            src={gifs.images.fixed_height_small.url}
            alt="Pequeno"
          />
          <img
            className="a"
            src={gifs.images.fixed_width_small.url}
            alt="Muito Pequeno"
          />
        </GifsLocation>
      ) : null}
    </>
  );
};

export default Dashboard;
