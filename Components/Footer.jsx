import Reaxt from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = ["hello@quantumloom.in", "Quantum Loom, Bangalore", "India"];
  const usefullLink = ["Home", "About Us","Privacy Policy", ];
  return(
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              QuantumLoom
            </h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quod facere eveniet ratione fugit, ducimus sed! Itaque, aperiam molestiae. Eius, repudiandae reiciendis ullam adipisci est eum expedita porro consequatur harum?
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products</h6>
            {productList.map((el, i) => (
              <p key={i+1} class="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Usefull Links</h6>
            {usefullLink.map((el, i) => (
              <p key={i+1} class="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            {contactList.map((el, i) => (
              <p key={i+1} class="mb-4">
                {el}
              </p>
            ))}
          </div>
        </div>  
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>© 2025 All Rights Reserved</span>
        <a href="https://quantumloom.in" class="font-semibold"> QuantumLoom</a>
      </div>
    </footer>
  );
};

export default Footer;