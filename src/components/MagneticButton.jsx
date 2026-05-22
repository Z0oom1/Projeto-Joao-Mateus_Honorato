import { useRef, useEffect } from 'react';

export default function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Inicializa CSS variables
    button.style.setProperty('--magnetic-x', '0px');
    button.style.setProperty('--magnetic-y', '0px');
    button.style.setProperty('--magnetic-span-x', '0px');
    button.style.setProperty('--magnetic-span-y', '0px');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Usa CSS variables em vez de state para evitar re-renders
      button.style.setProperty('--magnetic-x', `${x * 0.3}px`);
      button.style.setProperty('--magnetic-y', `${y * 0.3}px`);
      button.style.setProperty('--magnetic-span-x', `${x * 0.06}px`);
      button.style.setProperty('--magnetic-span-y', `${y * 0.06}px`);
      button.classList.add('magnetic-active');
    };

    const handleMouseLeave = () => {
      button.style.setProperty('--magnetic-x', '0px');
      button.style.setProperty('--magnetic-y', '0px');
      button.style.setProperty('--magnetic-span-x', '0px');
      button.style.setProperty('--magnetic-span-y', '0px');
      button.classList.remove('magnetic-active');
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      {...props}
    >
      <span className="magnetic-button__inner">
        {children}
      </span>
    </button>
  );
}
