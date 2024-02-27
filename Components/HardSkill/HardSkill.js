var iconsCdn = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

class HardSkill extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        var componentRoot = this.criaDivRoot();
        var estilo = this.criaEstilos();

        shadow.appendChild(componentRoot);
        shadow.appendChild(estilo);
    }

    criaDivRoot() {
        let componentRoot = document.createElement("div");
        componentRoot.className = "linguagens-content flex";

        componentRoot.appendChild(this.criaCardLinguagem());
        return componentRoot;
    }

    criaCardLinguagem() {
        let cardLinguagem = document.createElement('div');
        cardLinguagem.className = "card-linguagens margin-top-cards";

        cardLinguagem.appendChild(this.criaTituloLinguagem());
        cardLinguagem.appendChild(this.criaDivRootCard())

        return cardLinguagem;
    }

    criaTituloLinguagem() {
        let tituloLinguagem = document.createElement('h2');
        tituloLinguagem.className = "titulo-card center ligth-purple";
        tituloLinguagem.innerText = this.getAttribute('tituloCard');

        return tituloLinguagem;
    }

    criaDivRootCard() {
        let divRootCard = document.createElement('div');
        divRootCard.className = "alinhamento-colunas"

        divRootCard.appendChild(this.CriaDivCardEsquerda());
        divRootCard.appendChild(this.CriaDivCardDireita());

        return divRootCard;
    }

    CriaDivCardEsquerda() {
        let divEsquerda = document.createElement('div');
        divEsquerda.className = "div-linguagem-esquerda"

        divEsquerda.appendChild(this.CriaImagem());

        return divEsquerda;
    }

    CriaImagem() {
        let imagem = document.createElement('img');
        imagem.className = "imagem-linguagem center";
        imagem.src = `${iconsCdn}${this.getAttribute('imagem')}`;

        return imagem;
    }

    CriaDivCardDireita() {
        let divDireita = document.createElement('div');
        divDireita.className = "div-linguagem-direita";

        divDireita.appendChild(this.CriaDescricaoLinguagem());

        return divDireita;
    }

    CriaDescricaoLinguagem(){
        let descricao = document.createElement('p');
        descricao.className = "center white-text descricao-linguagem";
        descricao.innerText = this.textContent.replace(/\s+/g, ' ');

        return descricao;
    }

    criaEstilos() {
        let style = document.createElement("link");

        style.rel = "stylesheet";
        style.type = "text/css";
        style.href = "./css/style.css";

        return style
    }
}

customElements.define('hard-skill', HardSkill);