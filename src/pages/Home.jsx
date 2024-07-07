import '../styles/Home.css'
import Button from '../components/Button.jsx';
import { SvgMail, SvgGithub, SvgInstagram, SvgLinkedin, SvgTwitter, DownloadSvg } from '../components/SvgComponent.jsx';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-col contents'>
                <Button href="https://github.com/joaoandrejs" Svg={SvgGithub} text={t('buttons.github')} />
                <Button href='https://www.linkedin.com/in/joaopauloandre/' Svg={SvgLinkedin} text={t('buttons.linkedin')} />
                <Button href='https://x.com/joaoandrexz' Svg={SvgTwitter} text={t('buttons.twitter')} />
                <Button href='https://instagram.com/joaoandrexz' Svg={SvgInstagram} text={t('buttons.instagram')} />
                <Button href='mailto:contatojoaopauloandre@gmail.com' Svg={SvgMail} text={t('buttons.mail')} />
                
                <Button href={t('CV')}
                    Svg={DownloadSvg}
                    text={t('buttons.CV')}
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