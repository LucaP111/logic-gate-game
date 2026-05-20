import { useEffect, useRef, useState } from 'react';

const BUBBLE_ANIMATION_MS = 450;

const Avatar = ({ mood, title, message }) => {
    const [isBubbleMounted, setIsBubbleMounted] = useState(true);
    const [isBubbleVisible, setIsBubbleVisible] = useState(true);
    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }

        setIsBubbleMounted(true);

        requestAnimationFrame(() => {
            setIsBubbleVisible(true);
        });
    }, [mood, title, message]);

    const openBubble = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }

        setIsBubbleMounted(true);

        requestAnimationFrame(() => {
            setIsBubbleVisible(true);
        });
    };

    const closeBubble = () => {
        setIsBubbleVisible(false);

        closeTimeoutRef.current = setTimeout(() => {
            setIsBubbleMounted(false);
        }, BUBBLE_ANIMATION_MS);
    };

    const getAvatarProps = () => {
        switch (mood) {
            case 'happy':
                return { face: '🤩', color: '#10b981', glow: '0 0 20px rgba(16, 185, 129, 0.6)' };
            case 'sad':
                return { face: '🤔', color: '#f59e0b', glow: '0 0 20px rgba(245, 158, 11, 0.6)' };
            case 'alert':
                return { face: '😵', color: '#ef4444', glow: '0 0 20px rgba(239, 68, 68, 0.6)' };
            default:
                return { face: '🤖', color: '#3b82f6', glow: '0 0 15px rgba(59, 130, 246, 0.4)' };
        }
    };

    const { face, color, glow } = getAvatarProps();

    return (
        <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 50,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px',
            maxWidth: '450px',
            animation: mood === 'alert' ? 'shake 0.4s' : 'none'
        }}>
            <button
                type="button"
                onClick={openBubble}
                aria-label="Redeschide mesajul lui Spark"
                title="Redeschide mesajul lui Spark"
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: '#1e293b',
                    border: `3px solid ${color}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '40px',
                    boxShadow: glow,
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                    cursor: 'pointer',
                    padding: 0
                }}
            >
                {face}
            </button>

            {isBubbleMounted && (
                <div style={{
                    background: 'rgba(30, 41, 59, 0.95)',
                    border: `2px solid ${color}`,
                    borderRadius: '15px',
                    padding: '15px 42px 15px 15px',
                    position: 'relative',
                    borderTopLeftRadius: 0,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                    opacity: isBubbleVisible ? 1 : 0,
                    transform: isBubbleVisible ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.98)',
                    pointerEvents: isBubbleVisible ? 'auto' : 'none',
                    transition: `opacity ${BUBBLE_ANIMATION_MS}ms ease, transform ${BUBBLE_ANIMATION_MS}ms ease, border-color 0.3s ease`
                }}>
                    <button
                        type="button"
                        onClick={closeBubble}
                        aria-label="Închide mesajul lui Spark"
                        title="Închide mesajul"
                        style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            border: '1px solid #475569',
                            background: '#0f172a',
                            color: '#cbd5e1',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: 1
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#ef4444';
                            e.currentTarget.style.background = '#7f1d1d';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#cbd5e1';
                            e.currentTarget.style.borderColor = '#475569';
                            e.currentTarget.style.background = '#0f172a';
                        }}
                    >
                        ×
                    </button>

                    <h4 style={{
                        margin: '0 0 5px 0',
                        color: color,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '900'
                    }}>
                        Spark, Inginerul Șef
                    </h4>

                    <h3 style={{ margin: '0 0 8px 0', color: '#f8fafc', fontSize: '16px' }}>
                        {title}
                    </h3>

                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
                        {message}
                    </p>
                </div>
            )}

            <style>{`
                @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
};

export default Avatar;