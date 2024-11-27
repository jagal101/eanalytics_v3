import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "../theme-provider"

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-lg font-semibold">Analytics Dashboard</div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-md p-2.5 hover:bg-accent"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
