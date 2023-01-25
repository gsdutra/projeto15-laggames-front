import { createContext, useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export const LagContext = createContext({})

export function UserProvider( {children} ) { 
    
    const [products, seProducts] = useState(
        {title: "God of War Ragnarök", description: "Três anos após os eventos do jogo anterior, o Fimbulwinter, um grande inverno que abrange três verões, está chegando ao fim o que dará início ao Ragnarök profetizado. Kratos e Atreus voltam da caçada para casa depois de escapar por pouco de uma emboscada de Freya. Depois de chegar, Atreus fica triste ao descobrir que um de seus lobos, Fenrir, está doente, forçando-o a derrubá-lo. Atreus vai enterrar Fenrir enquanto Kratos descansa. Depois de perceberem que Atreus não voltava há muito tempo, Kratos e Mímir vão procurá-lo. Durante a busca, eles são atacados por um urso e Kratos quase mata o urso quando ele se transforma novamente em Atreus, que foi transformado no urso devido ao seu sofrimento emocional. Os três voltam para casa, onde são visitados por Thor e Odin, que vieram propor um acordo; os Æsir os deixarão em paz se Atreus parar de procurar Týr para iniciar o Ragnarök. Kratos se recusa, levando Odin a ordenar que Thor o ataque. Thor domina Kratos na batalha, mas depois recua quando ele diz que ainda não é a hora deles. Kratos confronta Atreus sobre sua busca por Týr, levando-o a levar Kratos ao santuário de Týr, revelando uma passagem secreta dentro do santuário que só pode ser aberta por gigantes. Dentro dela, Atreus diz a Kratos que ele junto com Sindri descobriu que Týr foi aprisionado em uma das minas em Svartalfheim e implora a ajuda de Kratos para libertá-lo, com a qual ele relutantemente concorda. Kratos e Atreus saem de Midgard e se refugiam na casa de Brok e Sindri dentro da Árvore do Mundo.", cape: "https://assets.reedpopcdn.com/god-of-war-ps4_pcZpCZa.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/god-of-war-ps4_pcZpCZa.jpg", background: "https://images.alphacoders.com/117/1173124.jpg"},
        {title: "The Last of Us", description: "Um surto de uma mutação do fungo Cordyceps arrasa os Estados Unidos em setembro de 2013, transformando seus hospedeiros humanos em monstros canibalísticos chamados de Infectados. Joel foge do caos dos subúrbios de Austin, Texas, junto com seu irmão Tommy e sua filha Sarah. Esta acaba baleada por um soldado durante a fuga e morre nos braços do pai.[17] A maior parte da civilização humana acaba destruída no decorrer dos vinte anos seguintes. Sobreviventes vivem em zonas de quarentena altamente policiadas, em assentamentos independentes e em grupos nômades. Joel passa a trabalhar como contrabandista junto com sua parceira Tess na zona de quarentena de Boston, Massachusetts, uma das últimas ainda funcionando. Eles caçam Robert, um comerciante do mercado negro, a fim de recuperar um carregamento roubado de armas. Robert é morto por Tess, porém antes revela ter trocado as armas com os Vaga-Lumes, uma milícia rebelde que se opõe às autoridades da zona de quarentena.", cape: "https://images.tcdn.com.br/img/img_prod/862860/jogo_the_last_of_us_ps4_287_1_20200925175343.png", background: "https://wallpapercave.com/wp/wp1811272.jpg"}
    )    

    const color1 = "#3e4147"
    const color2 = "#fffedf"
    const color3 = "#dfba69"
    const color4 = "#5a2e2e"
    const color5 = "#2a2c31"

    const load = <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
    />

  return (
    <LagContext.Provider value={{
        products,
        seProducts,
        load
    }}>
      {children}
    </LagContext.Provider>
  )
}