'use client';

import { Link } from '@/types/link';

interface LinkCardProps {
  link: Link;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg py-5 px-6 no-underline"
      style={{
        backgroundColor: 'var(--card-bg-color)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = 'var(--main-color)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <h3 
        className="text-base font-medium mb-1"
        style={{ color: 'var(--text-primary)' }}
      >
        {link.title}
      </h3>
      <p 
        className="text-sm leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {link.description}
      </p>
    </a>
  );
}