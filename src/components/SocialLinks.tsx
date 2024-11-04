import React from 'react';

enum ESocialLinks {
  VK = '',
  Instagram = '',
}

const SocialLinks = () => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={ESocialLinks.VK}>
        VK
      </a>
      <a target="_blank" rel="noopener noreferrer" href={ESocialLinks.Instagram}>
        Instagram
      </a>
    </div>
  );
};

export default SocialLinks;
