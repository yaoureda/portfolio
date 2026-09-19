import todoappImg from '../assets/todoapp.png'
import prepaflmaghrib from '../assets/prepaflmaghrib.png'
import poketypes from '../assets/poketypes.png'
import chatlobby from '../assets/chatlobby.png'

const projects = [
  {
    id: 1,
    title: "Chat Lobby",
    image: chatlobby,
    description: "Une application de chat en temps réel développée avec Spring Boot, WebSocket, et PostgreSQL.",
    gitLink: "https://github.com/yaoureda/ChatLobby",
    webLink: "https://chatlobby.onrender.com/"
  },
  {
    id: 2,
    title: "PokeTypes",
    image: poketypes,
    description: "Un petit jeu consistant à deviner le type du Pokemon à partir de son sprite, développé avec Angular.",
    gitLink: "https://github.com/yaoureda/poke-types",
    webLink: "https://yaoureda.github.io/poke-types/"
  },
  {
    id: 3,
    title: "To Do App",
    image: todoappImg,
    description: "Une application de gestion de tâches et de suivi d'habitudes. Elle comprend un système d'authentification et un dashboard de suivi des minutes travaillées durant les 7 derniers jours.",
    gitLink: "https://github.com/yaoureda/To-Do-App",
    webLink: "https://to-do-app-y7i6.onrender.com/"
  },
  {
    id: 4,
    title: "Prepa au Maroc",
    image: prepaflmaghrib,
    description: "Une plateforme web destinée aux élèves des CPGE MP du Maroc, proposant des informations générales sur les CPGE, un moteur de recherche d’annales du CNC (Concours national commun), et des conseils et ressources pour réussir sa prépa.",
    gitLink: "https://github.com/yaoureda/prepaflmaghrib",
    webLink: "https://prepaflmaghrib.onrender.com/"
  }
]

export default projects