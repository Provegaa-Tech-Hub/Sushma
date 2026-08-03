// src/components/Toolbar.jsx

function Toolbar({ language, setLanguage }) {
  return (
    <header className="toolbar">
      {/* Logo */}
      <div className="toolbar-logo">
        <h2>🌳 Family Tree</h2>
      </div>

      {/* Toolbar Buttons */}
      <div className="toolbar-actions">
        <button>📝 Text</button>
        <button>🔗 Connector</button>
        <button>🔗 Link</button>
        <button>📐 Align</button>
        <button>💬 Comments</button>
        <button>😊 Emoji</button>
        <button>⬇ Export</button>
        <button>📤 Share</button>
      </div>

      {/* Language Selector */}
      <div className="toolbar-language">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ar">Arabic</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </header>
  );
}

export default Toolbar;