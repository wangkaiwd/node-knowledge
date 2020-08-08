import Layout from '../../components/layout';
import { getAllPostsIds, getPostsData } from '../../lib/post';
import DateTime from '../../components/dateTime';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Post (props) {
  const { date, id, title, contentHtml } = props.postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          {title}
        </h1>
        <small className={utilStyles.lightText}>
          <DateTime dateString={date}/>
        </small>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}/>
      </article>
    </Layout>
  );
}

export async function getStaticProps ({ params }) {
  const postData = await getPostsData(params.id);
  return {
    props: { postData }
  };
}

export function getStaticPaths () {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  };
}
