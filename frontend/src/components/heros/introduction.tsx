import "@/styles/components/heros/big-introduction.css";

const SiteIntroduction = ({ title, description }: any) => {

    return (
        <section className="big-introduction">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
      );
};

export default SiteIntroduction;