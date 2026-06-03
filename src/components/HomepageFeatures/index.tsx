import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Primeiros Passos',
    icon: '⚡',
    description: (
      <>
        Configure e comece a usar o Quintilis em minutos.
        Guias passo a passo para instalação e configuração inicial.
      </>
    ),
  },
  {
    title: 'Referência de API',
    icon: '⟨/⟩',
    description: (
      <>
        Documentação completa de todas as APIs, endpoints e métodos disponíveis.
        Exemplos práticos e detalhes de implementação.
      </>
    ),
  },
  {
    title: 'Comunidade',
    icon: '◈',
    description: (
      <>
        Junte-se à comunidade do Quintilis.
        Contribua com o projeto, reporte bugs e acompanhe o desenvolvimento.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={styles.pillarCard}>
      <div className={styles.pillarIcon}>{icon}</div>
      <Heading as="h3" className={styles.pillarTitle}>{title}</Heading>
      <p className={styles.pillarDesc}>{description}</p>
      <div className={styles.pillarLine} />
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Explore</div>
          <Heading as="h2" className={styles.sectionTitle}>
            O que você encontrará aqui
          </Heading>
        </div>
        <div className={styles.pillarsGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
