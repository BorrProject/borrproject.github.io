import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Computer Science',
    description: (
      <>
        Build a strong foundation in programming, algorithms, systems, and software design. This path guides you through a rigorous, self-paced curriculum modeled on top university programs. Learn to think like a computer scientist and create like an engineer.
      </>
    ),
    link: '/computer-science',
    buttontext: "Let's Go!",
  },
  {
    title: 'Pre-College Math',
    description: (
      <>
        Prepare for college-level math with confidence. This path covers essential topics like algebra, geometry, and precalculus, designed for learners who want to strengthen their skills before diving into advanced mathematics or technical fields.
      </>
    ),
    link: '/precollege-math',
    buttontext: "Let's Go!",
  },
  {
    title: 'Data Science',
    description: (
      <>
        Master the art of extracting insights from data. From statistics and machine learning to real-world projects, this curriculum equips you with the tools to analyze, visualize, and communicate data effectively—ideal for aspiring analysts and researchers.
      </>
    ),
    link: '/data-science',
    buttontext: "Let's Go!",
  },
  {
    title: 'Math',
    description: (
      <>
        Engage with mathematics in its full richness. This path offering the breadth of a full undergraduate math education, helping you appreciate math not just as a tool, but as a discipline of beauty, depth, and discovery.
      </>
    ),
    link: '/math',
    buttontext: "Let's Go!",
  },
];

function Feature({title, description, link, buttontext}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--md"
            href={link}>
            {buttontext}
          </a>
        </div>
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
