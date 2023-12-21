import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en el PublicRouter', () => {

    test('Debe de mostrar el children si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        
        expect( screen.getByText('Ruta Publica') ).toBeTruthy();

        // screen.debug()
    });

    test('Debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Fran',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //screen.debug();
        expect( screen.getByText('Pagina Marvel') ).toBeTruthy(); 
    })
});