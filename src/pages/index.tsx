import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Background decorations */}
      <div className={styles.heroBg}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroGridLines} />
        <div className={styles.heroNoise} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} />
          Documentação
        </div>

        <Heading as="h1" className={styles.heroTitle}>
          <span>{siteConfig.title}</span>
          <br />
          <span className={styles.heroTitleMuted}>Docs</span>
        </Heading>

        <p className={styles.heroSubtitle}>
          Explore a documentação completa do Quintilis. 
          Guias, referências de API e tutoriais para começar.
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} to="/docs/commands">
            Começar →
          </Link>
          {/*<Link className={styles.btnGhost} to="/blog">*/}
          {/*  Blog*/}
          {/*</Link>*/}
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Documentação`}
      description="Documentação oficial do Quintilis. Guias, tutoriais e referências.">
      <HomepageHeader />
      {/*<main>*/}
      {/*  /!*<HomepageFeatures />*!/*/}
      {/*</main>*/}
    </Layout>
  );
}
