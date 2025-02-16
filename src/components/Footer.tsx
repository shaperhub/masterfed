import { LinkedinFooter } from "./LinkedinFooter";
import { EmailFooter } from "./EmailFooter";

const Footer = () => {
    const currentyear = new Date().getFullYear();
  return (
    <footer className="w-full px-16 py-4 bg-mblack text-mgrey">
        <div className="my-4 text-white text-center">
            <p>Contact me via LinkedIn or Email:</p>
        </div>
        <div className="flex justify-center gap-4 mb-6">
            <LinkedinFooter />
            <EmailFooter />
        </div>
        <div className="mb-4 text-center text-sm">
            <p>&copy; {currentyear} Masterfed</p>
        </div>
    </footer>
  )
}

export default Footer