import React from 'react';
import { GraduationCap, FileText, Laptop, Users } from 'lucide-react';

export const FeaturesRibbon: React.FC = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Step-by-step video lessons',
      desc: 'Clear, practical guidance',
    },
    {
      icon: FileText,
      title: 'Real-world examples',
      desc: 'Using a sample business',
    },
    {
      icon: Laptop,
      title: 'Practical exercises',
      desc: 'Try it yourself in QuickFile',
    },
    {
      icon: Users,
      title: 'Free for QuickFile customers',
      desc: 'Learn at your own pace',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
