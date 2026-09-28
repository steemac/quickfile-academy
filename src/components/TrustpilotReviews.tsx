import React from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const TrustpilotReviews: React.FC = () => {
  const reviews = [
    {
      author: 'TT',
      date: '1 September',
      verified: true,
      title: 'Perfect Software for small b...',
      body: "I've been using QuickFile for around 4 years now. It handles VAT, invoicing, and bank reconciliation flawlessly.",
    },
    {
      author: 'Peter',
      date: '31 August',
      verified: true,
      title: 'lean, fast but feature rich so...',
      body: 'lean, fast but feature rich software that is responsive and helpful. I recommend QuickFile to all sole traders and SMEs.',
    },
    {
      author: 'Maciej Swiatly',
      date: '30 August',
      verified: false,
      title: 'The best free software',
      body: 'Was using it before and going back to it now also as you cant beat it for ease of use and HMRC compliance.',
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-6 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Trustpilot Score Badge */}
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <span className="text-xl font-bold text-slate-800">Excellent</span>
            <div className="flex items-center gap-1 my-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className="w-5 h-5 bg-[#00b67a] flex items-center justify-center text-white text-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500">
              Based on{' '}
              <a
                href="https://uk.trustpilot.com/review/quickfile.co.uk"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-slate-800"
              >
                3,130 reviews
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mt-1">
              <Star className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
              <span>Trustpilot</span>
            </div>
          </div>

          {/* Reviews Slider / List */}
          <div className="relative flex-1 w-full flex items-center gap-3">
            <button
              type="button"
              className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-400 shrink-0 transition-colors cursor-pointer hidden md:flex"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-100 flex flex-col justify-between text-xs space-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div
                            key={s}
                            className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center text-white"
                          >
                            <Star className="w-2.5 h-2.5 fill-white text-white" />
                          </div>
                        ))}
                      </div>
                      {rev.verified && (
                        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                          <CheckCircle className="w-3 h-3 text-slate-400" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {rev.author}, {rev.date}
                    </div>
                    <div className="font-bold text-slate-800 text-xs mt-1 leading-snug">
                      {rev.title}
                    </div>
                    <p className="text-slate-600 text-[11px] mt-1 line-clamp-2 leading-relaxed">
                      {rev.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-400 shrink-0 transition-colors cursor-pointer hidden md:flex"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
