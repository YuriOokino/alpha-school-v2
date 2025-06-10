import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        src="https://s3.us-east-1.amazonaws.com/assets.gt.school/hero-video.mp4"
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 237, 0.75)'
      }}></div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 10 }} className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          A school where kids crush academics in 2 hours, build life skills through workshops, and thrive beyond the
          classroom.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Campuses in Austin, Brownsville, and Miami—and seven new locations launching soon.
        </p>
        <Button variant="outline">Learn More</Button>
      </div>

      {/* Featured In Section */}
      <div style={{ position: 'relative', zIndex: 10 }} className="container mx-auto px-4 py-16">
        <p className="text-center text-sm uppercase tracking-wider mb-8 text-white">As Featured In</p>
        <div style={{ 
          position: 'relative',
          width: '60%', 
          margin: '0 auto'
        }}>
          <div style={{ 
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              animation: 'scroll 30s linear infinite',
              width: 'fit-content',
              gap: '4rem'
            }}>
              {/* Logos, repeated twice for seamless scroll */}
              {[
                { src: '/assets/press-logos/press-1.svg', alt: 'Forbes', minWidth: 120, aria: 'Forbes' },
                { src: '/assets/press-logos/press-2.svg', alt: 'Today', minWidth: 100, aria: 'Today' },
                { src: '/assets/press-logos/press-3.svg', alt: 'The Washington Times', minWidth: 150, aria: 'The Washington Times' },
                { src: '/assets/press-logos/press-4.svg', alt: 'Dr. Phil', minWidth: 100, aria: 'Dr. Phil' },
                { src: '/assets/press-logos/press-1.svg', alt: 'Business Insider', minWidth: 150, aria: 'Business Insider' }
              ].concat([
                { src: '/assets/press-logos/press-1.svg', alt: 'Forbes', minWidth: 120, aria: 'Forbes' },
                { src: '/assets/press-logos/press-2.svg', alt: 'Today', minWidth: 100, aria: 'Today' },
                { src: '/assets/press-logos/press-3.svg', alt: 'The Washington Times', minWidth: 150, aria: 'The Washington Times' },
                { src: '/assets/press-logos/press-4.svg', alt: 'Dr. Phil', minWidth: 100, aria: 'Dr. Phil' },
                { src: '/assets/press-logos/press-1.svg', alt: 'Business Insider', minWidth: 150, aria: 'Business Insider' }
              ]).map((logo, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={logo.aria}
                  style={{ minWidth: logo.minWidth, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.minWidth}
                    height={40}
                    style={{ height: 40, width: 'auto', objectFit: 'contain' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
} 