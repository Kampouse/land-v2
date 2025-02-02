import { $ } from "@builder.io/qwik";

export const initCanvas = $((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const stars: Array<{ x: number, y: number, size: number, brightness: number, speed: number, color: string, pulseSpeed: number, pulsePhase: number, nebulosity: number }> = [];
  const starConfig = {
    maxStars: Math.floor((window.innerWidth < 768) ? (canvas.width * canvas.height) / 6000 : (canvas.width * canvas.height) / 4500),
    colors: [
      '#4cc2fb', // Bold blue
      '#7de486', // XY green accent
      '#85b8ff', // Blue lighter
      '#08e7c5', // Cyan
      '#22c942', // Neon green
      '#2f81f7', // Blue darker
      '#9cdcfe', // Baby blue
      '#7ce184', // Light neon green
      '#ff69b4', // Hot pink
      '#ff1493', // Deep pink
      '#c678dd', // Purple
      '#da70d6', // Orchid
      '#9370db', // Medium purple
      '#8a2be2', // Blue violet
    ],
    rarity: {
      meteor: 0.95,
      nebula: 0.98,
      pulsar: 0.90
    },
    size: {
      nebula: { min: Math.max(2, canvas.width / 384), max: Math.max(6, canvas.width / 96) },
      meteor: { min: Math.max(1, canvas.width / 768), max: Math.max(3, canvas.width / 154) },
      pulsar: { min: Math.max(1, canvas.width / 768), max: Math.max(4, canvas.width / 192) },
      normal: { min: Math.max(0.5, canvas.width / 1536), max: Math.max(2, canvas.width / 384) }
    },
    speed: {
      meteor: { min: 0.03, max: Math.min(1.2, canvas.width / 512) },
      pulsar: { min: 0.2, max: 0.4 },
      normal: { min: 0.01, max: 0.08 }
    },
    brightness: { min: 0.6, max: 1.0 },
    pulse: {
      pulsar: { min: 0.004, max: 0.008 },
      normal: { min: 0.0005, max: 0.001 }
    },
    nebulosity: { min: 0.3, max: 0.7 },
    trailPersistence: 0.95,
    verticalMovement: 0.12,
    pulseIntensity: 0.5,
    glowSize: Math.max(2.5, canvas.width / 384)
  };
  const createStar = () => {
    const isMeteor = Math.random() > starConfig.rarity.meteor;
    const isNebula = Math.random() > starConfig.rarity.nebula;
    const isPulsar = Math.random() > starConfig.rarity.pulsar;

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const size = isNebula
      ? randomInRange(starConfig.size.nebula.min, starConfig.size.nebula.max)
      : isMeteor
        ? randomInRange(starConfig.size.meteor.min, starConfig.size.meteor.max)
        : isPulsar
          ? randomInRange(starConfig.size.pulsar.min, starConfig.size.pulsar.max)
          : randomInRange(starConfig.size.normal.min, starConfig.size.normal.max);

    const speed = isMeteor
      ? randomInRange(starConfig.speed.meteor.min, starConfig.speed.meteor.max)
      : isPulsar
        ? randomInRange(starConfig.speed.pulsar.min, starConfig.speed.pulsar.max)
        : randomInRange(starConfig.speed.normal.min, starConfig.speed.normal.max);

    const pulseSpeed = isPulsar
      ? randomInRange(starConfig.pulse.pulsar.min, starConfig.pulse.pulsar.max)
      : randomInRange(starConfig.pulse.normal.min, starConfig.pulse.normal.max);

    return {
      x: Math.random() * canvas.width,
      y: isMeteor ? Math.random() * canvas.height * 0.3 : Math.random() * canvas.height,
      size,
      brightness: randomInRange(starConfig.brightness.min, starConfig.brightness.max),
      speed,
      color: starConfig.colors[Math.floor(Math.random() * starConfig.colors.length)],
      pulseSpeed,
      pulsePhase: Math.random() * Math.PI * 2,
      nebulosity: isNebula ? randomInRange(starConfig.nebulosity.min, starConfig.nebulosity.max) : 0
    };
  };



  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Recreate stars with appropriate density for new size
    stars.length = 0;
    starConfig.maxStars = Math.floor((canvas.width * canvas.height) / 3000);
    for (let i = 0; i < starConfig.maxStars; i++) {
      stars.push(createStar());
    }
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let animationFrame: number;





  for (let i = 0; i < starConfig.maxStars; i++) {
    stars.push(createStar());
  }

  const drawShape = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const animate = () => {
    ctx.fillStyle = `rgba(27, 27, 27, ${starConfig.trailPersistence})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      star.x -= star.speed;
      star.y += star.speed * starConfig.verticalMovement;

      if (star.x < 0 || star.y > canvas.height) {
        star.x = canvas.width;
        star.y = Math.random() * canvas.height * 0.5;
      }

      const time = Date.now();
      const basicPulse = Math.sin(time * star.pulseSpeed + star.pulsePhase);
      const combinedPulse = basicPulse * starConfig.pulseIntensity + (1 - starConfig.pulseIntensity);

      if (star.speed > starConfig.speed.meteor.min) {
        const gradient = ctx.createLinearGradient(
          star.x + star.speed * 8,
          star.y - star.speed * 0.5,
          star.x,
          star.y
        );
        gradient.addColorStop(0, `${star.color}00`);
        gradient.addColorStop(1, `${star.color}${Math.floor(star.brightness * 0.6 * 255).toString(16).padStart(2, '0')}`);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.speed * 8, star.y - star.speed * 0.5);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size * 0.8;
        ctx.stroke();
      }

      if (star.nebulosity > 0) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 4
        );
        gradient.addColorStop(0, `${star.color}${Math.floor(star.nebulosity * 0.3 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${star.color}00`);
        ctx.fillStyle = gradient;
        ctx.fillRect(star.x - star.size * 4, star.y - star.size * 4, star.size * 8, star.size * 8);
      }

      ctx.fillStyle = `${star.color}${Math.floor(star.brightness * combinedPulse * 255).toString(16).padStart(2, '0')}`;
      drawShape(ctx, star.x, star.y, star.size);

      ctx.fillStyle = `${star.color}${Math.floor(star.brightness * combinedPulse * 0.2 * 255).toString(16).padStart(2, '0')}`;
      drawShape(ctx, star.x, star.y, star.size * starConfig.glowSize);
    });

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);
  return () => {
    window.removeEventListener('resize', resizeCanvas);
    if (typeof animationFrame === 'number') {
      cancelAnimationFrame(animationFrame);
    }
  };
});
