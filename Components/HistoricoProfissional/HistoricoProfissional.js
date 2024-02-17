var logoEmpresaPadrao = "./img/empresas/building.png";

class HistoricoProfissional extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        let divRoot = this.CriaDivRoot();

        shadow.appendChild(this.CriaEstiloComponente());
        shadow.appendChild(this.CriaEstiloGeral());
        shadow.append(divRoot);
    }

    CriaDivRoot() {
        let experiencia = document.createElement('div');
        experiencia.className = "experiencia-profissional";

        experiencia.appendChild(this.CriaDivTituloEmpresa());
        experiencia.appendChild(this.CriaDivTituloCargo());
        experiencia.appendChild(this.CriaDivExperiencia());

        return experiencia;
    }

    CriaDivExperiencia() {
        let experiencia = document.createElement('div');
        experiencia.className = "experiencia";

        experiencia.appendChild(this.CriaDivEsquerda());
        experiencia.appendChild(this.CriaDivDireita());

        return experiencia;
    }

    CriaDivTituloEmpresa() {
        let divTitulo = document.createElement('div');
        divTitulo.className = "titulos";

        divTitulo.appendChild(this.CriaTituloEmpresa())
        return divTitulo;
    }

    CriaDivTituloCargo() {
        let divTitulo = document.createElement('div');
        divTitulo.className = "titulo-cargo";

        divTitulo.appendChild(this.CriaTituloCargo())
        return divTitulo;
    }

    CriaTituloEmpresa() {
        let titulo = document.createElement('h2');
        titulo.className = "center light-purple"
        titulo.textContent = this.getAttribute('tituloEmpresa');

        return titulo;
    }

    CriaTituloCargo() {
        let titulo = document.createElement('h3');
        titulo.className = "center light-purple"
        titulo.textContent = this.getAttribute('cargo');

        return titulo;
    }

    CriaDivEsquerda() {
        let divEsquerda = document.createElement('div');
        divEsquerda.className = "divisor-circular div-esquerda";
        divEsquerda.appendChild(this.CriaLinkDivEsquerda())

        return divEsquerda;
    }

    CriaLinkDivEsquerda() {
        let link = document.createElement('a');
        link.href = this.getAttribute('linkedinEmpresa');
        link.target = "_blank";

        link.appendChild(this.CriaImagemEmpresa());
        return link;
    }

    CriaImagemEmpresa() {
        let caminhoLogo = logoEmpresaPadrao;
        let logoEmpresaAtributo = this.getAttribute('logoEmpresa');

        if(logoEmpresaAtributo)
            caminhoLogo = `./img/empresas/${logoEmpresaAtributo}`;

        let imagem = document.createElement('img');
        imagem.src =  caminhoLogo;
        imagem.className = "building-ico logo-empresa"

        return imagem;
    }

    CriaDivDireita() {
        let divDireita = document.createElement('div');
        divDireita.className = "div-direita";

        divDireita.appendChild(this.CriaDivDescricao());
        divDireita.appendChild(this.CriaDivCompetencias());

        return divDireita;
    }

    CriaDivDescricao() {
        let divDescricao = document.createElement('div');

        divDescricao.className = "descricao";
        divDescricao.appendChild(this.CriaTextoDescricao());

        return divDescricao;
    }

    CriaTextoDescricao() {
        let descricaoTexto = document.createElement('p');
        descricaoTexto.className = "white-text justify texto-responsivo"
        descricaoTexto.innerText = this.textContent.replace(/\s+/g, ' ');

        return descricaoTexto;
    }

    CriaDivCompetencias() {
        let divCompetencias = document.createElement('div');

        divCompetencias.className = "competencias";
        divCompetencias.appendChild(this.CriaTextoCompetencias());

        return divCompetencias;
    }

    CriaTextoCompetencias() {
        let competenciasTexto = document.createElement('p');
        competenciasTexto.className = "white-text justify texto-responsivo"

        let competenciaTexto = this.getAttribute('competenciasVaga');

        if (competenciaTexto)
            competenciasTexto.innerText = `Competências: ${this.RetiraEspacosInuteis(competenciaTexto)}`;

        return competenciasTexto;
    }

    RetiraEspacosInuteis(texto){
        return texto.replace(/\s+/g, ' ');
    }

    CriaEstiloComponente() {
        let styleHistoricoProfissional = document.createElement("link");

        styleHistoricoProfissional.rel = "stylesheet";
        styleHistoricoProfissional.type = "text/css";
        styleHistoricoProfissional.href = "./Components/HistoricoProfissional/HistoricoProfissional.css";

        return styleHistoricoProfissional
    }

    CriaEstiloGeral() {
        let styleGeral = document.createElement("link");

        styleGeral.rel = "stylesheet";
        styleGeral.type = "text/css";
        styleGeral.href = "./css/style.css";

        return styleGeral;
    }
}

customElements.define('historico-profissional', HistoricoProfissional);