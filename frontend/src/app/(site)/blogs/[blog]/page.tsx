
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { getBlog, getBlogs } from '../../../../../sanity/sanity-utils';
import '../../../../styles/pages/main-article.css';


type Props = {
  params: { blog: string }
}

// Makes it SSG. Need to fix ity to Static instead.
export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};


export async function generateMetadata({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  const metadata = {
    title: blog.name,
    description: blog.description,
  };
    return metadata;
}


export default async function SingleBlog({ params }: Props) {

  const slug = params.blog; // Because folder is named [blog]
  const blog = await getBlog(slug);

  return (
    <article className='small-container main-article'>
      <h1>{ blog.name }</h1>

      {blog.image && <Image src={blog.image.url} alt={blog.image.alt} width={685} height={400} style={{objectFit: "cover"}} />}

      <p className="article-description">{ blog.description }</p>

      <div className='main-article-content'>
        <PortableText value={ blog.content } />
      </div>

    </article>
  )
};
