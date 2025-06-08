import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full py-24 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl tracking-tighter">
        Ready to Save Hours of Reading Time?
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
        Transform lengthy documents into clear, actionable insights with our AI-powered summarizer.
      </p>
      <Link 
        href="/get-started" 
        className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-900 to-pink-600 text-white font-semibold hover:from-pink-600 hover:to-purple-900 transition-all duration-300 hover:scale-105"
      >
        Get Started
        <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
      </Link>
    </section>
  );
}
