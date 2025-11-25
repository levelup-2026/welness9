import React from "react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import '../styles/BlobAnimations.css';

const impactStories = [
  {
    text: "The counseling sessions transformed my perspective. I learned effective coping strategies that helped me navigate through anxiety and find inner peace.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Sarah Martinez",
    role: "Mental Wellness Journey",
  },
  {
    text: "Professional guidance helped me rebuild my confidence. The therapist's compassionate approach made me feel heard and supported throughout my healing process.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Michael Chen",
    role: "Personal Growth Story",
  },
  {
    text: "After months of struggling, I finally found the support I needed. The therapy sessions gave me tools to manage stress and improve my relationships.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Emily Thompson",
    role: "Relationship Counseling",
  },
  {
    text: "The mindfulness techniques I learned have been life-changing. I now approach challenges with clarity and emotional balance that I never thought possible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "David Anderson",
    role: "Mindfulness Practice",
  },
  {
    text: "Therapy helped me process trauma I had buried for years. The safe space created by my counselor allowed me to heal and move forward with my life.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    name: "Jennifer Williams",
    role: "Trauma Recovery",
  },
  {
    text: "The guidance I received helped me navigate career transitions while maintaining my mental health. I'm now thriving both professionally and personally.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    name: "Robert Taylor",
    role: "Career & Life Balance",
  },
  {
    text: "Counseling gave me the courage to set boundaries and prioritize self-care. I've learned that taking care of my mental health isn't selfish—it's essential.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    name: "Amanda Rodriguez",
    role: "Self-Care Journey",
  },
  {
    text: "The cognitive behavioral therapy techniques I learned have helped me reframe negative thoughts. My outlook on life has become significantly more positive.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    name: "James Wilson",
    role: "CBT Success Story",
  },
  {
    text: "Through therapy, I discovered my inner strength. The support and validation I received empowered me to overcome obstacles I once thought insurmountable.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    name: "Lisa Brown",
    role: "Empowerment Journey",
  },
];

const firstColumn = impactStories.slice(0, 3);
const secondColumn = impactStories.slice(3, 6);
const thirdColumn = impactStories.slice(6, 9);

const ImpactStats = () => {
  return (
    <section className="bg-background my-20 relative overflow-hidden">
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={4}
        colors={['blue', 'purple', 'pink', 'green']}
        sizes={['lg', 'md', 'xl', 'md']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        enableScrollEffect={true}
        intensity={0.2}
        style={{ top: '15%', left: '8%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="md"
        animationType="float"
        enableMouseTracking={true}
        intensity={0.18}
        style={{ bottom: '20%', right: '10%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="pink"
        size="sm"
        animationType="pulse"
        enableScrollEffect={true}
        style={{ top: '50%', right: '5%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="squiggle"
        color="purple"
        animate={true}
        float={true}
        width={380}
        height={110}
        strokeWidth={3}
        style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="wave"
        color="pink"
        animate={true}
        wiggle={true}
        width={320}
        height={95}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '25%', left: '8%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="spiral"
        color="blue"
        animate={true}
        float={true}
        width={160}
        height={160}
        strokeWidth={2}
        style={{ position: 'absolute', top: '60%', left: '5%', opacity: 0.3, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '18%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '38%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#F472B6', top: '58%', animationDuration: '4.5s' }} />
        <div className="particle" style={{ color: '#4ADE80', top: '78%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '25%', left: '88%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '65%', left: '12%', animationDelay: '1.5s' }} />
        <div className="sparkle" style={{ top: '48%', left: '92%', animationDelay: '2.5s' }} />
      </div>

      <div className="container z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Blob */}
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -left-10 top-40 w-56 h-56 bg-gradient-to-tr from-green-400/15 via-blue-400/15 to-purple-400/15 rounded-full blur-2xl -z-10" />
            
            <div className="border py-1 px-4 rounded-lg inline-block">Real Impact</div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-6 leading-tight">
              Stories of Transformation
            </h2>
            
            <p className="mt-6 text-lg opacity-75 leading-relaxed max-w-xl">
              Real experiences from people who found support and healing through counseling. 
              Each story represents a journey of courage, growth, and positive change.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <p className="text-base opacity-70">Professional guidance tailored to individual needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                <p className="text-base opacity-70">Safe, confidential space for healing and growth</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500 mt-2" />
                <p className="text-base opacity-70">Evidence-based techniques for lasting results</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center lg:justify-end gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block" duration={17} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
