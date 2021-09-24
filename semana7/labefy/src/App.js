import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivPlaylist = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 1000px;
  justify-content: space-between;
`;
const BotaoDeletar = styled.button`
  margin-left: 10px;
`;

const headers = {
  headers: {
    Authorization: 'luis-faria-maryam',
  },
};

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistName: '',
    arrayDescricao: { artist: '', name: '', url: '' },
    arrayAbertos: '',
    arrayAdicionarMusica: '',
    nomeDaMusica: '',
    nomeDaBanda: '',
    linkDaMusica: '',
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  handlePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
  };

  handleNomeDaMusica = (e) => {
    this.setState({ nomeDaMusica: e.target.value });
  };

  handleNomeDaBanda = (e) => {
    this.setState({ nomeDaBanda: e.target.value });
  };

  handleLinkDaMusica = (e) => {
    this.setState({ linkDaMusica: e.target.value });
  };

  createPlaylists = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

    const body = {
      name: this.state.playlistName,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ playlistName: '' });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  getAllPlaylists = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        alert('Playlist deletada com sucesso!');
        this.getAllPlaylists();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  abrirDescricao = (id) => {
    console.log(this.state.arrayDescricao);
    if (this.state.arrayAbertos.includes(id)) {
      this.setState({ arrayAbertos: '' });
    } else {
      axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          headers
        )
        .then((res) => {
          // console.log(res.data.result.tracks[0]);
          const teste = res.data.result.tracks[0];
          console.log(teste);
          this.setState({ arrayDescricao: teste });
          this.setState({ arrayAbertos: id });
        });
    }
  };

  abrirAdicionarMusica = (id) => {
    if (this.state.arrayAdicionarMusica === '') {
      this.setState({ arrayAdicionarMusica: id });
    } else {
      this.setState({ arrayAdicionarMusica: '' });
    }
  };

  addTrackToPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.nomeDaMusica,
      artist: this.state.nomeDaBanda,
      url: this.state.linkDaMusica,
    };
    axios

      .post(url, body, headers)
      .then((res) => {
        this.setState({ nomeDaMusica: '', nomeDaBanda: '', linkDaMusica: '' });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return (
        <li key={play.id}>
          <DivPlaylist>
            <div>{play.name}</div>
            <button onClick={() => this.abrirDescricao(play.id)}>
              Músicas
            </button>
            <BotaoDeletar onClick={() => this.deletePlaylist(play.id)}>
              X
            </BotaoDeletar>
            {this.state.arrayAbertos === play.id &&
              (this.state.arrayDescricao ? (
                <div>
                  <span>Artista: {this.state.arrayDescricao.artist}</span>
                  <span>Nome da Música {this.state.arrayDescricao.name}</span>
                  <span>Link: {this.state.arrayDescricao.url}</span>
                </div>
              ) : (
                <span>Playlist Sem Música</span>
              ))}
            <button onClick={() => this.abrirAdicionarMusica(play.id)}>
              +
            </button>
            {this.state.arrayAdicionarMusica.includes(play.id) && (
              <div>
                <input
                  placeholder="Nome da Música"
                  value={this.state.nomeDaMusica}
                  onChange={this.handleNomeDaMusica}
                />
                <input
                  placeholder="Nome da Banda/Artista"
                  value={this.state.nomeDaBanda}
                  onChange={this.handleNomeDaBanda}
                />
                <input
                  placeholder="Link da Música"
                  value={this.state.linkDaMusica}
                  onChange={this.handleLinkDaMusica}
                />
                <button onClick={() => this.addTrackToPlaylist(play.id)}>
                  Adicionar Música
                </button>
              </div>
            )}
          </DivPlaylist>
        </li>
      );
    });

    return (
      <div>
        <h1>Labefy</h1>
        <h4>Adicione playlists!</h4>
        <input
          placeholder="Nome Playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylists}>Enviar</button>
        {playlistComponents}
      </div>
    );
  }
}
