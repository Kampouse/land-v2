
import { $ } from "@builder.io/qwik";

export const initCanvas = $((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let animationFrame: number;
  const stars: Array<{ x: number, y: number, size: number, brightness: number, speed: number, color: string, pulseSpeed: number, pulsePhase: number, nebulosity: number }> = [];
  const starConfig = {
    maxStars: window.innerWidth < 768 ? 150 : 300,
    colors: [
      '#00ffff', // Cyan
      '#4CC2FB', // Electric blue
      '#7de486', // Neon green
      '#FF00FF', // Magenta
      '#08e7c5', // Turquoise
      '#22c942', // Bright green
      '#4788CC', // Deep blue
      '#FF1493', // Deep pink
      '#FF4500', // Orange red
      '#FFD700'  // Gold
    ],
    rarity: {
      meteor: 0.90,
      nebula: 0.98,
      pulsar: 0.85
    },
    size: {
      nebula: { min: window.innerWidth < 768 ? 2 : 3, max: window.innerWidth < 768 ? 6 : 8 },
      meteor: { min: window.innerWidth < 768 ? 1 : 2, max: window.innerWidth < 768 ? 3 : 5 },
      pulsar: { min: window.innerWidth < 768 ? 1 : 2, max: window.innerWidth < 768 ? 4 : 6 },
      normal: { min: window.innerWidth < 768 ? 0.5 : 1, max: window.innerWidth < 768 ? 2 : 3 }
    },
    speed: {
      meteor: { min: 0.005, max: window.innerWidth < 768 ? 1 : 1.5 },
      pulsar: { min: 0.3, max: 0.5 },
      normal: { min: 0.02, max: 0.1 }
    },
    brightness: { min: 0.5, max: 1.0 },
    pulse: {
      pulsar: { min: 0.004, max: 0.01 },
      normal: { min: 0.0005, max: 0.0015 }
    },
    nebulosity: { min: 0.4, max: 0.9 },
    trailPersistence: 1.0,
    verticalMovement: 0.15,
    pulseIntensity: 0.4,
    glowSize: window.innerWidth < 768 ? 2 : 3
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
    cancelAnimationFrame(animationFrame);
  };
});
