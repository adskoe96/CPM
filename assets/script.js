document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'assets/images/zalgoFluttershy.png',
        'assets/images/zalgoPinkie.png',
        'assets/images/zalgoPinkie_2.png'
    ];
    
    const bgElement = document.querySelector('.tiled-background');
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    
    bgElement.style.opacity = '0.01';
    bgElement.style.transition = 'opacity 3s ease-in-out';
    
    const img = new Image();
    img.src = randomBg;
    
    img.onload = function() {
        const tileSize = Math.min(img.width, img.height);
        bgElement.style.backgroundSize = `${tileSize * 0.3}px`;
        bgElement.style.backgroundImage = `url('${randomBg}')`;
        bgElement.style.backgroundRepeat = 'repeat';
        
        requestAnimationFrame(() => {
            bgElement.style.opacity = '1';
        });
        
        console.log('Background set to:', randomBg);
    };
    
    img.onerror = function() {
        console.error('Failed to load background:', randomBg);
        
        bgElement.style.backgroundImage = `
            linear-gradient(45deg, #000 25%, transparent 25%),
            linear-gradient(-45deg, #000 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #000 75%),
            linear-gradient(-45deg, transparent 75%, #000 75%)
        `;
        const tileSize = 200;
        bgElement.style.backgroundSize = `${tileSize}px`;
        bgElement.style.backgroundPosition = '0 0, 0 10px, 10px -10px, -10px 0px';
        
        requestAnimationFrame(() => {
            bgElement.style.opacity = '1';
        });
    };
});