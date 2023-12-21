import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom";



describe('Pruebas en el <PrivateRoute />', () => {

    test('Debe de mostrar el children si esta autenticado', () => {
        
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Fran',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
               </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", '/marvel');

        // screen.debug()
    });
    
})