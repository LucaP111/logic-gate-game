export const GATE_STYLES = {
    NOT: {
        icon: '!',
        color: '#facc15'
    },
    AND: {
        icon: '&',
        color: '#3b82f6'
    },
    OR: {
        icon: '||',
        color: '#10b981'
    },
    XOR: {
        icon: '=1',
        color: '#8b5cf6'
    },
    NAND: {
        icon: '&-○',
        color: '#ef4444'
    },
    NOR: {
        icon: '≥1-○',
        color: '#f97316'
    },
    XNOR: {
        icon: '=1-○',
        color: '#d946ef'
    }
};

export const getGateStyle = (gateType) => {
    return GATE_STYLES[gateType] || {
        icon: '?',
        color: '#3b82f6'
    };
};