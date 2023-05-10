
import Image from 'next/image';
import { getBlogs } from '../../../../sanity/sanity-utils';
import Link from 'next/link';


export const metadata = {
  title: 'DIYEmma Blog',
  description: 'My blog',
}


export default async function BlogPage() {

    const blogs = await getBlogs();

  return (
    <div className='main-container mt-5'>
      <h1>Emma's Crafty Blog</h1>

      <div className='grid-3'>
        {blogs.map((blog) => (

            <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                {blog.image && (
                    <Image
                    src={blog.image.url}
                    alt={blog.name}
                    width={300}
                    height={200} 
                    quality={60}/>
                )}
                <h2>{blog.name}</h2>
                <p>Alt: {blog.image.alt}</p>
                <p>{blog.description}</p>
            </Link>
        ))}
        </div>
    </div>
  )
};
