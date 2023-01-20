import { ReactNode } from 'react';
import { Montserrat } from '@next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({
    weight: ['400'],
    style: ['normal'],
    subsets: ['cyrillic', 'latin']
});

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" translate="no">
            <head>
                <title>100 Вопросов</title>
                <meta name="description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="100 Вопросов" />
                <meta property="og:site_name" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:image" content="social.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="100 Вопросов" />
                <meta name="twitter:site" content="@dmjcomdem" />
                <meta name="twitter:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta name="twitter:site" content={process.env.DOMAIN} />
                <meta name="twitter:image" content="social.jpg" />
                <meta name="twitter:image:alt" content="Cover для приложения 100-questions" />

                <link rel="icon" type="image/png" sizes="192x192" href="favicon/favicon-192x192.png" />
                <link rel="icon" type="image/png" sizes="256x256" href="favicon/favicon-256x256.png" />
                <link rel="icon" type="image/png" sizes="384x384" href="favicon/favicon-384x384.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="favicon/favicon-512x512.png" />
                <link rel="apple-touch-icon" href="favicon/favicon-512x512.png" />
                <link rel="icon" type="image/svg+xml" href="favicon/any.svg" />
                <link rel="shortcut icon" href="favicon/favicon.ico" />

                <link rel="manifest" href="manifest.json" />
            </head>
            <body className={montserrat.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
