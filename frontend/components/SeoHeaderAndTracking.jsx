import Script from "next/script";
import Head from "next/head";

// function addMarketSchema(props) {
//   // https://schema.org/LocalBusiness
//   <script type="application/ld+json">
//     `{
//     "@context": "https://schema.org",
//     "@type": "Restaurant",
//     "image": [
//     "https://example.com/photos/1x1/photo.jpg",
//     "https://example.com/photos/4x3/photo.jpg",
//     "https://example.com/photos/16x9/photo.jpg"
//     ],
//     "name": "Dave's Steak House",
//     "address": {
//       "@type": "PostalAddress",
//     "streetAddress": "148 W 51st St",
//     "addressLocality": "New York",
//     "addressRegion": "NY",
//     "postalCode": "10019",
//     "addressCountry": "US"
//   },
//     "review": {
//       "@type": "Review",
//     "reviewRating": {
//       "@type": "Rating",
//     "ratingValue": "4",
//     "bestRating": "5"
//     },
//     "author": {
//       "@type": "Person",
//     "name": "Lillian Ruiz"
//     }
//   },
//     "geo": {
//       "@type": "GeoCoordinates",
//     "latitude": 40.761293,
//     "longitude": -73.982294
//   },
//     "url": "http://www.example.com/restaurant-locations/manhattan",
//     "telephone": "+12122459600",
//     "servesCuisine": "American",
//     "priceRange": "$$$",
//     "openingHoursSpecification": [
//     {
//       "@type": "OpeningHoursSpecification",
//     "dayOfWeek": [
//     "Monday",
//     "Tuesday"
//     ],
//     "opens": "11:30",
//     "closes": "22:00"
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//     "dayOfWeek": [
//     "Wednesday",
//     "Thursday",
//     "Friday"
//     ],
//     "opens": "11:30",
//     "closes": "23:00"
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//     "dayOfWeek": "Saturday",
//     "opens": "16:00",
//     "closes": "23:00"
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//     "dayOfWeek": "Sunday",
//     "opens": "16:00",
//     "closes": "22:00"
//     }
//     ],
//     "menu": "http://www.example.com/menu",
//     "acceptsReservations": "True"
// }
//   </script>
// }

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
        <link rel="canonical" href={`https://thelocalegg.com${props.canonical}`} />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
        {/* Facebook */}
        {/* https://ogp.me/#types */}
        <meta name="og:title" content={props.title} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={`https://thelocalegg.com${props.canonical}`} />
        <meta name="og:image" content="/images/Localegg100x100.webp" />
        <meta name="og:site_name" content="The Local Egg - Farmers Market Finder" />
        <meta name="og:description" content={props.description} />
        {/* Twitter */}
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content="/images/Localegg100x100.webp" />
        <meta name="twitter:site" content="@mylocalegg" />
        <meta name="twitter:creator" content="@mylocalegg" />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K3S4R57');`}
      </Script>
    </div>
  );
}
