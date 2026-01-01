# Cognition

<div align="center">
  <h3>🧠 Privacy-First AI-Powered Note-Taking</h3>
  <p>Your private, local AI companion for intelligent note-taking</p>
</div>

---

## ✨ Features

- **📝 Rich Text Editor** - Full-featured editor with formatting, images, and links
- **🤖 Local AI Integration** - Powered by Ollama for 100% offline AI capabilities
- **📁 Organization** - Folders and search to keep your notes organized
- **🔍 Smart Search** - Full-text search across all your notes
- **📎 File Attachments** - Attach images and PDFs to your notes
- **🧠 AI Features**:
  - **Summarize** - Extract key points from your notes
  - **Organize** - Transform messy text into structured content
  - **Mind Maps** - Generate visual diagrams from text
  - **AI Chat** - Have conversations about your notes
- **🔒 Privacy-First** - All data stays on your device, nothing uploaded to the cloud

## 📥 Installation

### Download

Download the latest version for your platform from the [Releases](https://github.com/mrrobot-1001/cognition/releases) page:

| Platform | Download |
|----------|----------|
| macOS (Apple Silicon) | `Cognition_x.x.x_aarch64.dmg` |
| macOS (Intel) | `Cognition_x.x.x_x64.dmg` |
| Windows | `Cognition_x.x.x_x64-setup.exe` |
| Linux (Debian/Ubuntu) | `Cognition_x.x.x_amd64.deb` |
| Linux (AppImage) | `Cognition_x.x.x_amd64.AppImage` |

### First-Time Setup

1. **Download and install Cognition** for your platform
2. **Launch the app**
3. **Setup AI** (optional but recommended):
   - Click "Setup AI" in the app
   - Download [Ollama](https://ollama.ai) - it's free and open source
   - Install and run Ollama
   - Download a model (we recommend `llama3.2`)
4. **Start taking notes!**

## 🛠️ Development

For a detailed overview of the project's architecture and components, see [ARCHITECTURE.md](./ARCHITECTURE.md).

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Rust](https://rustup.rs/) (stable)
- [Ollama](https://ollama.ai/) (for AI features)


### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

### Setup

```bash
# Clone the repository
git clone https://github.com/mrrobot-1001/cognition.git
cd cognition

# Install dependencies
npm install

# Run in development mode
npm run tauri:dev

# Build for production
npm run tauri:build
```

### Project Structure

```
cognition/
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── stores/            # Zustand state stores
│   └── lib/               # Utilities
├── src-tauri/             # Rust backend
│   ├── src/               # Rust source code
│   └── tauri.conf.json    # Tauri configuration
└── public/                # Static assets
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/) - Cross-platform app framework
- [React](https://react.dev/) - UI framework
- [Ollama](https://ollama.ai/) - Local AI runtime
- [TipTap](https://tiptap.dev/) - Rich text editor
- [Zustand](https://github.com/pmndrs/zustand) - State management
