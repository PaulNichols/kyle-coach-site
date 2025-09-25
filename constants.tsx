import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Contact', href: '#contact' },
];

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const GroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);


export const STATS = [
  { value: '5+', label: 'Years Coaching', icon: <CalendarIcon /> },
  { value: '100+', label: 'Players Trained', icon: <GroupIcon /> },
  { value: 'State League', label: 'Playing Experience', icon: <ShieldCheckIcon /> },
];

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


export const CONTACT_LINKS = [
    { name: 'coach.kylenichols@email.com', href: 'mailto:coach.kylenichols@email.com', icon: <EmailIcon/> },
    { name: '@CoachKyleHoops', href: '#', icon: <TwitterIcon/> },
    { name: '@CoachKyleNichols', href: '#', icon: <InstagramIcon/> },
];

// FIX: Added HIGHLIGHT_VIDEOS to be imported in Highlights.tsx
export const HIGHLIGHT_VIDEOS = [
  {
    youtubeId: 'zMMiGg-R_0g',
    title: 'Drill Breakdown: Perfecting the Crossover',
  },
  {
    youtubeId: 'G30z4-p4t8E',
    title: 'Player Spotlight: Improving Jump Shot',
  },
  {
    youtubeId: 'S-20cxvfkdM',
    title: 'Defensive Stance Masterclass',
  },
];

// FIX: Added GALLERY_IMAGES to be imported in Highlights.tsx
export const GALLERY_IMAGES = [
  {
    src: '/user_upload/image_4.jpeg',
    alt: 'Player showcasing athleticism with a powerful dunk.',
  },
  {
    src: '/user_upload/image_1.jpeg',
    alt: 'Kyle Nichols coaching from the bench.',
  },
  {
    src: '/user_upload/image_6.jpeg',
    alt: 'A player executing a perfect jump shot during a training session.',
  },
  {
    src: '/user_upload/image_5.jpeg',
    alt: 'Close-up of a player shooting a basketball.',
  },
  {
    src: '/user_upload/image_2.jpeg',
    alt: 'Team huddle with Coach Kyle Nichols.',
  },
];