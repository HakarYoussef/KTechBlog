import '../styles/globals.scss';
import { Layout } from '../components';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
