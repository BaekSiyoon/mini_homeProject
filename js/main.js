// 정규표현식을 사용한 유효성 검사
var regExp1 = /[a-zA-Z0-9]{5,10}$/g;
var regExp2 = /[a-zA-Z0-9@$%!]{6,11}$/g;
var regExp3 = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/g;
var regExp4 = /^[\w]{5,}@[\w]+(\.[\w]+){1,3}$/g;
var regExp5 = /^\d{3}\d{3,4}\d{4}$/g;

// 아이디 검사
const validateId = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)

    if (!regExp1.test(target.value)) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        id = target.value;
        return id;
    }
};

//  비밀번호 검사
const validatePassword = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)
    if (!regExp2.test(target.value)) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        pw = target.value;
        return pw;
    }
};

//패스워드  일치하는지 체크 
const validatePasswordCheck = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)
    if (userPw.value !== target.value) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        return true;
    }
};

// 이름 검사
const validateUserName = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)
    if (!regExp3.test(target.value)) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        name_ = target.value;
        return name_;
    }
};

// 이메일 검사
const validateUserEmail = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)
    if (!regExp4.test(target.value)) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        email = target.value;
        return email;
    }
};

// 전화번호 검사
const validateUserTel = (e) => {
    const { target } = e;
    const error = document.querySelector(`.error-${target.id}`)
    if (!regExp5.test(target.value)) {
        error.style.display = "inline";
        return false;
    }
    else
        error.style.display = "none"; {
        tel = target.value;
        return tel;
    }
};

userId.onblur = validateId;
userPw.onblur = validatePassword;
pwdCheck.onblur = validatePasswordCheck;
userName.onblur = validateUserName;
userEmail.onblur = validateUserEmail;
userTel.onblur = validateUserTel;

function success() {
    const str = `       
        ID: ${id}
        Name: ${name_}
        ------------------------------
        회원가입 성공! ⸜(*ˊᗜˋ*)⸝`;
    alert(str);
    storage();

    function storage() {

        var arr = [{ id }, { pw }, { email }, { name_ }, { tel }];
        localStorage.setItem("userId", JSON.stringify(arr));
        const all = localStorage.getItem("userId");
        console.log(JSON.parse(all));
    };
};