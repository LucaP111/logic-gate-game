import { Handle, Position } from '@xyflow/react';
import { getGateStyle } from '../../gateStyles';

const GateNode = ({ data }) => {
    const isUnary = data.label === 'NOT';
    const { color } = getGateStyle(data.label);

    const handleStyle = {
        background: '#94a3b8',
        width: '10px',
        height: '10px',
        left: '-5px'
    };

    return (
        <div style={{
            padding: '15px',
            borderRadius: '12px',
            background: '#1e293b',
            border: `2px solid ${color}`,
            width: '100px',
            textAlign: 'center',
            color,
            boxShadow: `0 0 16px ${color}33, 0 4px 6px -1px rgba(0, 0, 0, 0.5)`,
            transition: 'border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease'
        }}>
            {isUnary ? (
                <Handle type="target" position={Position.Left} id="a" style={handleStyle} />
            ) : (
                <>
                    <Handle type="target" position={Position.Left} id="a" style={{ ...handleStyle, top: '30%' }} />
                    <Handle type="target" position={Position.Left} id="b" style={{ ...handleStyle, top: '70%' }} />
                </>
            )}

            <div style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '2px' }}>
                {data.label}
            </div>

            <Handle
                type="source"
                position={Position.Right}
                id="output"
                style={{
                    background: '#f8fafc',
                    width: '12px',
                    height: '12px',
                    right: '-6px'
                }}
            />
        </div>
    );
};

export default GateNode;