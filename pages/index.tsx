import Button from "../src/components/Button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Screen</h1>
        <Button>
          My button
        </Button>
      </div>
    </ThemeProvider>
  )
}
