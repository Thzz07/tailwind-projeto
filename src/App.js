import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around  bg-pink-500 p-3">
        <h1 className="text-white font-bold text-xl">SenaiNews</h1>
        <nav className="flex gap-6">
        <a className="text-white text-xl" href="#">Home</a>
        <a className="text-white text-xl" href="#">Sobre</a>
        <a className="text-white text-xl" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais Noticias</h2>
        <div className="flex justify-around flex-wrap gap-5">
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://lncimg.lance.com.br/cdn-cgi/image/width=1080,quality=75,fit=pad,format=webp/uploads/2024/09/000_36FY3QY-aspect-ratio-512-320.jpg" alt=""/>
            <h3 className="text-center">Lance de Endrick contra o Paraguai gera preocupação no futebol espanhol</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://tntsports.com.br/__export/1710861470046/sites/esporteinterativo/img/2024/03/19/gettyimages-646174532_1.jpg_554688468.jpg" alt=""/>
            <h3 className="text-center">Oscar revela que deve deixar o futebol chinês ao final da temporada</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/coreia-do-sul-brasil-copa-do-mundo-neymar-2022-e1711399109523.jpg" alt=""/>
            <h3 className="text-center">China bane 43 pessoas por manipulação de resultados no futebol</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://imagem.mixvale.com.br/cdn-cgi/imagedelivery/nH4rNJcg3zgkiRPCh6mAdA/www.mixvale.com.br/2024/08/Daniel-Alves-1.jpg/w=1229" alt=""/>
            <h3 className="text-center">Daniel Alves retorna ao futebol em Barcelona com jogos amadores</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://s2-ge.glbimg.com/1cws_zdE_w-BnjuRPvgfBZSb28U=/0x0:2388x1589/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/d/N/PIr1AjTGWXWmkjK0wyQw/rib6796.jpg" alt=""/>
            <h3 className="text-center">Juventude cai da Copa do Brasil com pouco futebol e pelas escolhas de Jair Ventura</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://s2-ge.glbimg.com/cP4f1-9CE02_u0biArvwEPs8fJc=/0x0:1680x1193/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/q/V/q0hLBeQaCEiplK0tLp4Q/2024-08-25t171108z-782210380-up1ek8p1bqjwm-rtrmadp-3-soccer-spain-rma-vld.jpg" alt=""/>
            <h3 className="text-center">Endrick entra no top 10 de melhores jovens do futebol; veja lista</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/09/11/christian-alvarenga-gettyimages-s506r4sa5lcy.jpeg" alt=""/>
            <h3 className="text-center">Brasil virou a Venezuela no futebol de seleções</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-pink-500 border-2 w-80">
            <img className="w-full h-full" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/torcedora-gijon-racismo-e1725758809161.jpg?w=550&h=309&crop=1&quality=85" alt=""/>
            <h3 className="text-center">Após críticas a Vini Jr, caso de racismo volta a abalar futebol na Espanha</h3>
            <a className="bg-pink-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
        </div>
      </main>
      <footer className="bg-pink-500 p-4 text-white text-center">
        <h4>Todos os Direitos Reservados - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
