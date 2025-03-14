import React from "react";
import { FaSpotify,  FaYoutube } from "react-icons/fa";
import { SiSoundcloud, SiBeatsbydre } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const SocialSidebar = () => {
  // Function to handle clicks on social icons
  const handleSocialClick = (platform) => {
    // Define your social media URLs here
    const socialUrls = {
      spotify: "https://open.spotify.com/artist/yourartistid",
      apple: "https://music.apple.com/artist/yourartistid",
      youtube: "https://youtube.com/@yourchannel",
      soundcloud: "https://soundcloud.com/youraccount",
      beats: "https://music.beats.com/artist/yourartistid",
      instagram: "https://instagram.com/youraccount"
    };
    
    // Open the URL in a new tab
    window.open(socialUrls[platform], "_blank");
  };
  
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center bg-gradient-to-b from-blue-900 to-black p-3 rounded-r-lg gap-6 border-r border-t border-b border-blue-800/30">
        {/* Spotify */}
        <button 
          onClick={() => handleSocialClick("spotify")}
          className="text-white hover:text-green-400 transition-colors"
          aria-label="Spotify"
        >
          <FaSpotify size={24} />
        </button>
        
        {/* Apple Music */}
        <button 
          onClick={() => handleSocialClick("apple")}
          className="text-white hover:text-pink-400 transition-colors"
          aria-label="Apple Music"
        >
     
        </button>
        
        {/* YouTube Music */}
        <button 
          onClick={() => handleSocialClick("youtube")}
          className="text-white hover:text-red-500 transition-colors"
          aria-label="YouTube Music"
        >
          <FaYoutube size={24} />
        </button>
        
        {/* SoundCloud */}
        <button 
          onClick={() => handleSocialClick("soundcloud")}
          className="text-white hover:text-orange-500 transition-colors"
          aria-label="SoundCloud"
        >
          <SiSoundcloud size={24} />
        </button>
        
        {/* Beats */}
        <button 
          onClick={() => handleSocialClick("beats")}
          className="text-white hover:text-red-600 transition-colors"
          aria-label="Beats Music"
        >
          <SiBeatsbydre size={24} />
        </button>
        
        {/* Instagram */}
        <button 
          onClick={() => handleSocialClick("instagram")}
          className="text-white hover:text-purple-500 transition-colors"
          aria-label="Instagram"
        >
          <AiFillInstagram size={24} />
        </button>
        
        {/* Right arrow indicator */}
        <div className="text-white mt-2">
          <span className="text-xl">›</span>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;