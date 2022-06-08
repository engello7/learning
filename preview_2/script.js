// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild); //возвращает #text
// console.log(document.body.firstElementChild); //возвращает div class="wrapper"
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// в следующих случаях можно попасть на #text, например, перенос строки
// console.log(document.querySelector("#current").parentNode.parentNode);
// console.log(document.querySelector("[data-current='3']").previousSibling);
// console.log(document.querySelector("[data-current='3']").nextSibling);

// чтобы этого не случилось, используем другие команды:
// console.log(document.querySelector("#current").parentElement.parentElement);
// console.log(document.querySelector("[data-current='3']").previousElementSibling);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text" || node.nodeName == "#comment") {
        continue;
    }
    console.log(node);
}