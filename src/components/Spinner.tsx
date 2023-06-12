
export default function Spinner() {
    return <div
    style={{
      display: 'block',
      position: 'fixed',
      right: 15,
      top: 15,
      zIndex: 1031,
    }}
  >
    <div
      style={{
        animation: '400ms linear infinite spinner',
        borderBottom: '2px solid transparent',
        borderLeft: '2px solid #1E1E4B',
        borderRadius: '50%',
        borderRight: '2px solid transparent',
        borderTop: '2px solid #1E1E4B',
        boxSizing: 'border-box',
        height: 18,
        width: 18,
      }}
    />
  </div>
}