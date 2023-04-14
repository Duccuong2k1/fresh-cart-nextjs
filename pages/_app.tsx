import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import { DefaultSeo, NextSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps & any) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {};
  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        defaultTitle="E-commerce fresh cart"
        openGraph={{
          type: "website",
          // locale: "vi_VN",
          site_name: "E-commerce fresh cart",
        }}
      />
      {pageProps.seo && <NextSeo {...pageProps.seo} />}
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />

    </>
  )
}
