import Script from "next/script";
import Head from "next/head";

const domain = "https://helenarchs.com"

export default function SeoHeaderAndTracking(props) {
  return (
    <div>
      <Head>
        {/* https://gist.github.com/whitingx/3840905 */}
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" type="image/png" href="/images/LocalEggLogo.svg" />
        <link rel="icon" type="image/png" href="/images/LocalEggLogo.svg" sizes="196x196" />
        <link rel="icon" type="image/png" href="/images/LocalEggLogo.svg" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/LocalEggLogo.svg" sizes="128x128" />
        <link rel="canonical" href={`${domain}/${props.canonical}`} />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
        {/* Facebook */}
        {/* https://ogp.me/#types */}
        <meta name="og:title" content={props.title} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={`${domain}/${props.canonical}`} />
        <meta name="og:image" content="/images/Localegg100x100.webp" />
        <meta name="og:site_name" content="ARCHS - Alpine Rental Cabins and Hospitality Systems" />
        <meta name="og:description" content={props.description} />
        {/* Twitter */}
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
      </Head>
    </div>
  );
}
