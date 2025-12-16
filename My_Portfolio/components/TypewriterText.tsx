import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    texts,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000,
    className = "",
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            const currentFullText = texts[textIndex];

            if (isDeleting) {
                setDisplayedText((prev) => prev.substring(0, prev.length - 1));
                timer = setTimeout(handleTyping, deletingSpeed);
            } else {
                setDisplayedText((prev) => currentFullText.substring(0, prev.length + 1));
                timer = setTimeout(handleTyping, typingSpeed);
            }

            if (!isDeleting && displayedText === currentFullText) {
                clearTimeout(timer);
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
                clearTimeout(timer);
                timer = setTimeout(handleTyping, 500); // Small pause before typing next word
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={`${className} inline-block min-w-[20px]`}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TypewriterText;
