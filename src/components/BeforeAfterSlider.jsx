import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = "/images/warehouse-before.jpg",
  afterImage = "/images/warehouse-after.jpg",
  title = "Cathedral Ceiling & Steel Trusses Overhaul",
  location = "",
  aspectRatio = "16 / 10"
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging || e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }
  };

  // Dynamic tag visibility calculation based on sliderPos (0 - 100)
  // When sliding right (sliderPos increases), After tag fades out and disappears completely by 80%
  // When sliding left (sliderPos decreases), Before tag fades out and disappears completely by 20%
  const beforeTagOpacity = sliderPos <= 18 
    ? 0 
    : sliderPos >= 36 
      ? 1 
      : (sliderPos - 18) / 18;

  const afterTagOpacity = sliderPos >= 82 
    ? 0 
    : sliderPos <= 64 
      ? 1 
      : (82 - sliderPos) / 18;

  return (
    <div className="slider-card-box">
      <div className="slider-card-header">
        <div>
          <span className="slider-badge">
            <Sparkles size={12} className="gold-icon" /> Structural Transformation
          </span>
          <h4 className="slider-title">{title}</h4>
          {location && <span className="slider-location">{location}</span>}
        </div>
        <div className="slider-drag-hint">
          <MoveHorizontal size={14} />
          <span>Drag or click to inspect</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="slider-viewport-frame"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ aspectRatio, touchAction: 'none' }}
      >
        {/* Layer 1: AFTER (Base) */}
        <div className="slider-layer base-layer">
          <img 
            src={afterImage} 
            alt="After luxury transformation" 
            className="slider-image" 
            draggable="false"
          />
        </div>

        {/* Layer 2: BEFORE (Clipped on top from left) */}
        <div 
          className="slider-layer overlay-layer"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before structural transformation" 
            className="slider-image" 
            draggable="false"
          />
        </div>

        {/* Dynamic Tags - decoupled from image layers with smooth fade & mobile overlap protection */}
        <div 
          className="slider-tag tag-raw"
          style={{ 
            opacity: beforeTagOpacity, 
            visibility: beforeTagOpacity <= 0 ? 'hidden' : 'visible',
            pointerEvents: 'none',
            transform: `translateY(${beforeTagOpacity <= 0 ? '4px' : '0px'})`
          }}
          aria-hidden={beforeTagOpacity <= 0}
        >
          <span className="tag-label">Before</span>
          <span className="tag-subtext"> · Initial State</span>
        </div>

        <div 
          className="slider-tag tag-finished"
          style={{ 
            opacity: afterTagOpacity, 
            visibility: afterTagOpacity <= 0 ? 'hidden' : 'visible',
            pointerEvents: 'none',
            transform: `translateY(${afterTagOpacity <= 0 ? '4px' : '0px'})`
          }}
          aria-hidden={afterTagOpacity <= 0}
        >
          <span className="tag-label">After</span>
          <span className="tag-subtext"> · Metacon Finish</span>
        </div>

        {/* Visual Divider Line */}
        <div 
          className="slider-divider-line" 
          style={{ left: `${sliderPos}%` }}
        >
          <div className={`slider-divider-handle ${isDragging ? 'is-active' : ''}`}>
            <MoveHorizontal size={16} />
          </div>
        </div>

        {/* Accessible Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(sliderPos)}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="slider-native-input"
          aria-label={`${title} comparison slider`}
        />
      </div>

      <style>{`
        .slider-card-box {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #11141c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .slider-card-box:hover {
          border-color: rgba(197, 154, 99, 0.4);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.65);
        }
        .slider-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #0d1017;
          gap: 12px;
          min-height: 86px;
          box-sizing: border-box;
        }
        .slider-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #dfb987;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }
        .slider-title {
          font-family: var(--font-heading, 'Oswald', sans-serif);
          font-size: 1.15rem;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin-bottom: 2px;
          line-height: 1.25;
        }
        .slider-location {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .slider-drag-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          font-size: 0.72rem;
          color: #dfb987;
          font-weight: 600;
          flex-shrink: 0;
        }
        .slider-viewport-frame {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #08090d;
          cursor: ew-resize;
          user-select: none;
          flex: 1;
        }
        .slider-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          background: #07090d;
          display: block;
          user-select: none;
          pointer-events: none;
        }
        .overlay-layer {
          z-index: 2;
        }
        .slider-tag {
          position: absolute;
          bottom: 16px;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          z-index: 6;
          backdrop-filter: blur(8px);
          pointer-events: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
          transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.22s ease;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          max-width: 44%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tag-subtext {
          display: inline;
        }
        .tag-raw {
          left: 16px;
          background: rgba(13, 16, 23, 0.92);
          color: #f1f5f9;
          border: 1px solid rgba(255, 255, 255, 0.22);
        }
        .tag-finished {
          right: 16px;
          background: rgba(197, 154, 99, 0.96);
          color: #0b0d12;
          border: 1px solid rgba(255, 255, 255, 0.45);
        }
        .slider-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #dfb987;
          box-shadow: 0 0 12px rgba(223, 185, 135, 0.9);
          z-index: 10;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .slider-divider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dfb987 0%, #c59a63 100%);
          color: #0a0c10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.8), 0 0 14px rgba(197, 154, 99, 0.6);
          border: 2px solid #ffffff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .slider-divider-handle.is-active {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.9), 0 0 20px rgba(223, 185, 135, 0.9);
        }
        .slider-native-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: ew-resize;
          z-index: 20;
          margin: 0;
          padding: 0;
          -webkit-appearance: none;
        }
        .slider-native-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 60px;
          height: 100%;
          cursor: ew-resize;
        }
        .slider-native-input::-moz-range-thumb {
          width: 60px;
          height: 100%;
          cursor: ew-resize;
          opacity: 0;
        }
        @media (max-width: 600px) {
          .slider-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 12px 14px;
            min-height: auto;
          }
          .slider-title {
            font-size: 1.02rem;
          }
          .slider-drag-hint {
            padding: 4px 10px;
            font-size: 0.68rem;
          }
          .slider-tag {
            bottom: 10px;
            padding: 4px 8px;
            font-size: 0.64rem;
            max-width: 42%;
            letter-spacing: 0.04em;
            border-radius: 4px;
          }
          /* Completely prevents mobile overlap: displays clean "BEFORE" and "AFTER" with wide center clearance */
          .tag-subtext {
            display: none;
          }
          .tag-raw { left: 10px; }
          .tag-finished { right: 10px; }
          .slider-divider-handle {
            width: 36px;
            height: 36px;
          }
        }
        @media (max-width: 400px) {
          .slider-tag {
            bottom: 8px;
            padding: 3px 6px;
            font-size: 0.6rem;
            max-width: 40%;
          }
          .tag-raw { left: 8px; }
          .tag-finished { right: 8px; }
          .slider-divider-handle {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
}
