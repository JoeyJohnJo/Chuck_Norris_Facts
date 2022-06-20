import ExternalLink from "./ExternalLink";
import Column from "../Column/Column";
import FooterSection from "./FooterSection";

const CreditsSection = () => <FooterSection title="Credits">
    {{
        subtitle: <>
            This page is based on
            <ExternalLink href="https://api.chucknorris.io"> chucknorris.io</ExternalLink>.
        </>,
        content: <Column>
            <ExternalLink href="https://github.com/chucknorris-io" icon={true}> Github </ExternalLink>
            <ExternalLink href="https://twitter.com/MatChilling" icon={true}> Twitter </ExternalLink>
        </Column>
    }}
</FooterSection>


export default CreditsSection
