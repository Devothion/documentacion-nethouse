import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ChatBot',
    Svg: require('@site/static/img/chatbot.svg').default,
    description: (
      <>
        ChatBot para soporte y ayuda inmediata para los clientes de NetHouse. Integración con modelos de lenguaje natural y modelos de OpenAI.
      </>
    ),
  },
  {
    title: 'CRM',
    Svg: require('@site/static/img/crm.svg').default,
    description: (
      <>
        CRM para administrar las ventas de NetHouse y facilitar la interacción cliente - empresa. Integración con WhatsApp, Facebook Messenger, Telegram, Email y Live Chat.
      </>
    ),
  },
  {
    title: 'Web Development Full Stack',
    Svg: require('@site/static/img/development.svg').default,
    description: (
      <>
        Desarrollo Web para la configuración y personalización de los sistemas para compatibilizar la experiencia de los clientes con NetHouse.    
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
