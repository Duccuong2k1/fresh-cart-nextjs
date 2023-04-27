import '../styles/global.scss';

import store from '@/app/store';
import { ToastProvider } from '@/lib/providers/toast-provider';
import { DefaultSeo, NextSeo } from 'next-seo';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps & any) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {};
  let persistor = persistStore(store);


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
      <ToastProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
          {/* <ToastContainer /> */}
        </Provider>
      </ToastProvider>
    </>
  );
}
