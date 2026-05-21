import { useState, useEffect } from 'react';

export default function useAssetLoader(assets) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = assets.length;

    if (totalAssets === 0) {
      setIsLoaded(true);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalAssets) * 100));
      if (loadedCount === totalAssets) {
        // Pequeno delay para garantir que o navegador processou os assets
        setTimeout(() => setIsLoaded(true), 500);
      }
    };

    assets.forEach((asset) => {
      if (asset.endsWith('.webp') || asset.endsWith('.png') || asset.endsWith('.jpg') || asset.endsWith('.svg')) {
        const img = new Image();
        img.src = asset;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Continua mesmo se falhar
      } else if (asset.endsWith('.webm') || asset.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = asset;
        video.oncanplaythrough = updateProgress;
        video.onerror = updateProgress;
        video.load();
      } else {
        updateProgress();
      }
    });
  }, [assets]);

  return { isLoaded, progress };
}
