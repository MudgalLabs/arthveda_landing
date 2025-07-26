export default function RefundPage() {
    return (
        <div className="mt-12">
            <h1 className="big-heading mb-12">Refund Policy</h1>

            <p className="mb-2">
                <strong>Effective Date:</strong> June 25, 2025
            </p>

            <p className="mb-4">Thank you for subscribing to Arthveda.</p>
            <p className="mb-4">
                All subscription purchases are final. We <strong>DO NOT</strong>{" "}
                offer refunds, whether for monthly or yearly plans.
            </p>
            <p className="mb-4">
                We encourage you to explore Arthveda using the free plan before
                upgrading. This policy helps us operate sustainably while
                continuing to serve serious traders with premium features.
            </p>
            <p className="mb-4">
                For any concerns or questions, feel free to reach out at{" "}
                <a
                    href="mailto:hey@arthveda.app"
                    className="font-bold text-sm! sm:text-base!"
                >
                    hey@arthveda.app
                </a>
                .
            </p>
        </div>
    );
}
