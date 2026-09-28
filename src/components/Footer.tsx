import React from 'react';
import { QuickFileLogo } from './QuickFileLogo';

interface FooterProps {
  onSelectTab: (tab: 'training' | 'assessment' | 'resources') => void;
  onNavigateHub?: () => void;
  courseTitle?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onNavigateHub,
  courseTitle,
}) => {
  return (
    <footer className="bg-[#1f2937] text-slate-300 py-12 border-t border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-700/60">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <QuickFileLogo className="h-8 w-auto" variant="white" />
            <div className="text-sm text-slate-400">
              {courseTitle
                ? `QuickFile Academy • ${courseTitle}`
                : 'QuickFile Academy • Official Free Online Training'}
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            {onNavigateHub && (
              <button
                onClick={onNavigateHub}
                className="cursor-pointer hover:text-white text-blue-400 font-semibold transition-colors"
              >
                All Courses Directory
              </button>
            )}
            <button
              onClick={() => onSelectTab('training')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Curriculum
            </button>
            <button
              onClick={() => onSelectTab('assessment')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Assessment
            </button>
            <button
              onClick={() => onSelectTab('resources')}
              className="cursor-pointer hover:text-white transition-colors"
            >
              Exercise Files
            </button>
            <a
              href="https://www.quickfile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              QuickFile.co.uk
            </a>
            <a
              href="https://support.quickfile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Knowledge Base
            </a>
            <a
              href="https://community.quickfile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="https://www.youtube.com/@QuickFileHelpGuides/videos"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube Guides
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Quick File Ltd. All rights reserved. Registered in England & Wales.</p>
          <p>Brightside Web Design Ltd is a fictional business used exclusively for customer training exercises.</p>
        </div>
      </div>
    </footer>
  );
};
