import { Route, Routes } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { LoginPges } from "./auth/pages/LoginPges"
import { AuthProvider } from "./auth/context/AuthProvider"

export const HeroesApp = () => {
  return (

      <AuthProvider>

        <AppRouter/>
      </AuthProvider>

  )
}
