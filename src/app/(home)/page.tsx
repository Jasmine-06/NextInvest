import HeroSection from "@/components/hero-section/HeroSection";
import ProductSection from "@/components/product-section/ProductSection";
import InvestmentDetailSection from "@/components/investment-detail-section/InvestmentDetailSection";
import CallToAction from  '@/components/call-to-action/CallToAction';


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ProductSection />
      <InvestmentDetailSection />
      <CallToAction/>
    </div>
  );
}
