/* import Link from "next/link";
import { getBlogs } from "../../../sanity/sanity-utils";

export default async function LatestArticle() {

    const blogs = await getBlogs();

    blogs.map((blog) => ( 
      console.log("Here")
    ))


  return (
    <Link href="#"><button>Latest Article...</button></Link>
  
  )} */


// Seems to work? But get build error.
  import Link from "next/link";
  import { getBlogs } from "../../../sanity/sanity-utils";
  
  export default async function LatestArticle() {
    const blogs = await getBlogs();
  
    // Find the latest blog by sorting the blogs array based on _createAt
    const latestBlog = blogs.sort((a, b) => {
      const dateA = new Date(a._createAt);
      const dateB = new Date(b._createAt);
      return dateB.getTime() - dateA.getTime();
    })[0];
  
    // Use the latest blog's name and slug
    const { name, slug } = latestBlog;
  
    return (
      <Link href={`/blogs/${slug}`}>
        <button>Latest Article</button>
      </Link>
    );
  }