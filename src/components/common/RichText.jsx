import React from 'react';

const BOLD = /\*\*(.+?)\*\*/g;

/**
 * Renders `**PHP**`-style markup, giving the emphasised term the accent colour.
 * Used so the CV and the site can share one copy of every bullet.
 */
const RichText = ({ text, className = '', markClassName = 'font-semibold text-php' }) => {
    const nodes = [];
    let last = 0;
    let match;

    BOLD.lastIndex = 0;
    while ((match = BOLD.exec(text)) !== null) {
        if (match.index > last) nodes.push(text.slice(last, match.index));
        nodes.push(
            <strong key={`${match.index}-${match[1]}`} className={markClassName}>
                {match[1]}
            </strong>
        );
        last = match.index + match[0].length;
    }
    if (last < text.length) nodes.push(text.slice(last));

    return <span className={className}>{nodes}</span>;
};

export default RichText;
