import { Route, Routes } from "react-router-dom"
import { LoginPges } from "../auth/pages/LoginPges"
import { HeroesRoutes } from "../heroes"
import { PublicRouter } from "./PublicRouter"
import { PrivedRouter } from "./PrivedRouter"

export const AppRouter = () => {

    

    return (
            <>
            <div className="content-body">

                <Routes>
                
                    <Route path='login' element={< PublicRouter>
                        <LoginPges/>
                    </PublicRouter>} />

                    <Route path={'/*'} element={ <PrivedRouter>
                        < HeroesRoutes />
                    </PrivedRouter> }/>
                </Routes>
                <br />
            </div>
                <footer className="container-fluid p-3 text-center bg-black" > 
                    <p className=" text-light" > Todos los derechos reservados</p>
                </footer>
            </>
            
    )
}

