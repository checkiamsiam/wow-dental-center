/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";

const HomeContact = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:py-20 py-10 gap-10">
      <div className="flex justify-center items-center">
        <img
          src="/images/map-img.png"
          alt="logo"
          className="lg:rounded-e-3xl shadow-2xl w-[90%] h-auto object-cover sm:w-[550px] lg:w-[750px] sm:h-[350px] lg:h-[530px]"
        />
      </div>

      <div className="max-lg:flex max-lg:justify-center max-lg:items-center max-lg:container">
        <div className="w-fit">
          <h3 className="text-primary xl:text-2xl text-xl  font-bold lg:text-left text-center font-copperPlate">
            Got More Questions?
          </h3>
          <h2 className="xl:text-[64px] text-[32px] font-bold lg:text-left text-center font-source">
            Say Hi To The Team
          </h2>
          <p className="xl:text-lg text-xs max-w-[230px] max-md:mx-auto md:max-w-xl lg:text-left text-center mb-5 max-md:mt-3 text-gray-700">
            Reach out to our dedicated team for any inquiries or support, and
            let&apos;s start a conversation that makes a difference.
          </p>
          <div className="mt-2 flex flex-col lg:max-w-lg gap-3 md:gap-4">
            <div className="">
              <Input placeholder="Name" className="py-[20px] pl-[20px]" />
            </div>
            <div className="">
              <Input placeholder="Email" className="py-[20px] pl-[20px] " />
            </div>
            <div className="">
              <Textarea
                placeholder="Message"
                rows={5}
                className="pl-[20px] pt-[10px]"
              />
            </div>
          </div>
          <div className="lg:max-w-lg w-full mt-3">
            <Button className="max-md:h-10 text-xs md:text-base max-lg:w-full shadow-primaryShadow">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
