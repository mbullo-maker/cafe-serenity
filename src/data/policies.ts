export interface Policy {
  title: string;
  content: string;
}

export const policies: Policy[] = [
  {
    title: "Age Restrictions - Alcoholic Beverages",
    content: `Must be 21 years or older to purchase alcoholic beverages.
Valid government-issued photo ID required.
We reserve the right to refuse service.
Zero tolerance policy for providing alcohol to minors.`
  },
  {
    title: "Terms and Conditions",
    content: `By using our services, you agree to these terms and conditions.
Prices are subject to change without notice.
We reserve the right to modify or discontinue services.
All orders are subject to availability.`
  },
  {
    title: "Privacy Policy",
    content: `We collect and process personal data in accordance with privacy laws.
Your data is securely stored and never shared with third parties.
We use cookies to enhance your browsing experience.
You can request access to your personal data at any time.`
  },
  {
    title: "Refund Policy",
    content: `Refunds are available within 30 minutes of purchase.
Items must be in original condition.
Receipt is required for all refunds.
Store credit may be offered in lieu of refunds.`
  }
];
