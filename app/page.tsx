import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Movtivation from "@/components/motivation";
import Features from "@/components/features";
import Brokers from "@/components/brokers";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Brokers />
            <Movtivation />
            <Features />
            <Footer />
        </div>
    );
}
