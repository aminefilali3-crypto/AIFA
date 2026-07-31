@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 47% 5%;
    --foreground: 210 20% 96%;
    --card: 222 40% 8%;
    --border: 222 25% 18%;
    --muted-foreground: 215 16% 60%;
    --primary: 193 100% 50%;
    --primary-foreground: 222 47% 5%;
  }

  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: 'Inter', system-ui, sans-serif;
  }
}
