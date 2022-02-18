import Head from 'next/head';
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';
export default function Layout({ children, title, slogant }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Pour voyager à travers le monde et visiter et avoir un esprtit tranquille"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Playfair+Display:ital,wght@0,900;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossOrigin="anonymous"
                ></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossorigin="anonymous"
                />{' '}
            </Head>
            <main>
                {children}
                <footer className="col-12">
                    <NewsLetter />
                    <Footer slogant={slogant} />
                </footer>
            </main>
        </>
    );
}
