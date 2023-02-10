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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />

                <title>100 вопросов для вашего душевного общения</title>
                <meta name="description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="100 вопросов для вашего душевного общения" />
                <meta property="og:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:image" content={`${process.env.DOMAIN}/preview.png`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="100 вопросов для вашего душевного общения" />
                <meta name="twitter:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="twitter:domain" content="100-questions.vercel.app" />
                <meta property="twitter:url" content={process.env.DOMAIN} />
                <meta name="twitter:image" content={`${process.env.DOMAIN}/preview.png`} />

                <link rel="apple-touch-icon" href="./favicon/icon-192x192.png" />
                <link rel="icon" type="image/svg+xml" href="./favicon/any.svg" />
                <link rel="shortcut icon" href="./favicon/favicon.ico" />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="apple-touch-startup-image" href="./splashscreen.png" />

                <meta name="theme-color" content="#b5aedf" />

                <link rel="manifest" href="./manifest.json" />
            </head>
            <body className={montserrat.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
