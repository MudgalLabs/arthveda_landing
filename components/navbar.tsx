import Image from "next/image";
import Link from "next/link";

import { Button } from "@/ui/button";

export default function Navbar() {
    return (
        <nav>
            <ul className="[&>li]:w-fit w-full flex justify-between">
                <div>
                    <li>
                        <Link href="/">
                            <Image
                                src="/branding.svg"
                                alt="Picture of the author"
                                width={128}
                                height={0}
                            />
                        </Link>
                    </li>
                </div>

                <div className="flex-x gap-x-8">
                    <li>
                        <Link href="#why">Why</Link>
                    </li>

                    <li>
                        <Link href="#features">Features</Link>
                    </li>

                    <li>
                        <Link href="#supported-brokers">Supported Brokers</Link>
                    </li>
                </div>

                <div>
                    <Button>{`Get started - it's free!`}</Button>
                </div>
            </ul>
        </nav>
    );
}
