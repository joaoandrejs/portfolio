import '../styles/Home.css'
import Button from '../components/Button.jsx';
import { SvgMail, SvgGithub, SvgInstagram, SvgLinkedin, SvgTwitter, DownloadSvg } from '../components/SvgComponent.jsx';

function Home() {

    return (
        <>
            <div className='flex flex-col contents'>
                <Button href="https://github.com/joaoandrejs" Svg={SvgGithub} text='See my codes' />
                <Button href='https://www.linkedin.com/in/joaopauloandre/' Svg={SvgLinkedin} text='My Linkedin' />
                <Button href='https://x.com/joaoandrexz' Svg={SvgTwitter} text='Read my daydreams' />
                <Button href='https://instagram.com/joaoandrexz' Svg={SvgInstagram} text='Face reveal' />
                <Button href='mailto:contatojoaopauloandre@gmail.com' Svg={SvgMail} text='Conctact me' />
                
                <Button href='https://drive.google.com/file/d/1oERmF6oRRl39Y1OCLXcD0HMQYNqIKqM9/view?usp=sharing' 
                    Svg={DownloadSvg}
                    text='Download CV' 
                    style={{
                        background: 'var(--text-color)', 
                        color: 'var(--background-color)', 
                        width: '250px'
                    }}
                />

            </div>
        </>
    )
}

export default Home