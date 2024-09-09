import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "CV": "https://drive.google.com/file/d/1oERmF6oRRl39Y1OCLXcD0HMQYNqIKqM9/view?usp=sharing",
        "about": {
          "title": "About",
          "paragraph1": "I'm Brazilian and I'm currently studying Software Engineering at Anhanguera College. I am passionate about programming and I always seek to improve myself.",
          "paragraph2": "I'm a developer studying to specialize in backend I love working with Node.JS, python and I play with React.JS",
          "paragraph3": "In my free time, I like to go to the gym, read good books, watch movies and series.",
          "paragraph4": "Thank you for visiting my website, I hope you enjoyed it."
        },
        "navbar": {
          "home": "Home",
          "projects": "Projects",
          "about": "About"
        },
        "buttons": {
          "github": "See my codes",
          "LinkedIn": "My LinkedIn",
          "bsky": "Speaking about tech",
          "Instagram": "Face reveal",
          "mail": "Contact me",
          "CV": "Download CV"
        },
        "projects": [
          {
            "id": 1,
            "title": "BMI Calculator",
            "description": [
              "The BMI Calculator allows users to input their height and weight, and then calculates their BMI based on this information. BMI is a widely used measure to assess whether a person has a healthy weight in relation to their height.",
              "Calculates BMI based on the provided height and weight.",
              "Categorizes the result into a BMI range, indicating whether the user is underweight, normal weight, overweight, or obese.",
              "Simple and user-friendly interface."
            ],
            "imageUrl": "https://i.postimg.cc/0Q1HXVRw/Screenshot-2024-02-29-Calculadora-IMC.png",
            "stack": "JavaScript, HTML, CSS",
            "url": "https://github.com/joaoandrejs/imc-calculadora"
          },
          {
            "id": 2,
            "title": "Sistine Discord BOT",
            "description": [
              "With various versions of the same project being developed from mid-2019 to late 2023 with +10000 users and +100 servers, Sistine was a Discord bot.",
              "Initially using the Discord.js v11 version up to the most current v14, Sistine was developed to be a moderation, fun, and economy bot at the beginning, and over time focusing on the economy part.",
              "Various commands and systems were developed and improved, from the most basic coin transfer to other members to an advanced farm care system and other systems."
            ],
            "imageUrl": "https://i.postimg.cc/HnZbKyZQ/Twitter-post-1.png",
            "stack": "Node.js (discord.js)",
            "url": "https://github.com/sistine-bot"
          },
          {
            "id": 3,
            "title": "Downloader API",
            "description": [
              "API to retrieve video information, download videos and audio in high quality directly from: YouTube, Instagram, TikTok, Twitter and SoundCloud.",
              "Project all done in Node.js"
            ],
            "imageUrl": "https://i.postimg.cc/jjSdwFky/Twitter-post-2.png",
            "stack": "Node JS",
            "url": "https://github.com/joaoandrejs/downloader-api"
          }
        ]
      }
    },
    pt: {
      translation: {
        "CV": "https://drive.google.com/file/d/17SSB1EzyVh3sKGhmtspoYql0MKJrwyin/view?usp=drive_link",
        "about": {
          "title": "Sobre",
          "paragraph1": "Sou brasileiro e atualmente estou estudando Engenharia de Software na Faculdade Anhanguera. Sou apaixonado por programação e sempre procuro melhorar.",
          "paragraph2": "Sou desenvolvedor estudando para me especializar em backend adoro trabalhar com Node.JS, python e brinco com React.JS",
          "paragraph3": "No meu tempo livre, gosto de ir à academia, ler bons livros, assistir filmes e séries.",
          "paragraph4": "Obrigado por visitar meu site, espero que tenha gostado."
        },
        "navbar": {
          "home": "Início",
          "projects": "Projetos",
          "about": "Sobre Mim"
        },
        "buttons": {
          "github": "Meus códigos",
          "LinkedIn": "LinkedIn",
          "bsky": "Falando sobre tech",
          "Instagram": "Low Profile",
          "mail": "Entre em contato",
          "CV": "Baixar CV"
        },
        "projects": [
          {
            "id": 1,
            "title": "Calculadora IMC",
            "description": [
              "A Calculadora de IMC permite aos usuários inserir sua altura e peso e, em seguida, calcula seu IMC com base nessas informações. O IMC é uma medida amplamente utilizada para avaliar se uma pessoa está com um peso saudável em relação à sua altura.",
              "Calcula o IMC com base na altura e peso fornecidos.",
              "Categoriza o resultado em uma faixa de IMC, indicando se o usuário está abaixo do peso, dentro do peso normal, sobrepeso ou obeso.",
              "Interface de usuário simples e amigável."
            ],
            "imageUrl": "https://i.postimg.cc/0Q1HXVRw/Screenshot-2024-02-29-Calculadora-IMC.png",
            "stack": "JavaScript, HTML, CSS",
            "url": "https://github.com/joaoandrejs/imc-calculadora"
          },
          {
            "id": 2,
            "title": "Sistine Discord BOT",
            "description": [
              "Com diversas versões do mesmo projeto sendo desenvolvido de meados de 2019 até o final de 2023 com +10000 usuários e +100 servidores, Sistine foi o um bot para discord.",
              "Utilizando em seu começo a versão do Discord.js v11 até a mais atual v14, Sistine foi desenvolvido para ser um bot de moderação, diversão e economia em seu início e com o tempo sendo focada na parte de economia.",
              "Diversos comandos e sistemas foram desenvolvidos e melhorados desde o mais básico da transferência de moedas para outros membros até um sistema avançado de cuidado de fazendas e outros sistemas."
            ],
            "imageUrl": "https://i.postimg.cc/HnZbKyZQ/Twitter-post-1.png",
            "stack": "Node.js (discord.js)",
            "url": "https://github.com/sistine-bot"
          },
          {
            "id": 3,
            "title": "Downloader API",
            "description": [
              "API para pegar informações de vídeos, baixar vídeos e áduio em alta qualidade diretamente do: YouTube, Instagram, TikTok, Twitter e SoundCloud.",
              "Projeto todo feito em Node.js"
            ],
            "imageUrl": "https://i.postimg.cc/jjSdwFky/Twitter-post-2.png",
            "stack": "Node JS",
            "url": "https://github.com/joaoandrejs/downloader-api"
          }
        ]
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
