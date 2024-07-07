import { useTranslation } from 'react-i18next';
import '../styles/About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className='about-container'>
      <h2>{t('about.title')}</h2>

      <p>
        {t('about.paragraph1')}
      </p>

      <p>
        {t('about.paragraph2')}
      </p>

      <p>
        {t('about.paragraph3')}
      </p> 

      <p>
        {t('about.paragraph4')}
      </p>
    </div>
  );
}

export default About;