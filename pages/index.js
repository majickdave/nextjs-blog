import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Beginning my career as an infrastructure engineer, 
          I honed my skills in project management, complex construction oversight, 
          and the meticulous examination of engineering designs for cost 
          and quality efficiency. Intrigued by the potential of technology, 
          I initially dipped my toes into coding through the creation of 
          straightforward games and applications. This nascent curiosity 
          rapidly grew into a profound passion for computer science, 
          data science, and product management. In pursuit of my passion, 
          I joined a Master's program in Data Science, mastering concepts 
          such as data structures, algorithms, data processing, software 
          engineering economics, data value, and digital marketing. 
          One of the milestones in my career was launching my first startup,
          MusicMind. In this venture, I spearheaded product design, database creation, 
          team recruitment, and raised $40,000 in funding. Further demonstrating my entrepreneurial spirit, 
          I developed a React.JS web app, designed as a live cryptocurrency price calculator. 
          A deep love for data has consistently been the backbone of my professional journey, 
          leading me to accumulate significant experience in building web crawlers, 
          implementing security measures, overseeing DevOps, managing database access, 
          as well as mining and parsing data from public APIs.
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  );
}