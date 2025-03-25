
export const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            background: '#dfe6e9',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
        }}>
            {children}
        </div>
    )
}