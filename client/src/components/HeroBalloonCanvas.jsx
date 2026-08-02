import React, { useEffect, useRef } from 'react';

/**
 * HeroBalloonCanvas
 * Realistic Physics & Scroll-Driven Balloon Simulation
 * Harmonized with the giant CHILPAYATE editorial typography
 */

class BalloonParticle {
  constructor(config, canvasWidth, canvasHeight) {
    this.initialXRatio = config.xRatio;
    this.initialYRatio = config.yRatio;
    this.radius = config.radius;
    this.aspectRatio = config.aspectRatio || 1.22;
    this.colors = config.colors;
    this.type = config.type || 'latex';
    this.rotation = config.rotation || 0;
    this.oscillationSpeed = 0.0012 + Math.random() * 0.0008;
    this.oscillationAmp = 12 + Math.random() * 16;
    this.phase = Math.random() * Math.PI * 2;
    this.stringLength = config.stringLength || 160;
    this.ribbonColor = config.ribbonColor || 'rgba(120, 110, 100, 0.35)';
    this.layer = config.layer || 1;
    this.knotColor = config.colors.knot || config.colors.shadow;
    
    this.x = canvasWidth * this.initialXRatio;
    this.y = canvasHeight * this.initialYRatio;
    this.targetX = this.x;
    this.targetY = this.y;
    this.opacity = 1;
  }

  resize(width, height) {
    this.targetX = width * this.initialXRatio;
    this.targetY = height * this.initialYRatio;
  }

  update(time, scrollY, mouse, width, height) {
    const baseTargetX = width * this.initialXRatio;
    const baseTargetY = height * this.initialYRatio;

    // Harmonic buoyant drift
    const swayX = Math.sin(time * this.oscillationSpeed + this.phase) * this.oscillationAmp;
    const swayY = Math.cos(time * this.oscillationSpeed * 0.85 + this.phase) * (this.oscillationAmp * 0.35);

    // Scroll release flight physics
    const flightSpeed = (1 + this.layer * 0.4) * 1.7;
    const liftY = -scrollY * flightSpeed * 1.35;
    
    // Spread gently away from center
    const centerOffset = this.initialXRatio - 0.5;
    const spreadX = centerOffset * scrollY * 0.55;

    // Subtle natural air deflection from cursor
    let mouseForceX = 0;
    let mouseForceY = 0;
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      if (dist < maxDist && dist > 0) {
        const force = (1 - dist / maxDist) * 28;
        mouseForceX = (dx / dist) * force;
        mouseForceY = (dy / dist) * force * 0.4;
      }
    }

    this.targetX = baseTargetX + swayX + spreadX + mouseForceX;
    this.targetY = baseTargetY + swayY + liftY + mouseForceY;

    // Smooth spring dampening
    this.x += (this.targetX - this.x) * 0.08;
    this.y += (this.targetY - this.y) * 0.08;

    this.rotation = (swayX / this.oscillationAmp) * 0.1;

    // Fade when leaving top of screen
    if (this.y < -this.radius * 2) {
      this.opacity = Math.max(0, 1 - Math.abs(this.y + this.radius * 2) / 250);
    } else {
      this.opacity = 1;
    }
  }

  draw(ctx, time) {
    if (this.opacity <= 0.01) return;

    ctx.save();
    ctx.globalAlpha = this.opacity * (this.layer === 0 ? 0.7 : 1);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    const w = this.radius;
    const h = this.radius * this.aspectRatio;

    // 1. Natural string
    this.drawString(ctx, w, h, time);

    // 2. Knot
    this.drawKnot(ctx, h);

    // 3. Balloon Body with refined matte 3D lighting
    this.drawBalloonBody(ctx, w, h);

    ctx.restore();
  }

  drawBalloonBody(ctx, w, h) {
    ctx.save();

    // Natural egg curve
    ctx.beginPath();
    ctx.moveTo(0, -h);
    ctx.bezierCurveTo(w * 1.14, -h * 0.84, w * 1.22, 0, w * 0.64, h * 0.74);
    ctx.bezierCurveTo(w * 0.34, h * 0.98, w * 0.12, h, 0, h);
    ctx.bezierCurveTo(-w * 0.12, h, -w * 0.34, h * 0.98, -w * 0.64, h * 0.74);
    ctx.bezierCurveTo(-w * 1.22, 0, -w * 1.14, -h * 0.84, 0, -h);
    ctx.closePath();

    const lightOffsetX = -w * 0.3;
    const lightOffsetY = -h * 0.32;
    
    // Smooth natural volume gradient
    const radialGrad = ctx.createRadialGradient(
      lightOffsetX, lightOffsetY, w * 0.12,
      0, 0, h * 1.1
    );

    radialGrad.addColorStop(0, this.colors.highlight);
    radialGrad.addColorStop(0.38, this.colors.base);
    radialGrad.addColorStop(0.85, this.colors.shadow);
    radialGrad.addColorStop(1, this.colors.ambientShadow || this.colors.shadow);

    ctx.fillStyle = radialGrad;
    ctx.fill();

    // Subtle soft light reflection
    ctx.save();
    ctx.translate(lightOffsetX, lightOffsetY);
    ctx.rotate(-0.35);
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.36, h * 0.2, 0, 0, Math.PI * 2);
    
    const specGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.36);
    specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
    specGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.25)');
    specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = specGrad;
    ctx.fill();
    ctx.restore();

    ctx.restore();
  }

  drawKnot(ctx, h) {
    ctx.save();
    ctx.fillStyle = this.knotColor;
    ctx.beginPath();
    ctx.moveTo(-this.radius * 0.12, h - 1);
    ctx.lineTo(this.radius * 0.12, h - 1);
    ctx.lineTo(this.radius * 0.2, h + 8);
    ctx.lineTo(-this.radius * 0.2, h + 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawString(ctx, w, h, time) {
    ctx.save();
    ctx.beginPath();
    
    const startX = 0;
    const startY = h + 8;
    const len = this.stringLength;
    
    const wavePhase = time * 0.0025 + this.phase;
    const sway1 = Math.sin(wavePhase) * 14;
    const sway2 = Math.cos(wavePhase * 1.2) * 18;
    const sway3 = Math.sin(wavePhase * 0.8) * 12;

    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
      startX + sway1, startY + len * 0.35,
      startX + sway2, startY + len * 0.7,
      startX + sway3, startY + len
    );

    ctx.strokeStyle = this.ribbonColor;
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();
  }
}

export default function HeroBalloonCanvas() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const balloonsRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      balloonsRef.current.forEach((balloon) => balloon.resize(width, height));
    };

    // Refined, human, matte luxury palette for balloons
    const BALLOON_PRESETS = [
      // 1. Large Warm Sand (Upper right)
      {
        xRatio: 0.82,
        yRatio: 0.35,
        radius: 82,
        aspectRatio: 1.24,
        layer: 2,
        colors: {
          highlight: '#FAF4EB',
          base: '#DECDB8',
          shadow: '#B59E83',
          ambientShadow: '#8C765E',
          knot: '#B59E83',
        },
        ribbonColor: 'rgba(160, 140, 120, 0.4)'
      },
      // 2. Soft Terracotta Nude (Mid right)
      {
        xRatio: 0.70,
        yRatio: 0.52,
        radius: 68,
        aspectRatio: 1.22,
        layer: 1,
        colors: {
          highlight: '#FDF0EC',
          base: '#E5A99B',
          shadow: '#BF7262',
          ambientShadow: '#964E40',
          knot: '#BF7262',
        },
        ribbonColor: 'rgba(180, 110, 100, 0.4)'
      },
      // 3. Ivory Pearl (Top right background)
      {
        xRatio: 0.88,
        yRatio: 0.20,
        radius: 52,
        aspectRatio: 1.23,
        layer: 0,
        colors: {
          highlight: '#FFFFFF',
          base: '#EDE8E0',
          shadow: '#CFC6B8',
          ambientShadow: '#ADA394',
          knot: '#CFC6B8',
        },
        ribbonColor: 'rgba(180, 170, 160, 0.35)'
      },
      // 4. Botanical Eucalyptus (Left background)
      {
        xRatio: 0.16,
        yRatio: 0.32,
        radius: 62,
        aspectRatio: 1.22,
        layer: 1,
        colors: {
          highlight: '#F0F6F2',
          base: '#AEC4B4',
          shadow: '#789480',
          ambientShadow: '#526E5A',
          knot: '#789480',
        },
        ribbonColor: 'rgba(110, 135, 118, 0.4)'
      },
      // 5. Warm Cream (Left lower)
      {
        xRatio: 0.26,
        yRatio: 0.58,
        radius: 54,
        aspectRatio: 1.2,
        layer: 0,
        colors: {
          highlight: '#FFFDF9',
          base: '#EAE1D2',
          shadow: '#C4B7A4',
          ambientShadow: '#9B8E7B',
          knot: '#C4B7A4',
        },
        ribbonColor: 'rgba(160, 150, 135, 0.35)'
      },
      // 6. Dusty Rose (Right floating lower)
      {
        xRatio: 0.62,
        yRatio: 0.68,
        radius: 58,
        aspectRatio: 1.24,
        layer: 2,
        colors: {
          highlight: '#FFF3F4',
          base: '#E5B8BC',
          shadow: '#B88288',
          ambientShadow: '#8C5A60',
          knot: '#B88288',
        },
        ribbonColor: 'rgba(170, 120, 126, 0.4)'
      },
      // 7. Mini Sand Accent (Left subtle)
      {
        xRatio: 0.08,
        yRatio: 0.62,
        radius: 40,
        aspectRatio: 1.2,
        layer: 0,
        colors: {
          highlight: '#FBF8F2',
          base: '#DFD3C2',
          shadow: '#B5A591',
          ambientShadow: '#8F7E6B',
          knot: '#B5A591',
        },
        ribbonColor: 'rgba(160, 145, 130, 0.3)'
      }
    ];

    balloonsRef.current = BALLOON_PRESETS.map(
      (preset) => new BalloonParticle(preset, width, height)
    );

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let startTime = performance.now();
    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const sorted = [...balloonsRef.current].sort((a, b) => a.layer - b.layer);
      sorted.forEach((balloon) => {
        balloon.update(elapsed, scrollYRef.current, mouseRef.current, width, height);
        balloon.draw(ctx, elapsed);
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      style={{ willChange: 'transform' }}
    />
  );
}
