import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/post';

export default function Home (props) {
  const { allPostsData } = props;
  console.log('props', props);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm wangkaiwd , a software engineer!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// at build time
// 这里的代码只会在服务端运行
export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}

// 俩种形式不能一起使用
// // at each request time
// context contains request specific parameters
// export async function getServerSideProps (context) {
//   return {
//     props: {
//       test: 'test'
//     }
//   };
// }
