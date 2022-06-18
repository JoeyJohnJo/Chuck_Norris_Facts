import ExternalLink from "./ExternalLink";
import CreditsSection from "./CreditsSection";
import AuthorSection from "./AuthorSection";

function Footer() {
    return (
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <CreditsSection/>
            <br/>
            <AuthorSection/>
        </div>
    )
}

export default Footer
