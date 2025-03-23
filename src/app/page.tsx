export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to Next-Electron Package</h1>
      <p>
        This package is used to create desktop applications on different OS platforms independently. 
        Use this repository to create your own application. It is the boilerplate quick-start repo.
      </p>
      <ul>
        <li>Cross-platform support</li>
        <li>Easy setup and configuration</li>
        <li>Built with modern web technologies</li>
        <li>Extensible and customizable</li>
      </ul>
      <h2>Getting Started</h2>
      <p>Follow the instructions in the <code>README.md</code> file to get started with your project.</p>
      <p>Happy building!</p>
    </div>
  );
}