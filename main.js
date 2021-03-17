// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// let button = document.getElementsByTagName('button');
// let div = document.getElementById('text');
// div.style.display = 'block';
// button[0].onclick = () => {
//     div.style.display === 'block'
//     ? div.style.display = 'none'
//         : div.style.display = 'block'
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('btn');
// button.style.display = 'block';
// button.onclick = () => {
//   button.style.display === 'block' ? button.style.display = 'none' : button.style.display = 'block'
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.getElementsByTagName('input');
// let button = document.getElementById('btn');
// button.innerText = 'confirm';
// button.onclick = () => {
//     console.log(input[0].value);
//     input[0].value <= 18 ? alert('Hey, you are too young!') : alert('Welcome!');
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {
//         title: "labore",
//         body: "laudantium enim quasi est quidem magnam voluptate ipsam eostem quasie accusantium"
//     },
//     {
//         title: "reiciendis",
//         body: "est natus enim nihil est dolore omnis volup nostrum voluptatem reiciendis et"
//     },
//     {
//         title: "odio",
//         body: "quia molestiae reprehenderit quasi aspernaturtus saepe quia excepturi deleniti ratione"
//     },
//     {
//         title: "alias",
//         body: "non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemur erum deleniecati"
//     }];
// let element = document.createElement('div');
// document.body.appendChild(element);
// for (const comment of comments) {
//     let title = document.createElement('div');
//     title.innerText = comment.title;
//     let body = document.createElement('div');
//     body.innerText = comment.body;
//     let button = document.createElement('button');
//     button.innerText = 'hide comment';
//     element.appendChild(title);
//     element.appendChild(body);
//     element.appendChild(button);
//     body.style.display = 'block';
//     button.onclick = () => {
//         body.style.display === 'block' ?  body.style.display = 'none' :  body.style.display = 'block';
//     }
// }

// ***- Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let badWords = ['shit', 'asshole', 'bastard', 'damn', 'bollocks', 'bugger', 'crikey'];
// let input = document.getElementById('txt');
// let button = document.getElementById('btn');
// button.innerText = 'check this word';
// button.onclick = () => {
//     for (let badWord of badWords) {
//         input.value === badWord ? alert('Do not use such words! It is inadmissible') : null
//     }
// };
