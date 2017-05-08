const attachEvent = (pogoHook, type, func) => {
    const useCapture = type === 'blur' || type === 'focus';
    document.body.addEventListener(type, e => {
        if (e.target.classList.contains(pogoHook) ||
            e.target.closest(`.${pogoHook}`)
        ) func(e);
    }, useCapture);
};

// || e.target.matches(`.${pogoHook}`)

export default attachEvent;

