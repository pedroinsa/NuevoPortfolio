export function validate(input) {
    const error = { from_name: "", email_id: "", message: "" };
    if (!input.from_name.length && !input.email_id.length && !input.message.length) {
        return error
    }
    if (!input.from_name.length) {
        error.from_name = "Debe ingresar un nombre";
        return error
    }
    if (!input.email_id.length) {
        error.email_id = "Debe ingresar un email";
        return error
    }
    if (input.email_id.length && !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email_id)) {
        error.email_id = "Debe ingresar un email válido";
        return error
    }
    if (!input.message.length) {
        error.message = "Debe ingresar un mensaje";
        return error
    }
    return error;
}



export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
