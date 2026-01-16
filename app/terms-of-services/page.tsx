export const metadata = {
  title: "Terms & Conditions | MÜLAH",
  description: "Terms and Conditions for MÜLAH platform",
};
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function termsOfServices() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
      <p className="text-gray-500 mb-8">Last Updated: 2025</p>

      <p className="mb-6">
        These Terms govern your access to and use of MÜLAH. By using the
        Platform, you agree to them.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Eligibility</h2>
      <p>You must be 18 years or older.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Nature of the Service
      </h2>
      <p>
        MÜLAH is not a bank, financial advisor, investment advisor, or mental
        health provider. All insights are for informational and self-reflection
        purposes only.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. No Professional Advice
      </h2>
      <p>You are responsible for decisions you make using the platform.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. User Accounts</h2>
      <p>You are responsible for your credentials and all activity.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. User Content</h2>
      <p>
        You retain ownership. You grant MÜLAH license to process content while
        account exists.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Subscriptions & Payments
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Subscriptions are billed in advance</li>
        <li>Auto-renew unless cancelled</li>
        <li>Monthly non-refundable</li>
        <li>Annual may have limited refund window</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Acceptable Use</h2>
      <p>No misuse, hacking, or illegal usage.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        8. Intellectual Property
      </h2>
      <p>All platform content and technology belongs to MÜLAH.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Limitation of Liability
      </h2>
      <p>MÜLAH is provided “as is”. No guarantee of outcomes.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Termination</h2>
      <p>You may stop anytime. We may suspend for violations.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">11. Governing Law</h2>
      <p>Governed by laws of the United States.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">12. Contact</h2>
      <p>
        Email: <strong>support@mulah.app</strong>
      </p>
    </div>
  );
}
