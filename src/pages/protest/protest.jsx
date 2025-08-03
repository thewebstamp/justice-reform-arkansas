import { Helmet } from 'react-helmet-async';
import images from '../../assets/images.js';
import Header from '../../components/header/header.jsx';
import ProtestHeader from '../../components/protestHeader/protestHeader.jsx';
import EventDetails from '../../components/eventDetails/eventDetails.jsx';
import ProtestSignUp from '../../components/protestSignUp/protestSignUp.jsx';
import Footer from '../../components/footer/footer.jsx';
import WhyYourVoiceMatters from '../../components/whyYourVoiceMatters/whyYourVoiceMatters.jsx';
import WhatsNeeded from '../../components/whatsNeeded/whatsNeeded.jsx';
import ImageBreak from '../../components/imageBreak/imageBreak.jsx';

function Protest() {
    return (
        <>
            <Helmet>
                <title>Protest on August 2 | Justice Reform for Arkansas</title>
                <meta
                    name="description"
                    content="Join us for a peaceful protest on August 2 in Jonesboro, Arkansas. Stand against the injustice, abuse, and corruption happening in Craighead County’s broken justice system."
                />
                <meta property="og:title" content="Protest on August 2 | Justice Reform for Arkansas" />
                <meta property="og:description" content="Join the August 2 protest in Jonesboro, Arkansas to stand against inhumane treatment, false imprisonment, and corruption in Craighead County." />
                <meta property="og:url" content="https://justiceforarkansas.netlify.app/protest" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Protest on August --- | Justice Reform for Arkansas" />
                <meta name="twitter:description" content="Join the peaceful protest demanding justice for those wrongfully imprisoned in Craighead County. Your voice matters." />
            </Helmet>

            <div className="protest">
                <Header protest="active" />
                <ProtestHeader />
                <EventDetails />
                <ProtestSignUp />
                <WhatsNeeded />
                <ImageBreak src={images.protest} />
                <WhyYourVoiceMatters />
                <Footer protest='active' />
            </div>
        </>
    )
};

export default Protest;