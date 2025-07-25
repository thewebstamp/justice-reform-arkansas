import { Helmet } from 'react-helmet-async';
import images from '../../assets/images.js';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import ImageBreak from '../../components/imageBreak/imageBreak.jsx';
import StoriesPage from '../../components/storiesPage/storiesPage.jsx';
import StoriesCTA from '../../components/storiesCTA/storiesCTA.jsx';

function Stories() {
    return (
        <>
            <Helmet>
                <title>Real Stories | Justice Reform for Arkansas</title>
                <meta
                    name="description"
                    content="Read the real experiences of victims abused, falsely imprisoned, and mistreated under Craighead County’s corrupt justice system. Share your own story and join the movement."
                />
                <meta property="og:title" content="Real Stories | Justice Reform for Arkansas" />
                <meta property="og:description" content="Read real stories from victims of the corrupt justice system in Craighead County. Be informed. Be moved. Be a voice." />
                <meta property="og:url" content="https://justiceforarkansas.netlify.app/stories" />
                <meta property="og:type" content="article" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Real Stories | Justice Reform for Arkansas" />
                <meta name="twitter:description" content="Expose the truth about what’s happening in Craighead County. Real people. Real injustice. Share your story." />
            </Helmet>

            <div className="stories">
                <Header stories="active" />
                <StoriesPage />
                <ImageBreak src={images.action} />
                <StoriesCTA />
                <Footer stories='active' />
            </div>
        </>
    )
};

export default Stories;