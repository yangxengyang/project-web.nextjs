// components/BinaryBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ປັບຂະໜາດ canvas ເມື່ອປ່ຽນຂະໜາດຫນ້າຈໍ
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);

    // ຕຳແໜ່ງຂອງເສັ້ນຝົນຕົກ (drops)
    const drops: number[] = new Array(columns).fill(1);
    
    // ຄວາມໄວຊ້າໆ ເພື່ອໃຫ້ເປັນ slow motion
    const speeds: number[] = new Array(columns).fill(0).map(() => 
      Math.random() * 0.6 + 0.4   // ຄວາມໄວຊ້າ: 0.4 ~ 1.0
    );

    const chars = '01';

    let animationFrame: number;

    const draw = () => {
      // ເຮັດໃຫ້ມີເສັ້ນຫາງ (trail) ອ່ອນໆ ເພື່ອເບິ່ງງາມ
      ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // ສ້າງຕົວເລກ binary ສຸ່ມ
        const text = chars[Math.floor(Math.random() * chars.length)];

        // ປັບຄວາມສະຫວ່າງຂອງຕົວອັກສອນ (ບາງຕົວສະຫວ່າງ, ບາງຕົວອ່ອນ)
        const brightness = Math.random() > 0.8 ? 1 : Math.random() * 0.65 + 0.35;
        ctx.fillStyle = `rgba(0, 255, 70, ${brightness})`;

        // ວາດຕົວອັກສອນ
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // ຣີເຊັດເມື່ອຕົກລຸ່ມພື້ນ (ສ້າງຊ່ອງຫວ່າງທຳມະຊາດ)
        if (drops[i] * fontSize > height && Math.random() > 0.97) {
          drops[i] = 0;
        }

        // ເຄື່ອນໄຫວລົງຊ້າໆ
        drops[i] += speeds[i];
      }

      animationFrame = requestAnimationFrame(draw);
    };

    // ເລີ່ມ animation ຢ່າງລຽບ
    draw();

    // ລ້າງຂໍ້ມູນເມື່ອປິດ component
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#000000' }}
    />
  );
}