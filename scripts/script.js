window.onload = function () {

    let inputFullName = document.getElementById('fullName');
    let inputUserName = document.getElementById('userName');
    let checkbox = document.getElementById('checkbox');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputRepeatPassword = document.getElementById('repeatPassword');
    let accountEntry = document.getElementsByClassName('account__link')[0]; // Получаем вход через уже зарег аккаунт


    inputFullName.onkeydown = (e) => {
        if (!isNaN(parseInt(e.key))) {
            return false;
        }
    }

    inputUserName.onkeydown = (e) => {
        if ((e.key === '.') || (e.key === ','))
            e.preventDefault();
    }

    checkbox.onchange = (e) => {
        if (e.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    let button = document.getElementById('button');

    button.onclick = function (e) {
        e.preventDefault();

        if (!inputFullName.value) {
            alert('Заполните поле Full name')
            return;
        }

        if (!inputUserName.value) {
            alert('Заполните поле User name')
            return;
        }

        if (!inputEmail.value) {
            alert('Заполните поле E-mail')
            return;
        }

        if (!inputPassword.value) {
            alert('Заполните поле Password')
            return;
        }

        if (!inputRepeatPassword.value) {
            alert('Заполните поле Repeat Password');
            return;
        }

        if (inputPassword.value.length <= 7) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Пароли не совпадают')
        }

        if (!checkbox.checked) {
            alert('Подтвердите своё согласие на условия работы сервиса и политику конфиденциальности');
            return;
        }

        let popup_container = document.getElementsByClassName('popup-container') [0];
        let close_btn = document.getElementsByClassName('close-btn')[0];

        popup_container.style = "display: block;";

        close_btn.addEventListener("click", (e) => {
            popup_container.style = "display:none;";
            document.getElementById('form').reset();
            entryToAccount(e);
        });
    }

    function entryToAccount() {
        document.getElementById('form').reset();
        document.getElementsByTagName('h1')[0].innerText = "Log in to the system";
        document.getElementById('form__label-fullName').remove();
        document.getElementById('form__label-email').remove();
        document.getElementById('form__label-repeatPassword').remove();
        document.getElementsByClassName('form__label-checkbox')[0].remove();
        button.innerText = 'Sign In';
        accountEntry.remove();

        button.onclick = function (e) {
            e.preventDefault();
            if (!inputUserName.value) {
                alert('Заполните поле User Name');
                return;
            }

            if (!inputPassword.value) {
                alert('Заполните поле Password');
                return;
            }

            alert(`Добро пожаловать, `+ (inputUserName.value) + '!')
        }
    }

    accountEntry.addEventListener('click', (e) => {
        entryToAccount();
    })
}

