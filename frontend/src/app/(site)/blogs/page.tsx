
import Image from 'next/image';
import { getBlogs } from '../../../../sanity/sanity-utils';
import Link from 'next/link';
import '../../../styles/components/cards/blog-preview.css';
import moment from "moment";
import SiteIntroduction from '@/components/heros/introduction';


export const metadata = {
  title: {
    default: 'DIYEmma Blog',
    template: '%s'},
  description: {
    default: 'My blog',
    template: '%s'},
}


export default async function BlogPage() {
    const blogs = await getBlogs();

    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "CollectionPage",
      name: "Blog Articles",
      description: "Explore a collection of informative and inspiring blog articles.",
      url: "https://diy-emma.vercel.app/blogs"
    };


  return (
    <div className='main-container mt-5'>

      <SiteIntroduction title="Emma&apos;s Crafty Blog" description="A curated collection of inspiring craft-focused blog posts."/>

      <div className='grid-3 gap-2'>
        {blogs.map((blog) => (

            <Link href={`/blogs/${blog.slug}`} key={blog._id} className='blog-preview'>
                {blog.image && (
                    <Image
                    src={blog.image.url}
                    alt={blog.image.alt}
                    width={300}
                    height={200} 
                    quality={60}/>
                )}
                <h2>{blog.name}</h2>
                <p>{blog.description}</p>
                {/* <p>Not Working?: {moment(blog._createAt).format("MMMM DD, YYYY")}</p> */}
            </Link>
        ))}
        </div>
    </div>
  )
};
