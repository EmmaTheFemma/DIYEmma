/* import "@/styles/components/heros.css"; */
/* import LatestArticle from "../cta/latest-article"; */
import "@/styles/components/heros/main-hero.css";
import "@/styles/components/buttons.css";


const MainHero = () => {
 

    return (
        <section className="main-hero main-container">
            <div>
                <h1>Emma&apos;s Cozy Corner <span className="color-red">&hearts;</span></h1>
                <p className="mt-1 fz-3">Get Comfy and Creative with Emma&apos;s DIY Projects and Ideas</p>
                {/* <LatestArticle /> */}
                <button>Read More...</button>
            </div>

            <picture>
                <source srcSet="/assets/images/crochet/plushies/baby-yoda-crochet.webp" type="image/webp" />
                <source srcSet="/assets/images/crochet/plushies/baby-yoda-crochet.png" type="image/png" />
                <img src="/assets/images/crochet/plushies/baby-yoda-crochet.png" alt="Fallback Image" />
            </picture>

        </section>
      );
};

export default MainHero;