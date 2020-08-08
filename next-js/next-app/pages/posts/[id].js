import Layout from '../../components/layout';
import { getAllPostsIds, getPostsData } from '../../lib/post';

export default function Post (props) {
  const { date, id, title, contentHtml } = props.postData;
  return (
    <Layout>
      {title}
      <br/>
      {id}
      <br/>
      {date}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}/>
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
