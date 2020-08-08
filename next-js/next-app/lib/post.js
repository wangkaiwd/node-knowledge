const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
import remark from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');
const filenames = fs.readdirSync(postsDir);
export const getSortedPostsData = () => {
  return filenames.map(filename => {
    const str = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { content, data: { title, date } } = matter(str);
    return { id: filename.replace(/\.md/g, ''), content, title, date };
  }).sort((a, b) => { // 日期从小到大排列
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
  });
};

export function getAllPostsIds () {
  // 要返回的数组格式：
  // [
  //   {
  //     params: { id: 'xxx' }
  //   }
  // ];
  // Next.js会根据返回自动帮我们创建对应路由，其它的地址将会返回404
  return filenames.map(filename => {
      return {
        params: {
          id: filename.replace(/\.md/g, '')
        }
      };
    }
  );
}

export async function getPostsData (id) {
  const fullContent = fs.readFileSync(path.join(postsDir, id + '.md'), 'utf8');
  const { content, data } = matter(fullContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { id, contentHtml, content, ...data };
}
