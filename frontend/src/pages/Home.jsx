function nomeDaPagina(pagina){
    if(pagina === "inicio"){
        return "pagina inicial"
    } 
    if (pagina === "dicionario"){
        return "dicionario de libras"
    }
    return "pagina em desenvolvimento"
}

function Home({pagina}){
    const paginas = ["inicio", "libras", "dicionario", "jogos", "progresso", "configuracoes"]
    console.log(paginas)
    console.log(paginas[0])
    console.log(paginas[1])

    let conteudo

    if(pagina === "inicio"){
        conteudo = "Bem-vindo ao TCC Libras"
    } else if(pagina === "dicionario"){
        conteudo = "dicionario de libras"
    } else {
        conteudo = "pagina em desenvolvimento"
    }
        

    const tituloPagina = nomeDaPagina(pagina)


    return(
        <main>
            <p>{tituloPagina}</p>
            <h1>{conteudo}</h1>
            <p>Comece sua jornada de aprendizado.</p>
            <p>Página atual: {pagina}</p>
        </main>
    )
}
export default Home