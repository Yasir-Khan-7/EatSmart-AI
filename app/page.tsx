'use client';

import Header from './components/Header';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as any
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <main className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
        {/* Decorative Icons - Animated (Hidden on mobile for cleaner look) */}
        <motion.div 
          animate={floatAnimation}
          className="hidden lg:flex absolute top-12 left-8 w-12 h-12 xl:w-14 xl:h-14 bg-[#d4f542] rounded-full items-center justify-center z-10"
        >
          <Image
            src="/images/greenbucketicon.svg"
            alt="Green bucket icon"
            width={28}
            height={28}
          />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-32 left-20 w-10 h-10 z-10"
        >
          <Image
            src="/images/pastaicon.svg"
            alt="Pasta icon"
            width={40}
            height={40}
          />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-12 right-28 w-10 h-10 z-10"
        >
          <Image
            src="/images/carroticon.svg"
            alt="Carrot icon"
            width={40}
            height={40}
          />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute top-16 right-12 w-10 h-10 xl:w-12 xl:h-12 bg-[#2d3e30] rounded-full items-center justify-center z-10"
        >
          <Image
            src="/images/cherryicon.svg"
            alt="Cherry icon"
            width={26}
            height={26}
          />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute bottom-20 right-16 w-10 h-10 xl:w-12 xl:h-12 bg-[#2d3e30] rounded-full z-10"
        />

        {/* Headline Section - At the very top */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-10 lg:mb-16 max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-[#2d3e30] leading-tight mb-3 sm:mb-4 px-2">
            Elevate Your Mealtime with AI-Powered Personalization
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#2d3e30]/70 font-normal mb-4 sm:mb-6 px-2">
            Effortless Planning, Healthier Eating
          </p>
        </motion.div>

        {/* ALL 5 CARDS - Responsive Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 items-end"
        >
          
          {/* Card 1: 95% Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="lg:col-span-1 bg-white rounded-3xl p-5 sm:p-6 shadow-sm h-[280px] sm:h-[300px] flex flex-col lg:-mt-12 cursor-pointer"
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-[#2d3e30] mb-2">95%</h3>
            <p className="text-xs text-[#2d3e30]/70 font-medium leading-snug mb-auto">Improved Eating Habits</p>
            <div className="mt-3 relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/greenbagimg.svg"
                alt="Green shopping bag"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Card 2: Food Bowl */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="lg:col-span-1 relative w-full h-[280px] sm:h-[300px] rounded-3xl overflow-hidden lg:mt-4 cursor-pointer"
          >
            <Image
              src="/images/foodbowlsimg.svg"
              alt="Healthy food bowl"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
          </motion.div>

          {/* Card 3: 30K Card with CTA BUTTONS */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-2 sm:col-span-2 flex flex-col items-center gap-3 sm:gap-4 lg:mt-0"
          >
            {/* CTA Buttons ABOVE the 30K card */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#2d3e30] text-[#2d3e30] rounded-full hover:bg-[#2d3e30] hover:text-white transition-all text-xs sm:text-sm font-medium"
              >
                Try Our Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#d4f542] text-[#2d3e30] rounded-full hover:bg-[#c5e53d] transition-all text-xs sm:text-sm font-medium"
              >
                Start For Free
              </motion.button>
            </div>
            
            {/* 30K Card */}
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="w-full bg-[#2d3e30] rounded-3xl p-5 sm:p-6 text-center h-[180px] sm:h-[200px] flex flex-col justify-center cursor-pointer"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-[#d4f542] mb-2">30 000 +</h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">Happy Users</p>
            </motion.div>
          </motion.div>

          {/* Card 4: 25% Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="lg:col-span-1 bg-white rounded-3xl p-5 sm:p-6 shadow-sm h-[280px] sm:h-[300px] flex flex-col lg:mt-4 cursor-pointer"
          >
            <div className="mb-3 relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/whitebagimg.svg"
                alt="White grocery bag"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-[#2d3e30] mb-2">25%</h3>
            <p className="text-xs text-[#2d3e30]/70 font-medium leading-snug">Saved on Groceries</p>
          </motion.div>

          {/* Card 5: Plants Image */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="lg:col-span-1 relative w-full h-[280px] sm:h-[300px] rounded-3xl overflow-hidden lg:-mt-12 cursor-pointer"
          >
            <Image
              src="/images/manholdingjarimg.svg"
              alt="Man holding plants"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
          </motion.div>

        </motion.div>
      </main>

      {/* Demo Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Demo Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Demo</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-md">
              See how it works: your personalized meal planning journey
            </p>
          </motion.div>

          {/* Demo Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left - Image Container */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[80px] sm:rounded-[100px] lg:rounded-[120px] overflow-hidden aspect-[4/3] border-2 border-[#2d3e30] cursor-pointer"
              >
                <Image
                  src="/images/greenleaves.svg"
                  alt="Green leaves demo"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:pl-8 order-1 lg:order-2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#2d3e30] leading-tight">
                Every meal is a chance to nourish your body, inspire your mind, and feed your soul.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-[#f5f4f0] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* How it works Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">How it works</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Step into the world of hassle-free meal planning with our easy 3-step process
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Left - Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6 sm:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2d3e30]"
                >
                  01
                </motion.h3>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2d3e30]">
                  Personalize Your Profile
                </h4>
                <p className="text-sm sm:text-base text-[#2d3e30]/70 leading-relaxed max-w-md">
                  Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#2d3e30] flex items-center justify-center hover:bg-[#2d3e30] hover:text-white transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d4f542] flex items-center justify-center hover:bg-[#c5e53d] transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.button>
              </div>

              {/* Counter */}
              <div className="text-xl sm:text-2xl font-semibold text-[#2d3e30]">01/03</div>
            </motion.div>

            {/* Right - Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src="/images/stackimages.svg"
                  alt="How it works illustration"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Benefits Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Benefits</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.
            </p>
          </motion.div>

          {/* Benefits Grid - Perfect Oval Cards - Fully Responsive */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          >
            
            {/* Row 1 - 4 Cards */}
            
            {/* Card 1 - Personalized Nutrition (Green Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="bg-[#d4f542] rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d3e30] leading-tight">
                  Personalized<br />Nutrition
                </h3>
                <p className="text-[10px] sm:text-xs text-[#2d3e30]/80 leading-relaxed">
                  Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Image Card (Shopping bag) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="rounded-full aspect-square overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src="/images/whitebagimg.svg"
                alt="Shopping bag"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </motion.div>

            {/* Card 3 - Time-Saving Convenience (White Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d3e30] leading-tight">
                  Time-Saving<br />Convenience
                </h3>
                <p className="text-[10px] sm:text-xs text-[#2d3e30]/80 leading-relaxed">
                  Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Healthier Eating Habits (Light Beige Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f5f4f0] rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d3e30] leading-tight">
                  Healthier Eating<br />Habits
                </h3>
                <p className="text-[10px] sm:text-xs text-[#2d3e30]/80 leading-relaxed">
                  Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness.
                </p>
              </div>
            </motion.div>

            {/* Row 2 - 4 Cards */}
            
            {/* Card 5 - Cost-Effective Shopping (White Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d3e30] leading-tight">
                  Cost-Effective<br />Shopping
                </h3>
                <p className="text-[10px] sm:text-xs text-[#2d3e30]/80 leading-relaxed">
                  Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Seamless Grocery Delivery (White Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2d3e30] leading-tight">
                  Seamless<br />Grocery Delivery
                </h3>
                <p className="text-[10px] sm:text-xs text-[#2d3e30]/80 leading-relaxed">
                  Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships.
                </p>
              </div>
            </motion.div>

            {/* Card 7 - Community Support (Dark Green Oval) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2d3e30] rounded-full aspect-square p-6 sm:p-7 lg:p-8 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#d4f542] leading-tight">
                  Community<br />Support
                </h3>
                <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed">
                  Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating.
                </p>
              </div>
            </motion.div>

            {/* Card 8 - Image Card (Green bag) */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="rounded-full aspect-square overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src="/images/greenbagimg.svg"
                alt="Green bag"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority
              />
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
