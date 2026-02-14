import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img className={styles.logo} alt="Borr Project logo" src="/img/logo.webp" width="180" height="180"/>
        <Heading as="h1" className="hero__title">
          Welcome to {siteConfig.title}!
        </Heading>
        <p className="hero__subtitle">
          Empowering learners to master college curricula through free resources. Choose a major and start today!
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/start-here">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Empowering learners to master college curricula through free resources.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.content}>
          <div className="text--center">
            <p>Come, chat with us:</p>
            <a href="https://discord.gg/uR2QS36pdH"><img width="320" height="76" src="https://discordapp.com/api/guilds/1385616874200371350/widget.png?style=banner2" alt="Discord Banner"/></a>
                  <p className="meta" {...{ 'xmlns:cc': "http://creativecommons.org/ns#" }} {...{ 'xmlns:dct': "http://purl.org/dc/terms/" }}><a property="dct:title" rel="cc:attributionURL" href="https://borr.dev">The Borr Project</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/BorrProject/borrproject.github.io/graphs/contributors">the Borr Project Contributors</a> is licensed under <a className={styles.cc} href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">CC BY-NC-SA 4.0 <img className={styles.ccimages} src="/img/cc.svg" alt="cc" width="22" height="22"/><img className={styles.ccimages} src="/img/by.svg" alt="by" width="22" height="22"/><img className={styles.ccimages} src="/img/nc.svg" alt="nc" width="22" height="22"/><img className={styles.ccimages} src="/img/sa.svg" alt="sa" width="22" height="22"/></a></p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
