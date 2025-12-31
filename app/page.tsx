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

      {/* Recipes Section */}
      <section className="bg-[#f5f4f0] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Recipes Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Recipes</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences
            </p>
          </motion.div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Column - Recipe Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              
              {/* Recipe Card 1 - White with Border */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-[#2d3e30] rounded-[40px] p-6 sm:p-8 flex items-center justify-between cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-3 sm:mb-4">
                    Savory Quinoa and Roasted<br />Vegetable Bowl
                  </h3>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#d4f542] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium flex items-center gap-2"
                  >
                    Learn More 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 ml-4 flex-shrink-0">
                  <Image
                    src="/images/recipeplate1.svg"
                    alt="Quinoa Bowl"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Recipe Card 2 - Green Oval */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#d4f542] rounded-[50px] p-6 sm:p-8 flex items-center gap-6 cursor-pointer"
              >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  <Image
                    src="/images/recipeplate2.svg"
                    alt="Grilled Chicken"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-3 sm:mb-4">
                    Herb-Infused Grilled<br />Chicken with Seasonal<br />Greens
                  </h3>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#2d3e30] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#2d3e30] hover:text-white transition-all text-sm font-medium flex items-center gap-2"
                  >
                    Learn More 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              {/* Recipe Card 3 - Light Gray */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-[#e8e8e8] rounded-[40px] p-6 sm:p-8 flex items-center justify-between cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-3 sm:mb-4">
                    Mediterranean Lentil and<br />Kale Salad
                  </h3>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#d4f542] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium flex items-center gap-2"
                  >
                    Learn More 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 ml-4 flex-shrink-0">
                  <Image
                    src="/images/recipeplate3.svg"
                    alt="Mediterranean Salad"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column - Large Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[60px] overflow-hidden aspect-[3/4] lg:aspect-[4/5] cursor-pointer"
              >
                <Image
                  src="/images/recipelargeimage.svg"
                  alt="Explore more recipes"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Testimonials Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Testimonials</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Real stories from satisfied users: see how our platform changes lives
            </p>
          </motion.div>

          {/* Testimonials Grid - 4 Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            
            {/* Testimonial Card 1 - Light Gray */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f5f4f0] rounded-[30px] p-6 sm:p-7 flex flex-col justify-between min-h-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="text-sm text-[#2d3e30] leading-relaxed mb-6">
                  Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious, it's been a game-changer for my busy lifestyle.
                </p>
                <div className="flex justify-end">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <text x="5" y="30" fontSize="40" fill="#2d3e30" fontFamily="Georgia, serif">"</text>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#2d3e30]/10">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/testimonialperson1.svg"
                    alt="Emily R."
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2d3e30]">Emily R.</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 2 - Dark Green */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2d3e30] rounded-[30px] p-6 sm:p-7 flex flex-col justify-between min-h-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="text-sm text-white leading-relaxed mb-6">
                  I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day.
                </p>
                <div className="flex justify-end">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <text x="5" y="30" fontSize="40" fill="#d4f542" fontFamily="Georgia, serif">"</text>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/testimonialperson2.svg"
                    alt="Mark T."
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Mark T.</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 3 - Light Gray */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f5f4f0] rounded-[30px] p-6 sm:p-7 flex flex-col justify-between min-h-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="text-sm text-[#2d3e30] leading-relaxed mb-6">
                  The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!
                </p>
                <div className="flex justify-end">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <text x="5" y="30" fontSize="40" fill="#2d3e30" fontFamily="Georgia, serif">"</text>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#2d3e30]/10">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/testimonialperson3.svg"
                    alt="Sarah J."
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2d3e30]">Sarah J.</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 4 - White */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#2d3e30]/10 rounded-[30px] p-6 sm:p-7 flex flex-col justify-between min-h-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div>
                <p className="text-sm text-[#2d3e30] leading-relaxed mb-6">
                  Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.
                </p>
                <div className="flex justify-end">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <text x="5" y="30" fontSize="40" fill="#2d3e30" fontFamily="Georgia, serif">"</text>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#2d3e30]/10">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/testimonialperson4.svg"
                    alt="Rebecca S."
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2d3e30]">Rebecca S.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f5f4f0] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Pricing Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Pricing</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Find your perfect plan: tailored pricing for every need
            </p>
          </motion.div>

          {/* Pricing Cards Grid - With Connected Mask Images */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-center gap-0"
          >
            
            {/* Left Mask Image - Connected to Free Plan */}
            <div className="hidden lg:block relative w-[130px] h-[450px] flex-shrink-0 rounded-[30px] overflow-hidden">
              <Image
                src="/images/leftmaskpricing.svg"
                alt="Decorative left"
                fill
                className="object-cover"
              />
            </div>

            {/* Free Plan - White Card */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-[#2d3e30] rounded-[40px] p-6 sm:p-8 flex flex-col w-full md:w-[340px] min-h-[550px] cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2d3e30] mb-2">Free Plan</h3>
                <div className="mb-6">
                  <p className="text-4xl sm:text-5xl font-bold text-[#2d3e30]">$0</p>
                  <p className="text-sm text-[#2d3e30]/70">per month</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Basic AI meal planning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Limited recipe access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Manual grocery list creation</span>
                  </li>
                </ul>

                <div className="border-t border-[#2d3e30]/10 pt-6 mb-6">
                  <p className="text-sm text-[#2d3e30] mb-2"><strong>Best For:</strong></p>
                  <p className="text-sm text-[#2d3e30]/70">Those who want to explore thae platform's basic functionalities.</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-[#2d3e30] text-[#2d3e30] py-3 rounded-full hover:bg-[#2d3e30] hover:text-white transition-all text-sm font-medium"
              >
                Get Started For Free
              </motion.button>
            </motion.div>

            {/* Standard Plan - Green Card (Featured) - No Gap */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#d4f542] border-2 border-[#2d3e30] rounded-[40px] p-6 sm:p-8 flex flex-col w-full md:w-[340px] min-h-[550px] md:min-h-[600px] cursor-pointer shadow-xl hover:shadow-2xl transition-all relative z-10"
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2d3e30] mb-2">Standard Plan</h3>
                <div className="mb-6">
                  <p className="text-4xl sm:text-5xl font-bold text-[#2d3e30]">$9.99</p>
                  <p className="text-sm text-[#2d3e30]/70">per month</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#2d3e30] mt-1">•</span>
                    <span>Comprehensive AI meal planning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#2d3e30] mt-1">•</span>
                    <span>Full recipe library access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#2d3e30] mt-1">•</span>
                    <span>Automated grocery lists</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#2d3e30] mt-1">•</span>
                    <span>Grocery delivery integration</span>
                  </li>
                </ul>

                <div className="border-t border-[#2d3e30]/20 pt-6 mb-6">
                  <p className="text-sm text-[#2d3e30] mb-2"><strong>Best For:</strong></p>
                  <p className="text-sm text-[#2d3e30]/80">Individuals or families looking for full meal planning support and convenience.</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2d3e30] text-white py-3 rounded-full hover:bg-[#1f2b21] transition-all text-sm font-medium"
              >
                Subscribe Now
              </motion.button>
            </motion.div>

            {/* Premium Plan - White Card - No Gap */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-[#2d3e30] rounded-[40px] p-6 sm:p-8 flex flex-col w-full md:w-[340px] min-h-[550px] cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2d3e30] mb-2">Premium Plan</h3>
                <div className="mb-6">
                  <p className="text-4xl sm:text-5xl font-bold text-[#2d3e30]">$19.99</p>
                  <p className="text-sm text-[#2d3e30]/70">per month</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Exclusive gourmet recipes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Nutritional consultations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#2d3e30]">
                    <span className="text-[#d4f542] mt-1">•</span>
                    <span>Advanced customization options</span>
                  </li>
                </ul>

                <div className="border-t border-[#2d3e30]/10 pt-6 mb-6">
                  <p className="text-sm text-[#2d3e30] mb-2"><strong>Best For:</strong></p>
                  <p className="text-sm text-[#2d3e30]/70">Users seeking a premium culinary experience with added personalization and expert guidance.</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-[#2d3e30] text-[#2d3e30] py-3 rounded-full hover:bg-[#2d3e30] hover:text-white transition-all text-sm font-medium"
              >
                Go Premium
              </motion.button>
            </motion.div>

            {/* Right Mask Image - Connected to Premium Plan */}
            <div className="hidden lg:block relative w-[130px] h-[450px] flex-shrink-0 rounded-[30px] overflow-hidden">
              <Image
                src="/images/rightmaskpricing.svg"
                alt="Decorative right"
                fill
                className="object-cover"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Healthy Insights Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Healthy Insights Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Healthy Insights</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Latest News, Expert Blogs, and Nutritional Learning
            </p>
          </motion.div>

          {/* Insights Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            
            {/* Card 1 */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/images/healthyinsightimage1.svg"
                  alt="Mastering Meal Prep"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-4 leading-tight">
                  Mastering Meal Prep: Time-Saving Tips for Busy Weekdays
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#d4f542] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium flex items-center gap-2"
                >
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/images/healthyinsightimage2.svg"
                  alt="Plant-Based Benefits"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-4 leading-tight">
                  The Power of Plant-Based: Benefits Beyond the Plate
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#d4f542] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium flex items-center gap-2"
                >
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="/images/healthyinsightimage3.svg"
                  alt="Balancing Nutrients"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2d3e30] mb-4 leading-tight">
                  Balancing Nutrients: A Guide to a Well-Rounded Diet
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#d4f542] text-[#2d3e30] px-6 py-2.5 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium flex items-center gap-2"
                >
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f5f4f0] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* FAQ Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Frequently Asked Questions</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              Meal planning made easy: your questions, answered
            </p>
          </motion.div>

          {/* FAQ Grid - 2 Columns */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            
            {/* Left Column */}
            <div className="space-y-4">
              
              {/* FAQ 1 - Expanded */}
              <motion.div 
                variants={fadeInUp}
                className="bg-[#e8e8e8] rounded-[20px] p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4f542] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30] flex-1">
                    How does the AI create personalized meal plans?
                  </h3>
                </div>
                <p className="text-sm text-[#2d3e30]/70 leading-relaxed ml-14">
                  Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.
                </p>
              </motion.div>

              {/* FAQ 2 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    How does the grocery delivery service work?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 3 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    Are there options for budget-conscious users?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 4 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    How can I access nutrition education and healthy eating tips?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column */}
            <div className="space-y-4">
              
              {/* FAQ 5 - Expanded */}
              <motion.div 
                variants={fadeInUp}
                className="bg-[#e8e8e8] rounded-[20px] p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#d4f542] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30] flex-1">
                    Can I integrate special dietary requirements into my meal plan?
                  </h3>
                </div>
                <p className="text-sm text-[#2d3e30]/70 leading-relaxed ml-14">
                  Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.
                </p>
              </motion.div>

              {/* FAQ 6 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    How does the platform accommodate allergies and food sensitivities?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 7 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    Can I adjust my meal plans after they've been created?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 8 - Collapsed */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] p-6 sm:p-8 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[#2d3e30]">
                    What makes your AI-driven meal planning different from other meal planning services?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2d3e30] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 15l7-7 7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* Need Assistance Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Need Assistance Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2d3e30]">Need Assistance?</h2>
            <div className="hidden sm:block w-px h-12 sm:h-16 bg-[#2d3e30] rotate-12"></div>
            <p className="text-sm sm:text-base text-[#2d3e30]/70 max-w-lg">
              We're here to help!
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
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
                  src="/images/assitanceimage.svg"
                  alt="Customer Support"
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal text-[#2d3e30] leading-tight mb-8">
                Have questions or need help with AIChefMate? Our dedicated support team is ready to assist you. Get the answers and assistance you need to make the most of your meal planning experience.
              </h3>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4f542] text-[#2d3e30] px-8 py-3 rounded-full hover:bg-[#c5e53d] transition-all text-sm font-medium"
              >
                Get Support
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3e30] py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-12">
            
            {/* Left - Logo Only */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/Logofooter.svg"
                alt="EatSmart AI Logo"
                width={50}
                height={50}
                priority
              />
            </div>

            {/* Middle - Navigation Links in Two Columns */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Column 1 */}
              <div>
                <h4 className="text-white text-base font-normal mb-3 underline underline-offset-4">Recipes</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-[#d4f542] hover:text-white transition-colors text-base underline underline-offset-4">
                    Blog
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-white text-base font-normal mb-3 underline underline-offset-4">Customer Support</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-[#d4f542] hover:text-white transition-colors text-base underline underline-offset-4">
                    Your Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Description and Social Icons */}
            <div className="lg:max-w-md">
              <p className="text-[#d4f542] text-base mb-6 leading-relaxed">
                Join us on our journey to make meal planning simple and joyful. Connect with us on social media, explore our FAQs for quick answers, or drop us a line anytime.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#d4f542] transition-all"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2d3e30]">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#d4f542] transition-all"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2d3e30]">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#d4f542] transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#2d3e30]">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[#d4f542] text-sm">
                © 2064 AIChefMate. All rights reserved.
              </p>
              <div className="flex items-center gap-1">
                <a href="#" className="text-[#d4f542] hover:text-white transition-colors text-sm underline underline-offset-4">
                  Privacy Policy
                </a>
                <span className="text-[#d4f542] text-sm mx-1">|</span>
                <a href="#" className="text-[#d4f542] hover:text-white transition-colors text-sm underline underline-offset-4">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
