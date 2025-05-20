import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
 
  const socialLinks = {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#"
  };

  const siteName = "Your Site Name";
  const description = "Your site description goes here.";
    const contact = {
    address: "123/A, Business Avenue, Dhaka, Bangladesh",
    phone: "+880 1234 567890",
    email: "help@allapply.com",
    hours: "9 am - 10 pm",
    website: "www.allapply.com"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer socialLinks={socialLinks} siteName={siteName} description={description} contact={contact} />
    </div>
  )
}