/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Questi sono i dati:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/

    const EleList = document.querySelector('.output')
     


const members = [
    {
    nomeECognome : 'wayne Barnett',
    ruolo : 'Founder & CEO',
    foto : 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
    nomeECognome : 'Angela Caroll',
    ruolo : 'Chief Editor',
    foto : 'img/angela-caroll-chief-editor.jpg',
    },
    {
    nomeECognome : 'Walter Gordon',
    ruolo : 'Office Manager',
    foto : 'img/walter-gordon-office-manager.jpg'
    },
    {
    nomeECognome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    foto : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
    nomeECognome : 'Scott Estrada',
    ruolo : 'Developer',
    foto : 'img/scott-estrada-developer.jpg'
    } ,
    {
    nomeECognome : 'Barbara Ramos',
    ruolo : 'Graphic Designer',
    foto : 'img/barbara-ramos-graphic-designer.jpg'
    }
]
    console.log(members)

    for (i = 0 ; i < members.length ; i ++){
        let member = members[i];
    EleList.innerHTML += `<li>${member.nomeECognome} ${member.ruolo} ${member.foto}</li>`;
    }
    
