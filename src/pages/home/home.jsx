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
                <title>Justice Reform for Arkansas | Stand Against Abuse in Craighead County</title>
                <meta
                    name="description"
                    content="Justice Reform for Arkansas is a movement standing up against inhumane treatment, neglect, and wrongful imprisonment in the Craighead County Detention Center. Join the peaceful protest August --- in Jonesboro."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://justice-reform-arkansas.netlify.app/" />
                <meta property="og:title" content="Justice Reform for Arkansas | Stand Against Abuse in Craighead County" />
                <meta property="og:description"
                    content="Join us August --- in Jonesboro, Arkansas as we peacefully protest reported abuse and inhumane treatment inside the Craighead County Detention Center. Stand for truth, dignity, and justice." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://justice-reform-arkansas.netlify.app/" />
                <meta name="twitter:title" content="Justice Reform for Arkansas | Stand Against Abuse in Craighead County" />
                <meta name="twitter:description"
                    content="Join the August --- protest in Jonesboro. Stand with us against reported abuse and inhumane treatment in Craighead County Detention Center." />
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