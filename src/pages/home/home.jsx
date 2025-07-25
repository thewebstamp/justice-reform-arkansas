import { Helmet } from 'react-helmet-async';
import images from '../../assets/images.js';
import Header from '../../components/header/header.jsx';
import Hero from '../../components/hero/hero.jsx';
import Overview from '../../components/overview/overview.jsx';
import ProtestSection from '../../components/protestSection/protestSection.jsx';
import AbuseSection from '../../components/abuseSection/abuseSection.jsx';
import WhatYouCanDo from '../../components/whatYouCanDo/whatYouCanDo.jsx';
import ProtestSummary from '../../components/protestSummary/protestSummary.jsx';
import Footer from '../../components/footer/footer.jsx';
import ImageBreak from '../../components/imageBreak/imageBreak.jsx';

function Home() {
    return (
        <>
            <Helmet>
                <title>Truth in the Air and Water | Awareness on Chemtrails, Food & Water Safety</title>
                <meta name="description" content="Explore the hidden dangers in our skies, food, and water. Truth in the Air and Water is dedicated to raising awareness about chemtrails and toxic exposure affecting our health and environment." />
            </Helmet>

            <div className="homepage">
                <Header home="active" />
                <Hero />
                <Overview />
                <ImageBreak src={images.protest} />
                <ProtestSection />
                <AbuseSection />
                <WhatYouCanDo />
                <ImageBreak src={images.county} />
                <ProtestSummary />
                <Footer home="active" />
            </div>
        </>
    )
};

export default Home;