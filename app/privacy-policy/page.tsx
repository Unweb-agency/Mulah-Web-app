export const metadata = {
  title: "Privacy Policy | MÜLAH",
  description: "Privacy Policy for MÜLAH platform",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last Updated: December 30, 2025</p>

      <p className="mb-6">
        MÜLAH (“we,” “our,” or “us”) is committed to protecting your privacy and
        being transparent about how we collect, use, and safeguard your
        information. This Privacy Policy explains how your data is handled when
        you use the MÜLAH website, mobile application, and related services
        (collectively, the “Platform”).
      </p>

      <p className="mb-6">
        By accessing or using MÜLAH, you agree to the practices described in
        this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Information We Collect
      </h2>

      <h3 className="font-semibold mt-4 mb-2">A. Information You Provide</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Email address and account credentials</li>
        <li>Profile information (username, preferences)</li>
        <li>Journal entries, reflections, tags, and notes</li>
        <li>Messages and interactions with AI features</li>
      </ul>

      <h3 className="font-semibold mt-4 mb-2">B. Financial Information</h3>
      <p className="mb-2">
        If you connect financial accounts through third-party providers (such as
        Plaid):
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Transaction history</li>
        <li>Account balances and metadata</li>
        <li>Spending categories and financial activity</li>
      </ul>
      <p className="mt-2">
        <strong>Important:</strong> MÜLAH does not store bank login credentials.
      </p>

      <h3 className="font-semibold mt-4 mb-2">
        C. Automatically Collected Information
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Device and browser information</li>
        <li>App and website usage data</li>
        <li>Cookies (website only)</li>
        <li>Analytics and performance data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Operate and improve MÜLAH</li>
        <li>Provide personalized financial and emotional insights</li>
        <li>Improve AI models and analytics</li>
        <li>Maintain platform security</li>
        <li>Communicate service updates</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. Data Sharing & Disclosure
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>We do not sell personal data</li>
        <li>Only shared with trusted providers (Plaid, hosting, analytics)</li>
        <li>Anonymized aggregated insights</li>
        <li>Legal or security reasons</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        4. Data Monetization Transparency
      </h2>
      <p>
        MÜLAH may generate revenue from anonymized, aggregated insights. These
        do not identify individual users. Users retain ownership of their
        personal content.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. User Control & Choices
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access and update your data</li>
        <li>Delete your account</li>
        <li>Disconnect financial accounts</li>
        <li>Control feature usage</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Security</h2>
      <p>
        We use encrypted transmission, secure APIs, and limited access controls.
        No system is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Age Restriction</h2>
      <p>MÜLAH is for users 18 years or older.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. International Use</h2>
      <p>
        MÜLAH operates in the United States. Data may be processed under U.S.
        laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Changes to This Policy
      </h2>
      <p>We may update this policy and change the date above.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact</h2>
      <p>
        Email: <strong>support@mulah.app</strong>
      </p>
    </div>
  );
}
