import { Helmet } from 'react-helmet-async';
import images from '../../assets/images.js';
import Header from '../../components/header/header.jsx';
import ImageBreak from '../../components/imageBreak/imageBreak.jsx';
import OurMission from '../../components/aboutModule/OurMission.jsx';
import WhyItMatters from '../../components/aboutModule/whyItMatters.jsx';
import HowYouCanJoin from '../../components/aboutModule/howYouCanJoin.jsx';
import ScriptureQuote from '../../components/aboutModule/scriptureQuote.jsx';
import Footer from '../../components/footer/footer.jsx';

function About() {
    return (
        <>
            <Helmet>
                <title>About | Justice Reform for Arkansas</title>
                <meta
                    name="description"
                    content="Learn why Justice Reform for Arkansas was created. We are a Christian-led movement exposing corruption, false imprisonment, and abuse in Craighead County, Arkansas."
                />
                <meta property="og:title" content="About | Justice Reform for Arkansas" />
                <meta property="og:description" content="Learn why Justice Reform for Arkansas was created. We are a Christian-led movement exposing corruption, false imprisonment, and abuse in Craighead County, Arkansas." />
                <meta property="og:url" content="https://justiceforarkansas.netlify.app/about" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About | Justice Reform for Arkansas" />
                <meta name="twitter:description" content="We’re fighting against corruption and injustice in Craighead County. Learn who we are and why this movement matters." />
            </Helmet>

            <div className="about">
                <Header about="active" />
                <OurMission />
                <ImageBreak src={images.mission} />
                <WhyItMatters />
                <ImageBreak src={images.matters} />
                <HowYouCanJoin />
                <ScriptureQuote />
                <Footer about='active' />
            </div>
        </>
    )
};

export default About;