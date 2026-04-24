import LegalPageLayout, { LegalSection, LegalParagraph, LegalList } from '../components/LegalPageLayout';

export default function TermsOfService() {
    return (
        <LegalPageLayout
            title="Terms of Service"
            description="Simple, fair terms for using this website. No surprises."
        >
            <LegalSection title="Website Purpose">
                <LegalParagraph>
                    This website serves as a personal portfolio and professional showcase for Sifatullah Kaisar. It is
                    designed to present past work, skills, and services to potential clients and collaborators.
                    The content here reflects real projects and capabilities.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Demo Projects Disclaimer">
                <LegalParagraph>
                    Some projects displayed on this site may be demo versions, concept designs, or prototypes
                    created for demonstration purposes. These may not represent final production-ready
                    applications. Any demo content is clearly intended for showcasing design and development
                    skills and should not be treated as a finished product.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="No Guarantees">
                <LegalParagraph>
                    While every effort is made to keep the information on this website accurate and up to
                    date, we make no guarantees regarding:
                </LegalParagraph>
                <LegalList
                    items={[
                        'Specific performance outcomes or results from hiring our services',
                        'Search engine rankings or traffic improvements',
                        'Uptime or availability of the website at all times',
                        'The accuracy of any third-party content or links referenced on the site',
                    ]}
                />
            </LegalSection>

            <LegalSection title="Intellectual Property">
                <LegalParagraph>
                    All content on this website — including but not limited to text, designs, code,
                    graphics, logos, and project showcases — is the intellectual property of Sifatullah Kaisar unless
                    otherwise stated. You may not reproduce, distribute, or use any content from this site
                    without prior written permission.
                </LegalParagraph>
                <LegalParagraph>
                    If you'd like to reference or feature any of the work shown here, please reach out first.
                    We're generally happy to collaborate — just ask.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Limitation of Liability">
                <LegalParagraph>
                    This website and its content are provided "as is" without any warranties, express or
                    implied. Sifatullah Kaisar shall not be held liable for any damages arising from the use of this
                    website, including but not limited to direct, indirect, incidental, or consequential
                    damages.
                </LegalParagraph>
                <LegalParagraph>
                    By using this website, you agree that your use is at your own risk.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="User Conduct">
                <LegalParagraph>
                    When using this website, you agree to:
                </LegalParagraph>
                <LegalList
                    items={[
                        'Use the site for lawful purposes only',
                        "Not attempt to disrupt, hack, or interfere with the website's functionality",
                        "Not scrape, copy, or redistribute the website's content without permission",
                        'Provide accurate information when using the contact form',
                    ]}
                />
            </LegalSection>

            <LegalSection title="Right to Update Terms">
                <LegalParagraph>
                    We reserve the right to update or modify these terms at any time without prior notice.
                    Changes will take effect immediately upon being posted on this page. Your continued use of
                    the website after any changes constitutes acceptance of the updated terms.
                </LegalParagraph>
                <LegalParagraph>
                    We recommend checking this page periodically to stay informed of any updates.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Contact Us">
                <LegalParagraph>
                    If you have any questions or concerns about these terms, feel free to get in touch at{' '}
                    <a
                        href="mailto:sifat828micro@gmail.com"
                        className="text-[#FF7A18] hover:underline transition-colors duration-200"
                    >
                        sifat828micro@gmail.com
                    </a>
                    . We're always open to a friendly conversation.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
