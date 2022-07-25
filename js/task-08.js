// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login - form 
// должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert 
// с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери 
// значения полей в обьект, где имя поля будет именем свойства,
//     а значение поля - значением свойства.Для доступа к элементам 
//     формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей 
// формы методом reset.


const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

     const { email, password } = event.target.elements;

    const emailValue = email.value;
    const passwordValue = password.value;
    if (emailValue || passwordValue === " ") {
       alert(`все поля должны быть заполнены`)
    } 
    event.target.elements;
        console.log({ emailValue, passwordValue });

   
    
    
    // console.dir(event.currentTarget);
    // const formData = new FormData(event.currentTarget)
    // formData.forEach((value, name) => {
        
    //     console.log("name:", name);
    //     console.log("value:", value);
    // 
    // });    
    formEl.resert();
};