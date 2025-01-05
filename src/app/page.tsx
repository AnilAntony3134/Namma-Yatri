import Image from "next/image";
import Link from "next/link";
import { getDurationFrom } from "./utils/dataCalculator";
import { useEffect } from "react";

function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

export default function Page() {
  const date = getDurationFrom("20 May 2022");

  useEffect(() => {
    window.location.href = "https://bio.link/anilantony";
  }, []);


  return (
    <section className="text-black dark:text-gray-400">
      <h1 className="font-medium text-2xl mb-8 tracking-tight dark: text-white">
        <b>hey</b> I&apos;m Anil Antony 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert font-lg">
        {`I'm a full-stack developer with a passion for building projects, mentoring students, and staying on the cutting edge of new technologies. Currently, I'm `}
        <Link href="/work">working</Link>
        {` as a full stack developer at `}
        <span className="not-prose">
          <Badge href="https://settlin.in">
            <Image
              src={"/settlin.png"}
              width="13"
              height="11"
              alt="logo"
              className="inline-flex mr-1"
            />
            Settlin
          </Badge>
        </span>
        {` and building a student learning community with  `}
        <Badge href="https://react.dev">
          <Image
            src={"/mulearn.jpeg"}
            width="13"
            height="11"
            alt="logo"
            className="inline-flex mr-1"
          />
          Mulearn
        </Badge>
        .
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/mongoday.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={"/top100.JPG"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={"/laptop.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={"/mongoDay2.JPG"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={"/wideOffice.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={"/office.jpg"}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="my-4">
        <p className="prose prose-neutral dark:prose-invert font-medium">
          {`I've spent my career honing my skills in both front-end and back-end
          development for almost`}{" "}
          <b className="dark:text-white">{date},</b>{" "}
          {`and I thrive on tackling challenges that come with
          creating robust and efficient software solutions`}
        </p>
      </div>
    </section>
  );
}
