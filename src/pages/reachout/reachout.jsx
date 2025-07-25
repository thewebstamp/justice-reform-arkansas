import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Donation from '../../components/donation/donation.jsx';
import SupportTheProtest from '../../components/supportTheProtest/supportTheProtest.jsx';
import TaxDeductibleSecure from '../../components/taxDeductibleSecure/taxDeductibleSecure.jsx';

function Reachout() {
    return (
        <>
            <Helmet>
                <title>Donate | Justice Reform for Arkansas</title>
                <meta
                    name="description"
                    content="Support our mission to expose judicial corruption and defend the innocent. Your donation helps us protest injustice, support victims, and spread the truth."
                />
                <meta property="og:title" content="Donate | Justice Reform for Arkansas" />
                <meta property="og:description" content="Support our mission to fight injustice and end abuse in Craighead County. Every donation helps fuel the movement for real reform." />
                <meta property="og:url" content="https://justiceforarkansas.netlify.app/donate" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Donate | Justice Reform for Arkansas" />
                <meta name="twitter:description" content="Help us fight the corrupt system in Craighead County. Your support brings truth to light and empowers real change." />
            </Helmet>

            <div className="reachout">
                <Header reachout="active" />
                <SupportTheProtest />
                <Donation />
                <TaxDeductibleSecure />
                <Footer reachout='active' />
            </div>
        </>
    )
};

export default Reachout;