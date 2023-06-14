import '@styles/globals.css'

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradien">
            <main className="app">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
