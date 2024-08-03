import '../styles/Home.css'
import Button from '../components/Button.jsx';
import { SvgMail, SvgGithub, SvgInstagram, SvgLinkedIn, SvgTwitter } from '../components/SvgComponent.jsx';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-col contents'>
                <Button href="https://github.com/joaoandrejs" Svg={SvgGithub} text={t('buttons.github')} />
                <Button href='https://www.linkedin.com/in/joaopauloandre/' Svg={SvgLinkedIn} text={t('buttons.LinkedIn')} />
                <Button href='https://x.com/vortexzjs' Svg={SvgTwitter} text={t('buttons.twitter')} />
                <Button href='https://instagram.com/joaoandrexz' Svg={SvgInstagram} text={t('buttons.Instagram')} />
                <Button href='mailto:contatojoaopauloandre@gmail.com' Svg={SvgMail} text={t('buttons.mail')} />
            </div>
        </>
    )
}

export default Home