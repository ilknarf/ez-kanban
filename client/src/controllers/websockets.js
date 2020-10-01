function getServerSideState(ws, id) {
    const res = {
        action: 'GetState',
    };

    ws.send(JSON.stringify(res));
}

export { getServerSideState };