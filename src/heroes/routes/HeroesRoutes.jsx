import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DcPages, Heroes, MarvelPage, SearchPage } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container-m">
                <Routes>
                    <Route path='marvel' element={< MarvelPage />} />
                    <Route path='dc' element={< DcPages />} />
                    <Route path='search' element={< SearchPage />} />
                    <Route path='heroe/:id' element={< Heroes />} />
                    <Route path={'/*'} element={< Navigate to='/marvel' />} />
                </Routes>

            </div>
        </>
    )
}
