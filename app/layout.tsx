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
        <html>
            <head>
                <title>100 Вопросов</title>
                <meta name="description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="100 Вопросов" />
                <meta property="og:site_name" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:image" content={`${process.env.DOMAIN}/cover.jpg`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="100 Вопросов" />
                <meta name="twitter:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta name="twitter:site" content={process.env.DOMAIN} />
                <meta name="twitter:image" content={`${process.env.DOMAIN}/cover.jpg`} />
            </head>
            <body className={montserrat.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
