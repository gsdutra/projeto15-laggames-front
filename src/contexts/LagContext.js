import { createContext, useState } from 'react'
import { ThreeCircles, Bars } from 'react-loader-spinner'

export const LagContext = createContext({})

export function UserProvider( {children} ) {  
  const games =   [
    {title: "Residente Evil 4", description: "Um surto de uma mutação do fungo Cordyceps arrasa os Estados Unidos em setembro de 2013, transformando seus hospedeiros humanos em monstros canibalísticos chamados de Infectados. Joel foge do caos dos subúrbios de Austin, Texas, junto com seu irmão Tommy e sua filha Sarah. Esta acaba baleada por um soldado durante a fuga e morre nos braços do pai.[17] A maior parte da civilização humana acaba destruída no decorrer dos vinte anos seguintes. Sobreviventes vivem em zonas de quarentena altamente policiadas, em assentamentos independentes e em grupos nômades. Joel passa a trabalhar como contrabandista junto com sua parceira Tess na zona de quarentena de Boston, Massachusetts, uma das últimas ainda funcionando. Eles caçam Robert, um comerciante do mercado negro, a fim de recuperar um carregamento roubado de armas. Robert é morto por Tess, porém antes revela ter trocado as armas com os Vaga-Lumes, uma milícia rebelde que se opõe às autoridades da zona de quarentena.", cape: "https://www.psu.com/wp/wp-content/uploads/2022/06/ResidentEvil4-Remake-PS5-Wallpapers-0.jpg", value: 299},

    {title: "Hogwarts Legacy", description: "Hogwarts Legacy é um RPG de ação de mundo aberto ambientado no mundo introduzido pela primeira vez nos livros do Harry Potter. Embarque em uma jornada por locais novos e familiares enquanto explora e descubra animais fantásticos, personalize seu personagem e crie poções, domine o lançamento de feitiços, aprimore talentos e torne-se o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu personagem é um estudante com chave de um antigo segredo que ameaça destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas e decida o destino do mundo bruxo. Seu legado é o que você faz dele. Viva o Inesperado.", cape: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e", value: 299},

    {title: "Grand Theft Auto Online", description: "Explore GTA Online, um universo online dinâmico em constante evolução para até 30 jogadores, onde você começa como um malandro de rua e pode se tornar o rei do seu próprio império do crime. Os jogadores do PlayStation®5 podem aproveitar novas melhorias de desempenho em veículos e aprimoramentos como a opção de escolher uma carreira criminal, bem como todas as atualizações de jogo, expansões e conteúdo adicionados desde o lançamento do GTA Online prontos para jogar a sós ou com amigos. Coopere para realizar Golpes ousados, entre em Corridas Acrobáticas cheias de adrenalina, dispute em Modos Adversários exclusivos ou passe um tempo socializando em boates, fliperamas, festas em coberturas, eventos de carros e muito mais.", cape: "https://assets.reedpopcdn.com/gta-online-001.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/gta-online-001.jpg", value: 199},

    {title: "Call of Duty®: MW® II", description: "O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141. A Infinity Ward traz jogabalidade revolucionária para os fãs, com manuseio de arma totalmente novo, sistemas avançados de IA, um novo Armeiro e uma série de outras inovação gráficas e de jogabilidade que vão elevar a franquia a outro nível. O Modern Warfare® II é lançado com uma campanha global para um jogador, combate Multijogador imersivo e um modo melhorado de jogo de Operações Especiais trazendo jogabilidade tática cooperativa.", cape: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-002-REVEAL-TOUT.jpg", value: 329},

    {title: "Monster Hunter Rise", description: "Encare o desafio e junte-se à caça! Em Monster Hunter Rise, o capítulo mais recente da premiada e bem-sucedida série Monster Hunter, você vai se tornar um caçador, explorar mapas novos e usar diversas armas para derrotar monstros assustadores como parte de uma nova história.Monstros ferozes com ecologias únicas Cace uma infinidade de monstros com comportamentos distintos e ferocidade mortal. Desde monstros clássicos que estão de volta a criaturas totalmente novas inspiradas no folclore japonês, incluindo a principal serpe Magnamalo, você precisará ter jogo de cintura e dominar seus instintos únicos se deseja levar alguma das recompensas!", cape: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/m/monster-hunter-rise-switch/hero", value: 189},

    {title: "Forspoken", description: "Forspoken conta a jornada de Frey, uma jovem nova-iorquina levada à bela e cruel Athia. Frey precisa usar suas habilidades mágicas recém-descobertas para explorar e enfrentar criaturas monstruosas em busca de um caminho de volta para casa. Um mundo aberto belo e cruel Explore os vastos reinos de Athia, uma terra peculiar repleta de paisagens formidáveis e criaturas mágicas trazidas à vida pelos gráficos incríveis e pela alta tecnologia.", cape: "https://cdn1.epicgames.com/offer/a472b0f2f2a5493d960a941f01cf3393/EGS_Forspoken_LuminousProductions_S1_2560x1440-f2f99882e9d396b21fb65735d266385a_2560x1440-f2f99882e9d396b21fb65735d266385a", value: 349},

    {title: "Persona 4 Golden", description: "O mundialmente conhecido Persona 4 Golden promete aventura inesquecíveis, laços inquebráveis e experiências emotivas partilhadas com amigos. Dizem que a tua alma gémea aparecerá se olhares fixamente para um televisor durante uma noite de chuva… Este estranho rumor cedo se espalha pela cidade rural de Inaba, onde acaba de chegar o protagonista, ao mesmo tempo que tem início uma série de misteriosos homicídios. Quando o protagonista e os seus amigos partem em busca da verdade, eles acabam por abrir uma porta para outro mundo.", cape: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/p/persona-4-golden-switch/hero", value: 104},

    {title: "DRAGON BALL Z: KAKAROT", description: "Viva novamente a história de Goku e outros Guerreiros Z em DRAGON BALL Z: KAKAROT! Além das batalhas épicas, sinta como é a vida no mundo de DRAGON BALL Z lutando, pescando, comendo e treinando com Goku, Gohan, Vegeta e outros. Explore novas áreas e aventuras: avance pela história e forme vínculos com outros heróis de DRAGON BALL Z.", cape: "https://ovicio.com.br/wp-content/uploads/2019/12/20191207-dragon-ball-z-kakarot-edition-simple.png", value: 299},

    {title: "Dead Space", description: "Dead Space™, o clássico de terror de sobrevivência e ficção científica, está de volta totalmente reformulado para oferecer uma experiência mais profunda e imersiva. O remake tem uma fidelidade visual impressionante, áudio atmosférico e aprimoramentos na jogabilidade, ao mesmo tempo em que se mantém fiel à emocionante visão do jogo original. Isaac Clarke é um engenheiro comum com a missão de consertar uma imensa nave de mineração, a USG Ishimura. Porém, logo vê que há algo terrivelmente errado. A tripulação foi massacrada e a amada parceira de Isaac, Nicole, está perdida em algum lugar da nave. Agora sozinho, armado apenas com suas ferramentas e habilidades de engenharia, Isaac apressa-se para desvendar o horripilante mistério do que aconteceu a bordo da Ishimura, na esperança de encontrar Nicole. Preso com criaturas hostis, chamadas necromorfos, Isaac entra em uma batalha pela sobrevivência, não só contra os horrores que o cercam, mas também contra a perda da própria sanidade.", cape: "https://i.ytimg.com/vi/q-t5eoh7yfg/maxresdefault.jpg", value: 299},

    {title: "Diablo® IV - Edição Padrão", description: "Diablo® IV é a experiência de RPG de ação de nova geração com infinitos males para matar, inúmeras habilidades para dominar, masmorras horripilantes e tesouros lendários. Embarque na campanha solo ou com amigos, conhecendo personagens memoráveis em belos cenários sombrios e com uma história envolvente, ou desbrave a vastidão da fase final de jogo e do mundo compartilhado, onde os jogadores se encontram nos vilarejos para negociar, formam equipes para enfrentar Chefes do Mundo ou entram em áreas de PvP para testar suas habilidades contra outros jogadores - sem a necessidade de lobbies - com jogo e progressão multiplataforma em todas as plataformas disponíveis.", cape: "https://i.ytimg.com/vi/jFtk_7tvAVc/maxresdefault.jpg", value: 349},

    {title: "STAR WARS Jedi: Survivor™", description: "A história de Cal Kestis continua em STAR WARS Jedi: Survivor™, uma aventura em terceira pessoa na galáxia da Respawn Entertainment e da Lucasfilm Games. Este título de jogo solo guiado pela narrativa retoma a história cinco anos após os eventos de STAR WARS Jedi: Fallen Order™, acompanhando a luta cada vez mais desesperada de Cal para que a galáxia não se torne sombria.", cape: "https://mletzsw5dne2.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://i2.wp.com/combocaster.pt/wp-content/uploads/2022/12/2-2.jpg?fit=1200%2C675&ssl=1", value: 449},

    {title: "Wo Long: Fallen Dynasty", description: "Wo Long: Fallen Dynasty é a história dramática e cheia de ação de um soldado anónimo da milícia que luta pela sobrevivência, numa versão de fantasia sombria dos Finais da Dinastia Han onde os demónios atormentam os Três Reinos. Vais usar espadas e técnicas baseadas nas artes marciais chinesas para enfrentar criaturas mortíferas e soldados inimigos, ao mesmo tempo que tentas despertar o teu verdadeiro poder interior para superar as adversidades. Wo Long refere-se a alguém com talentos especiais escondidos e também a um herói ou pessoa de grandeza ainda desconhecida. Esta é uma história sobre oficiais que serão heróis, ainda no seu período de anonimato. É também a história da ascensão de um protagonista vindo do nada.", cape: "https://teamninja-studio.com/wolong/assets/img/og.jpg", value: 299},

    {title: "The Last of Us Part II", description: "Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações. Uma história complexa e emocionante Vivencie os conflitos morais cada vez maiores criados pela busca implacável de Ellie por vingança. O ciclo de violência deixado em seu caminho desafiará suas noções de certo ou errado, bem ou mal e herói ou vilão. Um mundo belo, mas perigoso. Embarque na jornada de Ellie, levando-a das montanhas e florestas tranquilas de Jackson até as ruínas exuberantes e cobertas pela vegetação da área metropolitana de Seattle. Encontre novos grupos de sobreviventes, ambientes desconhecidos e traiçoeiros e evoluções terríveis dos infectados. Criados pela versão mais recente do mecanismo da Naughty Dog, o mundo e os personagens mortais estão mais realistas e meticulosamente detalhados do que nunca. Partida tensa e alucinante de ação e sobrevivência  Os sistemas de partida novos e avançados atendem aos desafios de vida ou morte da jornada de Ellie por um mundo hostil. Vivencie sua batalha alucinante pela sobrevivência através de recursos aprimorados como combate corpo a corpo de alta intensidade, movimento fluido e ações furtivas dinâmicas. Uma ampla variedade de armas, itens de criação, habilidades e atualizações possibilitam que você personalize as habilidades de Ellie de acordo com seu estilo de jogo.", cape: "https://i0.wp.com/www.teilzeithelden.de/wp-content/uploads/2020/10/The-Last-of-Us-Part-II-Rant-Analysis-Header-%C2%A9-Naughty-Dog.png?fit=1068%2C580&ssl=1", value: 199},

    {title: "Gran Turismo® 7", description: "Assuma o volante de mais de 400 carros já no primeiro dia — com cada motor clássico e supercarro de ponta recriados com um detalhismo sem igual — e corra por mais de 90 pistas em condições climáticas dinâmicas. Com a volta do lendário modo GT Simulation, você poderá comprar, modificar, pilotar e vender seus carros ao longo de uma campanha individual enquanto vai desbloqueando novos veículos e desafios.", cape: "https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/3GEdKTGktTBsZ8Sj9yIWnr2f.jpg", value: 349},

    {title: "UNCHARTED: Coleção", description: "Numa experiência apresentada pela premiada desenvolvedora Naughty Dog, UNCHARTED: Coleção Legado dos Ladrões inclui duas aventuras para um jogador que foram aclamadas pela crítica: UNCHARTED 4: A Thief’s End e Uncharted: The Lost Legacy.", cape: "https://meups.com.br/wp-content/uploads/2022/01/Uncharted-Colecao-Legado-dos-Ladroes-4.jpg", value: 349},

    {title: "Spider-Man: Miles Morales", description: "Na aventura mais recente do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando à sua nova casa enquanto segue os passos de seu mentor, Peter Parker, para se tornar um novo Spider-Man. Mas uma violenta disputa de forças ameaça destruir seu novo lar e faz o aspirante a herói perceber que com grandes poderes também vêm grandes responsabilidades. Para salvar a Nova York da Marvel, Miles precisa reconhecer e assumir o título de Spider-Man.", cape: "https://cdn-ext.fanatical.com/production/product/1280x720/7863fc71-ad91-4482-97a4-b7ba56d1f997.jpeg", value: 349},
    
    {title: "Ghost of Tsushima", description: "A história de Ghost of Tsushima gira em torno de Jin Sakai, o último samurai sobrevivente na Ilha de Tsushima, se passando durante a primeira invasão Mongol no território japonês no século XIII, mais especificamente no ano de 1274. Com um mapa aberto que recria o ambiente do Japão Feudal, o jogador assumirá o controle de um guerreiro que luta para impedir a grande invasão liderada pelo líder brutal Khotun Khan. Na realidade, esta batalha foi responsável por abalar todos os conceitos e ideais de um povo que se orgulhava de seu poderio militar, e que até então, nunca havia enfrentado uma ameaça tão grande em seu território. Naquela época, o império liderado por Kublai Khan já havia conquistado uma boa parte da Europa e o Oriente quase por completo. Depois de dominar o território coreano, a próxima empreitada seria expandir seus limites para além dos mares, e o Japão se tornou um alvo inevitável para o poderoso ditador. Comandado pelo temido general Khotun Khan, que no jogo se trata de um primo fictício de Kublai Khan, a gigantesca frota naval mongol atraca inicialmente na ilha de Tsushima. A partir daí acompanhamos a narrativa do game sob perspectiva de Jin Sakai, um nobre samurai e sobrinho do Lorde Shimura, o líder regente daquela região. Com um exército formado por cerca de oitenta samurais, ele avança com todas as forças contra o exército invasor. O resultado é um verdadeiro massacre sem precedentes e a morte de praticamente todos aliados.", cape: "https://tecnoblog.net/wp-content/uploads/2020/07/ghost-of-tsushima-1.jpg", value: 349},

    {title: "FINAL FANTASY XVI", description: "Um épico mundo de fantasia sombria onde o destino da terra é decidido pelos poderosos Eikons e os Dominantes que os controlam.  Essa é a história de Clive Rosfield, um guerreiro que recebeu o título de Primeiro Escudo de Rosaria e jurou proteger seu irmão mais novo, Joshua, o Dominante da Fênix. Em pouco tempo, Clive se envolverá em um grande tragédia e fará um juramento de vingança contra o Eikon Ifrit, uma misteriosa entidade que traz calamidade por onde passa.", cape: "https://fyre.cdn.sewest.net/ff-xvi/63613f54b609f28540733c42/social_share-GK0OFw6bj.jpg", value: 349},

    {title: "God of War Ragnarök", description: "Do Santa Monica Studio, esta é a sequência da aclamada versão de 2018 de God of War. Junte-se a Kratos e Atreus em uma jornada mítica à procura de respostas na iminência do Ragnarök. Juntos, pai e filho arriscarão tudo viajando por cada um dos Nove Reinos. Explorando paisagens mitológicas de tirar o fôlego, eles enfrentarão deuses nórdicos, feras selvagens e outros inimigos aterradores enquanto se preparam para o maior confronto de suas vidas. Kratos será desafiado como nunca e usará as suas poderosas armas de guerra, incluindo o Machado Leviatã e as Lâminas do Caos, para proteger sua família. Com a variedade de novas habilidades para ele e Atreus, o combate nesta odisseia épica e implacável é fluido, flexível e impactante. Enquanto isso, as forças de Asgard se preparam...", cape: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg", value: 349},

    {title: "ELDEN RING", description: "O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias. Um mundo vasto onde campos abertos e uma variedade de situações e masmorras imensas, com complexos designs tridimensionais se conectam com fluidez. Conforme explora, sinta a alegria de descobrir poderosas e desconhecidas ameaças que aguardam por você, levando a um grande senso de conquista.", cape: "https://img.hype.games/cdn/9edf816d-5625-45d2-9ef6-8b2ae65bb7eaCover_Elder%20Ring.png", value: 349},

    {title: "FIFA 23", description: "O EA SPORTS™ FIFA 23 proporciona ainda mais ação e realismo do futebol aos campos do Jogo de Todo Mundo com avanços na tecnologia HyperMotion2 no PlayStation®5, que agora tem o dobro de capturas de movimentos do mundo real, criando animações de futebol mais reais do que nunca.", cape: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c", value: 349},
    ]  
    const REACT_APP_API_URL = "http://localhost:5000"
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [avata, setAvata] = useState("")
    const [token, setToken] = useState()
    const [products, setProducts] = useState(undefined)
    const [idGame, setIdGame] = useState(undefined)
    const [game, setGame] = useState(undefined)
    const [tipo, setTipo] = useState("")
    const inputDesbotado = "#F2F2F2"
    const inputAtivo = "#FFFFFF"
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
    const botaoLoading = <Bars 
        height="30" 
        width="80" 
        radius="9"
        color="#ffffff" 
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}    
    /> 

  return (
    <LagContext.Provider value={{
        products,
        setProducts,
        load,
        botaoLoading,
        idGame, 
        setIdGame,
        game,
        setGame,
        inputDesbotado,
        inputAtivo,
        REACT_APP_API_URL,
        userId,
        setUserId,
        token,
        setToken,
        userName,
        setUserName,
        setAvata,
        avata,
        setTipo,
        tipo
    }}>
      {children}
    </LagContext.Provider>
  )
}