import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { BuildingOffice2Icon, ClipboardDocumentListIcon, CameraIcon } from '@heroicons/react/24/outline';

const HomeScreen = () => {
  const features = [
    {
      icon: <BuildingOffice2Icon className="h-10 w-10 text-blue-600" />,
      title: 'Centralized Project Management',
      description: 'Keep all your project details, from blueprints to budgets, in one organized and accessible place.'
    },
    {
      icon: <ClipboardDocumentListIcon className="h-10 w-10 text-blue-600" />,
      title: 'Real-Time Task Tracking',
      description: 'Assign tasks, set deadlines, and monitor progress in real-time to keep your team aligned and on schedule.'
    },
    {
      icon: <CameraIcon className="h-10 w-10 text-blue-600" />,
      title: 'Daily On-Site Reporting',
      description: 'Enable your crew to submit daily logs with notes and photos directly from the job site for accurate progress tracking.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero 
          title="Build Better, Together."
          subtitle="ConstructFlow is the all-in-one platform for modern construction teams. Manage projects, track tasks, and streamline communication from the office to the job site."
          primaryAction={{ text: 'Get Started Free', href: '/register' }}
          secondaryAction={{ text: 'Request a Demo', href: '#' }}
        />

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to stay on track.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">From planning to completion, ConstructFlow simplifies every step of your project.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to streamline your next project?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Join hundreds of construction firms building more efficiently with ConstructFlow.</p>
            <div className="mt-8 flex justify-center">
              <Link to="/register" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
