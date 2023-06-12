

export default function Bar({ animationDuration, progress }: BarProps) {

    const BarStyle = {
        background: '#1E1E4B',
        height: 2,
        left: 0,
        marginLeft: `${(-1 + progress) * 100}%`,
        position: 'fixed',
        top: 0,
        transition: `margin-left ${animationDuration}ms linear`,
        width: '100%',
        zIndex: 1031
    }

    return <div style={BarStyle}>
        <div>
            <div
                style={{
                    boxShadow: '0 0 10px #1E1E4B, 0 0 5px #1E1E4B',
                    display: 'block',
                    height: '100%',
                    opacity: 1,
                    position: 'absolute',
                    right: 0,
                    transform: 'rotate(3deg) translate(0px, -4px)',
                    width: 100,
                }}
            />
        </div>
    </div>
}

interface BarProps {
    animationDuration: number,
    progress: number
}