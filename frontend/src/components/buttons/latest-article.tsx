import Link from "next/link";
import { getBlogs } from "../../../sanity/sanity-utils";

export default function LatestArticle() {

    const blogs = getBlogs();

    /* blogs.map(blog) */

  return (
    <Link href=""><button>Latest Article...</button></Link>
  )
}
