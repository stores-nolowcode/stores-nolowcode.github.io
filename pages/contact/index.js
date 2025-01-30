import { showMessage, getFormData } from "../../utils/index.js";

const handleContact = (event) => {
    const formObject = getFormData(event)

    console.log('formObject: ', formObject);
    showMessage(formObject)
}

window.handleContact = handleContact;
