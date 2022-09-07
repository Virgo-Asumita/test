export const person = new Object();
person.name = "张三";
console.log(person.name);
const div = document.querySelector('div');
div.onclick = () => {
    console.log(div.offsetHeight);
}