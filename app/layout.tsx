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
                <meta property="og:title" content="100 вопросов для вашего душевного общения" />
                <meta property="og:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:image" content={`${process.env.DOMAIN}/preview.jpg}`} />
                <meta property="og:site_name" content="100 вопросов" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:creator" content="@dmjcomdem" />
                <meta property="twitter:image:src" content={`${process.env.DOMAIN}/preview.jpg}`} />

                <link rel="icon" type="image/png" sizes="192x192" href="./favicon/favicon-192x192.png" />
                <link rel="icon" type="image/png" sizes="256x256" href="./favicon/favicon-256x256.png" />
                <link rel="icon" type="image/png" sizes="384x384" href="./favicon/favicon-384x384.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="./favicon/favicon-512x512.png" />
                <link rel="apple-touch-icon" href="./favicon/favicon-512x512.png" />
                <link rel="icon" type="image/svg+xml" href="./favicon/any.svg" />
                <link rel="shortcut icon" href="./favicon/favicon.ico" />

                <meta name="theme-color" content="#5D4BE1" />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Expo" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                <link rel="apple-touch-startup-image" href="./splashscreen.png" />

                <link rel="manifest" href="./manifest.json" />
            </head>
            <body className={montserrat.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
