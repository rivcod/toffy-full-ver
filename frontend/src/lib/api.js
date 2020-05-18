import axios from 'axios';

export const getGameList = id =>
    axios.get("/api/tfgame/").catch(err => console.log(err))