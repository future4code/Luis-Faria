import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Luis from './imagens/Luis.png'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Luis} 
          nome="Luis Henrique Fernandes de Faria" 
          descricao="Oi, eu sou o Luis Henrique, sou formado em administração de empresas e tenho 33 anos. Sou estudante no curso Web Full Stack na Labenu e pretendo ser um grande profissional da área!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
        imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
        nome="Email: "
        descricao=" lu_farias@hotmail.com"
      />  
      <CardPequeno 
        imagem="https://png.pngitem.com/pimgs/s/146-1466755_nearby-transparent-background-address-icon-hd-png-download.png"
        nome="Endereço: "
        descricao=" Rua Labenu"
      /> 
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.18169-9/18555954_226302747870122_4763243115030706375_n.png?_nc_cat=111&ccb=1-5&_nc_sid=19026a&_nc_ohc=Z5ciMMDMKvwAX8-AUA5&tn=Hlrm2h9X5ygn7z8T&_nc_ht=scontent.fbsb8-2.fna&oh=f14a9be901b817d6f1a28bccd912604d&oe=615E2D30" 
          nome="Vila dos Pães" 
          descricao="Gerente de compras e estoques" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
