import { PUBLIC_KEY } from '../utils/config.js';
import jwtmod from 'jsonwebtoken'

export default async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    if(token === null) return res.sendStatus(401);

    // Decode token using the public key

    const decodedToken = jwtmod.verify(token,PUBLIC_KEY, {
        algorithms: ["RS256"]
    })

    const {preferred_username} =decodedToken
    req.user = preferred_username
    next()
}