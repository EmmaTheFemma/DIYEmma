import Link from "next/link";
import Nav from "@/components/navigation";
import '../../styles/pages/main-header.css';


const links = [
    { name: "Home", url: "/" },
/*     { name: "Crochet", url: "#" },
    { name: "Sewing", url: "#" },
    { name: "Gaming", url: "#" }, */
    { name: "Blog", url: "/blogs" },
  ];


const TheHeader = () => {

return(
    <header className="main-header main-container">
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