import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/post';

export default function Home (props) {
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
    </Layout>
  );
}

// 这里的代码会在服务端执行
export async function getStaticProps () {
  const allPostData = getSortedPostsData();
  return {
    props: { allPostData }
  };
}
