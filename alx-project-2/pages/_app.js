import Layout from '../components/layout/Layout.tsx'
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}