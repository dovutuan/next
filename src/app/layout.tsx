'use client';
import i18n from '@/i18n';
import ClientProvider from '@/providers/ClientProvider';
import StoreProvider from '@/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import '@/styles/index.scss';
import Spinner from '@/components/common/spinner';
import SnackbarGroup from '@/components/modules/snackbar-group';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Admin</title>
        <link rel="icon" type="image/x-icon" href="/assets/image/favicon.ico" />
      </head>
      <body>
        <StoreProvider>
          <ClientProvider>
            <Spinner />
            <SnackbarGroup />
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </ClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
