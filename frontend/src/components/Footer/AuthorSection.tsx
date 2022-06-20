import ExternalLink from "./ExternalLink";
import Column from "../Column/Column";
import FooterSection from "./FooterSection";

const AuthorSection = () => <FooterSection title="Author">
    {{
        subtitle: <>
            Created by&nbsp;
            <ExternalLink href="https://www.linkedin.com/in/gustavo-rocha-da-silva-25b16a1a6/">
                Gustavo Rocha
            </ExternalLink>.
        </>,
        content: <Column>
            <ExternalLink href="https://github.com/joeyjohnjo" icon={true}> Github</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/gustavo-rocha-da-silva-25b16a1a6/"
                          icon={true}> Linkedin</ExternalLink>
        </Column>
    }}
</FooterSection>

export default AuthorSection
