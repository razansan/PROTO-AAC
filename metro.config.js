const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for more file extensions
config.resolver.assetExts.push(
  // Fonts
  'otf',
  // Audio
  'mp3',
  'wav',
  'm4a',
  'aac',
  // Video
  'mp4',
  'mov',
  'avi',
  // Lottie
  'json'
);

module.exports = config;
