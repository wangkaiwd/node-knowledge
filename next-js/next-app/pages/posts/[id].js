import Layout from '../../components/layout';
import { getAllPostsIds, getPostsData } from '../../lib/post';

export default function Post (props) {
  console.log('props', props);
  return (
    <Layout>
      {props.postData.title}
      <br/>
      {props.postData.id}
      <br/>
      {props.postData.date}
    </Layout>
  );
}

export function getStaticProps ({ params }) {
  const postData = getPostsData(params.id);
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
