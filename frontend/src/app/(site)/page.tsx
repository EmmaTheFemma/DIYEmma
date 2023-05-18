import MainHero from '@/components/heros/main-hero';

export const metadata = {
  title: 'DIYEmma',
  description: 'Welcome to my website.',
}

export default function Home() {
  return (
    <div className="mt-5">
      <MainHero />
    </div>
  )
};
