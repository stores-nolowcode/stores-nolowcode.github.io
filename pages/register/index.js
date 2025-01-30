import { showMessage, getFormData } from "../../utils/index.js";

const handleRegister = (event) => {
    const formObject = getFormData(event)

    console.log('formObject: ', formObject);
    showMessage(formObject)
}

window.handleRegister = handleRegister;
