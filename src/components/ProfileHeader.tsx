import Image from 'next/image';
import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <header className="text-center mb-16">
      <div className="relative inline-block mb-6">
        <Image
          src="/character.png"
          alt="案内役のキャラクター"
          width={130}
          height={130}
          className="rounded-full object-cover"
          style={{ 
            border: '3px solid var(--main-color)',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
          }}
          priority
        />
      </div>
      <div className="max-w-2xl mx-auto mb-8">
        <p 
          className="text-lg leading-relaxed mb-4" 
          style={{ 
            color: 'var(--text-primary)',
            fontWeight: 500
          }}
        >
          ご訪問ありがとうございます！
        </p>
        <p 
          className="text-base leading-relaxed mb-4" 
          style={{ color: 'var(--text-secondary)' }}
        >
          AIで動画や音楽を生成するコンテンツクリエイターです。
        </p>
        <p 
          className="text-sm leading-relaxed" 
          style={{ color: 'var(--text-secondary)' }}
        >
          各種SNSや活動はこちらからご覧ください。<br />
          お仕事依頼はXのDMからお願いします。
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Link 
          href="https://x.com/cryptoninjanime"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="font-medium">X</span>
        </Link>
        <Link 
          href="https://note.com/cryptoninjanime"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-full hover:from-teal-500 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M8 16h8v2H8zm0-4h8v2H8zm0-4h5v2H8z"/>
          </svg>
          <span className="font-medium">note</span>
        </Link>
      </div>
    </header>
  );
}