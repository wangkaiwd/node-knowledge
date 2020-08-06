// 只能在这里引入全局`CSS`
import '../styles/globals.css';

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
