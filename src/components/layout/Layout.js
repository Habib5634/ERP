import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 bg-background">{children}</main>
      <Footer />
    </div>
  );
}
