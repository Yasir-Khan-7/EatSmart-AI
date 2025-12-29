import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      <Header />
      
      {/* Hero Section */}
      <main className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Decorative Icons */}
        <div className="absolute top-12 left-8 w-14 h-14 bg-[#d4f542] rounded-full flex items-center justify-center z-10">
          <Image
            src="/images/greenbucketicon.svg"
            alt="Green bucket icon"
            width={28}
            height={28}
          />
        </div>

        <div className="absolute top-32 left-20 w-10 h-10 z-10">
          <Image
            src="/images/pastaicon.svg"
            alt="Pasta icon"
            width={40}
            height={40}
          />
        </div>

        <div className="absolute top-12 right-28 w-10 h-10 z-10">
          <Image
            src="/images/carroticon.svg"
            alt="Carrot icon"
            width={40}
            height={40}
          />
        </div>

        <div className="absolute top-16 right-12 w-12 h-12 bg-[#2d3e30] rounded-full flex items-center justify-center z-10">
          <Image
            src="/images/cherryicon.svg"
            alt="Cherry icon"
            width={26}
            height={26}
          />
        </div>

        <div className="absolute bottom-20 right-16 w-12 h-12 bg-[#2d3e30] rounded-full z-10"></div>

        {/* Headline Section - At the very top */}
        <div className="text-center mb-10 lg:mb-16 max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2d3e30] leading-tight mb-4">
            Elevate Your Mealtime with AI-Powered Personalization
          </h1>
          
          <p className="text-base lg:text-lg text-[#2d3e30]/70 font-normal mb-6">
            Effortless Planning, Healthier Eating
          </p>
        </div>

        {/* ALL 5 CARDS IN SINGLE ROW - Staggered vertical positions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5 items-end">
          
          {/* Card 1: 95% Card - MUCH HIGHER (negative margin) */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm h-[300px] flex flex-col lg:-mt-12">
            <h3 className="text-5xl font-bold text-[#2d3e30] mb-2">95%</h3>
            <p className="text-xs text-[#2d3e30]/70 font-medium leading-snug mb-auto">Improved Eating Habits</p>
            <div className="mt-3 relative w-full h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/greenbagimg.svg"
                alt="Green shopping bag"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Card 2: Food Bowl - LOWER */}
          <div className="lg:col-span-1 relative w-full h-[300px] rounded-3xl overflow-hidden lg:mt-4">
            <Image
              src="/images/foodbowlsimg.svg"
              alt="Healthy food bowl"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Card 3: 30K Card - MUCH SMALLER with CTA BUTTONS INSIDE */}
          <div className="lg:col-span-2 sm:col-span-2 flex flex-col items-center gap-4 lg:mt-0">
            {/* CTA Buttons ABOVE the 30K card */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 border-2 border-[#2d3e30] text-[#2d3e30] rounded-full hover:bg-[#2d3e30] hover:text-white transition-all text-sm font-medium">
                Try Our Demo
              </button>
              <button className="w-full sm:w-auto px-8 py-3 bg-[#d4f542] text-[#2d3e30] rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium">
                Start For Free
              </button>
            </div>
            
            {/* 30K Card - SMALLER */}
            <div className="w-full bg-[#2d3e30] rounded-3xl p-6 text-center h-[200px] flex flex-col justify-center">
              <h3 className="text-5xl font-bold text-[#d4f542] mb-2">30 000 +</h3>
              <p className="text-sm text-white/80 font-medium">Happy Users</p>
            </div>
          </div>

          {/* Card 4: 25% Card - LOWER (same as card 2) */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm h-[300px] flex flex-col lg:mt-4">
            <div className="mb-3 relative w-full h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/whitebagimg.svg"
                alt="White grocery bag"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-5xl font-bold text-[#2d3e30] mb-2">25%</h3>
            <p className="text-xs text-[#2d3e30]/70 font-medium leading-snug">Saved on Groceries</p>
          </div>

          {/* Card 5: Plants Image - MUCH HIGHER (same as card 1) */}
          <div className="lg:col-span-1 relative w-full h-[300px] rounded-3xl overflow-hidden lg:-mt-12">
            <Image
              src="/images/manholdingjarimg.svg"
              alt="Man holding plants"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </main>
    </div>
  );
}
