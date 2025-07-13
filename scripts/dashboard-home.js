const newsCarousel = [
    {
        title: "Brasil recebe primeiro cargueiro 100% elétrico para rotas costeiras",
        text: `O primeiro cargueiro totalmente elétrico da América Latina atracou no Porto de Santos nesta sexta-feira. Fabricado em parceria entre um estaleiro norueguês e uma empresa brasileira de logística, o navio batizado de "SolMar I" promete reduzir em até 90% as emissões de CO₂ nas rotas costeiras entre os portos de Santos, Rio de Janeiro e Salvador.`,
        image: "./assets/imgs/home-info-images/eletric.png"
    },
    {
        title: "Telefonia fixa volta a crescer no interior do Brasil com tecnologia VoIP híbrida",
        text: `Empresas de telecomunicação estão reativando infraestruturas antigas em regiões onde o sinal móvel ainda é instável ou caro, oferecendo pacotes fixos integrados com internet rural. O programa "Conecta Comunidade", lançado em fevereiro, também contribuiu com subsídios para instalação de aparelhos em escolas, postos de saúde e associações comunitárias.`,
        image: "./assets/imgs/home-info-images/mike-meyers--haAxbjiHds-unsplash.jpg"

    },
    {
        title: "Nova câmera híbrida captura cheiros e sons junto com a imagem",
        text: `Durante a Photokina 2025, uma startup alemã revolucionou o mundo da fotografia ao lançar a primeira câmera híbrida sensorial, capaz de registrar não apenas imagem e som, mas também traços olfativos do ambiente. O modelo, chamado "Lúmen X", utiliza sensores bioquímicos e inteligência artificial para armazenar dados relacionados ao cheiro presente no momento do clique.`,
        image: "./assets/imgs/home-info-images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
    }
]

let actualIndex = 0

function updateCarousel() {
    const news = newsCarousel[actualIndex];
    document.getElementById("carousel-title").textContent = news.title;
    document.getElementById("carousel-text").textContent = news.text;
    document.getElementById("carousel-image").src = news.image;
}


document.getElementById("prev").addEventListener("click", () => {
    actualIndex = (actualIndex - 1 + newsCarousel.length) % newsCarousel.length;
    updateCarousel()
});

document.getElementById("next").addEventListener("click", () => {
    actualIndex = (actualIndex + 1) % newsCarousel.length;
    updateCarousel()

})

updateCarousel()