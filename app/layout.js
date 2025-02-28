  import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
  import Navbar from "./components/Navbar";
  import TopNavBar from "./components/TopNavBar";
  import "./globals.css";

  export const metadata = {
    title:
      "Best Digital Marketing Agency in Pakistan | SEO & Website Development",
    description:
      "Looking for a top-rated digital marketing agency in Pakistan? We offer expert SEO services, website development, Shopify store development, eCommerce solutions, and lead generation to grow your business. Contact us today!",
    keywords:
      "Digital Marketing Agency, Digital Marketing Agency in Pakistan, SEO Services, Website Development Company, Graphic Design Services, E-commerce Development, Lead Generation Services, Shopify Store Development, Best Digital Marketing Agency, SEO Experts, Custom Website Design, Social Media Marketing Services, Local SEO Services, Branding and Logo Design, Shopify Dropshipping Experts, Affordable Web Design Services, Content Marketing Services, Online Marketing Services, Web Development for E-commerce",
    openGraph: {
      title:
        "Best Digital Marketing Agency in Pakistan | SEO & Website Development",
      description:
        "Grow your business with expert SEO, website development, eCommerce solutions, and lead generation services. Contact the best digital marketing agency in Pakistan today!",
      url: "https://skillcreatives.com",
      type: "website",
      image: "https://yourwebsite.com/images/digital-marketing-agency.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Best Digital Marketing Agency in Pakistan | SEO & Website Development",
      description:
        "Looking for professional digital marketing, SEO, and web development? We help businesses grow online with expert services.",
      image: "https://yourwebsite.com/images/digital-marketing-agency.jpg",
    },
  };

  export default function RootLayout({ children }) {
   
    return (
      <html lang="en">
        <body className=" font-outfit">
       
        <TopNavBar/>
        {/* <CustomCursor/> */}
        <Navbar/>
        {children}
        <Footer/>
        </body>
      </html>
    );
  }
