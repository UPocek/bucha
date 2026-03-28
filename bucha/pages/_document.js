import Document, { Head, Html, Main, NextScript } from 'next/document';
import { defaultLocale } from '@/lib/i18n';

export default class BuchaDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);

        return {
            ...initialProps,
            locale: context.locale || defaultLocale,
        };
    }

    render() {
        return (
            <Html lang={this.props.locale || defaultLocale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
