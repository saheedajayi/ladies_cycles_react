import '../styles/keys.css';

function Colors() {
    const colors = [
        { name: 'Next Period', code: '#ffd166' },
        { name: 'green', code: '#00FF00' },
        { name: 'yellow', code: '#FFFF00' },
        { name: 'orange', code: '#FFA500' },
        { name: 'white', code: '#FFFFFF' },
    ];

    return (
        <div className="colors">
            {colors.map(color => (
                <div key={color.name} className="color" style={{ backgroundColor: color.code }}>
                    <span className="name">{color.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Colors;