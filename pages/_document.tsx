import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="rus">
            <Head>
                <meta
                    name="description"
                    content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="100 Вопросов" />
                <meta property="og:site_name" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta property="og:url"  content={process.env.DOMAIN} />
                <meta property="og:image" content="../public/cover.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="100 Вопросов" />
                <meta name="twitter:description" content="Приложение для того, чтобы вам было интересно открываться и узнавать друг друга" />
                <meta name="twitter:site" content={process.env.DOMAIN} />
                <meta name="twitter:image"  content="../public/cover.jpg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
