const modal = document.querySelector(".modal")
const back = document.querySelector(".back")
const palavras = document.querySelectorAll(".palavras h2")
const palavra_ing = document.querySelector(".palavra_ing")
const definicao_ing = document.querySelector(".definicao_ing")
const palavra_pt = document.querySelector(".palavra_pt")
const definicao_pt = document.querySelector(".definicao_pt")
const exemplo_pt = document.querySelector(".exemplo_pt")
const exemplo_ing = document.querySelector(".exemplo_ing")
const fala_ing = document.querySelector(".fala_ing")
const fala_pt = document.querySelector(".fala_pt")
const dialogo = document.querySelector(".dialogo")

let audioIngles
let audioPortugues

for (let pos = 0; pos < palavras.length; pos+=1) {
    palavras[pos].addEventListener('click', (e) => {
        modal.style.display = "flex";
        back.style.display = "flex";

        if (e.target.textContent == "Woe") {
            palavra_ing.textContent = "Woe";
            definicao_ing.textContent = "Great sorrow or distress (often used hyperbolically). Things that cause sorrow or distress; troubles.";
            palavra_pt.textContent = "Mágoa";
            definicao_pt.textContent = " Pesar, desventura, aflição, etc.. (expressa tristeza profunda)";
            exemplo_pt.textContent = "Ele riu. Foi uma risada com uma certa mágoa. Um pensamento de arrependimento começou a passar por sua cabeça, algumas perguntas que ele não queria responder apareceram."
        
        } else if (e.target.textContent == "Torn"){
            palavra_ing.textContent = "Torn";
            definicao_ing.textContent = "split by being pulled or pierced with a sharp implement.";
            palavra_pt.textContent = "Rasgar";
            definicao_pt.textContent = "fazer ruptura ou rasgão em; fazer(-se) em pedaços.";
            exemplo_pt.textContent = "Enquanto rasgava as caixas para pegar os suprimentos ele lembrou de ter visto uma câmera frigorífica."
        
        } else if (e.target.textContent == "Gypsy"){
            palavra_ing.textContent = "Gypsy";
            definicao_ing.textContent = "a nomadic or free-spirited person.";
            palavra_pt.textContent = "Cigano";
            definicao_pt.textContent = "um nômade ou uma pessoa de espírito livre";
            exemplo_pt.textContent - "Cigano tu tá me escutando?” Ele não estava."
        
        } else if (e.target.textContent == "Sway"){
            palavra_ing.textContent = "Sway";
            definicao_ing.textContent = "move or cause to move slowly or rhythmically backward and forward or from side to side.";
            palavra_pt.textContent = "balançar";
            definicao_pt.textContent = "mover ou fazer mover-se lentamente ou ritmicamente para frente e para trás ou de um lado para o outro.";
            exemplo_pt.textContent ="Cigano fala enquanto balança no ar um pedaço de pão mordido."
       
        } else if (e.target.textContent == "Tripod"){
            palavra_ing.textContent = "Tripod";
            definicao_ing.textContent = "a three-legged stand for supporting a camera or other apparatus.";
            palavra_pt.textContent = "Tripé";
            definicao_pt.textContent = "suporte portátil com três escoras, sobre o qual se assenta máquina fotográfica ou outro aparelho.";
            exemplo_pt.textContent = " “É que, ouvi aqueles caras” ele aponta para a mesa barulhenta. “ Falando pro garçom que tu é tão magro que parece um tripé pra segurar amendoim.” Daniel não podia deixar de se sentir na escola passando fofoca da turma A para a turma B, era constrangedor."
        
        } else if (e.target.textContent == "Nod"){
            palavra_ing.textContent = "Nod";
            definicao_ing.textContent = "lower and raise one's head slightly and briefly, especially in greeting, assent, or understanding, or to give someone a signal.";
            palavra_pt.textContent = "Acenar com a cabeça";
            definicao_pt.textContent = "abaixar e levantar a cabeça leve e brevemente, especialmente para cumprimentar, concordar ou compreender, ou para dar um sinal a alguém."
            exemplo_pt.textContent = "Daniel acena com a cabeça e pede uma água."
       
        } else if (e.target.textContent == "Prey"){
            palavra_ing.textContent = "Prey"
            definicao_ing.textContent = "an animal that is caught and killed by another for food."
            palavra_pt.textContent = "Presa"
            definicao_pt.textContent = "um animal que é capturado e morto por outro animal por comida."
            exemplo_pt.textContent = "le viu o desenho de um leopardo perseguindo sua presa. Uma flecha apontava do leopardo para a palavra “Sociedade” outra apontava da presa para a frase “Pessoas que gostam de comer sorvete com batata frita”"
        
        } else if (e.target.textContent == "Amusing"){
            palavra_ing.textContent = "Amusing"
            definicao_ing.textContent = "causing laughter and providing entertainment."
            palavra_pt.textContent = "Divertido"
            definicao_pt.textContent = "que causa risada e provém entreterimento"
            exemplo_pt.textContent = "Todos com certeza o consideravam o mais divertido."
        
        } else if (e.target.textContent == "Squirming"){
            palavra_ing.textContent = "Squirming"
            definicao_ing.textContent = "wriggle or twist the body from side to side, especially as a result of nervousness or discomfort."
            palavra_pt.textContent = "Se contorcendo"
            definicao_pt.textContent = "sinônimo de: Dobrar-se sobre si, contrair-se."
            exemplo_pt.textContent ="Seu amigo estava com a boca tão cheia que não conseguiu xingá-lo. Mas seu rosto se contorceu de raiva."
      
        } else if (e.target.textContent == "Passersby"){
            palavra_ing.textContent = "Passersby"
            definicao_ing.textContent = "a person who happens to be going past something, especially on foot."
            palavra_pt.textContent = "Transeuntes"
            definicao_pt.textContent = "Pessoa que, por acaso, está passando; especialmente à pé"
            exemplo_pt.textContent = "Enquanto o cantor falava sobre destruir transeuntes e ser um anarquista, Dani pensava que sim; ele era próximo a algum tipo de anarquista."
        }
        audioIngles = new Audio("audios/" + e.target.textContent + ".mp4")
        audioPortugues = new Audio("audios/" + palavra_pt.textContent + ".mp4")
        
    })
}

for (let pos = 0; pos < palavras.length; pos+=1) {
    palavras[pos].addEventListener('mouseenter', (e) => {
        dialogo.style.display = "flex";
        if (e.target.textContent == "Woe") {
            exemplo_pt.textContent = "Ele riu. Foi uma risada com uma certa mágoa. Um pensamento de arrependimento começou a passar por sua cabeça, algumas perguntas que ele não queria responder apareceram."
            exemplo_ing.textContent = "After the argument, she was left with a sense of woe."
        
        } else if (e.target.textContent == "Torn"){
            exemplo_pt.textContent = "Enquanto rasgava as caixas para pegar os suprimentos ele lembrou de ter visto uma câmera frigorífica."
            exemplo_ing.textContent = "“Tattered and torn, Something aches”"
        
        } else if (e.target.textContent == "Gypsy"){
            exemplo_pt.textContent = "Cigano tu tá me escutando?” Ele não estava."
            exemplo_ing.textContent = "“Well I went to see the gypsy, to have my fortune read”"
        
        } else if (e.target.textContent == "Sway"){
            exemplo_pt.textContent ="Cigano fala enquanto balança no ar um pedaço de pão mordido."
            exemplo_ing.textContent = "As the wind blows gently, it makes the trees sway."
       
        } else if (e.target.textContent == "Tripod"){
            exemplo_pt.textContent = " “É que, ouvi aqueles caras” ele aponta para a mesa barulhenta. “ Falando pro garçom que tu é tão magro que parece um tripé pra segurar amendoim.” Daniel não podia deixar de se sentir na escola passando fofoca da turma A para a turma B, era constrangedor."
            exemplo_ing.textContent = "The photographer set up his camera on a tripod to capture the breathtaking sunset."
        
        } else if (e.target.textContent == "Nod"){
            exemplo_pt.textContent = "Daniel acena com a cabeça e pede uma água."
            exemplo_ing.textContent = "When asked if she understood the instructions, Sarah gave a quick nod, indicating her comprehension."
       
        } else if (e.target.textContent == "Prey"){
            exemplo_pt.textContent = "Ele viu o desenho de um leopardo perseguindo sua presa. Uma flecha apontava do leopardo para a palavra “Sociedade” outra apontava da presa para a frase “Pessoas que gostam de comer sorvete com batata frita”"
            exemplo_ing.textContent = "it patiently stalked its prey, blending into the tall grass, waiting for the perfect moment to strike."
        
        } else if (e.target.textContent == "Amusing"){
            exemplo_pt.textContent = "Todos com certeza o consideravam o mais divertido."
            exemplo_ing.textContent = "The comedian delivered an amusing stand-up performance that had the entire audience laughing uncontrollably."
        
        } else if (e.target.textContent == "Squirming"){
            exemplo_pt.textContent = "Seu amigo estava com a boca tão cheia que não conseguiu xingá-lo. Mas seu rosto se contorceu de raiva."
            exemplo_ing.textContent = "The toddler started squirming in his chair during the long movie, unable to sit still for more than a few minutes."
      
        } else if (e.target.textContent == "Passersby"){
            exemplo_pt.textContent = "Enquanto o cantor falava sobre destruir transeuntes e ser um anarquista, Dani pensava que sim; ele era próximo a algum tipo de anarquista."
            exemplo_ing.textContent = "“I wanna destroy the passerby 'Cause I Wanna be Anarchy”"
        }
    })
}

back.addEventListener('click', (e) => {
        modal.style.display = "none";
        back.style.display = "none";
    })

fala_ing.addEventListener('click', () =>{
    audioIngles.play()
})

fala_pt.addEventListener('click', () =>{
    audioPortugues.play()
})
