import { Form } from "react-router-dom";
import H3 from "./footer/H3";
import { HomePlansLink } from "./home/HomePlansComp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 pb-5 w-full capitalize flex flex-col items-center justify-center border-t-2 border-gray-dim">
      <section className="p-3 my-14 m-w-[300px] w-[99%] max-w-[1300px] border grid md:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-between gap-8 xl:items-start">

        <div className="uppercase flex items-center bg-orange-400 rounded-lg w-2/3 max-w-[350px] h-[120px]">
          <h1 className="h1 text-white animate-pulse">logo here</h1>
        </div>

        <div className="my-3 max-w-[350px] w-full">
          <H3 text="about company" />
          <ul>
            <HomePlansLink path="about" text="about us" border />
            <HomePlansLink path="contact" text="contact us" border />
            <HomePlansLink path="blog" text="blog" />
          </ul>
        </div>

        <div className="max-w-[350px] w-[90%]">
          <H3 text="support" />
          <ul>
            <HomePlansLink
              path="faqs"
              text="Frequently Asked Questions"
              border
            />
            <HomePlansLink
              path="conditions"
              text="Terms and Conditions"
              border
            />
            <HomePlansLink path="privacy" text="Privacy Policy" border />
            <HomePlansLink path="terms" text="Terms of Service" border />
            <HomePlansLink path="refund_policy" text="Refund policy" />
          </ul>
        </div>

        <div className="lowercase my-5 w-[90%]">
          <H3 text="subscribe to our newsletter!" />
          <Form action="#" className="my-4 flex md:flex-row flex-col">
            <input
              type="email"
              className="w-full rounded-none px-2 h-9 font-sofia outline-none text-gray-dark"
              placeholder="Email"
            />
            <button className="capitalize bg-blue-500 hover:bg-opacity-70 text-white w-full rounded-none mt-3 md:mt-0 h-9 xl:text-sm">
              join now
            </button>
          </Form>
        </div>

      </section>
      <p className="lowercase text-center underline text-sm sm:text-base hover:text-white">
        Copyright © {year} architecture.com
      </p>
    </footer>
  );
}
