import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from './Faq.module.css';
export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  return (
    <Accordion className={styles.acc}>
      <AccordionItem className={styles.faq} key="1" aria-label="Accordion 1" title="What types of fuel do you offer at Pulikkal Fuels?">
      We offer high-quality petrol and diesel, sourced directly from Nayara Energy, ensuring your vehicle receives the best performance and efficiency.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="What are your operating hours?">
      Pulikkal Fuels is open 24/7 to serve you whenever you need fuel.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Do you accept digital payments?">
      Yes, we accept a variety of payment methods, including cash, credit/debit cards, UPI, and other popular digital wallets, to make your transactions easy and convenient.
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Can I get my vehicle's tire pressure checked at your station?">
      Absolutely! We offer free tire pressure checks and air filling services to ensure your vehicle is road-ready.
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title=" How do you ensure the quality of your fuel?">
      Our fuel is sourced directly from Nayara Energy, and we follow strict quality control measures to ensure that every drop of fuel meets the highest standards.
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title=" Is there a car wash facility available?">
      Yes, we offer a quick and efficient car wash service to keep your vehicle clean and shining.
      </AccordionItem>
    </Accordion>
  );
}
