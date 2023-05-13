
import Image from 'next/image';
import { getBlogs } from '../../../../sanity/sanity-utils';
import Link from 'next/link';
import '../../../styles/components/cards/blog-preview.css';
import moment from "moment";


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

  return (
    <div className='main-container mt-5'>
      <h1>Emma&apos;s Crafty Blog</h1>

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
                <p>{moment(blog._createAt).format("MMMM DD, YYYY")}</p>
            </Link>
        ))}
        </div>
    </div>
  )
};
