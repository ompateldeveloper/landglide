import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="px-4">{children}</div>
            <Footer />
        </>
    );
}
