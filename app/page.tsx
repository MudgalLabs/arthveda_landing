import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Movtivation from "@/components/motivation";
import Features from "@/components/features";
import SupportedBrokers from "@/components/supported_brokers";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="space-y-12 md:space-y-24">
            <Navbar />
            <Hero />
            <Movtivation />
            <Features />
            <SupportedBrokers />
            <Footer />
        </div>
    );
}
