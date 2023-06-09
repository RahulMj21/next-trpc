import "@/app/globals.css";
import { TrpcProvider } from "@/utils/TrpcProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "NEXT / TRPC",
    description: "Next.js 13 app with trpc server",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TrpcProvider>{children}</TrpcProvider>
            </body>
        </html>
    );
}
