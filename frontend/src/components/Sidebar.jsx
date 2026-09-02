import { useState } from "react";

function Sidebar(){
    const [aberto, setAberto] = useState(true)
    return (
        <aside>
            <button onClick={() => setAberto(!aberto)}> 
                Menu
            </button>

                 {aberto && (
                <div>
                    <p>Início</p>
                    <p>Aprender Libras</p>
                    <p>Dicionário</p>
                    <p>Jogos</p>
                    <p>Meu Progresso</p>
                    <p>Configurações</p>
                </div>
            )}

        </aside>
            
    )
}

export default Sidebar;