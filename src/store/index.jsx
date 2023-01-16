import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    modal : 'scale-0',
    showModal : 'scale-0',
    updateModal : 'scale-0',
    loading : { show: false, msg: '' },
    alert : { show: false, msg: '', color: '' },
});

const setAlert = (msg, color) => {
    setGlobalState('loading', { show: false, msg: '' })
    setGlobalState('alert', { show: alert, msg, color })
    setTimeout(() => {
        setGlobalState('alert', { show: false, msg, color })
    }, 6000);
}

const setLoadingMsg = (msg) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', { ...loading, msg })
}

export { useGlobalState, setGlobalState, getGlobalState, setLoadingMsg, setAlert, }

