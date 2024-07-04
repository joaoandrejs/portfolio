import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import ProjectPopout from '../components/ProjectPopout';
import '../styles/Projects.css';

const projects = [
  { id: 1, title: 'Calculadora IMC', description: ['A Calculadora de IMC permite aos usuários inserir sua altura e peso e, em seguida, calcula seu IMC com base nessas informações. O IMC é uma medida amplamente utilizada para avaliar se uma pessoa está com um peso saudável em relação à sua altura.', 'Calcula o IMC com base na altura e peso fornecidos.', 'Categoriza o resultado em uma faixa de IMC, indicando se o usuário está abaixo do peso, dentro do peso normal, sobrepeso ou obeso.', 'Interface de usuário simples e amigável.'], imageUrl: 'https://i.postimg.cc/0Q1HXVRw/Screenshot-2024-02-29-Calculadora-IMC.png', stack: 'javascript, HTML, CSS', url: 'https://github.com/joaoandrejs/imc-calculadora' },
  { id: 2, title: 'Sistine Discord BOT', description: ['Com diversas versões do mesmo projeto sendo desenvolvido de meados de 2019 até o final de 2023 com +10000 usuários e +100 servidores, Sistine foi o um bot para discord.', 'Utilizando em seu começo a versão do Discord.js v11 até a mais atual v14, Sistine foi desenvolvido para ser um bot de moderação, diversão e economia em seu inicio e com o tempo sendo focada na parte de economia. ', 'Diversos comandos e sistemas foram desenvolvidos e melhorados desde o mais basico da transferencia de moedas para outros membros até um sistema avançado de cuidado de fazendas e outros sistemas. '], imageUrl: 'https://t.ctcdn.com.br/kwrsbZJeGS5rH-kOYK6-tweI5Qs=/640x360/smart/i525670.png', stack: 'Node.JS (discord.js)', url: 'https://github.com/sistine-bot' },
  { id: 3, title:  'Ninja Multi Media', description: ['Baixe vídeos do YouTube, Instagram, TikTok, Twitter e áudios do SoundCloud com um clique usando o Ninja Multi Mídia ', 'Projeto desenvolvido com React JS para o Front-end e Node JS para o Back-end', 'O projeto possui um backend separado com uma API que faz o download e pega as informações dos vídeos.'], imageUrl: 'https://i.postimg.cc/cCYr0tQ0/Captura-de-tela-2024-07-03-14-36-36.png', stack: 'React JS | Node JS ', url: 'https://github.com/joaoandrejs/MultiMediaNinja' },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closePopout = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <div style={{ marginTop: '50px' }}>
                <ProjectList projects={projects} onProjectClick={handleProjectClick} />
                {selectedProject && <ProjectPopout project={selectedProject} onClose={closePopout} />}
            </div>
        </>
    )
}

export default Projects;
