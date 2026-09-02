import { useState } from "react";

function Sidebar({pagina, setPagina}){
    const [aberto, setAberto] = useState(true)
    return (
        <aside>
            <button onClick={() => setAberto(!aberto)}> 
                Menu
            </button>

                 {aberto && (
                <div>
                    <button onClick={() => setPagina("inicio")}>
                        Início</button>
                    <button onClick={() => setPagina("aprender libras")}>
                        Aprender Libras</button>
                    <button onClick={() => setPagina("dicionario")}>
                        Dicionário</button>
                    <button onClick={() => setPagina("jogos")}>
                        Jogos</button>
                    <button onClick={() => setPagina("meu progresso")}>
                        Meu Progresso</button>
                    <button onClick={() => setPagina("configuracoes")}>
                        Configurações</button>
                </div>
            )}

        </aside>
            
    )
}
export default Sidebar;