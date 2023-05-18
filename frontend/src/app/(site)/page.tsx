import MainHero from '@/components/heros/main-hero';

export const metadata = {
  title: "Crafting Magic: Join DIYEmma's DIY Adventure",
  description: 'Unleash your creativity with DIYEmma! Explore crochet, painting, restorations, sewing, and more. A personal blog with a touch of everything, inspiring you to embrace your inner artist.',
/*   openGraph: {
    title: 'DIYEmma - Crafting Inspiration',
    description: 'A personal blog with a touch of everything',
    site_name: "https://www.instagram.com/crochetdiyemma/"
  }, */
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "DIYEmma - Crafting Inspiration",
  description: "Explore the world of DIY crafts, crochet, painting, and more with DIYEmma.",
  url: "https://diy-emma.vercel.app/",
  keywords: "DIY, crafts, crochet, painting, restorations, sewing",
  sameAs: [
    "https://www.instagram.com/crochetdiyemma/"
  ]
};

export default function Home() {
  return (
    <div className="mt-5">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      <MainHero />
    </div>
  )
};
