function getServerSideState(ws, id) {
    const req = {
        action: 'GetState',
    };

    ws.send(JSON.stringify(req));
}

function sendMoveRequest(ws, moveRequest) {
    const req = {
        action: 'MoveCard',
        args: [moveRequest],
    };

    ws.send(JSON.stringify(req));
}

export { getServerSideState, sendMoveRequest };