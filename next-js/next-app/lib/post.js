const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
export const getSortedPostsData = () => {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  return filenames.map(filename => {
    const str = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { content, data: { title, date } } = matter(str);
    return { id: filename, content, title, date };
  }).sort((a, b) => { // 日期从小到大排列
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
  });
};
