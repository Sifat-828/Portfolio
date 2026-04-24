import LegalPageLayout, { LegalSection, LegalParagraph, LegalList } from '../components/LegalPageLayout';

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            description="Your privacy matters to us. Here's how we handle your information."
        >
            <LegalSection title="Information We Collect">
                <LegalParagraph>
                    We keep things simple. When you interact with this website, we may collect the following types of information:
                </LegalParagraph>
                <LegalList
                    items={[
                        'Contact details you voluntarily provide through forms (such as your name, email address, and message)',
                        'Basic usage data like pages visited, time spent on the site, and referring URLs',
                        'Technical information such as browser type, device type, and operating system for website optimization',
                    ]}
                />
            </LegalSection>

            <LegalSection title="How We Use Your Information">
                <LegalParagraph>
                    Any information collected is used solely to improve your experience and respond to your inquiries:
                </LegalParagraph>
                <LegalList
                    items={[
                        'To respond to messages or inquiries you send through the contact form',
                        'To understand how visitors interact with the site so we can improve it',
                        'To ensure the website functions correctly across different devices and browsers',
                    ]}
                />
            </LegalSection>

            <LegalSection title="Contact Forms & Communication">
                <LegalParagraph>
                    When you reach out through the contact form, your name, email, and message are collected so
                    we can get back to you. This information is only used for the purpose of responding to your
                    inquiry and is never shared with third parties for marketing or any other purpose.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Data Security">
                <LegalParagraph>
                    We take reasonable precautions to protect your information. However, no method of
                    transmission over the internet is 100% secure. We do our best to use commercially
                    acceptable means to protect your personal data, but we cannot guarantee absolute security.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="We Don't Sell Your Data">
                <LegalParagraph>
                    Let's be clear: we do not sell, trade, or rent your personal information to anyone. Your
                    data is yours, and we respect that. We will never misuse the information you share with us.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Third-Party Services">
                <LegalParagraph>
                    This website may use third-party tools for analytics or hosting. These services may
                    collect anonymized data to help us understand traffic patterns. We encourage you to review
                    the privacy policies of any third-party services linked from this site.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Your Rights">
                <LegalParagraph>
                    You have the right to request access to, correction of, or deletion of any personal
                    information we hold about you. If you'd like to exercise any of these rights, simply reach
                    out through the contact form or email us directly.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Updates to This Policy">
                <LegalParagraph>
                    We may update this privacy policy from time to time to reflect changes in our practices or
                    for legal reasons. Any changes will be posted on this page. We encourage you to review
                    this page periodically.
                </LegalParagraph>
            </LegalSection>

            <LegalSection title="Contact Us">
                <LegalParagraph>
                    If you have any questions about this privacy policy or how your data is handled, feel free
                    to reach out at{' '}
                    <a
                        href="mailto:sifat828micro@gmail.com"
                        className="text-[#FF7A18] hover:underline transition-colors duration-200"
                    >
                        sifat828micro@gmail.com
                    </a>
                    . We're happy to help.
                </LegalParagraph>
            </LegalSection>
        </LegalPageLayout>
    );
}
