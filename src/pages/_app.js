import "@/styles/globals.css";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Layout from "@/components/layout/Layout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${jakarta.variable} ${instrument.variable} min-h-screen bg-background font-sans`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
