import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] mt-80 pb-20 px-20">
      <div className="w-full flex justify-between items-start">
        <div className=" flex-1">
          <div className="pt-20 max-w-72">
            <Image
              src="/chefTeeLogoBlack.svg"
              alt="logo"
              width={100}
              height={100}
              className="mb-8"
            />
            <span>
              Got questions or need help? Reach out to us — we’d love to hear
              from you!
            </span>
            <div className="flex flex-col mt-4 space-y-1 mb-2">
              <span className="font-semibold text-sm">Email:</span>
              <a
                className="text-sm underline"
                href="mailto:chefteespot@gmail.com"
              >
                chefteespot@gmail.com
              </a>
              <a
                className="text-sm underline"
                href="mailto:chefteespot01@gmail.com"
              >
                chefteespot01@gmail.com
              </a>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-sm">Phone Number:</span>
              <a className="text-sm underline" href="tel:09035787869">
                09035787869
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/6 flex justify-center h-[500px]">
          <div className="relative -top-1/2">
            <Image
              src="/footer/tomato.jpg"
              alt="image"
              width={500}
              height={500}
              style={{ boxShadow: "12px 6px 25px 0px rgba(0, 0, 0, 0.25)" }}
              className="w-[500px] border border-[#D7D7D7] h-[500px]  object-cover rounded-full"
            />
          </div>
        </div>
        <div className="pt-20 flex-1 center ">
          <span className="text-xl font-semibold">Connect with us</span>
          <div className="flex gap-4 mt-4">
            <div className="rounded-full border border-white p-[4px] w-fit">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2863 14.4345C29.2863 6.49654 22.8904 0.0615234 15.0006 0.0615234C7.11077 0.0615234 0.714844 6.49654 0.714844 14.4345C0.714844 21.6084 5.9389 27.5547 12.7684 28.633V18.5892H9.14119V14.4345H12.7684V11.268C12.7684 7.66575 14.9013 5.67598 18.1643 5.67598C19.7274 5.67598 21.3621 5.95671 21.3621 5.95671V9.49382H19.5608C17.7863 9.49382 17.2327 10.6018 17.2327 11.7385V14.4345H21.1947L20.5614 18.5892H17.2327V28.633C24.0623 27.5547 29.2863 21.6087 29.2863 14.4345Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="rounded-full border border-white p-[4px] w-fit">
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.715 0.490234H7.28641C3.34153 0.490234 0.143555 3.68821 0.143555 7.63309V19.0617C0.143555 23.0065 3.34153 26.2045 7.28641 26.2045H18.715C22.6598 26.2045 25.8578 23.0065 25.8578 19.0617V7.63309C25.8578 3.68821 22.6598 0.490234 18.715 0.490234ZM23.3578 19.0617C23.35 21.6225 21.2758 23.6967 18.715 23.7045H7.28641C4.72548 23.6967 2.6514 21.6225 2.64355 19.0617V7.63309C2.6514 5.07216 4.72548 2.99808 7.28641 2.99023H18.715C21.2758 2.99808 23.35 5.07216 23.3578 7.63309V19.0617ZM19.7864 7.99024C20.5754 7.99024 21.215 7.35064 21.215 6.56166C21.215 5.77269 20.5754 5.13309 19.7864 5.13309C18.9974 5.13309 18.3578 5.77269 18.3578 6.56166C18.3578 7.35064 18.9974 7.99024 19.7864 7.99024ZM13.0007 6.91881C9.4503 6.91881 6.57213 9.79698 6.57213 13.3474C6.57213 16.8978 9.4503 19.776 13.0007 19.776C16.5511 19.776 19.4293 16.8978 19.4293 13.3474C19.4331 11.6412 18.757 10.0039 17.5506 8.79749C16.3441 7.59108 14.7068 6.91501 13.0007 6.91881ZM9.07213 13.3474C9.07213 15.5171 10.831 17.276 13.0007 17.276C15.1704 17.276 16.9293 15.5171 16.9293 13.3474C16.9293 11.1777 15.1704 9.41881 13.0007 9.41881C10.831 9.41881 9.07213 11.1777 9.07213 13.3474Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="rounded-full border border-white p-[4px] w-fit">
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3951 0.917969H24.3381L15.7237 10.6L25.8578 23.7751H17.923L11.708 15.7845L4.59674 23.7751H0.651326L9.86523 13.4191L0.143555 0.917969H8.27991L13.8977 8.22171L20.3951 0.917969ZM19.0111 21.4543H21.1961L7.09271 3.11694H4.74813L19.0111 21.4543Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <span className="gold-shimmer font-black text-[206px] text-center font-meshed-display">
          Foodgasm
        </span>
      </div>
      <div>
        <div className="h-[1px]  bg-[#808080] my-4 mt-auto" />
        <span className="mx-auto w-fit block">© 2025 Ife by Chef Tee. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
