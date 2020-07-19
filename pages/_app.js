import '../styles/styles.scss';
import Layout from '../Layout/Layout';
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
