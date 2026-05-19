import { useEffect, useRef, useState } from "react";
import { initAnimations } from "../../app/animations";
import svgPaths from "./svg-whnsvko88k";
import { getImg } from "../../lib/imageStore";
import imgVariant1NuTdkRlyEoKo3Q0XaYuGtoBUgJpg from "./7813c01e9bca9d84819f941b7da6bfce9a773b6a.png";
import imgVariant1V9By2Y3T7Fgrb9STyb57W099LkJpg from "./4af838bbecb7e168c8e6c3b53c8a63384864b7ed.png";
import imgVariant1GfQf9MjtoQgip3GZt7WyQlFaPng from "./1d2d0196547271c8224973083f83ead8a5d23079.png";
import imgVariant1SOv9OVng8G6ETcJz9McCnJarYgeJpg from "./99d501e2f7a91b7dd12833b17ff12a5afae34b8a.png";
import imgA4CtABxvbRaq6Aq99HPazcljFaMp4 from "./da9149873afc039b6ae160f94abdaf8e41e9dd64.png";
import imgNh8EQlfaxl91U2NhBaq8Rc4NodqMp4 from "./46d80e6103bacdeec4f15e52cab1eb3ea0ec499b.png";
import imgGrandOpeningRoughRecords63258Pm from "./ba4b81c93addd4e1a2f3fe6ece2270287bbdbddd.png";
import img2DpNdbCobj1SacO4OMpr1IvlGeMp4 from "./0a993fc5212d90eb4b5b6626c88cb8286d755e2b.png";
import imgPortofolioImage from "./5711b33dc5b294d3038b85cc661e63c058ca3516.png";
import imgPeS3XlMbi5NrAInAViMhLpv75EJpg from "./73a62025e742cf2b7138ab571b38211090cf164c.png";
import imgGTwC3PibWEsTjab4HIEkLaVFfQJpg from "./af6b8785f50c38e535d79dae1cb728fafac7849f.png";
import imgShIa3UWu2Ud2OI3Xk2CjDiAhAcPng from "./d641e9d8c2502b178d9214e4b9ec3eae7cd4baf0.png";
import imgC0KvfmTftD3So0Yz3V52LgidEPng from "./345113c1c654a78cd656b72294e44fb112e51f39.png";
import imgKjm316F3Wf9TsJbhA0OEmjSPcRmJpg from "./dbda4f0de9fa5721568f0d7b32486bded65ebc90.png";
import imgE2KWTtL12IMp57QhhPh7Cxc2Mt4Png from "./b2f0c3ccc4702dc4cc2d216fb72d74a7bca69a19.png";
import imgYogaWellnessStudioTemplatePreview from "./672727fb59e67d9dd8fb8f6c5106dbcd98706adf.png";
import { imgSend, imgBackground, imgSection, imgBackground1, imgDownloadCloud } from "./svg-2jci3";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] text-left tracking-[-0.1px] whitespace-nowrap" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex="0">
        <p className="cursor-pointer leading-[20.8px]">Works</p>
      </div>
    </div>
  );
}

function Works() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[46px]" data-name="Works">
      <Container3 />
    </div>
  );
}

function LinkVariant() {
  return (
    <a className="content-stretch cursor-pointer flex h-[80px] items-center justify-center pb-[29.59px] pt-[28.61px] px-[40px] relative shrink-0" href="/work" data-name="Link - Variant 1">
      <Works />
    </a>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkVariant />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff5900] text-[0px] text-center whitespace-nowrap">
        <p className="text-[24px]">
          <span className="font-['Libre_Baskerville:Regular',sans-serif] leading-[26.4px]">{`Shema `}</span>
          <span className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[26.4px]">{`Eric`}</span>
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#ff5900] text-[0px] text-center whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[24px] whitespace-pre">{`   Shema Eric`}</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127px]" data-name="Name">
      <Container5 />
      <Container6 />
    </div>
  );
}

function LinkVariant1() {
  return (
    <a className="cursor-pointer h-[80px] relative shrink-0 w-full" href="/" data-name="Link - Variant 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[13.6px] pt-[12.59px] px-[24px] relative size-full">
          <Name />
        </div>
      </div>
    </a>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136px]" data-name="Container">
      <LinkVariant1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] text-left tracking-[-0.1px] whitespace-nowrap" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex="0">
        <p className="cursor-pointer leading-[20.8px]">About</p>
      </div>
    </div>
  );
}

function Works1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[82px]" data-name="Works">
      <Container8 />
    </div>
  );
}

function LinkVariant2() {
  return (
    <a className="cursor-pointer h-[80px] relative shrink-0 w-full" href="/#contact" data-name="Link - Variant 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[29.59px] pt-[28.61px] px-[40px] relative size-full">
          <Works1 />
        </div>
      </div>
    </a>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126px]" data-name="Container">
      <LinkVariant2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container4 />
      <Container7 />
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Nav - Desktop">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.32px)] min-w-[1768px] top-[35.65px] w-[1768px]" data-name="Container">
      <NavDesktop />
    </div>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[-3%_40.02%_98.23%_39.66%] leading-[normal] not-italic text-[#2a3132] text-[18.69px] whitespace-nowrap" data-name="Group">
      <p className="absolute inset-[-1.93%_58.42%_98.23%_39.66%]">T</p>
      <p className="absolute inset-[-2.25%_56.74%_98.56%_41.34%]">h</p>
      <p className="absolute inset-[-2.52%_56.13%_98.83%_43.07%]">i</p>
      <p className="absolute inset-[-2.62%_54.6%_98.93%_43.8%]">s</p>
      <p className="absolute inset-[-2.85%_53.1%_99.16%_46.1%]">i</p>
      <p className="absolute inset-[-2.9%_51.59%_99.21%_46.81%]">s</p>
      <p className="absolute inset-[-3%_48.86%_99.31%_49.05%]">S</p>
      <p className="absolute inset-[-2.99%_47.87%_99.3%_51.01%]">h</p>
      <p className="absolute inset-[-2.96%_46.78%_99.27%_52.1%]">e</p>
      <p className="absolute inset-[-2.9%_45.01%_99.21%_53.22%]">m</p>
      <p className="absolute inset-[-2.77%_42.33%_99.08%_54.94%]">a</p>
      <p className="absolute inset-[-2.42%_41.57%_98.72%_57.63%]"> </p>
      <p className="absolute inset-[-2.3%_40.02%_98.61%_58.37%]"> </p>
    </div>
  );
}

function ArcText() {
  return (
    <div className="absolute bottom-[-227px] content-stretch flex flex-col items-start justify-center left-[212.5px] top-px w-[623px]" data-name="Arc text">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="curve-wnxkz4" />
        </svg>
        <Group />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#001666] text-[80px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[96px] mb-0">{`Photographer &`}</p>
        <p className="leading-[96px]">Videographer</p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-[720px]" data-name="Title">
      <Heading1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a3132] text-[20px] text-center tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">You Can Count On</p>
      </div>
    </div>
  );
}

function Tagline() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-[720px]" data-name="Tagline">
      <Container9 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title">
      <Title1 />
      <Tagline />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f8f6f3] text-[16px] text-left whitespace-nowrap" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex="0">
        <p className="cursor-pointer leading-[24px]">See My Work</p>
      </div>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[89px]" data-name="Button text">
      <Container11 />
    </div>
  );
}

function SendMaskGroup() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="send:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f6f3] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[22px_22px] size-[22px] top-1/2" style={{ maskImage: `url('${imgSend}')` }} data-name="send" />
    </div>
  );
}

function LinkVariant3() {
  return (
    <a className="bg-[#ff5900] content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" href="https://framer.link/CwLLucQ" target="_blank" data-name="Link - Variant 1">
      <ButtonText />
      <SendMaskGroup />
    </a>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkVariant3 />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[4px] content-stretch flex flex-col gap-[40px] items-center left-1/2 w-[891px]" data-name="Hero Content">
      <Title />
      <Container10 />
    </div>
  );
}

function Variant1NuTdkRlyEoKo3Q0XaYuGtoBUgJpg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[201.652px]" data-name="Variant 1 → NUTdkRLYEoKo3q0xaYuGtoBUg.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-30.45%] max-w-none top-0 w-[160.9%]" src={getImg("hero1") || imgVariant1NuTdkRlyEoKo3Q0XaYuGtoBUgJpg} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[256.644px] items-start justify-center relative w-[199.831px]" data-name="Container">
      <Variant1NuTdkRlyEoKo3Q0XaYuGtoBUgJpg />
    </div>
  );
}

function Variant1V9By2Y3T7Fgrb9STyb57W099LkJpg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[186.375px]" data-name="Variant 1 → v9by2y3t7Fgrb9sTYB57w099Lk.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-15.44%] w-full" src={getImg("hero2") || imgVariant1V9By2Y3T7Fgrb9STyb57W099LkJpg} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[132.392px] items-start justify-center relative w-[184.683px]" data-name="Container">
      <Variant1V9By2Y3T7Fgrb9STyb57W099LkJpg />
    </div>
  );
}

function Variant1GfQf9MjtoQgip3GZt7WyQlFaPng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[144.621px]" data-name="Variant 1 → GfQF9MJTOQgip3GZt7WYQlFA.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[140.6%] left-0 max-w-none top-[-20.3%] w-full" src={getImg("hero3") || imgVariant1GfQf9MjtoQgip3GZt7WyQlFaPng} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[102.857px] items-start justify-center relative w-[143.312px]" data-name="Container">
      <Variant1GfQf9MjtoQgip3GZt7WyQlFaPng />
    </div>
  );
}

function Variant1SOv9OVng8G6ETcJz9McCnJarYgeJpg() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-[162.95px]" data-name="Variant 1 → sOV9oVng8G6eTcJz9mcCnJarYGE.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[103.77%] left-0 max-w-none top-[-1.88%] w-full" src={getImg("hero4") || imgVariant1SOv9OVng8G6ETcJz9McCnJarYgeJpg} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[219.976px] items-start justify-center relative w-[161.479px]" data-name="Container">
      <Variant1SOv9OVng8G6ETcJz9McCnJarYgeJpg />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="-translate-x-1/2 absolute h-[397px] left-1/2 top-[248px] w-[1048px]" data-name="Section - Hero">
      <ArcText />
      <HeroContent />
      <div className="absolute flex h-[317.051px] items-center justify-center left-[-78.8px] top-[902.87px] w-[289.571px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-25 flex-none">
          <Container12 />
        </div>
      </div>
      <div className="absolute bottom-[280.68px] flex h-[185.306px] items-center justify-center left-[125.14px] w-[217.724px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-19 flex-none">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function SectionTitleHeading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[720px]" data-name="Section Title → Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#001666] text-[28px] text-center tracking-[-1.12px] whitespace-nowrap">
        <p className="leading-[39.2px]">Sneak Peek of My Work</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Section Title">
      <div className="overflow-clip relative shrink-0 size-[100px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g id="1203119168">
            <path d={svgPaths.p12d6a800} fill="var(--fill-0, #FF5900)" id="RJyltUSSE" />
            <path d={svgPaths.p301c82f0} fill="var(--fill-0, #001666)" id="w9rNu6_j2" />
          </g>
        </svg>
      </div>
      <SectionTitleHeading />
    </div>
  );
}

const CAROUSEL_IMAGES = [
  { key: "gallery1" as const, fallback: imgVariant1SOv9OVng8G6ETcJz9McCnJarYgeJpg, h: 362, w: 259 },
  { key: "gallery2" as const, fallback: imgGrandOpeningRoughRecords63258Pm, h: 300, w: 225 },
  { key: "gallery3" as const, fallback: img2DpNdbCobj1SacO4OMpr1IvlGeMp4, h: 215, w: 393 },
  { key: "gallery4" as const, fallback: imgPortofolioImage, h: 290, w: 232 },
  { key: "gallery5" as const, fallback: imgVariant1V9By2Y3T7Fgrb9STyb57W099LkJpg, h: 315, w: 339 },
];

function CarouselStrip() {
  return (
    <div className="flex gap-6 items-end shrink-0">
      {CAROUSEL_IMAGES.map((slot, i) => (
        <div
          key={i}
          className="relative rounded-[8px] shrink-0 overflow-hidden"
          style={{ height: `${slot.h}px`, width: `${slot.w}px` }}
        >
          <img
            alt=""
            src={getImg(slot.key) || slot.fallback}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function SectionList() {
  return (
    <div
      className="flex gap-6 items-end"
      style={{ animation: "gallery-scroll 30s linear infinite", width: "max-content" }}
    >
      <CarouselStrip />
      <CarouselStrip />
      <CarouselStrip />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[179px] overflow-hidden">
      <SectionList />
    </div>
  );
}

function SectionSneakPeak() {
  return (
    <div className="-translate-x-1/2 absolute h-[545.2px] left-1/2 overflow-hidden top-[805px] w-[1768px]" data-name="Section - Sneak peak">
      <SectionTitle />
      <Container16 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Portrait Photography</p>
      </div>
    </div>
  );
}

function ProductDesign() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[159px]" data-name="Product Design">
      <Container45 />
    </div>
  );
}

function Init() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px] shrink-0" data-name="Init">
      <ProductDesign />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <Init />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Event Coverage</p>
      </div>
    </div>
  );
}

function ProductDesign1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67px]" data-name="Product Design">
      <Container47 />
    </div>
  );
}

function Init1() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px] shrink-0" data-name="Init">
      <ProductDesign1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <Init1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Documentary</p>
      </div>
    </div>
  );
}

function ProductDesign2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Product Design">
      <Container49 />
    </div>
  );
}

function Init2() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center pb-[14.007px] pt-[12.995px] px-[24px] relative rounded-[70px] shrink-0" data-name="Init">
      <ProductDesign2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <Init2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Short Film</p>
      </div>
    </div>
  );
}

function ProductDesign3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[162px]" data-name="Product Design">
      <Container50 />
    </div>
  );
}

function Init3() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px]" data-name="Init">
      <ProductDesign3 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Photo Editing</p>
      </div>
    </div>
  );
}

function ProductDesign4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="Product Design">
      <Container51 />
    </div>
  );
}

function Init4() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center pb-[14.006px] pt-[12.995px] px-[24px] relative rounded-[70px]" data-name="Init">
      <ProductDesign4 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Video Editing</p>
      </div>
    </div>
  );
}

function ProductDesign5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]" data-name="Product Design">
      <Container52 />
    </div>
  );
}

function Init5() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px]" data-name="Init">
      <ProductDesign5 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Color Grading</p>
      </div>
    </div>
  );
}

function ProductDesign6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="Product Design">
      <Container53 />
    </div>
  );
}

function Init6() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px]" data-name="Init">
      <ProductDesign6 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Post-Production</p>
      </div>
    </div>
  );
}

function ProductDesign7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136px]" data-name="Product Design">
      <Container55 />
    </div>
  );
}

function Init7() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center pb-[13.995px] pt-[13.004px] px-[24px] relative rounded-[70px] shrink-0" data-name="Init">
      <ProductDesign7 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <Init7 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#001666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">Storytelling</p>
      </div>
    </div>
  );
}

function ProductDesign8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="Product Design">
      <Container56 />
    </div>
  );
}

function Init8() {
  return (
    <div className="bg-[#cadcfc] content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[70px]" data-name="Init">
      <ProductDesign8 />
    </div>
  );
}

function AbilityTag() {
  return (
    <div className="absolute h-[652px] left-[13px] top-[18px] w-[1034px]" data-name="Ability tag">
      <div className="absolute bottom-[0.87px] flex h-[66.313px] items-center justify-center left-[300.44px] w-[210.123px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <Container44 />
        </div>
      </div>
      <div className="absolute bottom-[146.32px] flex h-[69.35px] items-center justify-center left-[834.64px] w-[121.719px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-9">
          <Container46 />
        </div>
      </div>
      <div className="absolute bottom-[12.66px] flex h-[87.829px] items-center justify-center left-[649.8px] w-[157.123px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <Container48 />
        </div>
      </div>
      <div className="absolute flex h-[77.205px] items-center justify-center left-[818.61px] top-[244.45px] w-[214.772px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-7">
          <Init3 />
        </div>
      </div>
      <div className="absolute flex h-[78.705px] items-center justify-center left-[401.07px] top-[0.09px] w-[170.365px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-10 flex-none">
          <Init4 />
        </div>
      </div>
      <div className="absolute flex h-[86.714px] items-center justify-center left-[687.32px] top-[59.62px] w-[231.352px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-9 flex-none">
          <Init5 />
        </div>
      </div>
      <div className="absolute flex h-[70.624px] items-center justify-center left-[0.41px] top-[258.06px] w-[161.174px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-7 flex-none">
          <Init6 />
        </div>
      </div>
      <div className="absolute bottom-[121.22px] flex h-[60.559px] items-center justify-center left-[32.82px] w-[186.417px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-3">
          <Container54 />
        </div>
      </div>
      <div className="absolute flex h-[74.875px] items-center justify-center left-[103.19px] top-[98.61px] w-[173.602px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-8">
          <Init8 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.69px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#001666] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px] mb-0">What I Bring</p>
        <p className="leading-[76.8px]">to the Lens</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Title">
      <Heading3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
      <div className="mb-[-1.1px] overflow-clip relative shrink-0 size-[100px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g id="2320908736">
            <path d={svgPaths.p1e729700} fill="var(--fill-0, #FF5900)" id="uDu8U_mkK" />
            <path d={svgPaths.p23e93f00} fill="var(--fill-0, #001666)" id="QCZZx4d8c" />
            <path d={svgPaths.p3f680e80} fill="var(--fill-0, #001666)" id="U7nYlEYWM" />
            <path d={svgPaths.p3f5c5000} fill="var(--fill-0, #001666)" id="Ef3wVG5yF" />
            <path d={svgPaths.p38f0d780} fill="var(--fill-0, #001666)" id="Q_xwCe42W" />
            <path d={svgPaths.p5cc7580} fill="var(--fill-0, #001666)" id="Ap8DF355m" />
            <path d={svgPaths.p1d5e6f00} fill="var(--fill-0, #001666)" id="ElWb3qHB9" />
            <path d={svgPaths.p33621800} fill="var(--fill-0, #001666)" id="GTn9qgH3G" />
            <path d={svgPaths.p27ce6d00} fill="var(--fill-0, #001666)" id="TiX0sQONI" />
            <path d={svgPaths.p3bfffb80} fill="var(--fill-0, #001666)" id="AdvcYPksX" />
            <path d={svgPaths.p27eb4bc0} fill="var(--fill-0, #001666)" id="fFusge4De" />
          </g>
        </svg>
      </div>
      <Title3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="text-center font-['DM_Sans:Regular',sans-serif] font-normal text-[#5f6566] text-[20px] tracking-[-0.2px]" style={{ fontVariationSettings: "'opsz' 14" }} data-name="Paragraph">
      <p className="leading-[32px]">{`Visual storytelling that captures what words can't —`}</p>
      <p className="leading-[32px]">{`built for events, people, and powerful narratives.`}</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Description">
      <Paragraph />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative z-10" data-name="Content">
      <Content1 />
      <Description1 />
    </div>
  );
}

function SectionAbility() {
  return (
    <div className="-translate-x-1/2 absolute h-[687px] left-1/2 top-[1670px] w-[880px] flex items-center justify-center" data-name="Section - Ability">
      <AbilityTag />
      <Content />
    </div>
  );
}

function BgPatternImage() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-653px_-271px_-653px] items-center justify-center opacity-20 overflow-clip" data-name="BG Pattern → image">
      <div className="h-[802px] overflow-clip relative shrink-0 w-[2250.881px]" data-name="Component 1">
        <div className="absolute inset-0 mix-blend-overlay" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2252.2 803.32">
            <path d={svgPaths.p186e6c00} id="Vector" stroke="url(#paint0_radial_1_1187)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.32016" style={{ mixBlendMode: "overlay" }} />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1126.1 343.903) rotate(90) scale(272.284 884.299)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1187" r="1">
                <stop offset="0.548" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BgPattern() {
  return (
    <div className="absolute bottom-0 h-[531px] left-0 overflow-clip right-0" data-name="BG Pattern">
      <BgPatternImage />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#cadcfc] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">Behind the Camera</p>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-[720px]" data-name="Title">
      <Heading4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title">
      <div className="mb-[-1px] overflow-clip relative shrink-0 size-[100px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g id="2582751937">
            <path d={svgPaths.p18ff5600} fill="var(--fill-0, #CADCFC)" id="yjrkCi3FE" />
            <path d={svgPaths.p268c1d00} fill="var(--fill-0, #FF5900)" id="jq3NoadgV" />
            <path d={svgPaths.p15d60900} fill="var(--fill-0, #CADCFC)" id="AGwKbEaeS" />
            <path d={svgPaths.p309f4000} fill="var(--fill-0, #CADCFC)" id="kfps_u2bq" />
            <path d={svgPaths.p2d943740} fill="var(--fill-0, #FF5900)" id="tENrn_hIh" />
            <path d={svgPaths.p317f3300} fill="var(--fill-0, #CADCFC)" id="ZcZSRUrS7" />
            <path d={svgPaths.p39b5a100} fill="var(--fill-0, #CADCFC)" id="PTDA_7pKg" />
            <path d={svgPaths.pf952780} fill="var(--fill-0, #FF5900)" id="J2xl7Oesw" />
            <path d={svgPaths.p13b70300} fill="var(--fill-0, #CADCFC)" id="iTlbQtuDT" />
            <path d={svgPaths.p3f24d00} fill="var(--fill-0, #CADCFC)" id="XEYLf5Xt6" />
            <path d={svgPaths.pb0baa00} fill="var(--fill-0, #CADCFC)" id="alEiZLFZa" />
            <path d={svgPaths.p39335800} fill="var(--fill-0, #CADCFC)" id="VTNfjSetF" />
            <path d={svgPaths.pafebb80} fill="var(--fill-0, #CADCFC)" id="rr9m9lFFw" />
            <path d={svgPaths.p32e93f00} fill="var(--fill-0, #CADCFC)" id="xKAHILk2B" />
            <path d={svgPaths.pad623a0} fill="var(--fill-0, #CADCFC)" id="WnXFaqXUk" />
            <path d={svgPaths.p16a35f80} fill="var(--fill-0, #FF5900)" id="Jk3d1Yqiw" />
            <path d={svgPaths.p2f688700} fill="var(--fill-0, #CADCFC)" id="INuRWgpki" />
            <path d={svgPaths.p2aa91100} fill="var(--fill-0, #FF5900)" id="EElWqqU0S" />
            <path d={svgPaths.p15581600} fill="var(--fill-0, #FF5900)" id="eerSf8haT" />
          </g>
        </svg>
      </div>
      <Title5 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cadcfc] text-[20px] text-center tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] mb-0">Finally, meet the photographer behind every frame</p>
        <p className="leading-[26px]">— a quick peek into my world</p>
      </div>
    </div>
  );
}

function SubTitle() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Sub title">
      <Container58 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
      <Title4 />
      <SubTitle />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.79px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ebe9e4] text-[16px] text-center tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px] mb-0">I help people and communities tell their stories through images</p>
        <p className="leading-[20.8px] mb-0">and film. Whether it's a portrait session, a campus event, or a</p>
        <p className="leading-[20.8px] mb-0">short documentary, I focus on capturing what's real — no</p>
        <p className="leading-[20.8px] mb-0">over-posed shots, no forced smiles, just honest moments that</p>
        <p className="leading-[20.8px] mb-0">last. Based at ASYV in Rwanda. Music fuels every shoot.</p>
        <p className="leading-[20.8px]">Great photography doesn't need to be complicated — just intentional.</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Description">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[22.99px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Content3 />
      <Description2 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f8f6f3] text-[16px] text-left whitespace-nowrap" role="link" style={{ fontVariationSettings: "'opsz' 14" }} tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Get In Touch</p>
      </div>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Button text">
      <Container61 />
    </div>
  );
}

function LinkVariant4() {
  return (
    <a className="bg-[#ff5900] content-stretch cursor-pointer flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" href="https://framer.link/CwLLucQ" target="_blank" data-name="Link - Variant 1">
      <ButtonText1 />
    </a>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkVariant4 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
      <Container57 />
      <Container60 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f6f3] text-[1.3px] tracking-[-0.008px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.664px]">Based in Rwanda</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[8px]" data-name="Container">
      <Container64 />
    </div>
  );
}

function Caption() {
  return (
    <div className="bg-[#5f6566] content-stretch flex items-center justify-center overflow-clip pl-[1.333px] pr-[1.331px] py-[0.4px] relative rounded-[40px]" data-name="Caption">
      <Container63 />
    </div>
  );
}

function PeS3XlMbi5NrAInAViMhLpv75EJpg() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="peS3xlMBI5nrAInAViMhLPV75E.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-30.94%] max-w-none top-0 w-[161.87%]" src={getImg("portrait1") || imgPeS3XlMbi5NrAInAViMhLpv75EJpg} />
      </div>
    </div>
  );
}

function Init9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Init">
      <div className="absolute flex h-[5.631px] items-center justify-center left-[88.39px] top-[18.74px] w-[11.022px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-16 flex-none">
          <Caption />
        </div>
      </div>
      <PeS3XlMbi5NrAInAViMhLpv75EJpg />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[242px] items-start justify-center relative w-[189px]" data-name="Container">
      <Init9 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f6f3] text-[1.3px] tracking-[-0.008px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.664px]">Student filmmaker</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[8px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Caption1() {
  return (
    <div className="bg-[#5f6566] content-stretch flex items-center justify-center overflow-clip pl-[1.252px] pr-[1.265px] py-[0.4px] relative rounded-[40px]" data-name="Caption">
      <Container66 />
    </div>
  );
}

function GTwC3PibWEsTjab4HIEkLaVFfQJpg() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="GTwC3pibWEsTjab4hIEkLaVFfQ.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-24.33%] max-w-none top-0 w-[148.66%]" src={getImg("portrait2") || imgGTwC3PibWEsTjab4HIEkLaVFfQJpg} />
      </div>
    </div>
  );
}

function Init10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Init">
      <div className="absolute flex h-[5.59px] items-center justify-center left-[88.76px] top-[18.67px] w-[10.881px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-16 flex-none">
          <Caption1 />
        </div>
      </div>
      <GTwC3PibWEsTjab4HIEkLaVFfQJpg />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col h-[242px] items-start justify-center relative w-[189px]" data-name="Container">
      <Init10 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f8f6f3] text-[1.3px] tracking-[-0.008px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.664px]">That's me 📷</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[7px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Caption2() {
  return (
    <div className="bg-[#5f6566] content-stretch flex items-center justify-center overflow-clip pl-[1.222px] pr-[1.219px] py-[0.4px] relative rounded-[40px]" data-name="Caption">
      <Container69 />
    </div>
  );
}

function ShIa3UWu2Ud2OI3Xk2CjDiAhAcPng() {
  return (
    <div className="absolute inset-[0_0_-0.01px_0] rounded-[16px]" data-name="SHIa3uWu2UD2oI3xk2CjDiAHAc.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-14.17%] max-w-none top-0 w-[128.34%]" src={getImg("portrait3") || imgShIa3UWu2Ud2OI3Xk2CjDiAhAcPng} />
      </div>
    </div>
  );
}

function Init11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Init">
      <div className="absolute flex h-[5.294px] items-center justify-center left-[87.95px] top-[18.91px] w-[9.847px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-16 flex-none">
          <Caption2 />
        </div>
      </div>
      <ShIa3UWu2Ud2OI3Xk2CjDiAhAcPng />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-start justify-center relative w-[187px]" data-name="Container">
      <Init11 />
    </div>
  );
}

function BtcGallery1() {
  return (
    <div className="h-[276px] relative shrink-0 w-[968px]" data-name="BTC Gallery">
      <div className="absolute flex h-[251.56px] items-center justify-center left-[664.8px] top-[8.2px] w-[201.406px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="-rotate-3 flex-none">
          <Container62 />
        </div>
      </div>
      <div className="absolute flex h-[254.594px] items-center justify-center left-[107.79px] top-[7.68px] w-[205.421px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none rotate-4">
          <Container65 />
        </div>
      </div>
      <div className="absolute flex h-[246.38px] items-center justify-center left-[387.35px] top-[17.8px] w-[195.262px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="-rotate-2 flex-none">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function BtcGallery() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="BTC Gallery">
      <BtcGallery1 />
    </div>
  );
}

function SectionBehindTheCanvas() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#2a3132] content-stretch flex flex-col gap-[40px] items-center justify-center left-1/2 min-w-[1768px] px-[40px] py-[80px] rounded-[32px] top-[2517px]" data-name="Section - Behind the canvas">
      <BgPattern />
      <Content2 />
      <BtcGallery />
    </div>
  );
}


function ParagraphBackground() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,89,0,0.08)] h-[52px] left-0 rounded-[2px] text-[#ff5900] to-[rgba(255,89,0,0)] top-[43px] w-[399.97px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[217.56px] top-[13px] w-[178.16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{`helped us close our `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[39px] w-[74.112px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">Series A</p>
      </div>
    </div>
  );
}

function TextArtemisCompletelyTransformedHowWePresentOurselvesToInvestorsTheDesignWorkDidntJustLookGreatItHelpedUsCloseOurSeriesA() {
  return (
    <div className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal h-[92px] leading-[0] max-w-[436px] relative shrink-0 text-[20px] tracking-[-0.2px] w-[434.3px]" data-name="Text - Artemis completely transformed how we present ourselves to investors. The design work didn't just look great—it helped us close our Series A.">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#2a3132] top-[30px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] mb-0 whitespace-pre">{`Shema has an incredible eye for detail. He `}</p>
        <p className="leading-[26px] mb-0 whitespace-pre">{`captured our event in a way that felt cinematic `}</p>
        <p className="leading-[26px] whitespace-pre">{`and personal at the same time.`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[73.56px] text-[#2a3132] top-[82px] w-[4.131px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]"> </p>
      </div>
      <ParagraphBackground />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pt-[9px] relative shrink-0 w-full" data-name="Content">
      <TextArtemisCompletelyTransformedHowWePresentOurselvesToInvestorsTheDesignWorkDidntJustLookGreatItHelpedUsCloseOurSeriesA />
    </div>
  );
}

function C0KvfmTftD3So0Yz3V52LgidEPng() {
  return (
    <div className="h-[64px] relative rounded-[63px] shrink-0 w-full" data-name="C0KvfmTftD3so0Yz3V52LgidE.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[63px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={getImg("testimonial1") || imgC0KvfmTftD3So0Yz3V52LgidEPng} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="aspect-[64/64] content-stretch flex flex-col items-start justify-center relative rounded-[63px] shrink-0" data-name="Avatar">
      <C0KvfmTftD3So0Yz3V52LgidEPng />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a3132] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">Teacher / Staff Member</p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[105px]" data-name="Name">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px]">Staff, ASYV</p>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[119px]" data-name="Title">
      <Container73 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Info">
      <Name1 />
      <Title6 />
    </div>
  );
}

function Reviewer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Reviewer">
      <Avatar />
      <Info />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Testimonial Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
          <Content4 />
          <Reviewer />
          <div className="absolute inset-0 rounded-[16px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black/[0.08] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Container">
      <TestimonialCard />
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(255,89,0,0.08)] h-[52px] left-0 rounded-[2px] text-[#ff5900] to-[rgba(255,89,0,0)] top-[17px] w-[350.86px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[308.19px] top-[13px] w-[38.103px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{`Fast `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[39px] w-[312.121px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">turnarounds, clear communication</p>
      </div>
    </div>
  );
}

function TextWorkingWithArtemisFeltLikeHavingACoFounderWhoActuallyGetsDesignFastTurnaroundsClearCommunicationAndResultsThatMoveTheNeedle() {
  return (
    <div className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal h-[92px] leading-[0] max-w-[436px] relative shrink-0 text-[20px] tracking-[-0.2px] w-[425.53px]" data-name="Text - Working with Artemis felt like having a co-founder who actually gets design. Fast turnarounds, clear communication, and results that move the needle.">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#2a3132] top-[17px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] mb-0">The portraits Shema took of me are the best</p>
        <p className="leading-[26px]">{`photos I've ever had. He made the whole `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[311.59px] text-[#2a3132] top-[56px] w-[109.108px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#2a3132] top-[82px] w-[198.152px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">session feel relaxed and fun.</p>
      </div>
      <ParagraphBackground1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pt-[9px] relative shrink-0 w-full" data-name="Content">
      <TextWorkingWithArtemisFeltLikeHavingACoFounderWhoActuallyGetsDesignFastTurnaroundsClearCommunicationAndResultsThatMoveTheNeedle />
    </div>
  );
}

function Kjm316F3Wf9TsJbhA0OEmjSPcRmJpg() {
  return (
    <div className="h-[64px] relative rounded-[63px] shrink-0 w-full" data-name="Kjm316F3wf9TSJbhA0oEmjSPcRM.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[63px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={getImg("testimonial2") || imgKjm316F3Wf9TsJbhA0OEmjSPcRmJpg} />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="aspect-[64/64] content-stretch flex flex-col items-start justify-center relative rounded-[63px] shrink-0" data-name="Avatar">
      <Kjm316F3Wf9TsJbhA0OEmjSPcRmJpg />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a3132] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">Fellow Student</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[127px]" data-name="Name">
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px]">Student, ASYV</p>
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[134px]" data-name="Title">
      <Container76 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Info">
      <Name2 />
      <Title7 />
    </div>
  );
}

function Reviewer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Reviewer">
      <Avatar1 />
      <Info1 />
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Testimonial Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
          <Content5 />
          <Reviewer1 />
          <div className="absolute inset-0 rounded-[16px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black/[0.08] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Container">
      <TestimonialCard1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[rgba(255,89,0,0.08)] items-start left-[38.88px] rounded-[2px] to-[rgba(255,89,0,0)] top-[-9px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff5900] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">conversion rates doubled</p>
      </div>
    </div>
  );
}

function TextOurConversionRatesDoubledAfterArtemisRedesignedOurLandingPageSometimesSimpleChangesMakeTheBiggestImpact() {
  return (
    <div className="h-[66px] max-w-[438.54998779296875px] relative shrink-0 w-[438.55px]" data-name="Text - Our conversion rates doubled after Artemis redesigned our landing page. Sometimes simple changes make the biggest impact.">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#2a3132] text-[20px] top-[4px] tracking-[-0.2px] w-[34.198px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{`His `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[269.98px] text-[#2a3132] text-[20px] top-[4px] tracking-[-0.2px] w-[124.121px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#2a3132] text-[20px] top-[43px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] mb-0 whitespace-pre">{`video work tells a story in a way photos alone can't. `}</p>
        <p className="leading-[26px] whitespace-pre">He understands both the technical and emotional side.</p>
      </div>
      <Background />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pt-[9px] relative shrink-0 w-full" data-name="Content">
      <TextOurConversionRatesDoubledAfterArtemisRedesignedOurLandingPageSometimesSimpleChangesMakeTheBiggestImpact />
    </div>
  );
}

function E2KWTtL12IMp57QhhPh7Cxc2Mt4Png() {
  return (
    <div className="h-[64px] relative rounded-[63px] shrink-0 w-full" data-name="e2kWTtL12IMp57QHHPh7cxc2MT4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[63px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={getImg("testimonial3") || imgE2KWTtL12IMp57QhhPh7Cxc2Mt4Png} />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="aspect-[64/64] content-stretch flex flex-col items-start justify-center relative rounded-[63px] shrink-0" data-name="Avatar">
      <E2KWTtL12IMp57QhhPh7Cxc2Mt4Png />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a3132] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">Peer / Collaborator</p>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[111px]" data-name="Name">
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px]">Collaborator, ASYV</p>
      </div>
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[204px]" data-name="Title">
      <Container79 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Info">
      <Name3 />
      <Title8 />
    </div>
  );
}

function Reviewer2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Reviewer">
      <Avatar2 />
      <Info2 />
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Testimonial Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
          <Content6 />
          <Reviewer2 />
          <div className="absolute inset-0 rounded-[16px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-black/[0.08] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="Container">
      <TestimonialCard2 />
    </div>
  );
}

function SectionTitleHeading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[720px]" data-name="Section Title → Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[13px] text-center tracking-[2.73px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[13px]">{`Where My Work Has Appeared`}</p>
      </div>
    </div>
  );
}

function Container81() {
  return <div className="relative shrink-0 size-[32px]" data-name="Container" />;
}

function Finflow1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120.14px]" data-name="Finflow">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Finflow() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Finflow">
      <Container81 />
      <Finflow1 />
    </div>
  );
}

function Logo() {
  return <div className="h-[40px] relative shrink-0 w-[101px]" data-name="logo" />;
}

function Altoe() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85.19px]" data-name="altoe">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container82() {
  return <div className="relative shrink-0 size-[40px]" data-name="Container" />;
}

function Sonoo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[107.81px]" data-name="Sonoo">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Sonoo() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Sonoo">
      <Container82 />
      <Sonoo1 />
    </div>
  );
}

function Metro() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176.64px]" data-name="METRO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container83() {
  return <div className="relative shrink-0 size-[37px]" data-name="Container" />;
}

function RadiO1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.05px]" data-name="radiO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function RadiO() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="radiO">
      <Container83 />
      <RadiO1 />
    </div>
  );
}

function Sonoo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[201.451px]" data-name="Sonoo">
      <div className="h-[38.404px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function SonooCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[52.369px] items-start justify-center pl-[0.87px] relative shrink-0" data-name="Sonoo:css-transform">
      <div className="flex h-[52.363px] items-center justify-center relative shrink-0 w-[203.639px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <Sonoo2 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return <div className="h-[31px] relative shrink-0 w-[39px]" data-name="Container" />;
}

function Beeply1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[109.89px]" data-name="Beeply">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Beeply() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Beeply">
      <Container84 />
      <Beeply1 />
    </div>
  );
}

function Variant2() {
  return (
    <div className="absolute content-stretch flex gap-[79.7px] items-center left-0 opacity-50 top-[-6.18px]" data-name="Variant 1">
      <Finflow />
      <Logo />
      <Altoe />
      <Sonoo />
      <Metro />
      <RadiO />
      <SonooCssTransform />
      <Beeply />
    </div>
  );
}

function Item2() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-0 top-1/2 w-[1738px]" data-name="Item">
      <Variant2 />
    </div>
  );
}

function Container85() {
  return <div className="relative shrink-0 size-[32px]" data-name="Container" />;
}

function Finflow3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120.14px]" data-name="Finflow">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Finflow2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Finflow">
      <Container85 />
      <Finflow3 />
    </div>
  );
}

function Logo1() {
  return <div className="h-[40px] relative shrink-0 w-[101px]" data-name="logo" />;
}

function Altoe1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85.19px]" data-name="altoe">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container86() {
  return <div className="relative shrink-0 size-[40px]" data-name="Container" />;
}

function Sonoo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[107.81px]" data-name="Sonoo">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Sonoo3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Sonoo">
      <Container86 />
      <Sonoo4 />
    </div>
  );
}

function Metro1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176.64px]" data-name="METRO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container87() {
  return <div className="relative shrink-0 size-[37px]" data-name="Container" />;
}

function RadiO3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.05px]" data-name="radiO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function RadiO2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="radiO">
      <Container87 />
      <RadiO3 />
    </div>
  );
}

function Sonoo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-[201.461px]" data-name="Sonoo">
      <div className="h-[38.404px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function SonooCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[52.37px] items-start justify-center pl-[0.86px] relative shrink-0" data-name="Sonoo:css-transform">
      <div className="flex h-[52.363px] items-center justify-center relative shrink-0 w-[203.649px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <Sonoo5 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col h-[31px] items-start justify-center relative shrink-0 w-[39px]" data-name="Container">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 31">
          <g clipPath="url(#clip0_1_1152)" id="svg382126648_847">
            <path d={svgPaths.p17e09200} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1152">
              <rect fill="white" height="31" width="39" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">Beeply</p>
      </div>
    </div>
  );
}

function Beeply3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]" data-name="Beeply">
      <Container89 />
    </div>
  );
}

function Beeply2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Beeply">
      <Container88 />
      <Beeply3 />
    </div>
  );
}

function Variant3() {
  return (
    <div className="absolute content-stretch flex gap-[79.7px] items-center left-0 opacity-50 top-[-6.18px]" data-name="Variant 1">
      <Finflow2 />
      <Logo1 />
      <Altoe1 />
      <Sonoo3 />
      <Metro1 />
      <RadiO2 />
      <SonooCssTransform1 />
      <Beeply2 />
    </div>
  );
}

function Item3() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[1820.51px] top-1/2 w-[1738px]" data-name="Item">
      <Variant3 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[32px]" data-name="Container">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g clipPath="url(#clip0_1_1184)" id="svg-1625553356_756">
            <path d={svgPaths.p30c11840} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1184">
              <rect fill="white" height="32" width="32" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">FinFlow</p>
      </div>
    </div>
  );
}

function Finflow5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="Finflow">
      <Container91 />
    </div>
  );
}

function Finflow4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Finflow">
      <Container90 />
      <Finflow5 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center pl-[1.1px] relative shrink-0 w-[102.1px]" data-name="logo">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 40">
          <g clipPath="url(#clip0_1_1147)" id="svg2076394536_3566">
            <path d={svgPaths.p87e3e00} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1147">
              <rect fill="white" height="40" width="101" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">Altoe</p>
      </div>
    </div>
  );
}

function Altoe2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[1.1px] relative shrink-0 w-[83.1px]" data-name="altoe">
      <Container92 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[40px]" data-name="Container">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g clipPath="url(#clip0_1_1163)" id="svg-1271101591_440">
            <path d={svgPaths.p1bea500} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1163">
              <rect fill="white" height="40" width="40" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">Sonooi</p>
      </div>
    </div>
  );
}

function Sonoo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[104px]" data-name="Sonoo">
      <Container94 />
    </div>
  );
}

function Sonoo6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[1.1px] relative shrink-0" data-name="Sonoo">
      <Container93 />
      <Sonoo7 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">LaunchPad</p>
      </div>
    </div>
  );
}

function Metro2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[1.1px] relative shrink-0 w-[171.1px]" data-name="METRO">
      <Container95 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[37px]" data-name="Container">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <g clipPath="url(#clip0_1_1181)" id="svg858232080_1898">
            <path d={svgPaths.p3788d9f0} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1181">
              <rect fill="white" height="37" width="37" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">radiO</p>
      </div>
    </div>
  );
}

function RadiO5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86px]" data-name="radiO">
      <Container97 />
    </div>
  );
}

function RadiO4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[1.1px] relative shrink-0" data-name="radiO">
      <Container96 />
      <RadiO5 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">TalentBridge</p>
      </div>
    </div>
  );
}

function Sonoo8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.838px] relative w-[193.838px]" data-name="Sonoo">
      <Container98 />
    </div>
  );
}

function SonooCssTransform2() {
  return (
    <div className="content-stretch flex flex-col h-[52.427px] items-start justify-center pl-[0.83px] relative shrink-0" data-name="Sonoo:css-transform">
      <div className="flex h-[52.426px] items-center justify-center relative shrink-0 w-[196.086px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <Sonoo8 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col h-[31px] items-start justify-center relative shrink-0 w-[39px]" data-name="Container">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 31">
          <g clipPath="url(#clip0_1_1152)" id="svg382126648_847">
            <path d={svgPaths.p17e09200} fill="var(--fill-0, #5F6566)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_1152">
              <rect fill="white" height="31" width="39" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[38.4px]">Beeply</p>
      </div>
    </div>
  );
}

function Beeply5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106px]" data-name="Beeply">
      <Container100 />
    </div>
  );
}

function Beeply4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Beeply">
      <Container99 />
      <Beeply5 />
    </div>
  );
}

function Variant4() {
  return (
    <div className="absolute content-stretch flex gap-[78.9px] items-center left-0 opacity-50 top-[-6.24px]" data-name="Variant 1">
      <Finflow4 />
      <Logo2 />
      <Altoe2 />
      <Sonoo6 />
      <Metro2 />
      <RadiO4 />
      <SonooCssTransform2 />
      <Beeply4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[3641.84px] top-1/2 w-[1738px]" data-name="Item">
      <Variant4 />
    </div>
  );
}

function Container101() {
  return <div className="relative shrink-0 size-[32px]" data-name="Container" />;
}

function Finflow7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120.14px]" data-name="Finflow">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Finflow6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Finflow">
      <Container101 />
      <Finflow7 />
    </div>
  );
}

function Logo3() {
  return <div className="h-[40px] relative shrink-0 w-[102.1px]" data-name="logo" />;
}

function Altoe3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[1.1px] relative shrink-0 w-[86.29px]" data-name="altoe">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container102() {
  return <div className="relative shrink-0 size-[40px]" data-name="Container" />;
}

function Sonoo10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[107.81px]" data-name="Sonoo">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Sonoo9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[1.1px] relative shrink-0" data-name="Sonoo">
      <Container102 />
      <Sonoo10 />
    </div>
  );
}

function Metro3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[1.1px] relative shrink-0 w-[177.74px]" data-name="METRO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container103() {
  return <div className="relative shrink-0 size-[37px]" data-name="Container" />;
}

function RadiO7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.05px]" data-name="radiO">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function RadiO6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[1.11px] relative shrink-0" data-name="radiO">
      <Container103 />
      <RadiO7 />
    </div>
  );
}

function Sonoo11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.828px] relative w-[202.288px]" data-name="Sonoo">
      <div className="h-[38.404px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function SonooCssTransform3() {
  return (
    <div className="content-stretch flex flex-col h-[52.427px] items-start justify-center pl-[2.5px] relative shrink-0" data-name="Sonoo:css-transform">
      <div className="flex h-[52.421px] items-center justify-center relative shrink-0 w-[204.475px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-4 flex-none">
          <Sonoo11 />
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return <div className="h-[31px] relative shrink-0 w-[39px]" data-name="Container" />;
}

function Beeply7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[109.89px]" data-name="Beeply">
      <div className="h-[38.41px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Beeply6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Beeply">
      <Container104 />
      <Beeply7 />
    </div>
  );
}

function Variant5() {
  return (
    <div className="absolute content-stretch flex gap-[78.9px] items-center left-0 opacity-50 top-[-6.24px]" data-name="Variant 1">
      <Finflow6 />
      <Logo3 />
      <Altoe3 />
      <Sonoo9 />
      <Metro3 />
      <RadiO6 />
      <SonooCssTransform3 />
      <Beeply6 />
    </div>
  );
}

function Item5() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[5461.5px] top-1/2 w-[1738px]" data-name="Item">
      <Variant5 />
    </div>
  );
}

function List() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="List">
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0_-3433.51px] items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[66.01%_0%] mask-size-[33.99%_100%] pr-[3433.51px]" style={{ maskImage: `url('${imgSection}')` }} data-name="Section">
      <List />
    </div>
  );
}

function SectionMaskGroup() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Section:mask-group">
      <Section />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <SectionMaskGroup />
    </div>
  );
}

function SectionBrands() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Section - Brands">
      <SectionTitleHeading2 />
      <Container80 />
    </div>
  );
}

function TestimonialsCards() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center justify-center relative shrink-0 w-full" data-name="Testimonials Cards">
      <Container71 />
      <Container74 />
      <Container77 />
      <SectionBrands />
    </div>
  );
}

function SectionTestimonials() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 min-w-[1768px] rounded-[80px] top-[5219.55px]" data-name="Section - Testimonials">
      <SectionTitleHeading1 />
      <TestimonialsCards />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#001666] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">FAQs</p>
      </div>
    </div>
  );
}

function FaQs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="FAQs">
      <Heading9 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Heading">
      <div className="mb-[-1px] overflow-clip relative shrink-0 size-[100px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g id="1479289527">
            <path d={svgPaths.p2ebf9300} fill="var(--fill-0, #001666)" id="NK4N0nF1i" />
            <path d={svgPaths.p14a01980} fill="var(--fill-0, #FF5900)" id="lBoACSYev" />
          </g>
        </svg>
      </div>
      <FaQs1 />
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[500px]" data-name="Description">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[20px] text-center tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{`Got questions? I've got answers.`}</p>
      </div>
    </div>
  );
}

function HeadingWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Heading wrapper">
      <Heading />
      <Description3 />
    </div>
  );
}


const FAQ_ITEMS = [
  {
    question: "What types of photography do you specialize in?",
    answer: "I specialize in portrait, event, documentary, and short film photography and videography — capturing real moments with intention and depth.",
  },
  {
    question: "Do you handle video editing as well?",
    answer: "Yes. I handle full post-production including color grading, sound mixing, and motion graphics when the project calls for it.",
  },
  {
    question: "How do I book a session with you?",
    answer: "Reach out through the contact section below. We'll discuss your vision, timeline, and budget, then find a date that works.",
  },
  {
    question: "Can you shoot events outside of ASYV?",
    answer: "Absolutely. I'm available for events and projects outside of ASYV. Just get in touch and we'll figure out the details.",
  },
  {
    question: "How long does it take to receive edited photos or videos?",
    answer: "Photos are typically delivered within 1–2 weeks. Video projects take 2–4 weeks depending on length and complexity.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full rounded-[16px] bg-[#ebe9e4] overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-['DM_Sans:Regular',sans-serif] text-[#2a3132] text-[16px] tracking-[-0.1px] leading-[20.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          {question}
        </span>
        <svg
          className="w-4 h-4 flex-none ml-4 text-[#2a3132] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {open && (
        <div className="px-6 pb-5 font-['DM_Sans:Regular',sans-serif] text-[#5f6566] text-[15px] leading-[22px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

function ContentWrapperFaqListMainFaq() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[500px]">
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function FaQs() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 max-w-[1200px] min-w-[1200px] top-[3635px]" data-name="FAQs">
      <HeadingWrapper />
      <ContentWrapperFaqListMainFaq />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.69px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#001666] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px] mb-0">Ready to Create</p>
        <p className="leading-[76.8px]">Something Together?</p>
      </div>
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full" data-name="Title">
      <Heading11 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="mb-[-1.1px] overflow-clip relative shrink-0 size-[100px]" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <g id="1609755136">
            <path d={svgPaths.p1f3b9b00} fill="var(--fill-0, #001666)" id="TcVBdGAML" />
            <path d={svgPaths.p3eb58900} fill="var(--fill-0, #001666)" id="XB9sHV6XO" />
            <path d={svgPaths.p27d83600} fill="var(--fill-0, #001666)" id="L22u6owDv" />
            <path d={svgPaths.p14eb4000} fill="var(--fill-0, #001666)" id="f0gDmi85_" />
            <path d={svgPaths.p34920280} fill="var(--fill-0, #001666)" id="XRmJgJI3i" />
            <path d={svgPaths.p3b27a200} fill="var(--fill-0, #001666)" id="wsCLkGZ6y" />
            <path d={svgPaths.p6e25a80} fill="var(--fill-0, #001666)" id="UqTGtjMla" />
            <path d={svgPaths.p1a1adb80} fill="var(--fill-0, #001666)" id="RaGfd1gJR" />
            <path d={svgPaths.pde61f80} fill="var(--fill-0, #001666)" id="gI39y_TTg" />
            <path d={svgPaths.p21219d20} fill="var(--fill-0, #001666)" id="B6pvGR_Wl" />
            <path d={svgPaths.p24b2b880} fill="var(--fill-0, #001666)" id="bbeGa4AZ4" />
            <path d={svgPaths.p2ce7e600} fill="var(--fill-0, #FF5900)" id="jfAGWIIWN" />
          </g>
        </svg>
      </div>
      <Title9 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[20px] text-center tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px]">{`I'd love to connect with you!`}</p>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full" data-name="Headline">
      <Container122 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-center justify-center max-w-[720px] overflow-clip relative shrink-0 w-full" data-name="Heading">
      <Container121 />
      <Headline />
    </div>
  );
}


const CONTACT_ITEMS = [
  { label: "Email", value: "shema@email.com", href: "mailto:hello@artemis.com" },
  { label: "Instagram", value: "@shemaeric", href: "https://instagram.com/shemaeric" },
  { label: "YouTube", value: "youtube.com/shemaeric", href: "https://youtube.com/shemaeric" },
  { label: "WhatsApp", value: "+250 XXX XXX XXX", href: "https://wa.me/250XXXXXXXXX" },

];

function ContactFlipItem({ label, value, href }: { label: string; value: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block w-full shrink-0"
      style={{ perspective: "600px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          height: "61px",
          transform: hovered ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-[#ebe9e4] rounded-[16px] flex items-center px-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span
            className="font-['DM_Sans:Regular',sans-serif] text-[#2a3132] text-[16px] tracking-[-0.1px] leading-[20.8px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {label}
          </span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-[#2a3132] rounded-[16px] flex items-center justify-center px-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          <span
            className="font-['DM_Sans:Regular',sans-serif] text-[#f8f6f3] text-[16px] tracking-[-0.1px] leading-[20.8px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {value}
          </span>
        </div>
      </div>
    </a>
  );
}

function ContactDetail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[500px] relative shrink-0 w-[500px]" data-name="Contact Detail">
      {CONTACT_ITEMS.map((item, i) => (
        <ContactFlipItem key={i} label={item.label} value={item.value} href={item.href} />
      ))}
    </div>
  );
}

function SectionDesktop() {
  return (
    <div className="relative rounded-[48px] shrink-0 w-full" data-name="Section - Desktop">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40.01px] items-center justify-center px-[40px] relative size-full">
          <Heading10 />
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 min-w-[1768px] top-[4390px] w-[1768px]" data-name="Container">
      <SectionDesktop />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff5900] text-[0px] text-center whitespace-nowrap">
        <p className="text-[24px]">
          <span className="font-['Libre_Baskerville:Regular',sans-serif] leading-[26.4px]">{`Shema `}</span>
          <span className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[26.4px]">{`Eric`}</span>
        </p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Baskerville:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#ff5900] text-[0px] text-center whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[24px] whitespace-pre">{`   Shema Eric`}</p>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127px]" data-name="Name">
      <Container135 />
      <Container136 />
    </div>
  );
}

function LinkVariant5() {
  return (
    <a className="cursor-pointer h-[80px] relative shrink-0 w-full" href="/" data-name="Link - Variant 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[13.6px] pt-[12.59px] px-[24px] relative size-full">
          <Name4 />
        </div>
      </div>
    </a>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136px]" data-name="Container">
      <LinkVariant5 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] tracking-[-0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px]">©</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[12.61px]" data-name="Container">
      <Container138 />
    </div>
  );
}

function CurrentYear() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Current year">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20.8px]">2026</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Component 2">
        <a className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5f6566] text-[16px] tracking-[-0.1px] whitespace-nowrap" href="https://framer.link/joeliu" style={{ fontVariationSettings: "'opsz' 14" }} target="_blank">
          <p className="cursor-pointer leading-[20.8px]">© 2026 Shema Eric · Photographer & Videographer · Rwanda</p>
        </a>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[175.7px]" data-name="Container">
      <Container140 />
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Copyright">
   
      <Container139 />
    </div>
  );
}

function CopyrightAlignStretch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Copyright:align-stretch">
      <Copyright />
    </div>
  );
}

function FooterVariant() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Variant 1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <Container134 />
          <CopyrightAlignStretch />
        </div>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 min-w-[1768px] top-[5242px] w-[1768px]" data-name="Container">
      <FooterVariant />
    </div>
  );
}

function YogaWellnessStudioTemplatePreview() {
  return (
    <div className="absolute inset-0 rounded-[6px]" data-name="yoga & wellness studio template preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
        <img alt="" className="absolute h-[168.93%] left-0 max-w-none top-0 w-full" src={getImg("template") || imgYogaWellnessStudioTemplatePreview} />
      </div>
    </div>
  );
}

function YogaWellnessStudioTemplatePreview1() {
  return (
    <div className="h-[183.23px] relative shrink-0 w-full" data-name="yoga & wellness studio template preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-0 w-full" src={getImg("template") || imgYogaWellnessStudioTemplatePreview} />
      </div>
    </div>
  );
}

function ForArtemis() {
  return (
    <div className="absolute aspect-[171/183.22999572753906] content-stretch flex flex-col items-start justify-center left-[-18px] right-[-19px] top-[-11px]" data-name="For artemis2">
      <YogaWellnessStudioTemplatePreview1 />
    </div>
  );
}

function F() {
  return (
    <div className="flex-[1_0_0] h-[85px] min-w-px overflow-clip relative rounded-[6px]" data-name="F1">
      <YogaWellnessStudioTemplatePreview />
      <ForArtemis />
    </div>
  );
}

function Container142() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <F />
        </div>
      </div>
    </div>
  );
}

function LinkVertical() {
  return (
    <a className="bg-white content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[10px] shadow-[0px_0.518px_1.346px_-1.125px_rgba(0,0,0,0.22),0px_1.569px_4.081px_-2.25px_rgba(0,0,0,0.2),0px_4.149px_10.787px_-3.375px_rgba(0,0,0,0.16),0px_13px_33.8px_-4.5px_rgba(0,0,0,0.02)] shrink-0 w-[142px]" href={getImg("templateLink") || "https://serenayoga.framer.website/"} target="_blank" data-name="Link - Vertical">
      <Container142 />
    </a>
  );
}

function Container141() {
  return (
    <div className="absolute bottom-[4277px] content-stretch flex flex-col items-start right-[20px]" data-name="Container">
      <LinkVertical />
    </div>
  );
}

export default function EndOfBodyStart() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    let cleanup: (() => void) | undefined;
    try { cleanup = initAnimations(rootRef.current); } catch (e) { console.warn("Animation error:", e); }
    return () => cleanup?.();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#f8f6f3] relative w-full overflow-x-hidden" style={{ minHeight: "5355px" }} data-name="End of bodyStart">
      <Container />
      <SectionHero />
      <SectionSneakPeak />
      <SectionAbility />
      <SectionBehindTheCanvas />
      <FaQs />
      <Container120 />
      <Container133 />
      <Container141 />
    </div>
  );
}