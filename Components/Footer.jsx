import Reaxt from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = ["hello@quantumloom.in", "Quantum Loom, Bangalore", "India"];
  const usefullLink = ["Home", "About Us","Privacy Policy", ];
  return(
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              QuantumL00m
            </h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quod facere eveniet ratione fugit, ducimus sed! Itaque, aperiam molestiae. Eius, repudiandae reiciendis ullam adipisci est eum expedita porro consequatur harum?
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products</h6>
            {productList.map((el, i) => (
              <p key={i+1} className="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Usefull Links</h6>
            {usefullLink.map((el, i) => (
              <p key={i+1} className="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            {contactList.map((el, i) => (
              <p key={i+1} className="mb-4">
                {el}
              </p>
            ))}
          </div>
        </div>  
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© 2025 All Rights Reserved</span>
        <a href="https://quantumloom.in" className="font-semibold"> QuantumL00m</a>
      </div>
    </footer>
  );
};

export default Footer;