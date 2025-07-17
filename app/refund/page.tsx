export default function RefundPage() {
    return (
        <div className="mt-12">
            <h1 className="big-heading mb-12">Refund Policy</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> June 29, 2025
            </p>

            <p className="mb-4">Thank you for subscribing to Arthveda.</p>
            <p className="mb-4">
                If you are not fully satisfied with your subscription purchase,
                we offer a simple and transparent refund policy. Users can
                request a full refund within <strong>72 hours (3 days)</strong>{" "}
                of the purchase time for both monthly and yearly subscription
                plans.
            </p>
            <p className="mb-4">
                After the 72-hour window has passed, we will be unable to
                process a refund. This helps us maintain a fair usage policy for
                all users and continue improving Arthveda sustainably.
            </p>
            <p className="mb-4">
                To request a refund, please email us at{" "}
                <a
                    href="mailto:hey@arthveda.app"
                    className="font-bold text-sm! sm:text-base!"
                >
                    hey@arthveda.app
                </a>{" "}
                with your account details and subscription receipt.
            </p>
        </div>
    );
}
