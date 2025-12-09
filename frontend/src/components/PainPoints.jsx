import React from 'react';
import './PainPoints.css';

const PainPoints = () => {
  const painPoints = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/1card.jpg`,
      icon: (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" stroke="currentColor" strokeWidth="4">
          <path d="M61.748 70.68h-4.914v-4.914a1.749 1.749 0 0 0-1.75-1.75h-8.649a1.75 1.75 0 0 0-1.75 1.75v4.914h-4.913a1.75 1.75 0 0 0-1.75 1.75v8.648a1.75 1.75 0 0 0 1.75 1.75h4.913v4.913a1.75 1.75 0 0 0 1.75 1.75h8.649a1.749 1.749 0 0 0 1.75-1.75v-4.913h4.914a1.75 1.75 0 0 0 1.75-1.75V72.43a1.75 1.75 0 0 0-1.75-1.75zM60 79.328h-4.916a1.75 1.75 0 0 0-1.75 1.75v4.913h-5.149v-4.913a1.75 1.75 0 0 0-1.75-1.75h-4.913V74.18h4.913a1.751 1.751 0 0 0 1.75-1.75v-4.914h5.149v4.914a1.751 1.751 0 0 0 1.75 1.75H60z"/>
          <path d="M97.694 93.58H82.223V45.986a8.531 8.531 0 0 0-6.712-8.3l-1.93-.414a5.014 5.014 0 0 1-3.945-4.872v-4.633h3.975a1.75 1.75 0 0 0 1.75-1.75V14.146a1.75 1.75 0 0 0-1.75-1.75h-45.7a1.751 1.751 0 0 0-1.75 1.75v11.871a1.751 1.751 0 0 0 1.75 1.75h3.975V32.4a5.013 5.013 0 0 1-3.944 4.877l-1.931.414a8.53 8.53 0 0 0-6.712 8.3v61.129a8.5 8.5 0 0 0 8.488 8.489h45.948a8.483 8.483 0 0 0 3.379-.712 10.919 10.919 0 0 0 3.847.708h16.733a11.01 11.01 0 0 0 0-22.02zM22.8 59.924h55.923v33.66H22.8zM29.658 15.9h42.2v8.371h-42.2zm-2.917 25.208 1.93-.413a8.529 8.529 0 0 0 6.712-8.3v-4.628h30.753V32.4a8.53 8.53 0 0 0 6.713 8.3l1.929.413a5.016 5.016 0 0 1 3.945 4.878v10.433H22.8V45.986a5.015 5.015 0 0 1 3.941-4.878zM22.8 107.115V97.084h50.134a10.942 10.942 0 0 0 0 15.02h-45.15a4.994 4.994 0 0 1-4.984-4.989zm50.655-2.525a7.528 7.528 0 0 1 7.51-7.51h6.622v15.02h-6.626a7.519 7.519 0 0 1-7.51-7.51zm29.563 5.311a7.5 7.5 0 0 1-5.32 2.2h-6.615V97.08h6.611a7.517 7.517 0 0 1 5.32 12.821z"/>
        </svg>
      ),
      title: "TIRED OF TEMPORARY",
      subtitle: "FIXES & PILLS?",
      alt: "Man frustrated with temporary solutions and pills"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/2-card.jpg`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" stroke="currentColor" strokeWidth="1">
          <path fillRule="evenodd" clipRule="evenodd" d="M58.962 43.867a3.957 3.957 0 0 1-2.105-.056L58.876 52h-4.709l-.812 8.354C53.156 62.407 51.21 64 49.001 64c-1.201 0-2.266-.482-3-1.242-.734.76-1.799 1.242-3 1.242-2.209 0-4.154-1.593-4.354-3.646L37.835 52h-4.708l3.753-15.226-1.172 2.79a3.988 3.988 0 0 1-3.519 2.415l-.037.004c-.18.006-.354-.01-.536-.028-.106-.011-.212-.015-.317-.033-.082-.015-.16-.041-.243-.062a3.873 3.873 0 0 1-.575-.179l-.021-.006c-.016-.007-.028-.019-.043-.025a3.977 3.977 0 0 1-2.31-2.685l-2.106-8.539V59a4.998 4.998 0 0 1-4.999 4.999c-1.642 0-3.087-.804-3.999-2.027-.913 1.224-2.357 2.027-4 2.027A5 5 0 0 1 8.002 59V43.444a3.953 3.953 0 0 1-2.001.557c-2.209 0-4-1.793-4-4.002V22a6.003 6.003 0 0 1 6.001-6.001h17.999c2.234 0 4.158 1.238 5.193 3.048.125.189.238.392.329.605.009.019.013.039.021.058.072.176.146.349.194.536l.103.418c.015.062.033.118.046.182l1.11 4.515 2.038-4.853c0-.002.004-.004.004-.006.002-.004 0-.011.002-.015a7.681 7.681 0 0 1 6.961-4.486v-.002h7.5l.031.048v-.048c3.615 0 6.682 2.273 7.91 5.452.033.07.055.148.086.221.039.109.092.208.127.319.008.025.004.035.012.06.02.066.053.126.068.194l4.129 16.765a4.003 4.003 0 0 1-2.903 4.857zm.963-4.369-4.127-16.765c-.008-.022-.02-.046-.025-.068h-.006c-.006-.021-.008-.041-.016-.06A6.499 6.499 0 0 0 49.532 18l-.031.002V18H42.04c-2.139 0-3.99 1.188-4.963 2.931-.027.037-.049.08-.07.119-.033.062-.072.119-.104.184l-.006.015c-.006.014-.018.028-.023.043L32.498 31.71l-2.567-10.43c-.017-.093-.045-.186-.067-.275l-.066-.271a1.998 1.998 0 0 0-.323-.686C28.787 18.833 27.497 18 26.001 18H8.002a4 4 0 0 0-4 4v17.999a2 2 0 1 0 4 0V25a1 1 0 0 1 2.001 0v34a3 3 0 1 0 5.998 0V42.999a1 1 0 0 1 2.001 0V59a3.001 3.001 0 0 0 6 0V25.397c0-.771.627-1.396 1.397-1.396.604 0 1.103.387 1.303.917l2.239 9.083h.002l1.103 4.476c.192.76.798 1.298 1.513 1.457.035.008.066.019.102.024l.099.01a1.995 1.995 0 0 0 2.11-1.188l5.063-12.061a1.248 1.248 0 0 1 2.349.808v.002L35.751 50h4.084l1.01 10.392c.088.904 1.051 1.608 2.156 1.608 1.104 0 2-.704 2-1.609v-9.39a1 1 0 1 1 2.002 0v9.39c0 .905.895 1.609 1.998 1.609 1.105 0 2.068-.704 2.158-1.609l1.01-10.392h4.176L50.73 27.185a.996.996 0 0 1 1.942-.437l.721 2.957.002-.002 2.652 10.775a2 2 0 1 0 3.878-.98zM46.001 14a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-12a4.998 4.998 0 0 0-4.998 5.001A5 5 0 1 0 46.001 2zM17.003 14a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-12a5.001 5.001 0 1 0 0 10.002 5.001 5.001 0 0 0 0-10.002z"/>
        </svg>
      ),
      title: "SICK OF ANXIETY",
      subtitle: "RUINING INTIMACY?",
      alt: "Couple experiencing relationship anxiety"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/3-card.jpg`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 5h-2V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM9 5h3v2H9zm8 21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7h2a1 1 0 0 1 1 1zm12-15h-2.5V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H21a1 1 0 0 0 0 2v12a1 1 0 0 0 .17.55l2 3a1 1 0 0 0 1.66 0l2-3A1 1 0 0 0 27 25V13h1v7a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-5.5-1h1v1h-1zM25 24.7l-1 1.5-1-1.5V13h2zM15 13a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h7a1 1 0 0 1 1 1zm-3 3a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z" data-name="medical report"/>
        </svg>
      ),
      title: "FRUSTRATED BY",
      subtitle: "DISAPPOINTMENT & BROKEN PROMISES?",
      alt: "Man frustrated with failed programs and broken promises"
    }
  ];

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pain-points" className="pain-points-section">
      <div className="pain-points-container">
        {/* Section Header */}
        <div className="pain-header">
          <h2 className="pain-title">
            ARE YOU ALSO <span className="pain-title-highlight">EXPERIENCING</span>...
          </h2>
        </div>

        {/* Pain Points Cards Grid */}
        <div className="pain-points-grid">
          {painPoints.map((point) => (
            <div key={point.id} className="pain-card">
              {/* Card Image */}
              <div className="pain-card-image">
                <img 
                  src={point.image}
                  alt={point.alt}
                  loading="lazy"
                />
              </div>
              
              {/* Card Content */}
              <div className="pain-card-content">
                {/* Icon - above text */}
                <div className="pain-card-icon">
                  {point.icon}
                </div>
                
                <div className="pain-card-text-wrapper">
                  <h3 className="pain-card-title">
                    {point.title}<br />
                    <span>{point.subtitle}</span>
                  </h3>
                  
                  {/* Arrow */}
                  <div className="pain-card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pain-cta-wrapper">
          <button className="pain-cta-button" onClick={handleCTAClick}>
            <span>DISCOVER A PERMANENT NATURAL SOLUTION</span>
            <svg className="pain-cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
