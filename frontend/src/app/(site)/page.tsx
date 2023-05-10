import MainHero from '@/components/heros/main-hero';
import Image from 'next/image';

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
