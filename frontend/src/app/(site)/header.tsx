import Link from "next/link";
import Nav from "@/components/navigation";
import '../../styles/pages/main-header.css';


const links = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blogs" },
  ];

  
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://diy-emma.vercel.app"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://diy-emma.vercel.app/blogs"
      }]
  };


const TheHeader = () => {

return(
    <header className="main-header main-container">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="logo-title">
               <Link href="/"><span className="color-primary">DIY</span> Emma</Link>
        </div>

        <div className="flex-row gap-1">
            <Nav links={links} />
        </div>
    </header>
);
};

export default TheHeader;